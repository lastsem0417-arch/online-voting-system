const Election = require("../models/Election");


// CREATE ELECTION
exports.createElection = async(req,res)=>{

try{

const {title,type} = req.body;

if(!title || !type){
return res.status(400).json({
message:"Title and type required"
});
}

const election = new Election({
title,
type
});

await election.save();

res.status(201).json({
message:"Election created successfully",
election
});

}catch(err){

console.log("Election Error:",err);

res.status(500).json({
error:err.message
});

}

};
exports.deleteElection = async(req,res)=>{

await Election.findByIdAndDelete(req.params.id);

res.json({message:"Election deleted"});

};

// GET ALL ELECTIONS
exports.getElections = async(req,res)=>{

try{

const elections = await Election.find().sort({createdAt:-1});

res.json(elections);

}catch(err){

res.status(500).json({
error:err.message
});

}

};