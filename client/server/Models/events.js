
const mongoose= require("mongoose")
const {Schema}= mongoose;
 
const eventSchema = new Schema({
    college_name:{
        type: String,
        require:true
    },
	Title:{
		
         type:String,
		
	},
    category_type:{
       type:String
    },
    event_type:{
        type:String
        //  type:mongoose.Schema.Types.ObjectId,
		// ref:"category"
    },
    image:{
		type:String,
		require:true
	},
    location:{
        type:String,
    },
    description:{
		type:String,
	},
    date:{
		type:String,
        //default:Date.now,
	},


})

module.exports=mongoose.model("event",eventSchema)
 {/* type:mongoose.Schema.Types.ObjectId,
		ref:"cat",*/}