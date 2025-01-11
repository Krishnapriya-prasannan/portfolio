import React, { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on window resize to desktop size
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
    <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center font-[Montserrat]">
      {/* Left Section: Logo */}
      <div className="text-xl font-bold">RIDDHI LIMBACHIYA</div>

      {/* Middle Section: Desktop Navigation */}
      <nav className={`hidden md:flex space-x-6 text-center`}>
        <a href="#about" className="hover:text-gray-300">
          About
        </a>
        <a href="#work" className="hover:text-gray-300">
          Work
        </a>
        <a href="#testimonials" className="hover:text-gray-300">
          Testimonials
        </a>
        <a href="#contact" className="hover:text-gray-300">
          Contact
        </a>
      </nav>

      {/* Right Section: Beyond the Bio */}
      <div className="hidden md:block text-sm hover:text-gray-300">
        <a href="#bio">Beyond the Bio</a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-gray-900 text-center space-y-4 py-4 shadow-lg z-10">
          <a
            href="#about"
            className="block hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#work"
            className="block hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Work
          </a>
          <a
            href="#testimonials"
            className="block hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="#bio"
            className="block hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Beyond the Bio
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
