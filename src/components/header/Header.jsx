import React, { useState } from "react";
import { MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-black text-white md:justify-around">
      <div className="logo text-3xl font-bold font-mono">FitCoach</div>

      <div className="hidden md:flex justify-between gap-8">
        {/* Desktop navbar */}
        <div className="part1 flex gap-4 items-center">
          <Link to="/" className="flex">
            Home <MdKeyboardArrowDown className="mt-1 ml-0.5" />
          </Link>
          <Link to="/programs" className="flex">
            Programs <MdKeyboardArrowDown className="mt-1 ml-0.5" />
          </Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="joinBnt hidden md:block">
          <button className="bg-blue-600 rounded-sm text-lg font-bold px-4 py-2">
            Login
          </button>
        </div>
      </div>

      {/* Mobile menu icon */}
      <div className="menuIcon md:hidden">
        <button
          className="text-3xl font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdMenu />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="h-screen w-3/4 flex flex-col absolute right-0 top-[80px] text-white text-xl p-4 bg-black md:hidden">
          <Link to="/" className="mb-4">
            Home
          </Link>
          <Link to="/programs" className="flex mb-4">
            Programs <MdKeyboardArrowDown className="mt-1 ml-0.5" />
          </Link>
          <Link to="/about" className="mb-4">
            About Us
          </Link>
          <Link to="/contact" className="mb-4">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
