import React from "react";

const Work = () => {
  const projects = [
    {
      title: "Lantern",
      description:
        "Lantern helps you close deals faster and smarter. Consolidate customer, prospect, and intent data, streamline sales tools, and use AI-powered insights.",
      techStack: ["Typescript", "React", "Next.js", "Tailwindcss", "Sass"],
      image: "/images/lantern.png", // Replace with the correct image path
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
      image: "/images/fiskil.png", // Replace with the correct image path
    },
    {
      title: "Mokoboko",
      description:
        "Mokoboko makes Pilates and fitness easy by helping you seamlessly book classes, reserve spots, and get reminders before each session.",
      techStack: ["Typescript", "React", "Next.js", "Tailwindcss"],
      image: "/images/mokoboko.png", // Replace with the correct image path
    },
    {
      title: "Scraye",
      description:
        "Scraye is a housing platform that makes life easier across the UK, seamlessly connecting buyers, renters, owners, and agents. It simplifies selling, renting, and managing properties, all in one place.",
      techStack: ["Typescript", "React", "Redux", "Tailwindcss", "MUI", "Storybook", "Cypress"],
      image: "/images/scraye.png", // Replace with the correct image path
    },
  ];

  return (
    <section className="bg-white text-gray-900 py-16 px-4 md:px-16 font-[Montserrat]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold">WORK</h2>
        <p className="text-gray-600 text-2xl mt-4 ">
          Check out some of my recent work – cool products I’ve been part of, built using the latest tech and libraries to create something awesome!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg p-6 shadow-lg border border-gray-300"
          >
            {/* Image with Light Mode Background */}
            <div className="relative w-full h-94 overflow-hidden rounded-lg">
              <div className="absolute inset-0 "></div>
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Project Content */}
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
              <p className="text-gray-600 text-lg mt-2">{project.description}</p>
              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center mt-4 space-x-2 space-y-2">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-200 rounded-full text-lg text-gray-800"
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
  );
};

export default Work;
