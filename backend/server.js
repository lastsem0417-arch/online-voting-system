const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/candidates", require("./routes/candidateRoutes"));
app.use("/api/vote", require("./routes/voteRoutes"));
app.use("/api/polls", require("./routes/pollRoutes"));
app.use("/api/elections", require("./routes/electionRoutes"));

app.get("/", (req,res)=>{
  res.send("Voting API Running");
});

// 404 handler (LAST)
app.use((req,res)=>{
  res.status(404).json({
    success:false,
    error:{message:"Not Found"}
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
});