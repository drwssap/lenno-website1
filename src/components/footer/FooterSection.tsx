// components/FooterSection.tsx

import React from "react";
import "./FooterSection.css";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const FooterSection = () => {
  return (
    <footer className="footer">
      <h2 className="footer-logo">Lenno</h2>

      <div className="footer-socials">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaXTwitter />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaLinkedinIn />
        </a>
      </div>

      <ul className="footer-nav">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-bottom">
        <span>© 2025 Lenno All rights reserved.</span>
        <span>|</span>
        <a href="#">Terms & Condition</a>
        <span>|</span>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default FooterSection;
