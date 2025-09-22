import "./trusted.css";

export default function Trusted() {
  return (
    <section className="trusted">
      {/* Left side */}
      <div className="trusted-left">
        <h2>Trusted By</h2>
        <p>Leading brands we’ve partnered with</p>
      </div>

      {/* Right side: logo grid */}
      <div className="logo-grid">
        <img src="/images/logo1.png" alt="Logo 1" />
        <img src="/images/logo2.png" alt="Logo 2" />
        <img src="/images/logo3.png" alt="Logo 3" />
        <img src="/images/logo4.png" alt="Logo 4" />
        <img src="/images/logo5.png" alt="Logo 5" />
        <img src="/images/logo6.png" alt="Logo 6" />
      </div>
    </section>
  );
}

