import React from "react";
import { FaJava, FaReact, FaNodeJs, FaSass, FaFigma, FaJsSquare } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiStorybook, SiCypress, SiJest } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-gray-900 text-white">
      {/* Heading */}
      <h3 className="text-3xl font-semibold mb-10 text-center">A BIT ‘BOUT MY JOURNEY</h3>

      {/* First Row */}
      <div className="mb-12">
        <p className="text-gray-400 text-justify leading-relaxed max-w-3xl mx-auto">
          I’m a freelance frontend developer based in Ahmedabad, India, with almost 6 years of experience. My journey started at an MNC, then I moved to a startup where I had the chance to build some cool projects that taught me a ton. I began with JavaScript, built apps using Angular, and then switched to React, where I had the opportunity to work on projects from scratch that really shaped my skills in JS and UI development.
          I don't dive into the back-end too often, but in case you're wondering, I know Node.js, Express & MongoDB. Just a peek behind the curtain!
        </p>
      </div>

      {/* Second Row */}
      <div className="mb-12">
        <p className="text-gray-400 text-justify leading-relaxed max-w-3xl mx-auto">I’ve always been passionate about working on projects that push me to grow, learn new things, and collaborate with great people. This led me to take the leap into freelancing, where I’ve had the chance to work with awesome clients. Right now, I’m working with a cool startup, building sleek UIs with Next.js, Typescript, Tailwind and more.</p>
        <p className="text-gray-400 text-justify leading-relaxed max-w-3xl mx-auto mb-6">Here’s some tech and frameworks I love and work with:</p>
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-gray-400 text-left">
          <div className="flex items-center space-x-2">
            <FaJsSquare className="text-3xl" />
            <span>JavaScript</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiTypescript className="text-3xl" />
            <span>TypeScript</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaReact className="text-3xl" />
            <span>React</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiNextdotjs className="text-3xl" />
            <span>Next.js</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaSass className="text-3xl" />
            <span>Sass</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiTailwindcss className="text-3xl" />
            <span>TailwindCSS</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaNodeJs className="text-3xl" />
            <span>Node.js</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaJava className="text-3xl" />
            <span>Express</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaFigma className="text-3xl" />
            <span>Figma</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiStorybook className="text-3xl" />
            <span>Storybook</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiCypress className="text-3xl" />
            <span>Cypress</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiJest className="text-3xl" />
            <span>Jest</span>
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div className="mb-12">
        <p className="text-left text-gray-400 leading-relaxed max-w-3xl mx-auto">
          Fun fact: I’ve been learning Figma just for fun, mainly to create templates and get a feel for how the tool works. It’s been a great way to boost my creativity and help me design UIs more intuitively. One day, I thought, what better way to apply my Figma knowledge than by designing my own portfolio? And here it is – my very first Figma project! 🧨
        </p>
      </div>

      {/* Fourth Row */}
      <div className="mb-12">
        <p className="text-left text-gray-400 leading-relaxed max-w-3xl mx-auto">
          Learning advanced TypeScript is something I’m working on, and I try to dedicate time to it whenever I can.
        </p>
      </div>
    </section>
  );
};

export default About;
