// src/App.js
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Work from './Components/Work';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import CopyrightSection from './Components/Copyright';
import { ThemeProvider } from './Components/ThemeContext';

function App() {
  return (
    <ThemeProvider> {/* Wrap the entire app with ThemeProvider */}
      <div>
        <Header />
        <Hero />
        <About />
        <Work />
        <Testimonials />
        <Footer />
        <CopyrightSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
