import ServiceCard from "./ServiceCard";
import "./ServicesSection.css";
const services = [
  {
    img: "/images/uiux.png",
    title: "Conception de site web",
    description: "Des designs modernes et responsives adaptés à votre marque.",
  },
  {
    img: "/images/editor.png",
    title: "Développement site web",
    description:
      "De sites d'une seule page à des plateformes dynamiques a plusieurs pages.",
  },
  {
    img: "/images/gear.png",
    title: "Maintenance et support",
    description:
      "Un support continu 24/7 pour garder votre site rapide et sécurisé.",
  },
  {
    img: "/images/server.png",
    title: "Hébergement",
    description: "Hébergement fiable et configuration de domaine inclus.",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <span className="section-tag">Services</span>
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
        className="service-crystal"
      />
    </section>
  );
}
