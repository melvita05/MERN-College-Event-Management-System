import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: primalmelvitadsouza@gmail.com</p>
          <p>Phone: +91 7892762829</p>
          <p>Address: MDS College, Mangalore</p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/event">Events</Link></li>
            <li><Link to="/find">Events Finder</Link></li>
            <li><Link to="/admi">Admin</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2024 MDS College. All Rights Reserved.</p>
      </div>
    </footer>
  );
}