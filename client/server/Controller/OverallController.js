const UserSchema = require('../Models/User');
const eventSchema = require('../Models/events');


const Count = async(req,res)=>{
    try{
        const totalUsers = await UserSchema.countDocuments();
        const totalEvents = await eventSchema.countDocuments();
       
        res.json({
            success:true,
            user:totalUsers,
            event:totalEvents,
           
        })
    }catch(err){
        console.log("error occured" +err);
        res.json({error:err});
    }
}
module.exports = {Count}