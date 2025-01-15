import React from "react";
import { useTheme } from "./ThemeContext";

const ExperiencePage = () => {
  const { darkMode } = useTheme();

  const experiences = [
    {
      date: "November 2023",
      role: "Frontend Engineer",
      company: "Go2work",
      location: "Houston, Texas, United States (Remote)",
      description: [
        "Led library transition, built dashboard from scratch with wrapper components for hiring platform using Shadcn UI.",
        "Optimized app performance, improved UI, and implemented chaos engineering for enhanced user experience.",
        "Integrated WebSocket chat, push notifications, Strapi and managed authentication flow using Firebase in frontend.",
      ],
      tags: ["TypeScript", "Firebase", "MongoDB", "Node.js", "WebSockets", "Shadcn UI", "Material UI", "Tailwind"],
    },
    {
      date: "April 2023 - September 2023",
      role: "Developer Relations Engineer",
      company: "FifthTry",
      location: "Bangalore (Remote)",
      description: [
        "Spearheaded strategic enhancements, built numerous sample apps with fastn, and handled other engineering tasks.",
        "Led documentation site development, conducted developer training, enhanced the fastn framework written in Rust.",
        "Curated nationwide events, managed marketing efforts, fostered community growth, and handled client relations.",
      ],
      tags: ["Rust", "JavaScript"],
    },
    {
      date: "January 2023 - March 2023",
      role: "Product Engineer",
      company: "Magic",
      location: "Delhi (Remote)",
      description: [],
      tags: [],
    },
  ];

  return (
    <div
      className={`min-h-screen p-8 ${darkMode ? "bg-[#121212] text-[#E0E0E0]" : "bg-gray-50 text-black"} font-montserrat`}
    >
     
      <h1 className="text-4xl font-bold mb-8 flex items-center">
        Experience{" "}
        <span className="ml-2" role="img" aria-label="technologist">
          👨‍💻
        </span>
      </h1>
      <div className="relative">
        {/* Timeline Line */}
        <div
          className={`absolute top-0 w-1 ${
            darkMode ? "bg-gray-600" : "bg-teal-500"
          } h-full left-[14px] sm:left-[16px]`}
        ></div>

        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start mb-10 group">
            {/* Timeline Dot */}
            <div
              className={`relative z-10 ${
                darkMode ? "bg-gray-600" : "bg-teal-500"
              } w-8 h-8 rounded-full flex items-center justify-center`}
            >
              <div
                className={`${
                  darkMode ? "bg-gray-900" : "bg-white"
                } w-4 h-4 rounded-full`}
              ></div>
            </div>

            {/* Content */}
            <div
              className={`ml-12 shadow-md rounded-md p-6 flex flex-col w-full max-w-4xl transition duration-300 transform group-hover:scale-105 ${
                darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-700"
              }`}
            >
              <p className="text-teal-500 font-medium mb-2">{exp.date}</p>
              <h2 className="text-2xl font-bold mb-2">
                {exp.role}{" "}
                <span className="text-green-500" role="img" aria-label="checkmark">
                  ✅
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {exp.company} - {exp.location}
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      darkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-teal-100 text-teal-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
