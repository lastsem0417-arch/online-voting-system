const express = require("express");
const router = express.Router();

const {
createElection,
getElections
} = require("../controllers/electionController");

router.post("/",createElection);

router.get("/",getElections);

module.exports = router;