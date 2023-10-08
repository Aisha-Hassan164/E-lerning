const mongoose = require("mongoose")
const Reglogin = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
})
module.exports = mongoose.model("retrs", Reglogin )