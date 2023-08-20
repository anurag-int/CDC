const express = require("express");

exports.signup = async(req, res) => {
    try{

        const {firstName, lastName, email, password} = req.body;

        if(!firstName || !lastName || !email || !password)
        {
            return res.status(403).json({
                success : false,
                message : "Please fill all details"
            })
        } 
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "User cannot be registered, please try again!"
        })
    }
}