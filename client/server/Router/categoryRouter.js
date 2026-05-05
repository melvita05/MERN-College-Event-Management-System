const express = require("express")
const router = express.Router();
const {Insert,View,SingleView,Delete,Update} = require('../Controller/CategoryController')
const multer = require("multer")


const storage  = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/");
    },
    filename:function(req,file,cb){
        const uniqueSuffix = Date.now();
        cb(null,uniqueSuffix + "-" + file.originalname);
    },
});
const imageUpload = multer({ storage : storage});



router.post('/catinsert' ,imageUpload.single('image'),Insert);
router.get('/getcat',View);
router.get('/singledata/:id',SingleView);
router.delete('/delete/:id',Delete);
router.put('/update/:id',imageUpload.single('image'),Update)
module.exports=router;
