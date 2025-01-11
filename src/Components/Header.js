import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext"; // Import the useTheme hook

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme(); // Get darkMode and toggleDarkMode from context
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // Close the mobile menu on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup the listener
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}> {/* Apply dark class to parent */}
      <header
        className={`py-4 px-6 flex justify-between items-center font-[Montserrat] ${
          darkMode ? "bg-[#121212] text-[#E0E0E0]" : "bg-white text-black"
        }`} // Apply the same color scheme as Hero
      >
        <div className="text-3xl font-bold">RIDDHI LIMBACHIYA</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-center">
          <a href="#about" className="hover:text-gray-500">About</a>
          <a href="#work" className="hover:text-gray-500">Work</a>
          <a href="#testimonials" className="hover:text-gray-500">Testimonials</a>
          <a href="#contact" className="hover:text-gray-500">Contact</a>
        </nav>

        {/* Right Section for Beyond the Bio */}
        <div className="hidden md:block text-2xl hover:text-gray-500">
          <a href="#bio">Beyond the Bio</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Dark Mode Toggle Icon */}
        <button
          className="text-2xl ml-4 focus:outline-none"
          onClick={toggleDarkMode} // Toggle dark mode
        >
          {darkMode ? "🌞" : "🌙"} {/* Change icon based on dark mode */}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          className={`absolute top-24 left-0 w-full text-center space-y-4 py-4 shadow-lg z-10 border-t border-gray-200 ${
            darkMode ? "bg-[#121212] text-[#E0E0E0]" : "bg-white text-black"
          } md:hidden`} // Same color scheme for mobile menu
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
          <a href="#bio" className="block hover:text-gray-500" onClick={() => setMenuOpen(false)}>
            Beyond the Bio
          </a>
        </nav>
      )}
    </div>
  );
};

export default Header;
