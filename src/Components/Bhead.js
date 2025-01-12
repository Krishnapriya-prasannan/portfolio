import React from 'react';
import { useTheme } from './ThemeContext'; // Import the useTheme hook

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme(); // Access darkMode and toggleDarkMode

  return (
    <header className={`py-4 px-6 flex justify-center items-center ${darkMode ? 'bg-[#121212] text-[#E0E0E0]' : 'bg-white text-black'}`}>
      {/* Profile Image */}
      <img
        src="/bio/profile.png" // Path to the image inside the public/bio folder
        alt="Profile"
        className="w-[375px] h-[400px] px-[16px] rounded-[40px_0px_0px_0px] object-cover 
                  sm:w-[1280px] sm:h-[600px] sm:px-[157px] sm:rounded-none" // Mobile and desktop styles
      />
    </header>
  );
};

export default Header;
