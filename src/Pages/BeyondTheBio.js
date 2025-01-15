// src/Components/BeyondBio.js
import React from 'react';
import Header from '../Components/Header'; 
import CopyrightSection from '../Components/Copyright'; 
import HeroSection from '../Components/Bhero';
import About from '../Components/babout';
import Photography from '../Components/bphoto';
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
