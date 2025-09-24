import "./casestudies.css";

export default function CaseStudies() {
  return (
   <section className="case-studies">
  {/* Row 1: Title + Discover side by side */}
  <div className="case-studies-header">
    <h2>Our Case Studies</h2>
    <p>
      Discover how we transform ambitious brands into market leaders
      through design, strategy, and storytelling.
    </p>
    <h3>Featured Case Study</h3>
  </div>

  {/* Row 2: Brand logo + name */}
  <div className="case-studies-brand">
    <img src="/brand-logo.png" alt="Brand Logo" />
    <span>Brand Name</span>
  </div>

  {/* Row 3i: Highlight + image */}
  <div className="case-studies-content">
    <div className="case-studies-text">
          <p>Best case study 2024</p>
      <h3>Enlighten Branding and Package Design</h3>
      <p>
        We partnered with ArchStack to reinvent their digital presence and
        unlock exponential growth in their category. And this lead to over 
        100x Pace improvement in Seo optimization and leads Generation
      </p>
      <a href="/case-studies/brand-x">View Case Study →</a>
    </div>

    <div className="case-studies-image">
      <img src="/case-study-image.jpg" alt="Case Study Preview" />
    </div>
  </div>
</section>
  )};
