import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import Navigation from './components/Navigation';
import HeroSection from './components/sections/HeroSection';
import ProjectIntro from './components/sections/ProjectIntro';
import CallToActionTiles from './components/sections/CallToActionTiles';
import Research from './components/sections/Research';
import News from './components/sections/News';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';
import Resources from './components/sections/Resources';
import FAQ from './components/sections/FAQ';
import Footer from './components/Footer';
import DemoCopilot from './components/sections/DemoCopilot';
import ScrollToTop from './components/ScrollToTop';

// Home page component
const HomePage = ({ onTryDemo }) => (
  <>
    <HeroSection onTryItNow={onTryDemo} />
    <ProjectIntro />
    <CallToActionTiles onTryDemo={onTryDemo} />
  </>
);

// Main App Content Component
const AppContent = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleTryDemo = () => {
    // Store current scroll position before opening demo
    setScrollPosition(window.scrollY);
    setShowDemo(true);
  };

  const handleCloseDemo = () => {
    setShowDemo(false);
    // Restore scroll position after a short delay to ensure content has rendered
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 100);
  };

  if (showDemo) {
    return (
      <div className="App min-h-screen">
        <Navigation 
          showDemo={showDemo}
          onCloseDemo={handleCloseDemo}
        />
        <main className="relative overflow-hidden">
          <DemoCopilot onClose={handleCloseDemo} />
        </main>
      </div>
    );
  }

  return (
    <div className="App min-h-screen">
      <ScrollToTop />
      <Navigation />
      
      <main className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Routes>
              <Route path="/" element={<HomePage onTryDemo={handleTryDemo} />} />
              <Route path="/research" element={<Research />} />
              <Route path="/news" element={<News />} />
              <Route path="/team" element={<Team />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
