const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        first_name : {
            type : String,
            required : true,
            trim : true
        },
        last_name : {
            type : String,
            required : true,
            trim : true
        },
        email : {
            type : String,
            required : true,
            trim : true
        },
        password : {
            type : String,
            required : true,
            trim : true
        },
        role : {
            type : String,
            enum : ["candidate", "recruiter"]
        },
        organization : {
            type : String
        }
    }
);

module.exports = mongoose.model("userRecruiter", userSchema);

