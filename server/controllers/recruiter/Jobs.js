const express = require("express");
const Jobs = require("../../models/Jobs"); // Assuming you've imported your job model correctly
const Skills = require("../../models/Skills");

exports.createJob = async (req, res) => {
  try {
    const {
      title,
      company_name,
      location,
      salary,
      experience,
      about_company,
      responsibilities,
      requirements,
      no_of_candidates,
      skills
    } = req.body;

    console.log(
      title,
      company_name,
      location,
      salary,
      experience,
      about_company,
      responsibilities,
      requirements,
      no_of_candidates,
      skills
    );

    if (
      !title ||
      !company_name ||
      !location ||
      !salary ||
      !experience ||
      !about_company ||
      !responsibilities ||
      !requirements ||
      !no_of_candidates ||
      !skills
    ) {

      return res.status(400).json({
        success: false,
        message: "All fields are required!"
      });
    }

    // Loop through the 'skills' array and insert each skill into the 'Skills' collection
    for (let i = 0; i < skills.length; i++) {
      const skillName = skills[i];
      const existingSkill = await Skills.findOne({ skills: skillName });

      if (!existingSkill) {
        // If the skill doesn't exist, create it
        const newSkill = await Skills.create({ skills: skillName });
        skills[i] = newSkill._id; // Replace the skill name with its _id
      }
    }

    // Create a new job with the updated 'skills' array containing skill _ids
    const newJob = await Jobs.create({
      title,
      company_name,
      location,
      salary,
      experience,
      about_company,
      responsibilities,
      requirements,
      no_of_candidates,
      skills
    });

    return res.status(200).json({
      success: true,
      "Job" : newJob,
      message: "Job Created Successfully"
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server error"
    });
  }
};
