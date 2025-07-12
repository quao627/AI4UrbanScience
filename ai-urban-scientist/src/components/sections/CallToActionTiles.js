import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Newspaper, 
  Users, 
  MessageCircle, 
  Database, 
  HelpCircle,
  ArrowRight,
  Sparkles,
  Brain,
  Globe
} from 'lucide-react';

const CallToActionTiles = ({ onTryDemo }) => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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

  const tiles = [
    {
      id: 'research',
      title: 'Discover Research',
      description: 'Explore our cutting-edge urban AI research and publications',
      icon: Search,
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      onClick: () => navigate('/research'),
      featured: true,
    },
    {
      id: 'demo',
      title: 'Try AI Copilot',
      description: 'Experience our hypothesis generation AI firsthand',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      onClick: onTryDemo,
    },
    {
      id: 'news',
      title: 'Latest News',
      description: 'Stay updated with breakthroughs and project highlights',
      icon: Newspaper,
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      onClick: () => navigate('/news')
    },
    {
      id: 'team',
      title: 'Meet Our Team',
      description: 'Get to know the researchers behind the innovation',
      icon: Users,
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      onClick: () => navigate('/team')
    },
    {
      id: 'resources',
      title: 'Open Resources',
      description: 'Access datasets, tools, and open-source contributions',
      icon: Database,
      gradient: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      onClick: () => navigate('/resources')
    },
    {
      id: 'contact',
      title: 'Collaborate',
      description: 'Join our mission to transform urban science',
      icon: MessageCircle,
      gradient: 'from-teal-500 to-green-500',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600',
      onClick: () => navigate('/contact')
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-white text-gray-600 rounded-full text-sm font-medium mb-6 shadow-sm">
              <Globe className="w-4 h-4 inline mr-2" />
              Explore Our Ecosystem
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Engage with our
            <br />
            <span className="gradient-text">research community</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Browse recent publications, access open datasets and tools, meet our team, and join collaborative initiatives advancing urban science with AI.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.id}
              variants={itemVariants}
              className={`relative group cursor-pointer ${
                tile.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              onClick={tile.onClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`
                relative p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 
                bg-white border border-gray-100 h-full overflow-hidden group-hover:border-transparent
                ${tile.featured ? 'ring-2 ring-purple-200 ring-opacity-50' : ''}
              `}>
                {/* Background Gradient on Hover */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${tile.gradient} opacity-0 
                  group-hover:opacity-5 transition-opacity duration-500 rounded-3xl
                `} />

                {/* Featured Badge */}
                {tile.featured && (
                  <motion.div
                    className="absolute top-4 right-4 px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                  >
                    <Sparkles className="w-3 h-3 inline mr-1" />
                    Featured
                  </motion.div>
                )}

                {/* Icon */}
                <div className={`
                  relative w-16 h-16 ${tile.bgColor} rounded-2xl flex items-center justify-center mb-6
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  <tile.icon className={`w-8 h-8 ${tile.iconColor}`} />
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${tile.gradient} opacity-0 
                    group-hover:opacity-20 rounded-2xl transition-opacity duration-300
                  `} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {tile.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {tile.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                    <span className="mr-2">
                      Explore
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${tile.gradient} opacity-5 rounded-3xl`} />
                  <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-sm rounded-3xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionTiles; 