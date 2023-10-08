
const express = require("express");
const router = express.Router()
const multer = require("multer")
const Newvideo = require("../Schema/video");


const videolocation = multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null, "video")
    },
    filename:(req,file, cb)=>{
        cb(null,file.originalname)
    }
})
const uploadvideo = multer({
    storage:videolocation
})
 

router.post("/dasha",async(req,res)=>{
    const newpost = Newvideo(req.body)
    const savedate = await newpost.save()
    res.send(savedate)
})

router.get("/dasha", async(req,res)=>{
    const newget  = await Newvideo.find()
    res.send(newget)
})

module.exports = router