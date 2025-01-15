// src/Components/BeyondBio.js
import React from 'react';
import Experience from '../Components/Experience';
import Header from '../Components/Header';
import CopyrightSection from '../Components/Copyright';

const ExperienceSection = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Set the container to flex with full viewport height */}
      <Header />
      <Experience />
      <div className="mt-auto"> {/* Push the copyright section to the bottom */}
        <CopyrightSection />
      </div>
    </div>
  );
};

export default ExperienceSection;
