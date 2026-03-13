const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// ================= REGISTER =================

exports.register = async (req,res)=>{

try{

const {name,email,password} = req.body;

if(!name || !email || !password){
return res.status(400).json({message:"All fields required"});
}

const userExists = await User.findOne({email});

if(userExists){
return res.status(400).json({message:"User already exists"});
}

const hashedPassword = await bcrypt.hash(password,10);

const user = new User({
name,
email,
password:hashedPassword
});

await user.save();

res.status(201).json({
message:"User registered successfully"
});

}catch(error){

console.log("REGISTER ERROR:",error);

res.status(500).json({error:error.message});

}

};


// ================= LOGIN =================

exports.login = async(req,res)=>{

try{

const {email,password} = req.body;

if(!email || !password){
return res.status(400).json({message:"Email and password required"});
}

const user = await User.findOne({email});

if(!user){
return res.status(400).json({message:"Invalid credentials"});
}

const isMatch = await bcrypt.compare(password,user.password);

if(!isMatch){
return res.status(400).json({message:"Invalid credentials"});
}

const token = jwt.sign(
{ id:user._id },
process.env.JWT_SECRET,
{ expiresIn:"1d" }
);

res.json({
token,
user:{
id:user._id,
name:user.name,
email:user.email,
role:user.role
}
});

}catch(error){

console.log("LOGIN ERROR:",error);

res.status(500).json({error:error.message});

}

};