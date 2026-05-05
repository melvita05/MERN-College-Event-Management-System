const express = require('express')
const router = express.Router();
const {Insert,Login, View, Delete,ViewUser} = require('../Controller/UserControl')
const authUser = require("../Middleware/authuser")

router.post('/usrinsrt',Insert)
router.post('/userlogin',Login)
router.get('/get',authUser,View)
router.get('/view',ViewUser)
router.delete('/delete/:id',Delete)
module.exports = router;