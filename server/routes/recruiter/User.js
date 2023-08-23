const express = require("express");
const router = express.Router();

const { signup } = require("../../controllers/recruiter/Auth");

router.post("/signup", signup);

module.exports = router;