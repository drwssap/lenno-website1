"use client";

import "./AboutUsSection.css";

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Content */}
        <div className="about-left">
          <span className="about-tag">À propos</span>
          <h2 className="about-title">Qui sommes-nous</h2>
          <p className="about-description">
            Nous sommes une agence web qui aide les entreprises de la région des
            Laurentides à établir une forte présence en ligne. Du code propre au
            design soigné, nous nous occupons de tout.
          </p>
          <a href="#" className="about-button">
            En savoir plus →
          </a>
        </div>

        {/* Right Content */}
        <div className="about-right">
          <div className="about-stat">
            <h3 className="about-stat-number">868+</h3>
            <p className="about-stat-label">
              Des clients satisfaits <br />
              partout dans le monde.
            </p>
          </div>
          <hr className="customLine" />
          <div className="about-stat bordered">
            <h3 className="about-stat-number">1252+</h3>
            <p className="about-stat-label">
              projets réalisés <br />
              avec succès
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
