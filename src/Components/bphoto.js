import React from 'react';
import { useTheme } from './ThemeContext'; // Import the useTheme hook

const Photography = () => {
  const { darkMode } = useTheme(); // Get darkMode from context

  return (
    <section
      className={`p-8 ${darkMode ? 'bg-[#121212] text-[#E0E0E0]' : 'bg-white text-black'} font-[Montserrat]`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-center">
          PHOTOGRAPHY
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-center">
          Explore a mix of moments that catch my eye – from candid shots to peaceful landscapes. It’s all about seeing things from a fresh perspective. Dive in and enjoy!
        </p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(14)].map((_, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={`/bio/Image(${index + 1}).png`} // Dynamically get image from bio folder
                alt={`Photography ${index + 1}`}
                className="w-[590px] h-[443.63px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photography;
