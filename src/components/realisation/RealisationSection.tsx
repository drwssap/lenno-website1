import "./RealisationSection.css";

const images = [
  "/images/site1.png",
  "/images/site2.png",
  "/images/site3.png",
  "/images/site4.png",
  "/images/site5.png",
  "/images/site6.png",
];

export default function RealisationSection() {
  return (
    <section className="realisation-section">
      <div className="realisation-row realisation-row--reverse">
        <div className="realisation-track">
          {images.map((src, index) => (
            <img
              src={src}
              key={index}
              alt={`realisation-${index}`}
              className="realisation-image"
            />
          ))}
        </div>
      </div>
      <div className="realisation-row">
        <div className="realisation-track">
          {images.map((src, index) => (
            <img
              src={src}
              key={index}
              alt={`realisation-${index}`}
              className="realisation-image"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
