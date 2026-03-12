const mongoose = require("mongoose");

const electionSchema = new mongoose.Schema({

title:{
type:String,
required:true
},

type:{
type:String,
enum:["candidate","poll"],
required:true
}

},{timestamps:true});

module.exports = mongoose.model("Election",electionSchema);