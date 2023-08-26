const express = require("express");
const router = express.Router();

const { signupCandidate } = require("../../controllers/candidate/Auth");

router.post("/signup", signupCandidate);


module.exports = router;