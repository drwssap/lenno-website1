"use client";

import React, { useEffect, useRef, useState } from "react";
import "./AboutUsSection.css";

type AnimatedCounterProps = {
  end: number;
  duration?: number;
  trigger?: boolean;
};

function AnimatedCounter({
  end,
  duration = 2500,
  trigger = false,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;
    let startTimestamp: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration, trigger]);

  return <span>{count}+</span>;
}

export default function AboutUs() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
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
          {/* <a href="#" className="about-button">
            En savoir plus → 
          </a> */}
        </div>

        {/* Right Content */}
        <div className="about-right">
          <div className="about-stat">
            <h3 className="about-stat-number">
              <AnimatedCounter end={50} trigger={visible} />
            </h3>
            <p className="about-stat-label">
              Des clients satisfaits <br />
              partout dans le monde.
            </p>
          </div>
          <hr className="customLine" />
          <div className="about-stat bordered">
            <h3 className="about-stat-number">
              <AnimatedCounter end={100} trigger={visible} />
            </h3>
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
