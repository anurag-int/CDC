const express = require("express");
const jobs = require("../../models/Jobs");

exports.createJob = async(req, res) => {
    try{
        const { title, company_name, location, salary, experience, about_company, responsibilities, requirements, no_of_candidates, skills} = req.body();
    }
    catch(error){

        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Internal Server error"
        });
    }
}
