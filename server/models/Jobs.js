const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
    {
        title : {
            type : String,
            required : true,
            trim : true
        },
        company_name : {
            type : String,
            required : true,
            trim : true
        },
        location : {
            type : String,
            required : true,
            trim : true
        },
        salary : {
            type : String,
            required : true,
            trim : true
        },
        experience : {
            type : String,
            required : true,
            trim : true
        },
        about_company : {
            type : String,
            required : true,
            trim : true
        },
        responsibilities : {
            type : String,
            required : true,
            trim : true
        },
        requirements : {
            type : String,
            required : true  ,
            trim : true 
        },
        skills : {
            type : [String],
            required : true,
            trim : true
        },
        no_of_candidates : {
            type : Number,
            required : true
        }
});

module.exports = mongoose.model("jobsOpenings", jobSchema);