// Services.tsx
import "./services.css";

export default function Services() {
  return (
    <section className="services">
      <div className="services-container">

        {/* Top Row */}
        <div className="services-header">
          {/* Left column */}
          <div className="services-col">
            <h2 className="services-title">Our Services</h2>
            <ul className="services-titles">
              <li>Web Development</li>
              <li>Brand Identity</li>
              <li>UI/UX Design</li>
              <li>SEO & Marketing</li>
            </ul>
          </div>

          {/* Middle column */}
          <div className="services-col">
            <p className="services-intro">
              We deliver tailored digital solutions that help businesses grow, 
              innovate, and succeed in a fast-moving market.
            </p>
            <div className="services-descriptions">
              <p> Responsive, modern websites that drive results.</p>
              <p> Logos, colors, and strategy that make you memorable.</p>
              <p>Seamless experiences that delight your users.</p>
              <p> Boost visibility and attract the right audience.</p>
            </div>
          </div>

          {/* Right column */}
          <div className="services-col">
            <button className="services-btn">View All</button>
            <div className="services-thumbs">
              <img src="/thumb1.png" alt="Service 1" />
              <img src="/thumb2.png" alt="Service 2" />
              <img src="/thumb3.png" alt="Service 3" />
              <img src="/thumb4.png" alt="Service 4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

