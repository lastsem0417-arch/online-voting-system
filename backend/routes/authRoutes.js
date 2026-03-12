const express = require("express");
const router = express.Router();

const {
register,
login
} = require("../controllers/authController");

const User = require("../models/User");

router.post("/register", register);

router.post("/login", login);

// GET USER BY ID (vote status check)
router.get("/user/:id", async (req,res)=>{

try{

const user = await User.findById(req.params.id);

if(!user){
return res.status(404).json({message:"User not found"});
}

res.json(user);

}catch(err){

res.status(500).json({error:err.message});

}

});

module.exports = router;