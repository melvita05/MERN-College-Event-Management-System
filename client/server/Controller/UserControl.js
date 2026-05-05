const user = require('../Models/User');
const UserSchema = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');
const SECRETE_KEY = "AUTHKEY";

const Insert = async(req,res)=>{
    try{
        const {name, email, password,phone} = req.body;
        let checkemail = await UserSchema.findOne({ email:email});

        if (checkemail){
            console.log("Email already exists");
            res.json({ success: false, message:"Email already exists"});
        }else{
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            console.log(hashedPassword,"hashedPassword")
            let newUser = new UserSchema({
                name,
                email,
                phone,
                password: hashedPassword,
                
            });
            let savedUser = await newUser.save();
            console.log("New user registered Successfully");
            res.json({
                success : true,
                message:"New user registered successfully",
                user: savedUser,
            })
        }
        


    
        

    }catch(error){
        console.log("Error occured",error);
        res.json({error:error});
    }
  
}

const Login = async (req,res)=>{
    try{
        const {email,password}=req.body;
        console.log(req.body)
        // check if email and password are provided
        if(!email || !password){
            return res.status(400).json({success: false,message:"Email and password are required"});
        }
        //Find user by email
        let user = await UserSchema.findOne({email:email});
        //if user does not exist
        if (!user){
            console.log("Invalid credential: No user found with this email");
            return res.status(400).json({success:false,message:"Invalid credential"});
        }
        //Debugging check if user.password exists
        if(!user.password){
            console.error("Error:User does not have a password field");
            return res.status(500).json({ success:false, message:"Server error:User password not found"});
        }
        //Compare passwords
        let checkpass = await bcrypt.compare(password,user.password);
        //if password comparision fails
        if(!checkpass){
            console.log("Invalid Credential:Password mismatch");
            return res.status(400).json({ success :false,message:"Invalid credential!"});
        }
        //Generate JWT token
        let userid = user.id;
        let token =jwt.sign({userid},SECRETE_KEY);
        console .log(token,"token")
        console.log("Login Successfully");
        return res.json({
            message:"Login Successfully",
            success:true,
            loggedInuser:user,
            userToken:token,
        });

}catch(error){
    console.error("Error occured during login:",error);
    return res.status(500).json({error:"An error occured during login",details:error});
}

}


const View = async(req,res)=>{
    try{
        const uid = req.user;
    
        const data = await UserSchema.findById(uid.userid);
        console.log(data);
        res.json(data)

    }catch(error){
        console.log(error)
    }
}

const ViewUser = async(req,res)=>{
    try{
       // console.log("hihihihihi")
        console.log(req.user.userid,"hhhhhhhhhh")
        const uid = req.user;
    
        const data = await UserSchema.find();
        // console.log(data,"uuuuuuuuuuuuuuuuuuuuuuu");
        res.json(data)
    }catch(error){
        console.error("some error occured"+error);
        res.status(500).json("Some internal error!!!")
    }
}


const Delete = async(req,res)=>{
    try{
        let data = await UserSchema.findById(req.params.id);
        if(!data){
            console.log("Data not found with this ID");
            return res.status(404).send("Data does not exists with this ID!")
        }else{
            data= await UserSchema.findByIdAndDelete(req.params.id);
            console.log("Data deleted successfully...");
            res.json({"Successs":true,"Deleted Data":data})
        }
        }catch(error){
            console.error("Some error Occured"+error);
            res.status(500).json("Some internal error!!!")
        }
    }
module.exports = {Insert,Login,View,Delete,ViewUser};