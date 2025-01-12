import React from 'react';
import { useTheme } from './ThemeContext'; // Import the useTheme hook

const About = () => {
  const { darkMode } = useTheme(); // Get darkMode from context

  return (
    <section
      className={`p-8 ${
        darkMode ? 'bg-[#121212] text-[#E0E0E0]' : 'bg-white text-black'
      } font-[Montserrat]`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <h2 className="text-5xl font-semibold mb-6 text-left text-justify max-w-3xl mx-auto ">Heyyo!</h2>
        <p className="text-2xl mb-8 text-left text-justify max-w-3xl mx-auto ">
          It’s Riddhi – bringing the good vibes! ✌️
        </p>

        {/* Intro Section */}
        <p className="mb-8 text-left text-justify max-w-3xl mx-auto text-xl">
          A short intro for me would be: I value quality in everything I do, from relationships to experiences 🌟. 
          <br />
          I like to think of myself as a creative human with a keen eye for detail - which, lucky for me, makes me a pretty awesome frontend developer too!
        </p>

        <p className="mb-8 text-left text-justify max-w-3xl mx-auto text-xl">
          Although I studied Electronics, life decided I’d be more at home in the IT world, and honestly, I couldn’t be happier building cool things every day! 💻
        </p>

        {/* Interests Section */}
        <div className="text-left text-justify mb-12 max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold mb-4">A little peek into my world:</h3>
            <p className="mb-2 text-xl">🎨 I like to draw and paint whenever I get the chance.</p>
            <p className="mb-2 text-xl">💎 Antique items and diamonds have my heart. Guess I’m into rare things – just like me😜!</p>
            <p className="mb-2 text-xl">🌌 I find peace and a sense of something bigger and dreamier when I gaze at the night sky.</p>
            <p className="mb-2 text-xl">😂 I’m all about funny videos – I can never stop laughing, even on the second watch.</p>
            <p className="mb-2 text-xl ">📸 I take great joy in photography – whether it's capturing the beauty of the world around me, candid moments with loved ones, or simply a portrait of myself. 💖 Every photo holds a memory, preserving the essence of life’s most meaningful moments.</p>
        </div>

        {/* Life Belief Section */}
        <div className="text-left text-justify max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold mb-4">🧠 Life belief</h3>
          <p className="italic text-xl">
            “Genius is knowing when to stop.” - Don't waste your energy on things or people that stir confusion and uncertainty. Channel it into what brings clarity, joy, and growth – your energy is too precious to be spent elsewhere. 🍁
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
