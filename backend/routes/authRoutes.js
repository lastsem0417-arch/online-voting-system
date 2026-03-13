const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");
const User = require("../models/User");


// ================= REGISTER =================
router.post("/register", register);


// ================= LOGIN =================
router.post("/login", login);


// ================= GET USER BY ID =================
// Used for vote status check

router.get("/user/:id", async (req,res)=>{

try{

const user = await User.findById(req.params.id).select("-password");

if(!user){
return res.status(404).json({
success:false,
message:"User not found"
});
}

res.json({
success:true,
user
});

}catch(err){

console.error("USER FETCH ERROR:",err.message);

res.status(500).json({
success:false,
error:err.message
});

}

});

module.exports = router;