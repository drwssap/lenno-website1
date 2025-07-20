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
          <span className="badge">100% Trusted</span>
          <h1>
            Building Your Web
            <br />
            Presence With Precision
          </h1>
          <p>
            Custom Websites For Construction, Landscaping,
            <br />
            And Local Service Providers.
          </p>
          <a href="#" className="btn secondary">
            Start Your Project →
          </a>
        </div>
      </div>
    </header>
  );
}
