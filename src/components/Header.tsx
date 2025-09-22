import "./header.css";

export default function Header() {
  return (
    <header className="header">
      {/* Left: Logo */}
      <div className="header-left">
        <img src="/logo.svg" alt="Logo" className="logo" />
        <span className="brand-name">ENLIGHTEN</span>
      </div>

      {/* Center: Time & Location */}
      <div className="header-center">
        <span className="header-time">21 Sept</span>
        <span className="header-location">Lagos</span>
      </div>

      {/* Right: Menu */}
      <div className="header-right">
        <button className="menu-btn">MENU</button>
      </div>
    </header>
  );
}

