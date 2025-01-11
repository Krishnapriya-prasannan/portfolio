import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useTheme } from "./ThemeContext"; // Import the useTheme hook

const testimonials = [
  {
    name: "Eugen Esanu",
    title: "Founder, Shosho Design",
    feedback:
      "Riddhi is a very good front-end developer. The amount of hard work she put into our Design System (building, maintaining, and polishing) is very high. I would recommend her with full confidence on any project that requires a good React developer. We've hired and fired many, but she is one of the very few that remained with us. We will hire her 100% for our next project as she is an amazing addition to any team. Don't skip on her as your next potential hire!",
    profilePic: "/images/eugen.jpg",
    icon: "images/user-love.png",
  },
  {
    name: "Noren Machelart",
    title: "Product Owner, Scraye",
    feedback:
      "Riddhi has been an incredible asset to our team and a joy to work with. She leads the project with responsibility and initiative, consistently enhancing features and offering thoughtful suggestions. Her ability to explain technical details to non-technical clients and deliver excellent demos on time is remarkable. Always supportive and collaborative, she truly elevates the team's performance. I’m grateful to have her on board!",
    profilePic: "",
    icon: "images/user-love.png",
  },
];

const Testimonials = () => {
  const { darkMode } = useTheme(); // Get darkMode from context

  return (
    <div className={darkMode ? "dark" : ""}> {/* Apply dark mode class */}
      <section
        className={`py-16 px-6 ${
          darkMode ? "bg-[#121212] text-[#E0E0E0]" : "bg-white text-gray-900"
        }`}
      >
        <h3 className="text-3xl font-semibold mb-12 text-center">CLIENTS LOVE</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg shadow-md transition-shadow relative border ${
                darkMode
                  ? "bg-[#1E1E1E] text-[#E0E0E0] border-gray-600 hover:shadow-gray-500"
                  : "bg-white text-gray-900 border-gray-300 hover:shadow-lg"
              }`}
            >
              {/* User-Love Icon */}
              <img
                src={testimonial.icon}
                alt="User Love Icon"
                className="absolute top-4 left-4 w-8 h-8"
              />
              {/* Content Wrapper */}
              <div className="mt-12">
                {/* Testimonial Feedback */}
                <p className="text-2xl italic leading-relaxed mb-8">
                  "{testimonial.feedback}"
                </p>
                {/* Client Details */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-2xl font-bold">{testimonial.name}</h4>
                    <p className="text-xl">{testimonial.title}</p>
                  </div>
                  {/* Profile Picture or Icon */}
                  <div>
                    {testimonial.profilePic ? (
                      <img
                        src={testimonial.profilePic}
                        alt={`${testimonial.name}'s profile`}
                        className="w-12 h-12 rounded-full object-cover border"
                      />
                    ) : (
                      <FaUserCircle className="text-3xl" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
