"use client";

import { useState } from "react";
import HamburgerMenu from "../Hamburger";
import "./Menu.css";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="hamburger-wrapper">
        <HamburgerMenu
          onToggle={(toggled: boolean) => {
            setIsOpen(toggled);
            console.log("Hamburger toggled:", toggled);
          }}
        />
      </div>

      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <div className="nav-item bg-one">
          <a href="#" className="active">
            Accueil
          </a>
        </div>
        <div className="nav-item bg-two">
          <a href="#about">À propos</a>
        </div>
        <div className="nav-item bg-three">
          <a href="#services">Services</a>
        </div>
        <div className="nav-item bg-four">
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-item bg-five mobile-only">
          <a href="#" className="btn primary">
            Commencer votre projet →
          </a>
        </div>
      </nav>

      {/* Desktop-only button (optional) */}
      <a href="#" className="btn primary desktop-only">
        Commencer votre projet →
      </a>
    </div>
  );
}
