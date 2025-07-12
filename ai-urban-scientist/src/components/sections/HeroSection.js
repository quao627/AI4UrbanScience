import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Globe, BarChart3, Brain, Database } from 'lucide-react';
import videoBg from '../../assets/background.mp4';

const HeroSection = ({ onTryItNow }) => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute w-full h-full top-0 left-0 overflow-hidden -z-10">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-60" />
      </div>
      {/* Main Content */}
      <motion.div
        className="relative z-20 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <span className="inline-flex items-center px-4 py-2 bg-bg-card rounded-full text-sm font-medium border border-gray-700 text-accent-blue">
            <Sparkles className="w-4 h-4 mr-2" />
            Hypothesis Generation Copilot Coming Soon
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
        >
          <div className="text-white mb-4">
            AI Urban Scientist
          </div>
          <div className="text-text-secondary text-4xl">
            Advancing Urban Science through Collaborative Intelligence between <span className="text-accent-blue">Humans</span> and <span className="text-accent-blue">AI</span>
          </div>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-1xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Our AI system supports scientists, policymakers, planners, and city innovators by making it easy to generate research hypotheses, uncover city insights, and drive evidence-based decisions for a better urban future.        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={onTryItNow}
            className="px-8 py-4 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200 flex items-center space-x-2 shadow-subtle"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Try Hypothesis Copilot</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={() => navigate('/research')}
            className="px-8 py-4 bg-bg-card text-text-primary font-semibold rounded-lg border border-gray-700 hover:border-accent-blue hover:bg-bg-tertiary transition-all duration-200 flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explore Research</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Simple Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
  { number: '10+', label: 'Cities Analyzed' },
  { number: '2', label: 'Peer-reviewed Papers' },
  { number: '100,000+', label: 'Urban Data Points Processed' }, // or adjust to your own data scale
  { number: 'AI Generated Reports are Coming Soon', label: '', comingSoon: true }
].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-bg-card p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 group"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <div className={`font-bold mb-2 ${
                stat.comingSoon 
                  ? 'text-center' 
                  : 'text-2xl md:text-3xl text-white'
              }`}>
                {stat.comingSoon ? (
                  <div className="space-y-2">
                    <div className="inline-flex items-center px-3 py-1 bg-accent-blue/10 border border-accent-blue/30 rounded-full">
                      <Sparkles className="w-3 h-3 mr-2 text-accent-blue" />
                      <span className="text-xs font-medium text-accent-blue uppercase tracking-wide">
                        Coming Soon
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-text-secondary leading-relaxed">
                      AI Generated<br />Reports
                    </div>
                  </div>
                ) : (
                  stat.number
                )}
              </div>
              <div className="text-sm text-text-tertiary group-hover:text-text-secondary transition-colors duration-200">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
      {/* Simple scroll indicator */}
      <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          variants={itemVariants}
        >
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-accent-blue rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
    </section>
  );
};

export default HeroSection; 