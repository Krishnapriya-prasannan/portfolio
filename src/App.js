import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary routing components
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Work from './Components/Work';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import CopyrightSection from './Components/Copyright';
import BeyondBio from './Components/BeyondTheBio'; // Import BeyondBio page
import { ThemeProvider } from './Components/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Main Route for Homepage */}
          <Route path="/" element={
            <div>
              <Header />
              <Hero />
              <section id="about">
                <About />
              </section>
              <section id="work">
                <Work />
              </section>
              <section id="testimonials">
                <Testimonials />
              </section>
              <Footer />
              <CopyrightSection />
            </div>
          } />

          {/* Route for BeyondBio page */}
          <Route path="/bio" element={<BeyondBio />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
