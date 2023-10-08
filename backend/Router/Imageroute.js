

const express = require("express")
const router = express.Router()
const multer = require("multer")
const Newimage = require("../Schema/model1");

///image//

const imageLocation = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "images")
    },
    
    filename:(req,file, cb)=>{
        cb(null,file.originalname)
    }
})
const uploadImage = multer({
    storage:imageLocation
})

router.post("/system", uploadImage.single("images"),async(req,res)=>{
    const newpost = Newimage({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        name: req.body.name,
        price: req.body.price,
        enroll: req.body.enroll,
        image: req.file.filename
    })
    const savedate = await newpost.save()
    res.send(savedate)
})

router.get("/images",async(req,res)=>{
    const getdate = await Newimage.find()
    res.send(getdate)
})

router.get("/images/getsingle/:id" , async(req,res)=>{
    const getoneid = await Newimage.find({_id: req.params.id})
    res.send(getoneid)
})

module.exports = router;