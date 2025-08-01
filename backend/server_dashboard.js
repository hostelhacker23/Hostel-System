const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// Serve dashboard at "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});

// API to return student data
app.get("/api/students", (req, res) => {
  fs.readFile(path.join(__dirname, "data", "students.json"), "utf8", (err, data) => {
    if (err) return res.status(500).send("Failed to load student data.");
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
