import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Download, 
  ExternalLink, 
  Star, 
  Filter,
  Calendar,
  User,
  Quote,
  Award,
  TrendingUp,
  Eye,
  Heart
} from 'lucide-react';

// Import images
import urbanCiImage from '../../assets/images/urban-ci.jpg';
import urbanxImage from '../../assets/images/urbanx.jpg';

const Research = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Research' },
    { id: 'ai-methods', label: 'AI Methods' },
    { id: 'urban-planning', label: 'Urban Planning' },
    { id: 'transportation', label: 'Transportation' },
    { id: 'sustainability', label: 'Sustainability' },
  ];

  const researchMetrics = [
    { number: '2', label: 'Publications', icon: BookOpen, color: 'text-blue-600' },
    { number: '4', label: 'Citations', icon: Quote, color: 'text-green-600' }
  ];

  const featuredPapers = [
    {
      id: 1,
      title: "Reimagining Urban Science: Scaling Causal Inference with Large Language Models",
      authors: ["Yutong Xia*", "Ao Qu*", "Yunhan Zheng", "Yihong Tang", "Dingyi Zhuang", "Yuxuan Liang", "Shenhao Wang", "Cathy Wu", "Lijun Sun", "Roger Zimmermann", "Jinhua Zhao"],
      journal: "Arxiv",
      year: 2025,
      categories: ["urban-planning"],
      abstract: "We present a novel AI framework that generates testable hypotheses for urban sustainability research, improving research efficiency by 85% and uncovering previously unidentified patterns in urban data. We present a novel AI framework that generates testable hypotheses for urban sustainability research, improving research efficiency by 85% and uncovering previously unidentified patterns in urban data.We present a novel AI framework that generates testable hypotheses for urban sustainability research, improving research efficiency by 85% and uncovering previously unidentified patterns in urban data.We present a novel AI framework that generates testable hypotheses for urban sustainability research, improving research efficiency by 85% and uncovering previously unidentified patterns in urban data.We present a novel AI framework that generates testable hypotheses for urban sustainability research, improving research efficiency by 85% and uncovering previously unidentified patterns in urban data.We present a novel AI framework that generates testable hypotheses for urban sustainability research, improving research efficiency by 85% and uncovering previously unidentified patterns in urban data.We present a novel AI framework that generates testable hypotheses for urban sustainability research, improving research efficiency by 85% and uncovering previously unidentified patterns in urban data.",
      citations: 4,
      status: "Position Paper",
      image: urbanCiImage,
      tags: ["Large Language Models", "Urban Science", "Hypothesis Generation"],
      link: "https://arxiv.org/abs/2504.12345",
      featured: false
    },
    {
      id: 2,
      title: "From Street Views to Urban Science: Discovering Road Safety Factors with Multimodal Large Language Models",
      authors: ["Yihong Tang", "Ao Qu", "Xujing Yu", "Weipeng Deng", "Jun Ma", "Jinhua Zhao", "Lijun Sun"],
      journal: "KDD 2025 UrbanComputing Workshop",
      year: 2025,
      categories: ["transportation", "ai-methods"],
      abstract: "Urban and transportation research has long sought to uncover statistically meaningful relationships between key variables and societal outcomes such as road safety, to generate actionable insights that guide the planning, development, and renewal of urban and transportation systems. However, traditional workflows face several key challenges: (1) reliance on human experts to propose hypotheses, which is time-consuming and prone to confirmation bias; (2) limited interpretability, particularly in deep learning approaches; and (3) underutilization of unstructured data that can encode critical urban context. Given these limitations, we propose a Multimodal Large Language Model (MLLM)-based approach for interpretable hypothesis inference, enabling the automated generation, evaluation, and refinement of hypotheses concerning urban context and road safety outcomes. Our method leverages MLLMs to craft safety-relevant questions for street view images (SVIs), extract interpretable embeddings from their responses, and apply them in regression-based statistical models. UrbanX supports iterative hypothesis testing and refinement, guided by statistical evidence such as coefficient significance, thereby enabling rigorous scientific discovery of previously overlooked correlations between urban design and safety. Experimental evaluations on Manhattan street segments demonstrate that our approach outperforms pretrained deep learning models while offering full interpretability. Beyond road safety, UrbanX can serve as a general-purpose framework for urban scientific discovery, extracting structured insights from unstructured urban data across diverse socioeconomic and environmental outcomes. This approach enhances model trustworthiness for policy applications and establishes a scalable, statistically grounded pathway for interpretable knowledge discovery in urban and transportation studies.",
      citations: 0,
      status: "Methodology",
      image: urbanxImage,
      link: "https://arxiv.org/abs/2506.02242",
      tags: ["Multimodal Large Language Models", "Urban Street View", "Roadway Safety"]
    },
  ];

  const filteredPapers = selectedFilter === 'all' 
    ? featuredPapers 
    : featuredPapers.filter(paper => paper.categories.includes(selectedFilter));

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Position Paper': return 'bg-green-100 text-green-800';
      case 'Methodology': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-16">
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
            <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
            Research & Publications
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg"
          >
            Discover our latest research, where every publication contributes to advancing AI-powered urban science.
          </motion.p>
        </motion.div>

        {/* Research Impact Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-6 mb-16"
        >
          {researchMetrics.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg text-center card-hover"
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Filter className="w-6 h-6 mr-2 text-blue-600" />
              Featured Publications
            </h2>
            <div className="text-gray-600">
              Showing {filteredPapers.length} of {featuredPapers.length} papers
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Papers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredPapers.map((paper) => (
              <motion.div
                key={paper.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group cursor-pointer"
                whileHover={{ y: -8 }}
                onClick={() => window.open(paper.link, '_blank')}
              >
                {/* Paper Image/Visual */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100">
                  {paper.image ? (
                    <img src={paper.image} alt={paper.title} className="w-full h-full object-contain" />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center p-6">
                        <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                        <div className="text-sm text-gray-600">
                          {paper.categories.map(cat => cat.replace('-', ' ')).join(' • ')}
                        </div>
                      </div>
                    </div>
                  )}

                  {paper.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Status Badge */}
                  <div className="flex items-center gap-2 mb-3 text-left">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(paper.status)}`}>
                      {paper.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 text-left">
                    {paper.title}
                  </h3>

                  {/* Authors */}
                  <div className="flex items-center text-gray-600 text-sm mb-3 gap-1">
                    <User className="w-4 h-4 flex-shrink-0" />
                    <span className="line-clamp-0 text-left">{paper.authors.join(', ')}</span>
                  </div>

                  {/* Journal and Year */}
                  <div className="flex items-center text-gray-600 text-sm mb-4 gap-1">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="text-left">{paper.journal} • {paper.year}</span>
                  </div>

                  {/* Abstract Preview */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 text-left">
                    {paper.abstract}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md text-left"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Quote className="w-4 h-4 flex-shrink-0" />
                        <span>{paper.citations}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button 
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Toggle favorite functionality can be added here
                        }}
                      >
                        <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                      </button>
                      <button 
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(paper.link, '_blank');
                        }}
                        title="Open paper in new tab"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-400 hover:text-blue-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

export default Research; 