import "./services.css";

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        {/* Header split */}
        <div className="services-left">
          <h2>Our Services</h2>
        </div>

        <div className="services-right">
          <p>
            We deliver multidisciplinary solutions — from brand identity and
            strategy, to digital products and immersive experiences. Each
            service is crafted to help ambitious brands thrive in a competitive
            landscape.
          </p>

          <a href="/services" className="view-all">
            View All
          </a>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        <div className="service-card">
          <h3>Brand Strategy</h3>
          <p>Positioning, messaging, and market insights that set you apart.</p>
        </div>
        <div className="service-card">
          <h3>Identity Design</h3>
          <p>Logos, systems, and visual languages that scale across touchpoints.</p>
        </div>
        <div className="service-card">
          <h3>Digital Products</h3>
          <p>Websites and apps designed to connect brands with global audiences.</p>
        </div>
        <div className="service-card">
          <h3>Content & Campaigns</h3>
          <p>Engaging narratives that drive awareness and cultural relevance.</p>
        </div>
      </div>
    </section>
  );
}

