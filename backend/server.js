const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();


// ================= MIDDLEWARE =================

app.use(cors());
app.use(express.json());


// ================= DATABASE =================

connectDB();


// ================= ROUTES =================

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/candidates", require("./routes/candidateRoutes"));
app.use("/api/vote", require("./routes/voteRoutes"));
app.use("/api/polls", require("./routes/pollRoutes"));
app.use("/api/elections", require("./routes/electionRoutes"));


// ================= ROOT ROUTE =================

app.get("/", (req,res)=>{
  res.send("🚀 Universal Voting API Running");
});


// ================= GLOBAL ERROR HANDLER =================

app.use((err,req,res,next)=>{
  console.error("SERVER ERROR:",err.message);

  res.status(err.status || 500).json({
    success:false,
    error:{
      message:err.message || "Internal Server Error"
    }
  });
});


// ================= 404 ROUTE =================

app.use((req,res)=>{
  res.status(404).json({
    success:false,
    error:{
      message:"Route Not Found"
    }
  });
});


// ================= SERVER START =================

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
  console.log(`🚀 Server running on port ${PORT}`);
});