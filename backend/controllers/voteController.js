const Candidate = require("../models/Candidate");
const User = require("../models/User");

exports.vote = async(req,res)=>{

try{

const {candidateId,userId,electionId} = req.body;

const user = await User.findById(userId);

if(!user){
return res.status(404).json({message:"User not found"});
}

// FIX: ObjectId comparison
const alreadyVoted = user.votedElections.some(
id => id.toString() === electionId
);

if(alreadyVoted){
return res.status(400).json({
message:"You already voted in this election"
});
}

await Candidate.findByIdAndUpdate(candidateId,{
$inc:{votes:1}
});

// save election id
user.votedElections.push(electionId);

await user.save();

res.json({
message:"Vote successful",
votedElections:user.votedElections
});

}catch(err){

console.log(err);

res.status(500).json({error:err.message});

}

};