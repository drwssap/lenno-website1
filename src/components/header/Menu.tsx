"use client";

import { useEffect, useState } from "react";
import HamburgerMenu from "../Hamburger";
import "./Menu.css";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock/unlock scroll
  useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  // Close menu when clicking a nav link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="nav-container">
      <div className="hamburger-wrapper">
        <HamburgerMenu toggled={isOpen} toggle={setIsOpen} />
      </div>

      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <div className="nav-item bg-one">
          <a href="#" className="active" onClick={handleLinkClick}>
            Accueil
          </a>
        </div>
        <div className="nav-item bg-two">
          <a href="#about" onClick={handleLinkClick}>
            À propos
          </a>
        </div>
        <div className="nav-item bg-three">
          <a href="#services" onClick={handleLinkClick}>
            Services
          </a>
        </div>
        <div className="nav-item bg-four">
          <a href="#contact" onClick={handleLinkClick}>
            Contact
          </a>
        </div>
        <div className="nav-item bg-five mobile-only">
          <a href="#contact" className="btn primary" onClick={handleLinkClick}>
            Commencer votre projet →
          </a>
        </div>
      </nav>

      <a href="#contact" className="btn primary desktop-only">
        Commencer votre projet →
      </a>
    </div>
  );
}
