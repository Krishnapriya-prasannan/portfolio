import React from "react";
import { useTheme } from "./ThemeContext"; // Import the useTheme hook

const Hero = () => {
  const { darkMode } = useTheme(); // Access darkMode from the context

  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-16 font-[Montserrat] ${
        darkMode ? "bg-[#121212] text-[#E0E0E0]" : "bg-white text-black"
      }`} // Dark mode bg and text colors
    >
      {/* Image Section */}
      <div
        className={`overflow-hidden mt-4 mb-4 md:mb-0 md:order-last md:ml-0 flex-shrink-0 border-4 ${
          darkMode ? "border-[#333333]" : "border-[#E0E0E0]"
        } md:border-0 rounded-[40px_40px_40px_4px]`} // Border color for dark mode
        style={{
          width: "400px", // Increased size for larger image
          height: "500px", // Increased size for larger image
        }}
      >
        <img
          src="/images/profile.png" // Ensure the correct path for your profile image
          alt="Riddhi Limbachiya"
          className={`object-cover w-full h-full md:w-[450px] md:h-[533px] md:rounded-[168px_168px_168px_4px] md:border-[4px] ${
            darkMode ? "md:border-[#333333]" : "md:border-[#E0E0E0]"
          }`} // Dark mode image border
        />
      </div>

      {/* Text Content */}
      <div className="md:w-[calc(100%-450px)] text-left md:pr-8 space-y-4 mt-4 md:mt-0">
        <p
          className={`text-[16px] font-[400] leading-[24px] text-left ${
            darkMode ? "text-[#E0E0E0]" : "text-gray-700"
          }`}
        >
          Heyyo👋, I’m
        </p>
        <h2
          className={`text-[48px] font-[500] leading-[48px] tracking-[-0.02em] text-left ${darkMode ? "text-[#E0E0E0]" : "text-black"}`}
          style={{
            position: "relative", // To position the pseudo-element
            zIndex: "1", // Ensure text stays above the pseudo-element
            display: "inline-block", // Make sure the span only takes the width of the text
            textShadow: darkMode ? "none" : "2px 2px 4px rgba(0, 0, 0, 0.1)", // Remove text shadow in dark mode
          }}
        >
          RIDDHI LIMBACHIYA
          {/* Gradient effect under the text, only shown when not in dark mode */}
          {!darkMode && (
            <span
              className="absolute bottom-0 left-0 h-4"
              style={{
                background: "linear-gradient(100deg, #FEFCE8 0%, #FFE4E6 100%)",
                content: "''",
                zIndex: "-1", // Place the gradient below the text
                width: "100%", // Ensure it spans the entire width of the text
                opacity: 0.8, // Optional: Adds a soft transition for the gradient
              }}
            ></span>
          )}
        </h2>

        <p
          className={`text-[16px] font-[400] leading-[24px] text-left mt-4 ${
            darkMode ? "text-[#E0E0E0]" : "text-gray-600"
          }`}
        >
          A curiosity-driven frontend developer with design chops 🎨.
        </p>
        <p
          className={`text-[16px] font-[400] leading-[24px] text-left ${
            darkMode ? "text-[#E0E0E0]" : "text-gray-600"
          }`}
        >
          I believe it's OK to be you, You is dope.!
        </p>
      </div>
    </section>
  );
};

export default Hero;
