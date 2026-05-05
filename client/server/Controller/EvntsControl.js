const eventSchema = require("../Models/events");


const Insert = async(req,res)=>{
    try{
        console.log(req.body);
        const{ college_name,category_type,event_type,location,description,date,}=req.body
const image= req.file.filename
   
const events = new eventSchema({
    college_name:college_name,
    category_type:category_type,
   image:image,
    event_type:event_type,
    location:location,
    description:description,
   date:date
});
const savedEvent = await events.save();
console.log(savedEvent)
res.send(savedEvent)
}catch(err){
    console.log(err)
}
}

const View = async(req,res)=>{
    try{
        const data = await eventSchema.find();
        console.log(data);
        res.json(data)

    }catch(error){
        console.log(error)
    }
}

const SingleView = async(req,res)=>{
    try{
        let events = await eventSchema.findById(req.params.id).populate('category_type')
        if(!events){
            console.log("events not found with this ID!");
            res.json({
                success:false,
                message:"events not found with this ID!",

            });

        }else{
            res.json({
                success:true,
                message:"events details fetched successfully",
                data:events,
            })
        }
    }catch(error){
        console.log(error)
    }
}

const Delete = async(req,res)=>{
    try{
        let data=await eventSchema.findById(req.params.id);
        if(!data){
            console.log("Data not foun with this ID");
            return res.status(404).send("Data does not exists with this ID!")
        }else{
            data = await eventSchema.findByIdAndDelete(req.params.id);
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


        const{ college_name,category_type,event_type,location,description,date}=req.body;

          if(req.file){
                console.log('Image File:',req.file);
            } 
            let Updatedata =await eventSchema.findById(id)
            if(!Updatedata){
                return res.json({success:false,message:"data is not found"})
            }
 // initialize new data and assign only fields that have values

            let newData ={}
            if(college_name){newData.college_name = college_name}
             

             if(category_type ){newData.category_type=category_type}



            if(event_type){newData.event_type=event_type}
            if(location){newData.location=location}
            if(description){newData.description=description}
             if(date){newData.date=date}

              //Handle file upload if present 
        
            if(req.file){
                newData.image = req.file.filename
            } 

            let updatestatus = await eventSchema.findByIdAndUpdate(id,{$set:newData},{new:true});
            res.json({success:true,updatestatus})
            console.log("Updated Successfullly")
            }catch(error){
                res.json({success:false,message:"Internal Server Error!"})
                console.log(error)
            }
        }
module.exports ={Insert,View,SingleView,Delete,Update}