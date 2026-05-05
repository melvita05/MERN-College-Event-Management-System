import React, { useState } from "react";
import "./College.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function College() {
  const host = "http://127.0.0.1:8005";
  const nav = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const errors = {};

    if (!userData.name.trim()) errors.name = "Name is required.";
    if (!userData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      errors.email = "Invalid email.";
    }

    if (!userData.password.trim()) {
      errors.password = "Password required.";
    } else if (userData.password.length < 6) {
      errors.password = "Min 6 characters.";
    }

    if (!/^\d{10}$/.test(userData.phone)) {
      errors.phone = "Enter valid 10-digit phone.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await axios.post(`${host}/users/usrinsrt`, userData);
      alert("Registered successfully");
      nav("/log");
    } catch (err) {
      alert("Error submitting form");
    }
  };

  return (
    <div className="college">
      <div className="overlay">

        {/* LEFT CONTENT */}
        <div className="left">
          <h1>MDS College</h1>
          <p>
            Discover events, connect with students, and explore opportunities
            at MDS College. Join us today and be part of something amazing.
          </p>
        </div>

        {/* RIGHT FORM */}
        <form className="form" onSubmit={handleSubmit}>
          <h2>Register</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={userData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={userData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}

          <button type="submit" className="btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}