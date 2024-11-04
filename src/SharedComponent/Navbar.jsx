import "./navbar.css";

function Navbar() {
  return (
    <header>
      <div className="logo">LuxeyLine</div>
      <ul className="nav-list">
        <li>Home</li>
        <li className="active">About Us</li>
        <li>Buy</li>
        <li>News</li>
        <li>Contact</li>
      </ul>
      <button className="start-btn">Get Started</button>
    </header>
  );
}

export default Navbar;
