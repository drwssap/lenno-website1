"use client";

import "./AboutUsSection.css";

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Content */}
        <div className="about-left">
          <span className="about-tag">About Us</span>
          <h2 className="about-title">Who We Are</h2>
          <p className="about-description">
            We’re a web agency helping businesses in the Laurentides region
            establish a strong online presence. From clean code to clean design.
            We handle it all.
          </p>
          <a href="#" className="about-button">
            Learn More →
          </a>
        </div>

        {/* Right Content */}
        <div className="about-right">
          <div className="about-stat">
            <h3 className="about-stat-number">868+</h3>
            <p className="about-stat-label">
              Satisfied clients <br />
              worldwide.
            </p>
          </div>
          <hr className="customLine" />
          <div className="about-stat bordered">
            <h3 className="about-stat-number">1252+</h3>
            <p className="about-stat-label">
              Successfully <br />
              completed
            </p>
          </div>
        </div>
      </div>

      <img
        src="/images/blob.png"
        alt="Blob Decoration"
        className="about-blob"
      />
    </section>
  );
}
