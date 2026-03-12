const Candidate = require("../models/Candidate");
const User = require("../models/User");

exports.vote = async(req,res)=>{

try{

const {candidateId,userId,electionId} = req.body;

const user = await User.findById(userId);

if(user.votedElections.includes(electionId)){
return res.json({message:"You already voted in this election"});
}

await Candidate.findByIdAndUpdate(candidateId,{
$inc:{votes:1}
});

user.votedElections.push(electionId);

await user.save();

res.json({message:"Vote successful"});

}catch(err){

res.status(500).json({error:err.message});

}

};