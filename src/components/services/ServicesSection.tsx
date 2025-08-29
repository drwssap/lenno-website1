"use client";

import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";
import "./ServicesSection.css";
const services = [
  {
    img: "/images/uiux.png",
    title: "Conception de site web",
    description:
      "Des designs modernes et responsives adaptés à votre marque, optimisés pour SEO et pensés pour une expérience utilisateur exceptionnelle.",
  },
  {
    img: "/images/editor.png",
    title: "Développement site web",
    description:
      "De sites d'une seule page à des plateformes dynamiques à plusieurs pages, entièrement personnalisées, performantes et sécurisées pour répondre à vos besoins.",
  },
  {
    img: "/images/gear.png",
    title: "Maintenance et support",
    description:
      "Un support continu 24/7 pour garder votre site rapide, sécurisé, fiable, à jour et performant en toutes circonstances.",
  },
  {
    img: "/images/server.png",
    title: "Hébergement",
    description:
      "Hébergement fiable et configuration de domaine inclus, avec support technique rapide, sécurité renforcée, sauvegardes régulières et disponibilité maximale garantie.",
  },
];

export default function ServicesSection() {
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
    <section className="services-section" id="services" ref={sectionRef}>
      <div className="services-header">
        <h2 className="section-title">Services que nous offrons</h2>
      </div>
      <div className="services-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              img={service.img}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>

      <img
        src="/images/crystal.png"
        alt="Crystal Decoration"
        className={`service-crystal${visible ? " animate-crystal" : ""}`}
      />
    </section>
  );
}
