// backend/server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const User = require("../backend/models/User.js");

const app = express();
const PORT = 5500;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/hostelDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB (hostelDB)");
});

// Root route
app.get("/", (req, res) => {
    res.send("🏠 Hostel Management System Backend is running");
});

// Login route
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(200).json({ message: "Login saved successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to save login" });
    }
});

// Start the server
app.listen(PORT, () => {
   console.log(`Server is running at http://localhost:${5500}`);

});