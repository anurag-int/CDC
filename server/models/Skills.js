const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema({
  skills: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("Skills", skillsSchema);
