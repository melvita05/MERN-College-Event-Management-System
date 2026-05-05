const apply = require("../Models/apply");
const applySchema = require("../Models/apply")


const Insert = async(req,res)=>{
    try{
        console.log(req.body);
        const uid = req.user.userid;
        const{ name,email,phone,city,address,date}=req.body
const apply = new applySchema({
    name,
        phone,
        email,
        address,
        city,
       
        date,
        u_id:uid
       });
    

const savedApply = await apply.save();
console.log(savedApply)
res.send(savedApply)
}catch(err){
    console.log(err)
}
}

const View = async(req,res)=>{
    try{
        const data = await applySchema.find();
        console.log(data);
        res.json(data)

    }catch(error){
        console.log(error)
    }
}




const Delete = async(req,res)=>{
    try{
        let data=await applySchema.findById(req.params.id);
        if(!data){
            console.log("Data not foun with this ID");
            return res.status(404).send("Data does not exists with this ID!")
        }else{
            data = await applySchema.findByIdAndDelete(req.params.id);
            console.log("data deleted successfully...");
            res.json({"success":true,"Deleted Data":data})
        }
    }catch(error){
        console.error("Some error occured"+error);
        res.status(500).json("some internal error!!!")
    }
}

const Update =async(req,res)=>{
    try{
        let id = req.params.id;
        const{address,date,city,gender}=req.body;

           
            let Updatedata =await applySchema.findById(id);
            if(!Updatedata){
                return res.json({success:false,message:"data isnot found"})
            }
            let newData ={}
            if(address){newData.address = address}
        
            if(city){newData.city=city}
           
            if(date){newData.date=date}
           
         

            let updatestatus = await applySchema.findByIdAndUpdate(id,{$set:newData},{new:true});
            res.json({success:true,updatestatus})
            console.log("Updated Successfullly")
            }catch(error){
                res.json({success:false,message:"Internal Server Error!"})
                console.log(error)
            }
        }
module.exports ={Insert,View,Delete,Update}