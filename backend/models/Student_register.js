const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String
});

module.exports = mongoose.model("Student", studentSchema);
