const express = require("express")
const router = express.Router();
const {Insert,View,Delete,Update} = require('../Controller/ApplyController')
const authUser = require("../Middleware/authuser")



router.post('/insert',authUser,Insert);
router.get('/get',View);
router.delete('/delete/:id',Delete);
router.put('/update/:id',Update)

module.exports=router;
