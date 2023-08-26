const express = require("express");
const Jobs = require("../../models/Jobs");

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

    console.log(title,
        company_name,
        location,
        salary,
        experience,
        about_company,
        responsibilities,
        requirements,
        no_of_candidates,
        skills);

    if(!title || !company_name || !location || !salary || !experience || !about_company || !responsibilities || !requirements || !no_of_candidates || !skills)
    {
        return res.status(400).json({
            success : false,
            message : "all fields are required!"
        })
    }

    const new_job = await Jobs.create({
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
        success : true,
        data : new_job,
        message : "Job Created Successfully"
    });

    const response = j
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server error",
    });
  }
};
