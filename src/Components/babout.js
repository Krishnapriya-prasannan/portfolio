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
        {/* Aligning all content under the same wrapper */}
        <div className="px-4 sm:px-6 md:px-8">
          {/* Title Section */}
          <p
          
          className="font-[Montserrat] text-left text-justify mb-8 max-w-4xl mx-auto text-base md:text-xl"
          style={{ fontSize: '48px', fontWeight: '500', lineHeight: '48px', letterSpacing: '-0.02em' }}
  >
            Heyyo!
          
          </p>
         

          {/* Intro Section */}
          <p
            className="font-[Montserrat] text-left text-justify mb-8 max-w-4xl mx-auto text-base md:text-xl"
            style={{ fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}
          >
            It’s Riddhi – bringing the good vibes! ✌️
          </p>

          <p
            className="mb-8 text-left text-justify max-w-4xl mx-auto text-base md:text-xl"
            style={{ fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}
          >
            A short intro for me would be: I value quality in everything I do, from relationships to experiences 🌟. 
            <br />
            I like to think of myself as a creative human with a keen eye for detail - which, lucky for me, makes me a pretty awesome frontend developer too!
          </p>

          <p
            className="mb-8 text-left text-justify max-w-4xl mx-auto text-base md:text-xl"
            style={{ fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}
          >
            Although I studied Electronics, life decided I’d be more at home in the IT world, and honestly, I couldn’t be happier building cool things every day! 💻
          </p>

          {/* Interests Section */}
          <div className="text-left text-justify mb-12 max-w-4xl mx-auto">
            <h3
              className="font-[Montserrat] text-3xl font-semibold mb-4"
              style={{ fontSize: '16px', fontWeight: '600', lineHeight: '24px' }}
            >
              A little peek into my world:
            </h3>
            <p
              className="mb-2 text-base md:text-xl"
              style={{ fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}
            >
              🎨 I like to draw and paint whenever I get the chance.
            </p>
            <p
              className="mb-2 text-base md:text-xl"
              style={{ fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}
            >
              💎 Antique items and diamonds have my heart. Guess I’m into rare things – just like me😜!
            </p>
            <p
              className="mb-2 text-base md:text-xl"
              style={{ fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}
            >
              🌌 I find peace and a sense of something bigger and dreamier when I gaze at the night sky.
            </p>
            <p
              className="mb-2 text-base md:text-xl"
              style={{ fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}
            >
              😂 I’m all about funny videos – I can never stop laughing, even on the second watch.
            </p>
            <p
              className="mb-2 text-base md:text-xl"
              style={{ fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}
            >
              📸 I take great joy in photography – whether it's capturing the beauty of the world around me, candid moments with loved ones, or simply a portrait of myself. 💖 Every photo holds a memory, preserving the essence of life’s most meaningful moments.
            </p>
          </div>

          {/* Life Belief Section */}
          <div className="text-left text-justify max-w-4xl mx-auto">
            <h3
              className="font-[Montserrat] text-xl md:text-2xl font-semibold mb-4"
              style={{ fontSize: '16px', fontWeight: '700', lineHeight: '24px' }}
            >
              🧠 Life belief
            </h3>
            <p
              className="italic text-base md:text-xl"
              style={{ fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}
            >
              “Genius is knowing when to stop.” - Don't waste your energy on things or people that stir confusion and uncertainty. Channel it into what brings clarity, joy, and growth – your energy is too precious to be spent elsewhere. 🍁
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
