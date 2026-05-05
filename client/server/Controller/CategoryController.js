const categorySchema= require("../Models/category.js");


const Insert =async(req,res)=>{
    try{
        console.log(req.body);
        const {name}=req.body;
       const image= req.file.filename
    const  category = new categorySchema({
        name:name,
       image:image
    });
const savedCat = await category.save();
console.log(savedCat) 
res.send(savedCat)
}catch(err){
    console.log(err)
}
}

const View = async(req,res)=>{
    try{
        const data = await categorySchema.find();
        console.log(data)
        res.json(data)
    }catch(error){
        console.log(error)
      
    };
    
}


const SingleView = async(req,res)=>{
    try{
        let category = await categorySchema.findById(req.params.id)
        if(!category){
            console.log("Category not found with this ID!");
            res.json({
                success:false,
                message:"category not found with this ID!",
            });

        }else{
            res.json({
                success:true,
                message:"category details fetched succesfully",
                data:category,
            });
        }
    }catch(error){
        console.log(error)
        }
    }



const Delete = async(req,res)=>{
    try{
        let data = await categorySchema.findById(req.params.id)
        if(!data){
            console.log("data not found with this ID!");
            return res.status(404).send("Data does not exists with this ID!")
        
    
    }else{
        data = await categorySchema.findByIdAndDelete(req.params.id);
       console.log("Data deleted Succesfully...");
       res.json({"Success":true,"Deleted Data":data})
        }

    }catch(error){
        console.error("Some error Occured"+error);
        res.status(500).json("Some internal error!!!")
    }
}


const Update =async(req,res)=>{
    try{
        let id = req.params.id;
        const{name}=req.body;
       if(req.file){
            console.log('Image File:',req.file);
        }

        let Updatedata = await categorySchema.findById(id);
        if(!Updatedata){
             return res.json({Success:false,message:"Data is not found " })
        }
        let newData={}
        if(name){newData.name =name}

      if(req.file){
            newData.image = req.file.filename
        }


        let updatestatus = await categorySchema.findByIdAndUpdate(id,{$set:newData},{new:true})
        res.json({success:true,updatestatus})
        console.log("Updated Successfully")
    }catch(error){
        res.json({Success:false,message:"Internal server error!"})
        console.log(error)
    }
}

module.exports={Insert,View,SingleView,Delete,Update}