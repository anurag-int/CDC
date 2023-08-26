const express = require("express");
const User = require("../../models/User");

exports.signupCandidate = async(req, res) => {
    try{

        const {first_name, last_name, email, password} = req.body;


        if(!first_name || !last_name || !email || !password)
        {
            return res.status(403).json({
                success : false,
                message : "Please fill all details"
            });
        }

        const existingUser = await User.findOne({email});

        if(existingUser)
        {
            return res.status(400).json({
                success : false,
                message : "User already exits!"
            })
        }
        
        const user = await User.create({
            first_name, last_name, email, password, role : "candidate"
        });

        return res.status(200).json({
            success : true,
            data : user,
            message : "User registered Successfully"
        });
        
        
    }
    catch(error){

        console.log(error);
        return res.status(500).json({
            success : false,
            message : "User cannot be registered, please try again!"
        });
    }
}