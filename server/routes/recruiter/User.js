const express = require("express");
const router = express.Router();

const { signupRecruiter } = require("../../controllers/recruiter/Auth");
const { createJob } = require("../../controllers/recruiter/Jobs");


router.post("/signup", signupRecruiter);
router.post("/create-jobs", createJob);


module.exports = router;