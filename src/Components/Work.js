import React from "react";
import { useTheme } from "./ThemeContext"; // Import the useTheme hook

const Work = () => {
  const { darkMode } = useTheme(); // Get darkMode from context

  const projects = [
    {
      title: "Lantern",
      description:
        "Lantern helps you close deals faster and smarter. Consolidate customer, prospect, and intent data, streamline sales tools, and use AI-powered insights.",
      techStack: ["Typescript", "React", "Next.js", "Tailwindcss", "Sass"],
      image: "/images/lantern.png",
    },
    {
      title: "Fiskil",
      description:
        "Fiskil provides advanced data sharing solutions for finance and energy institutions, facilitating seamless sharing and access to real-time customer data.",
      techStack: [
        "Typescript",
        "React",
        "Next.js",
        "Tailwindcss",
        "Storybook",
        "Cypress",
        "Jest",
        "Firebase",
      ],
      image: "/images/fiskil.png",
    },
    {
      title: "Mokoboko",
      description:
        "Mokoboko makes Pilates and fitness easy by helping you seamlessly book classes, reserve spots, and get reminders before each session.",
      techStack: ["Typescript", "React", "Next.js", "Tailwindcss"],
      image: "/images/mokoboko.png",
    },
    {
      title: "Scraye",
      description:
        "Scraye is a housing platform that makes life easier across the UK, seamlessly connecting buyers, renters, owners, and agents. It simplifies selling, renting, and managing properties, all in one place.",
      techStack: ["Typescript", "React", "Redux", "Tailwindcss", "MUI", "Storybook", "Cypress"],
      image: "/images/scraye.png",
    },
  ];

  return (
    <div className={darkMode ? "dark" : ""}> {/* Apply dark mode class */}
      <section
        className={`py-16 px-4 md:px-16 font-[Montserrat] ${
          darkMode ? "bg-[#121212] text-[#E0E0E0]" : "bg-white text-gray-900"
        }`}
      >
        <div className="text-left mb-12 ml-6 flex flex-col">
          <h2
            className={`text-2xl font-semibold tracking-[0.06em] ${
              darkMode ? "text-white" : "text-black"
            }`}
            style={{
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "32px",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              textAlign: "left",
              textDecoration: "none",
            }}
          >
            WORK
          </h2>
          <p
            className={`${
              darkMode ? "text-gray-400" : "text-gray-600"
            } text-xl mt-4`}
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              textAlign: "left",
              textDecoration: "none",
              textJustify: "inter-word", // Justify text
            }}
          >
            Check out some of my recent work – cool products I’ve been part of,
            built using the latest tech and libraries to create something
            awesome!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col items-start p-6 ${
                darkMode
                  ? "bg-transparent text-gray-300" // No card-style background in dark mode
                  : "bg-white"
              }`}
            >
              {/* Project Image */}
              <div className="relative w-full h-94 overflow-hidden">
                <div className="absolute inset-0"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Project Content */}
              <div className="mt-4 text-left">
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "28px",
                    letterSpacing: "0.03em",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                    textAlign: "left",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-lg mt-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    textAlign: "left",
                    textDecorationSkipInk: "none",
                    textJustify: "inter-word", // Justify text
                  }}
                >
                  {project.description}
                </p>
                {/* Tech Stack */}
                <div className="flex flex-wrap justify-start mt-4 space-x-2 space-y-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-lg ${
                        darkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Work;
