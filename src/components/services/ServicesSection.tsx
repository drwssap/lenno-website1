import ServiceCard from "./ServiceCard";
import "./ServicesSection.css";
const services = [
  {
    img: "/images/uiux.png",
    title: "Website Design",
    description: "Modern and responsive designs tailored to your brand.",
  },
  {
    img: "/images/editor.png",
    title: "Website Development",
    description: "From single-page sites to dynamic platforms.",
  },
  {
    img: "/images/gear.png",
    title: "Maintenance & Support",
    description: "Ongoing support to keep your site fast and secure.",
  },
  {
    img: "/images/server.png",
    title: "Hosting Setup",
    description: "Reliable hosting and domain configuration included.",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <span className="section-tag">Services</span>
        <h2 className="section-title">Services We Provide</h2>
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
