import React from "react";
import { useTheme } from "./ThemeContext"; // Import the useTheme hook

const Contact = () => {
  const { darkMode } = useTheme(); // Access darkMode

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-32 font-montserrat ${
        darkMode ? "bg-[#121212] text-[#E0E0E0]" : "bg-gray-50 text-black"
      }`}
    >
      {/* Header */}
      <header className="w-full flex items-center justify-start py-6">
        <h1 className="text-4xl font-bold">
          Contact{" "}
          <span className="text-teal-500">
            Freelancer
            <span className="inline-block ml-2">
              <img
                src="/images/handwave.png" // Use the handwave.png from public/images folder
                alt="Waving Emoji"
                className="inline w-6 h-6"
              />
            </span>
          </span>
        </h1>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-8 md:space-y-0 md:space-x-16">
        {/* Illustration */}
        <div className="w-2/3 md:w-1/2 max-w-sm">
          <img
            src="/images/contact.svg" // Use the contact.svg from public/images folder
            alt="Illustration"
            className="w-full"
          />
        </div>

        {/* Contact Form */}
        <div
          className={`shadow-lg rounded-lg p-6 md:p-8 w-full max-w-md ${
            darkMode ? "bg-[#1E1E1E]" : "bg-white"
          }`}
        >
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${
                  darkMode
                    ? "bg-[#2D2D2D] border-[#444] text-[#E0E0E0]"
                    : "bg-white border-gray-300"
                } focus:ring-teal-500 focus:border-teal-500`}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@gmail.com"
                className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${
                  darkMode
                    ? "bg-[#2D2D2D] border-[#444] text-[#E0E0E0]"
                    : "bg-white border-gray-300"
                } focus:ring-teal-500 focus:border-teal-500`}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Hey there! Let's connect"
                className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${
                  darkMode
                    ? "bg-[#2D2D2D] border-[#444] text-[#E0E0E0]"
                    : "bg-white border-gray-300"
                } focus:ring-teal-500 focus:border-teal-500`}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white font-medium py-2 px-4 rounded-md shadow hover:bg-teal-600 transition"
            >
              Send email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
