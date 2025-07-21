"use client";

import { useEffect } from "react";
import "./Header.css";
import Menu from "./Menu";

export default function Header() {
  useEffect(() => {
    const squares = document.querySelectorAll<HTMLElement>(".grid-square");

    const interval = setInterval(() => {
      const count = 6;
      for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * squares.length);
        const square = squares[index];
        if (square) {
          square.style.backgroundColor = "rgba(160, 160, 160, 0.4)";
          setTimeout(() => {
            square.style.backgroundColor = "transparent";
          }, 2000);
        }
      }
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="grid-overlay">
        {Array.from({ length: 200 }).map((_, i) => (
          <div className="grid-square" key={i}></div>
        ))}
      </div>

      <div className="content-wrapper">
        <div className="top-bar">
          <div className="logo">Lenno</div>

          {/* ✅ Here's your reusable nav menu */}
          <Menu />
        </div>

        <div className="hero-content">
          <span className="badge">100 % Fiable</span>
          <h1>
            Construire un site web pensé
            <br />
            pour durer.
          </h1>
          <p>
            Sites web sur mesure pour les entreprises de construction,
            d’aménagement paysager
            <br />
            et les prestataires de services locaux.
          </p>
          <a href="#contact" className="btn secondary">
            Commencer votre projet →
          </a>
        </div>
      </div>
    </header>
  );
}
