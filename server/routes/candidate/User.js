const express = require("express");
const router = express.Router();

const { signupCandidate } = require("../../controllers/candidate/Auth");
const { getjobs } = require("../../controllers/candidate/Jobs");


router.post("/signup", signupCandidate);
router.get("/all-jobs", getjobs);


module.exports = router;