const mongoose= require("mongoose")
const {Schema}= mongoose;
 
const categorySchema = new Schema({
    name:{
        type: String,
       
    },
    image:{
		type:String,
		
	},
})
module.exports=mongoose.model("category",categorySchema)