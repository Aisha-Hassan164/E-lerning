
const mongoose = require("mongoose")
const Videoschema = mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    video:{
        type:String,
        require:true
    }
})
module.exports = mongoose.model("videos", Videoschema)