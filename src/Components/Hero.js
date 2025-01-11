import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-white text-black py-16 px-4 md:px-16 font-[Montserrat]">
      {/* Image Section */}
      <div
        className="overflow-hidden mb-8 md:mb-0 md:order-last md:ml-0 flex-shrink-0 border-4 border-[#E0E0E0] md:border-0 rounded-[40px_40px_40px_4px]"
        style={{
          width: "343px", // Default size for mobile
          height: "429px", // Default size for mobile
        }}
        // Border only for mobile view
      >
        <img
          src="/images/profile.png" // Ensure the correct path for your profile image
          alt="Riddhi Limbachiya"
          className="object-cover w-full h-full 
          md:w-[400px] md:h-[466.15px] 
          md:rounded-[168px_168px_168px_4px] 
          md:border-[4px] md:border-gray-300" 
        />
      </div>

      {/* Text Content */}
      <div className="md:w-[calc(100%-450px)] text-left md:pr-8 space-y-4">
        <p className="text-lg md:text-3xl text-gray-700 ">Heyyo👋, I’m</p>
        <h2 className="text-5xl md:text-8xl font-medium leading-[50px] tracking-[-0.02em] text-black">
          RIDDHI LIMBACHIYA
        </h2>
        <p className="text-base md:text-lg md:text-2xl text-gray-600 mt-4">
          A curiosity-driven frontend developer with design chops 🎨.
        </p>
        <p className="text-base md:text-lg md:text-2xl text-gray-600">
          I believe it's OK to be you, You is dope.!
        </p>
      </div>
    </section>
  );
};

export default Hero;
