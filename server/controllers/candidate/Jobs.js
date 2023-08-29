const express = require("express");
const Jobs = require("../../models/Jobs");


exports.getjobs = async(req, res) => {
    try{
        const alljobs = await Jobs.find();
        console.log(typeof(alljobs));
        const size = Object.keys(alljobs).length;

        if(size == 0)
        {
            return res.status(200).json({
                success : true,
                jobs_available : size,
                message : "No jobs Available!"
            })
        }
        else
        {
            return res.status(200).json({
                success : true,
                jobs_available : size,
                data : alljobs,
                message : "Here are the jobs Available"
            })
        }
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Internal Server error!"
        })
    }
}