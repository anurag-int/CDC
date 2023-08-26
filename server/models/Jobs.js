const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
    {
        title : {
            type : String,
            required : true  
        },
        company_name : {
            type : String,
            required : true
        },
        location : {
            type : String,
            required : true
        },
        salary : {
            type : String,
            required : true
        },
        experience : {
            type : String,
            required : true
        },
        about_company : {
            type : String,
            required : true
        },
        responsibilities : {
            type : String,
            required : true
        },
        requirements : {
            type : String,
            required : true   
        },
        skills : {
            type : [String],
            required : true
        },
        no_of_candidates : {
            type : Number,
            required : true
        }
});

module.exports = mongoose.model("jobs-openings", jobSchema);