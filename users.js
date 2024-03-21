const mongoose = require('mongoose');

//it is for making a database
mongoose.connect("mongodb://127.0.0.1:27017/Travel");

//it is for Telling that each and every data is exactly of how 
const userSchema = mongoose.Schema({
    source:String,
    destination:String,
    duration: Number,
    dtype: Array,
    tmode:String,
    fdestination:String,
    hotel:String,
})

//it is for Making Collections
module.exports =mongoose.model("user",userSchema);