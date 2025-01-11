import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white py-16 px-16 font-[Montserrat]">
      {/* Right Image on Mobile */}
      <div 
        className="rounded-full overflow-hidden w-[400px] h-[466.15px] mb-6 md:mb-0 md:order-last md:ml-0 md:w-[400px] md:h-[466.15px] flex-shrink-0"
        style={{ 
          borderRadius: '168px 168px 168px 4px', 
          border: '4px solid transparent', 
          opacity: 1 
        }}
      >
        <img
          src="/images/profile.png" // Ensure the correct path for your profile image
          alt="Riddhi Limbachiya"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Left Content */}
      <div className="md:w-[calc(100%-400px)] text-center md:text-left md:pr-8 space-y-4">
        <p className="text-lg md:text-xl">Heyyo👋, I’m</p>
        <h2 className="text-3xl md:text-4xl font-medium text-center md:text-left leading-[48px] tracking-[-0.02em] md:text-5xl">
          RIDDHI LIMBACHIYA
        </h2>
        {/* Explicit margin for gap between the name and description */}
        <p className="text-base md:text-lg text-gray-400 mt-6">
          A curiosity-driven frontend developer with design chops 🎨.
        </p>
        <p className="text-base md:text-lg text-gray-400">
          I believe it's OK to be you, You is dope.!
        </p>
      </div>
    </section>
  );
};

export default Hero;
