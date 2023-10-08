

const mongoose = require("mongoose")
const Schema = mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    enroll:{
        type:String,
        require:true
    },
    link:{
        type:String,
        require:true
    }
})
module.exports = mongoose.model("images",Schema)