import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Twitter, 
  Linkedin, 
  Github, 
  ArrowRight,
  MapPin,
  ExternalLink,
  Heart
} from 'lucide-react';
import Logo from './ui/Logo';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/aiurbanscientist' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/ai-urban-scientist' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/ai-urban-scientist' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <footer className="bg-bg-secondary border-t border-gray-800">
      {/* Newsletter Section */}
      <div className="bg-accent-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Stay Updated with Urban AI Research
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Get the latest insights, research findings, and tool updates delivered to your inbox. 
                Join our community of urban researchers and innovators.
              </p>
            </motion.div>

            <motion.form
              variants={itemVariants}
              onSubmit={handleNewsletterSubmit}
              className="max-w-md mx-auto flex gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-white text-accent-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubscribed ? (
                  <>
                    <Heart className="w-4 h-4" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <ArrowRight className="w-4 h-4" />
                    <span>Subscribe</span>
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-8 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="text-left">
              <div className="flex items-center space-x-3 mb-6">
                <Logo />
                <span className="text-xl font-bold text-white">
                  AI Urban Scientist
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-text-tertiary hover:text-accent-blue transition-colors duration-200">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">105 Massachusetts Ave, Cambridge, MA 02139</span>
                </div>
                <div className="flex items-start space-x-3 text-text-tertiary hover:text-accent-blue transition-colors duration-200">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">aiurbanscientist@gmail.com</span>
                </div>
              </div>
            </motion.div>

            {/* Social Media & Contact */}
            <motion.div variants={itemVariants} className="text-right flex flex-col justify-end items-end">
              <h4 className="text-lg font-semibold mb-6 text-white">Connect With Us</h4>
              
              <div className="space-y-4 mb-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-text-secondary hover:text-accent-blue transition-colors duration-200 group justify-end"
                      whileHover={{ x: -5 }}
                    >
                      <span className="text-sm">{social.label}</span>
                      <div className="p-2 bg-bg-card rounded-lg border border-gray-700 group-hover:border-accent-blue transition-colors duration-200">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* <div className="bg-bg-tertiary border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="flex items-center space-x-4 text-text-tertiary text-sm">
              <span>© 2024 AI Urban Scientist</span>
              <span className="hidden md:inline">•</span>
              <button className="hover:text-accent-blue transition-colors duration-200">
                Privacy Policy
              </button>
              <span className="hidden md:inline">•</span>
              <button className="hover:text-accent-blue transition-colors duration-200">
                Terms of Service
              </button>
            </div>
            
            <div className="flex items-center space-x-2 text-text-tertiary text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for the urban future</span>
            </div>
          </motion.div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer; 