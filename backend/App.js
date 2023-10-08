

const mongoose = require("mongoose");
const express = require("express")
const app = express()
const cors = require("cors")
 const Imageroute = require("./Router/Imageroute")
 const Regisroter = require("./Router/Regisroter")
 const Videorouter = require("./Router/Videorouter")


 app.use(express.json())

app.use(cors())
app.use(Imageroute)
app.use(Regisroter)
app.use(Videorouter)



mongoose.connect("mongodb://0.0.0.0:27017/MrenStack").then((response)=>{
    console.log("date has been insert")
}).catch((error)=>{
    console.log(error)
})
app.listen(5000, ()=>{
    console.log("server is runing 5000")
})