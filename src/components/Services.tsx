import "./services.css";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Responsive, modern websites that drive results.",
      image: "/thumb1.png",
    },
    {
      title: "Brand Identity",
      description: "Logos, colors, and strategy that make you memorable.",
      image: "/thumb2.png",
    },
    {
      title: "UI/UX Design",
      description: "Seamless experiences that delight your users.",
      image: "/thumb3.png",
    },
    {
      title: "SEO & Marketing",
      description: "Boost visibility and attract the right audience.",
      image: "/thumb4.png",
    },
  ];

  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          {/* Left Top Title */}
          <h2 className="services-title">Our Services</h2>

          {/* Intro in middle */}
          <p className="services-intro">
            We deliver tailored digital solutions that help businesses grow,
            innovate, and succeed in a fast-moving market.
          </p>

          {/* Right Top Button */}
          <button className="services-btn">View All</button>
        </div>

        {/* Service Rows */}
        <div className="services-rows">
          {services.map((service, i) => (
            <div className="service-row" key={i}>
              <div className="service-title">{service.title}</div>
              <div className="service-description">{service.description}</div>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

