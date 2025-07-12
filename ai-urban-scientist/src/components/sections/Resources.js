import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Database, Download, ExternalLink, Code, Filter, Search, Star, Tag } from 'lucide-react';

const Resources = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', label: 'All Resources', count: 1 },
    { id: 'datasets', label: 'Datasets', count: 0 },
    { id: 'tools', label: 'Tools & APIs', count: 1 }
  ];

  const resources = [
    {
      id: 1,
      title: "Urban-CI Literature Review",
      description: "LLM-enabled literature review system for scaling causal inference in urban science. Includes automated paper filtering, feature extraction, and Sankey diagram generation for analyzing relationships between research methodologies and topics.",
      type: "tools",
      format: "Python, GitHub",
      size: "NA",
      downloads: 0,
      license: "MIT",
      featured: true,
      tags: ["LLM", "Literature Review", "Urban Science", "Causal Inference", "Python"],
      lastUpdated: "2025-06-18",
      link: "https://github.com/quao627/Urban-CI-LitReview"
    }
  ];

  const stats = [
    { number: '1K+', label: 'Downloads', icon: Download, color: 'text-blue-600' },
    { number: '0', label: 'Datasets', icon: Database, color: 'text-green-600' },
    { number: '1', label: 'Tools & APIs', icon: Code, color: 'text-purple-600' },
    { number: '100%', label: 'Open Access', icon: Star, color: 'text-orange-600' }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesFilter = filter === 'all' || resource.type === filter;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.1, staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 20, stiffness: 100 } }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'datasets': return Database;
      case 'tools': return Code;
      default: return Database;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'datasets': return 'bg-blue-100 text-blue-800';
      case 'tools': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center"
          >
            <Database className="w-8 h-8 text-indigo-600 mr-3" />
            Open Resources
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg"
          >
            Accelerate your research with open science
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-white p-6 rounded-xl shadow-lg text-center card-hover" whileHover={{ scale: 1.05 }}>
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Search and Filter */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources, datasets, tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span>{category.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  filter === category.id ? 'bg-blue-500' : 'bg-gray-200 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Resources Grid */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredResources.map((resource) => {
            const TypeIcon = getTypeIcon(resource.type);
            return (
              <motion.div
                key={resource.id}
                variants={itemVariants}
                layout
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group"
                whileHover={{ y: -8 }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getTypeColor(resource.type)}`}>
                        <TypeIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                          {resource.type}
                        </span>
                      </div>
                    </div>
                    {resource.featured && (
                      <div className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {resource.type === 'tools' && resource.link ? (
                      <a 
                        href={resource.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors duration-200"
                      >
                        {resource.title}
                      </a>
                    ) : (
                      resource.title
                    )}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {resource.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Format:</span>
                      <p className="font-medium text-gray-900">{resource.format}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Size:</span>
                      <p className="font-medium text-gray-900">{resource.size}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">License:</span>
                      <p className="font-medium text-gray-900">{resource.license}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Downloads:</span>
                      <p className="font-medium text-gray-900">{resource.downloads.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md flex items-center">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-gray-500 text-xs">
                      Updated: {new Date(resource.lastUpdated).toLocaleDateString()}
                    </span>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => {
                          if (resource.type === 'tools' && resource.link) {
                            window.open(resource.link, '_blank', 'noopener,noreferrer');
                          }
                        }}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        <Download className="w-4 h-4" />
                        <span>{resource.type === 'tools' ? 'View on GitHub' : 'Download'}</span>
                      </button>
                      {resource.link && (
                        <button 
                          onClick={() => window.open(resource.link, '_blank', 'noopener,noreferrer')}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4 text-gray-400 hover:text-blue-500" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Open Science CTA */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center">
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-4">Contribute to Open Science</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Have datasets or tools that could benefit the urban research community? We'd love to feature your contributions.
            </p>
            <motion.button 
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200" 
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources; 