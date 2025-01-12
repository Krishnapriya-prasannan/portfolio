// src/Components/BeyondBio.js
import React from 'react';
import Header from './Header'; 
import CopyrightSection from './Copyright'; 
import HeroSection from './Bhead';
import About from './babout';
import Photography from './bphoto';
const BeyondBio = () => {
  return (
    <div>
      <Header />
      <HeroSection/>
      <About/>
      <Photography/>
      <CopyrightSection/>
    </div>
  );
};

export default BeyondBio;
