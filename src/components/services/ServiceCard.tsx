import React from "react";
import "./ServiceCard.css";
type ServiceCardProps = {
  img: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  img,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="service-card">
      <img src={img} alt={title} className="service-icon" />
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        {/* <button className="learn-more">En savoir plus →</button> */}
      </div>
    </div>
  );
}
