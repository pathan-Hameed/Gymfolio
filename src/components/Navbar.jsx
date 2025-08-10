import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>FitCoach</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="navList">
        <a href="#"><li>Home</li></a>
        <a href="#"><li>About</li></a>
        <a href="#"><li>Programs</li></a>
        <a href="#"><li>Contact</li></a>
        <button className="btn">Join Now</button>
      </ul>

      {/* Menu Icon */}
      <span className="menu" onClick={handleMenuClick}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </span>

      {/* Mobile Menu */}
      <ul className={`mobileMenu ${isOpen ? "open" : ""}`}>
        <a href="#"><li>Home</li></a>
        <a href="#"><li>About</li></a>
        <a href="#"><li>Programs</li></a>
        <a href="#"><li>Contact</li></a>
        <button className="btn">Join Now</button>
      </ul>
    </nav>
  );
}
