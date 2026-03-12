const Election = require("../models/Election");

exports.createElection = async(req,res)=>{

try{

const {title,type} = req.body;

const election = new Election({
title,
type
});

await election.save();

res.json({message:"Election created",election});

}catch(err){

res.status(500).json({error:err.message});

}

};


exports.getElections = async(req,res)=>{

const elections = await Election.find();

res.json(elections);

};