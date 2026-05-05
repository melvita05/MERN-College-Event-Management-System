const mongoose = require('mongoose');
const {Schema} = mongoose;

const addCartSchema = new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        },
    
    
        event_id:{
             type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        },
    
        qty:{
             type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        }
    
})
module.exports=mongoose.model("add",addCartSchema)