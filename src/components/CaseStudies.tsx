import "./casestudies.css";

export default function CaseStudies() {
  return (
    <section className="case-studies">
      <div className="case-featured">
        <h3>Discover the Results We've Achieved</h3>
        <div className="featured-img">
          <img src="/case1.jpg" alt="case study" />
        </div>
      </div>
      <div className="case-grid">
        <img src="/case2.jpg" alt="case2" />
        <img src="/case3.jpg" alt="case3" />
        <img src="/case4.jpg" alt="case4" />
        <img src="/case5.jpg" alt="case5" />
        <img src="/case6.jpg" alt="case6" />
      </div>
    </section>
  );
}

