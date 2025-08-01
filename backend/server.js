const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json()); // Replaces body-parser

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/hostel", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Load routes
const studentRoutes = require(path.join(__dirname, "routes", "student_register.js"));
app.use("/api/student", studentRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
