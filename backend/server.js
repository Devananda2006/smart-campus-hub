const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

// Temporary storage
const registrations = [];

// Home route
app.get("/", function (req, res) {
  res.send("Smart Campus OS Backend is running!");
});

// GET - Get all campus events
app.get("/api/events", function (req, res) {
  const events = [
    {
      id: 1,
      name: "Tech Fest 2026",
      date: "March 15, 2026"
    },
    {
      id: 2,
      name: "24-Hour Hackathon",
      date: "April 20, 2026"
    },
    {
      id: 3,
      name: "Cultural Fest",
      date: "May 10, 2026"
    }
  ];

  res.json(events);
});

// POST - Create a registration
app.post("/api/registrations", function (req, res) {
  const registration = req.body;

  registrations.push(registration);

  console.log("New registration:", registration);

  res.json({
    message: "Registration received successfully!",
    registration: registration
  });
});

// GET - Get all registrations
app.get("/api/registrations", function (req, res) {
  res.json(registrations);
});

// Start server
app.listen(PORT, function () {
  console.log(`Server running on http://localhost:${PORT}`);
});