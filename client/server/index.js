
const cors= require('cors');

const express= require('express')
const app= express();
app.use(express.json())




 app.use(cors());


const connectTomongo=require("./DB.js");
connectTomongo()

app.use('/users',require("./Router/userRouter.js"))
app.use('/use',require('./Router/categoryRouter.js'))
app.use('/use1',require('./Router/eventRouter.js'))
app.use("/upload",express.static('./Uploads'))
app.use("/use2",require('./Router/applyRouter.js'))
app.use("/overall",require('./Router/OverallRouter.js'))

const UserSchema = require('./Models/User.js')
const adminSchema=require("./Models/admin.js")
const addEvntsSchema=require('./Models/addCart.js')
const categorySchema=require('./Models/category.js')

const port=8005;
app.listen(port,()=>{
    console.log("------------------------------");
    console.log("server is running on port"+port);
});