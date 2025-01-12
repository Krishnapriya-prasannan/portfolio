// src/App.js
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

function App() {
  return (
    <ThemeProvider>
      <Router> {/* Wrap everything with Router */}
        <Routes> {/* Define routes */}
          <Route path="/" element={<div><Header /><Hero /><About /><Work /><Testimonials /><Footer /><CopyrightSection /></div>} />
          <Route path="/bio" element={<BeyondBio />} /> {/* Define route for BeyondBio page */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
