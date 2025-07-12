import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './ui/Logo';

const Navigation = ({ showDemo, onCloseDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'research', label: 'Research', path: '/research' },
    { id: 'news', label: 'News', path: '/news' },
    { id: 'team', label: 'Team', path: '/team' },
    { id: 'resources', label: 'Resources', path: '/resources' },
    { id: 'faq', label: 'FAQ', path: '/faq' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  const getCurrentSection = () => {
    const currentPath = location.pathname;
    const currentItem = navigationItems.find(item => item.path === currentPath);
    return currentItem ? currentItem.id : 'home';
  };

  const handleNavClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const currentSection = getCurrentSection();

  if (showDemo) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-secondary/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Logo />
              <span className="text-xl font-bold text-white">AI Urban Scientist</span>
            </div>
            <button
              onClick={onCloseDemo}
              className="flex items-center space-x-2 px-4 py-2 bg-bg-card hover:bg-bg-tertiary rounded-lg transition-colors duration-200 text-text-primary border border-gray-700"
            >
              <X className="w-4 h-4" />
              <span>Close Demo</span>
            </button>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-bg-secondary/95 backdrop-blur-sm shadow-card border-b border-gray-800' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleNavClick('/')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Logo />
              <span className="text-xl font-bold text-white hidden sm:block">
                AI Urban Scientist
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.path)}
                  className={`relative px-4 py-2 font-medium rounded-lg transition-all duration-200 ${
                    currentSection === item.id
                      ? 'text-accent-blue bg-bg-card border border-accent-blue/30'
                      : 'text-text-secondary hover:text-white hover:bg-bg-card'
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                  {currentSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-1/2 h-0.5 bg-accent-blue"
                      layoutId="activeTab"
                      style={{ x: '-50%' }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg bg-bg-card hover:bg-bg-tertiary transition-colors duration-200 text-text-primary border border-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-40 md:hidden ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-black/70" onClick={() => setIsMobileMenuOpen(false)} />
        <motion.div
          className="absolute right-0 top-0 h-full w-80 max-w-sm bg-bg-secondary border-l border-gray-800 shadow-card"
          initial={{ x: '100%' }}
          animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          <div className="p-6 pt-20">
            <div className="space-y-3">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.path)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    currentSection === item.id
                      ? 'bg-bg-card text-accent-blue border border-accent-blue/30'
                      : 'text-text-secondary hover:bg-bg-card hover:text-white'
                  }`}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {currentSection === item.id && (
                      <motion.div
                        className="w-2 h-2 rounded-full bg-accent-blue"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Mobile menu footer */}
            <motion.div
              className="mt-8 pt-6 border-t border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center space-x-3">
                <Logo size="small" />
                <span className="text-sm text-text-tertiary">
                  AI Urban Scientist
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navigation; 