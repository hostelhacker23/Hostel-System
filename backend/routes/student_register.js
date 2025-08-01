const express = require("express");
const router = express.Router();
const Student = require("../models/Student_register");

router.post("/register", async (req, res) => {
  const { name, email, username, password } = req.body;

  if (!name || !email || !username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Optional: check if user already exists
    const existingUser = await Student.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already taken" });
    }

    const newStudent = new Student({ name, email, username, password });
    await newStudent.save();
    res.status(201).json({ message: "Student registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
