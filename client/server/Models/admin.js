const mongoose = require('mongoose');
const {Schema} = mongoose;

const adminSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:false
    },
     phone:{
        type:String,
        require:false
    },
    password:{
        type:String,
        require:false
    },
   
})
module.exports=mongoose.model("admin",adminSchema)