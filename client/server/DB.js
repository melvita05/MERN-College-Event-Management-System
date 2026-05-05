const mongoose=require('mongoose');
const mongoURL ="mongodb://localhost:27017/event"

const connectTomongo=async()=>{
    try{
        await mongoose.connect(mongoURL);
        console.log("Connect to mongo Successfull");
        console.log("-----------------------------");

}
catch(err){
    console.log("Connect to mongo unsuccessful")
}
}
module.exports=connectTomongo;
