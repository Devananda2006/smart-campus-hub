import { useState, useEffect } from "react";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [message, setMessage] = useState("");
  const [registration, setRegistration] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    const savedRegistration = localStorage.getItem("registration");

    if (savedRegistration) {
      const data = JSON.parse(savedRegistration);

      setRegistration(data);
      setName(data.name);
      setEmail(data.email);
      setDepartment(data.department);
      setYear(data.year);
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      name === "" ||
      email === "" ||
      department === "" ||
      year === ""
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    const student = {
      name: name,
      email: email,
      department: department,
      year: year
    };

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/registrations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(student)
        }
      );

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();

      setRegistration(data.registration);

      localStorage.setItem(
        "registration",
        JSON.stringify(data.registration)
      );

      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage("Could not connect to the backend.");
    }

    setLoading(false);
  }

  function handleReset() {
    setName("");
    setEmail("");
    setDepartment("");
    setYear("");
    setMessage("");
  }

  function handleDelete() {
    localStorage.removeItem("registration");

    setRegistration(null);
    setName("");
    setEmail("");
    setDepartment("");
    setYear("");

    setMessage("Registration deleted.");
  }

  return (
    <div className="page">
      <h1>Campus Registration</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={function (event) {
            setName(event.target.value);
          }}
        />

        <label>Email</label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={function (event) {
            setEmail(event.target.value);
          }}
        />

        <label>Department</label>

        <select
          value={department}
          onChange={function (event) {
            setDepartment(event.target.value);
          }}
        >
          <option value="">Select department</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="ME">Mechanical</option>
          <option value="CE">Civil</option>
        </select>

        <label>Year</label>

        <select
          value={year}
          onChange={function (event) {
            setYear(event.target.value);
          }}
        >
          <option value="">Select year</option>
          <option value="1">First Year</option>
          <option value="2">Second Year</option>
          <option value="3">Third Year</option>
          <option value="4">Fourth Year</option>
        </select>

        <div className="form-buttons">
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Register"}
          </button>

          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {message && (
        <p className="form-message">
          {message}
        </p>
      )}

      {registration && (
        <div className="saved-section">
          <h2>Saved Registration</h2>

          <p>
            <strong>Name:</strong> {registration.name}
          </p>

          <p>
            <strong>Email:</strong> {registration.email}
          </p>

          <p>
            <strong>Department:</strong> {registration.department}
          </p>

          <p>
            <strong>Year:</strong> {registration.year}
          </p>

          <button onClick={handleDelete}>
            Delete Registration
          </button>
        </div>
      )}
    </div>
  );
}

export default Registration;