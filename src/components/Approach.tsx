import "./approach.css";

export default function Approach() {
  return (
    <section className="approach">
      <div className="approach-left">
        <h2 className="section-title">Our <span>Approach</span></h2>
        <div className="approach-images">
          <img src="/images/gallery1.jpg" alt="Project 1" className="rect" />
          <img src="/images/gallery2.jpg" alt="Project 2" className="rect" />
          <img src="/images/gallery3.jpg" alt="Project 3" className="circle" />
        </div>
      </div>

      <div className="approach-right">
        <h3 className="approach-heading">
          Where Brands’ Integrity Meets Design
        </h3>
        <p className="approach-text">
          We combine strategy, design, and storytelling to deliver timeless
          brand identities that resonate across cultures and industries.
        </p>
        <a href="/approach" className="approach-link">
           Learn More About Our Studio →
        </a>
      </div>
    </section>
  );
}

