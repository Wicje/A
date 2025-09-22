import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* Hero Image */}
      <div className="hero-image">
        <img src="/hero-bg.jpg" alt="Hero background" />
        <h1 className="hero-title">LiGHTN®</h1>
      </div>

      {/* Below Hero - Logo & Write-up */}
      <div className="hero-content">
        <div className="hero-logo">
          <img src="/logo.svg" alt="Codot logo" />
        </div>
        <div className="hero-text">
          <p>
            We are a multidisciplinary design studio rooted in the cultural
            heart of Yogyakarta. Our passion is to craft visionary solutions for
            ambitious brands — blending local insights with global perspectives.
          </p>
        </div>
      </div>
    </section>
  );
}

