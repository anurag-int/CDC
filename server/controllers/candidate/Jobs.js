const express = require("express");
const Jobs = require("../../models/Jobs");
const Skill = require("../../models/Skills");

exports.getjobs = async (req, res) => {
  try {
    const search = req.query.search || "";
    const skillsQuery = req.query.skills;
    const location = req.query.location || "";

    console.log(typeof skillsQuery);
    // Create a filter object to build the query conditions dynamically
    const filter = {
      title: { $regex: search, $options: "i" }
    };


    // Add skills query condition if skillsQuery is provided
    if (skillsQuery) {
      // Find the skill document based on the provided skill name
      const skill = await Skill.findOne({ skills: skillsQuery });

      if(skill){
        filter.skills = skill._id; // Filter jobs by the skill ID
      }
    }

    // Add location query condition if location is provided
    if (location) {
      filter.location = location;
    }

    
    // Query jobs based on the filter object
    const jobs = await Jobs.find(filter);

    const response = {
      success: true,
      "job-opens": jobs.length,
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
