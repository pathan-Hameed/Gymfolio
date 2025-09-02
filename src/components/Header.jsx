import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 bg-gray-200 rounded-full px-6 py-2 shadow-xl">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-4 py-1 rounded-full font-medium transition-all duration-300 ${
              location.pathname === item.path
                ? "bg-white text-black shadow-md"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center px-4 w-screen">
        <div className="text-lg font-bold">FitCoach</div>
        <button
          className="text-3xl text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden absolute top-14 left-0 w-full bg-gray-100 rounded-lg shadow-md flex flex-col items-center space-y-4 py-6 transition-all duration-300">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-white text-black shadow-md"
                  : "text-gray-600 hover:text-black"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
