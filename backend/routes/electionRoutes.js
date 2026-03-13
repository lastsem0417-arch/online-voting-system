const express = require("express");
const router = express.Router();

const {
createElection,
getElections,
deleteElection
} = require("../controllers/electionController");

// create election
router.post("/create", createElection);

// get all elections
router.get("/", getElections);

router.delete("/:id",deleteElection);

module.exports = router;