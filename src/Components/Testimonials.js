import React from "react";
import { FaUserCircle } from "react-icons/fa";

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
  return (
    <section id="testimonials" className="py-16 px-6 bg-gray-900 text-white">
      <h3 className="text-3xl font-semibold mb-12 text-center">CLIENTS LOVE</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
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
              <p className="text-gray-300 italic leading-relaxed mb-8">
                "{testimonial.feedback}"
              </p>
              {/* Client Details */}
              <div className="flex items-center ml-10 justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
                {/* Profile Picture or Icon */}
                <div className="absolute bottom-8 left-4">
                  {testimonial.profilePic ? (
                    <img
                      src={testimonial.profilePic}
                      alt={`${testimonial.name}'s profile`}
                      className="w-12 h-12 rounded-full object-cover border border-gray-600"
                    />
                  ) : (
                    <FaUserCircle className="text-gray-500 w-12 h-12" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
