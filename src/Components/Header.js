import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext"; 
import { Link } from 'react-router-dom'; // Import Link for navigation

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
      <header className={`py-4 px-6 flex justify-between items-center font-[Montserrat] ${darkMode ? "bg-[#121212] text-[#E0E0E0]" : "bg-white text-black"}`}>
        <div className="text-3xl font-bold">RIDDHI LIMBACHIYA</div>

        <nav className="hidden md:flex space-x-6 text-center">
          <a href="#about" className="hover:text-gray-500">About</a> {/* Link to About section */}
          <a href="#work" className="hover:text-gray-500">Work</a> {/* Link to Work section */}
          <a href="#testimonials" className="hover:text-gray-500">Testimonials</a> {/* Link to Testimonials section */}
          <a href="#contact" className="hover:text-gray-500">Contact</a> {/* Link to Contact section */}
        </nav>

        <div className="hidden md:block text-2xl hover:text-gray-500">
          <Link to="/bio">Beyond the Bio</Link> {/* Use Link for navigating to Bio page */}
        </div>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        <button
          className="text-2xl ml-4 focus:outline-none"
          onClick={toggleDarkMode} 
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </header>

      {menuOpen && (
        <nav
          className={`absolute top-24 left-0 w-full text-center space-y-4 py-4 shadow-lg z-10 border-t border-gray-200 ${darkMode ? "bg-[#121212] text-[#E0E0E0]" : "bg-white text-black"} md:hidden`}
        >
          <a href="#about" className="block hover:text-gray-500" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#work" className="block hover:text-gray-500" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#testimonials" className="block hover:text-gray-500" onClick={() => setMenuOpen(false)}>
            Testimonials
          </a>
          <a href="#contact" className="block hover:text-gray-500" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <Link to="/bio" className="block hover:text-gray-500" onClick={() => setMenuOpen(false)}>
            Beyond the Bio
          </Link> {/* Use Link for mobile menu */}
        </nav>
      )}
    </div>
  );
};

export default Header;
