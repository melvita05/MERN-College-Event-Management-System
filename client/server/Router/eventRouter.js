const express = require("express")
const router = express.Router();
const{Insert,View,SingleView,Delete,Update} = require("../Controller/EvntsControl");
const multer = require("multer");

const storage  = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"Uploads/");
    },
    filename:function(req,file,cb){
        const uniqueSuffix = Date.now();
        cb(null,uniqueSuffix + "-" + file.originalname);
    },
});
const imageUpload = multer({ storage : storage});



router.post('/eventinsert',imageUpload.single('image'),Insert)
router.get('/getevent',View)
router.get('/singlevent/:id',SingleView)
router.delete('/deleteevent/:id',Delete)
router.put("/updateevent/:id",imageUpload.single('image'),Update)
module.exports = router;
//imageUpload.single('image'),
//imageUpload.single('image'),