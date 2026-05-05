const mongoose= require("mongoose")
const {Schema}= mongoose;


const feedbackSchema= new Schema({

u_id:{
    type : mongoose.Schema.Types.ObjectId,
    ref : "Users",
},
event_id:{
    type : mongoose.Schema.Types.ObjectId,
    ref :"event",
},

title:{
    type: String,
},
feedback :{
    type : String,
},
rating :{
    type : String,
},
status:{
    type : String,
},
date:{
    type:String,
    dafault : Date.now(),
},
})
module.exports = mongoose.model("feedback",feedbackSchema)