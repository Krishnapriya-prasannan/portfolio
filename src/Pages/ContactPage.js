// src/Components/BeyondBio.js
import React from 'react';
import Contact from '../Components/Contact';
import Header from '../Components/Header';
import CopyrightSection from '../Components/Copyright';
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const ContactPage = () => {
    const navigate = useNavigate(); // Hook for navigation

  return (
    <div > {/* Set the container to flex with full viewport height */}
      <Header />
      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)} // Navigate to the previous page
        className="absolute  left-4 flex items-center text-teal-500 hover:text-teal-600 transition duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Go Back
      </button>

    <Contact/>
      <div className="mt-auto"> {/* Push the copyright section to the bottom */}
        <CopyrightSection />
      </div>
    </div>
  );
};

export default ContactPage;
