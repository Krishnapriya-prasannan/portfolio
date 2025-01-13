import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext"; 
import { Link } from "react-router-dom"; // Import Link for navigation
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi"; // Import icons from 'react-icons/hi'

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // Close the mobile menu on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <header
        className={`py-4 px-6 flex justify-between items-center font-montserrat ${
          darkMode ? "bg-[#121212] text-[#E0E0E0]" : "bg-white text-black"
        }`}
      >
        {/* Logo/Title */}
        <div
          className="text-2xl font-medium tracking-wide"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "28px",
            letterSpacing: "0.03em",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none"
          }}
        >
          RIDDHI LIMBACHIYA
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <a href="#work" className="hover:text-gray-400">
            Work
          </a>
          <a href="#about" className="hover:text-gray-400">
            Journey
          </a>
          <a href="#testimonials" className="hover:text-gray-400">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </nav>

        {/* Beyond the Bio */}
        <div className="hidden md:block text-lg hover:text-gray-400">
          <Link to="/bio">Beyond the Bio</Link>
        </div>
 {/* Dark Mode Toggle */}
 <button
          className="text-2xl ml-4 focus:outline-none transition-transform transform hover:scale-110"
          onClick={toggleDarkMode}
          style={{ padding: "8px" }} // Adjust padding for a better click area
        >
          {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
        </button>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

      </header>
        
       

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          className={`absolute top-16 left-0 w-full text-center space-y-4 py-4 shadow-lg z-10 border-t border-gray-200 ${
            darkMode ? "bg-[#121212] text-[#E0E0E0]" : "bg-white text-black"
          } md:hidden`}
        >
          <a
            href="#work"
            className="block hover:text-gray-500"
            onClick={() => setMenuOpen(false)}
          >
            Work
          </a>
          <a
            href="#journey"
            className="block hover:text-gray-500"
            onClick={() => setMenuOpen(false)}
          >
            Journey
          </a>
          <a
            href="#testimonials"
            className="block hover:text-gray-500"
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block hover:text-gray-500"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <Link
            to="/bio"
            className="block hover:text-gray-500"
            onClick={() => setMenuOpen(false)}
          >
            Beyond the Bio
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Header;
