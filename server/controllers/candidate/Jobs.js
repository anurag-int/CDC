const express = require("express");
const Jobs = require("../../models/Jobs");

exports.getjobs = async (req, res) => {
  try {
    const search = req.query.search || "";
    let skills = req.query.skills || "All";

    const skillsOptions = [
      "C++",
      "Java",
      "Python",
      "ReactNative",
      "R",
      "Ruby",
      "Flutter",
      "React"
    ];

    skills === "All"
      ? (skills = skillsOptions)
      : (skills = req.query.skills.split(","));

    const jobs = await Jobs.find({
      title: { $regex: search, $options: "i" },
      skills: { $in: skills } // Use "skills" as an array
    });

    const total = await Jobs.countDocuments({
        jobs:{$in:[...jobs]},
        title: {$regex: search, $options:"i"},
    });

    const response = {
      success: "true",
      "job-opens" : jobs.length,
      jobs
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server error!"
    });
  }
};
