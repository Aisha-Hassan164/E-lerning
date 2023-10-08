

const express = require("express")
const router =express.Router()
const Newreg = require("../Schema/register")

router.post("/regis", async(req,res)=>{
    const newregs = Newreg(req.body)
    const savedate = await newregs.save()
    res.send(savedate)
})

router.post("/register/login",async(req,res)=>{

    if(req.body.username && req.body.password){
      const Adminlogin =  await Newreg.findOne(req.body)
      if(Adminlogin){
          res.send(Adminlogin)
      }
      else{
          res.send("admin not found")
         }
    }
    else{
      res.send("admin and password not found")
    }
  })
module.exports = router