import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Eye, Zap, Users, BarChart3, Shield, ArrowRight, Target } from 'lucide-react';

const ProjectIntro = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
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

  const capabilities = [
    {
      icon: BarChart3,
      text: "Uncover hidden patterns in massive, complex urban datasets and transform them into actionable policy insights"
    },
    {
      icon: Zap,
      text: "Invent advanced control and optimization methods to maximize efficiency and safety"
    },
    {
      icon: Users,
      text: "Analyze, simulate, and moderate multi-dimensional public opinion to ensure policy transparency, fairness, and responsiveness"
    }
  ];

  const intelligenceFeatures = [
    {
      icon: Brain,
      title: "Autonomous Reasoning",
      description: "Our AI not only processes data, but also learns, reasons, and develops new methods on its own."
    },
    {
      icon: Eye,
      title: "Human-AI Collaboration",
      description: "Our system operates autonomously when needed but also integrates seamlessly with human experts, enabling co-creation of urban policies and solutions."
    },
    {
      icon: Shield,
      title: "Adaptive and Scalable",
      description: "Our system addresses diverse urban challenges—from traffic control to public opinion analysis—at the scale of cities and beyond."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              About Our Mission
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            The Future of 
            <br />
            <span className="gradient-text">Urban Intelligence</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We are working towards a paradigm shift in how we understand, interact with, and shape urban environments
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Vision and Capabilities */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-10"
          >
            {/* Our Vision */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed text-left">
                We envision a future where cities are guided by seamless collaboration between humans and AI systems—systems that reason, adapt, and co-create with people to unlock new levels of efficiency, fairness, and innovation in urban policy and design.
              </p>
            </motion.div>

            {/* What can the system do */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What Are We Building
              </h3>
              <p className="text-lg text-gray-600 mb-5 text-left">
                We build next-generation AI systems for cities that can:
              </p>
              <div className="space-y-3">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <capability.icon className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1 text-left">
                      {capability.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Urban Intelligence */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                State-of-the-art Urban Intelligence
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 text-left">
                Unlike traditional methods that rely on predefined models and require extensive manual work, our system builds and extends the latest advances in large language models and multimodal reasoning to:
              </p>
            </motion.div>

            <div className="space-y-4">
              {intelligenceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-2xl card-hover group border border-blue-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                        <feature.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2 text-left">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-left">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro; 