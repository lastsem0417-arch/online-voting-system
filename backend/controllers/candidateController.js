const Candidate = require("../models/Candidate");


// Add Candidate (Admin)

exports.addCandidate = async (req,res)=>{

try{

const {name,party,electionId} = req.body;

if(!name || !party || !electionId){
return res.status(400).json({message:"All fields required"});
}

const candidate = new Candidate({
name,
party,
electionId
});

await candidate.save();

res.status(201).json({
message:"Candidate added successfully",
candidate
});

}catch(error){

res.status(500).json({error:error.message});

}

};




// Get Candidates by Election

exports.getCandidates = async(req,res)=>{

try{

const {electionId} = req.params;

const candidates = await Candidate.find({
electionId
}).sort({createdAt:-1});

res.json(candidates);

}catch(error){

res.status(500).json({error:error.message});

}

};




// Get Results (sorted by votes)

exports.getResults = async(req,res)=>{

try{

const {electionId} = req.params;

const results = await Candidate.find({
electionId
}).sort({votes:-1});

res.json(results);

}catch(error){

res.status(500).json({error:error.message});

}

};