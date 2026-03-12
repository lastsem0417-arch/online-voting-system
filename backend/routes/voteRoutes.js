const express = require("express");

const router = express.Router();

const {vote} = require("../controllers/voteController");

router.post("/",vote);

module.exports = router;