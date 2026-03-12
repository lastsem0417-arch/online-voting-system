const express = require("express");
const router = express.Router();

const {
  createPoll,
  getPolls,
  vote
} = require("../controllers/pollController");

router.post("/create", createPoll);

router.get("/", getPolls);

router.post("/vote", vote);

module.exports = router;