const express = require("express");
const router = express.Router();

const { signupRecruiter } = require("../controllers/recruiter/Auth");
const { signupStudents } = require("../controllers/student/Auth");

router.post("/signup1", signupRecruiter);
router.post("/signup2", signupStudents);

module.exports = router;