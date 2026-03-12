const express = require("express");
const router = express.Router();

const {
addCandidate,
getCandidates,
getResults
} = require("../controllers/candidateController");

router.post("/add", addCandidate);

// get candidates by election
router.get("/:electionId", getCandidates);

// results
router.get("/results/:electionId", getResults);

module.exports = router;