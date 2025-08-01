const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const Complaint = require("../models/Complaint");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://127.0.0.1:27017/hostelDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// POST: Submit complaint
app.post("/api/complaints", async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();
    res.status(201).json({ message: "Complaint submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit complaint" });
  }
});

// GET: Fetch all complaints
app.get("/api/complaints", async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ date: -1 });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch complaints" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
