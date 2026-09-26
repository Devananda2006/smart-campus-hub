const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

// Temporary registration storage
const registrations = [
  {
    id: 1,
    name: "Devananda",
    email: "student@example.com",
    department: "CSE",
    year: "2"
  }
];

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
  const registration = {
    id: registrations.length + 1,
    name: req.body.name,
    email: req.body.email,
    department: req.body.department,
    year: req.body.year
  };

  registrations.push(registration);

  console.log("New registration:", registration);

  res.json({
    message: "Registration created successfully!",
    registration: registration
  });
});

// GET - Get all registrations
app.get("/api/registrations", function (req, res) {
  res.json(registrations);
});

// PUT - Update a registration
app.put("/api/registrations/:id", function (req, res) {
  const id = Number(req.params.id);

  const registration = registrations.find(function (item) {
    return item.id === id;
  });

  if (!registration) {
    return res.status(404).json({
      message: "Registration not found."
    });
  }

  registration.name = req.body.name;
  registration.email = req.body.email;
  registration.department = req.body.department;
  registration.year = req.body.year;

  res.json({
    message: "Registration updated successfully!",
    registration: registration
  });
});

// Start server
app.listen(PORT, function () {
  console.log(`Server running on http://localhost:${PORT}`);
});