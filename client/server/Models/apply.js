const mongoose = require("mongoose")
const {Schema} = mongoose;

const applySchema = new Schema({
    u_id:{
		type:mongoose.Schema.Types.ObjectId,
        ref:"users",
	},
	name:{
		type:String,
	},
	email:{
		type:String,
	},
	phone:{
        type:Number
    },
   date:{
		type:String,
		
	},

    

})
module.exports=mongoose.model("applys",applySchema);
