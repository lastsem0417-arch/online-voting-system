const Poll = require("../models/Poll");

exports.createPoll = async(req,res)=>{

try{

const {title,description,options} = req.body;

const poll = await Poll.create({
title,
description,
options: options.map(o=>({text:o}))
});

res.json(poll);

}catch(err){

res.status(500).json(err);

}

};


exports.getPolls = async(req,res)=>{

const polls = await Poll.find();

res.json(polls);

};


exports.vote = async(req,res)=>{

const {pollId,optionIndex,userId} = req.body;

const poll = await Poll.findById(pollId);

if(poll.voters.includes(userId)){

return res.json({message:"You already voted"});

}

poll.options[optionIndex].votes += 1;

poll.voters.push(userId);

await poll.save();

res.json({message:"Vote recorded"});

};