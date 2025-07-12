import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Newspaper,
  Calendar,
  Clock,
  ArrowRight,
  ExternalLink,
  Award,
  Users,
  Globe,
  Zap,
  TrendingUp,
  Bell,
  Star,
} from "lucide-react";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All News", count: 1 },
    { id: "research", label: "Research", count: 0 },
    { id: "awards", label: "Awards", count: 0 },
    { id: "events", label: "Events", count: 0 },
    { id: "partnerships", label: "Partnerships", count: 0 },
  ];

  const newsArticles = [
    {
      id: 1,
      title:
        "AI Urban Scientist Initiative Launches to Transform Urban Research with Human–AI Collaboration",
      summary:
        "We officially launch AI Urban Scientist, a platform advancing urban research through close collaboration between humans and AI.",
      content:
        "Today marks the launch of AI Urban Scientist, an initiative dedicated to empowering researchers, policymakers, and city leaders by integrating artificial intelligence with human expertise. The platform will provide tools for hypothesis generation, data-driven insights, and collaborative urban discovery.",
      date: "2025-07-06",
      // "readTime": "2 min read",
      image: "/api/placeholder/600/300",
      featured: true,
      tags: ["Announcement", "Launch", "Urban Science", "AI"],
      author: "AI Urban Scientist Team",
      views: 1,
    },
  ];

  const filteredArticles =
    selectedCategory === "all"
      ? newsArticles
      : newsArticles.filter((article) => article.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "research":
        return <Zap className="w-4 h-4" />;
      case "awards":
        return <Award className="w-4 h-4" />;
      case "events":
        return <Calendar className="w-4 h-4" />;
      case "partnerships":
        return <Users className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "research":
        return "bg-blue-100 text-blue-800";
      case "awards":
        return "bg-yellow-100 text-yellow-800";
      case "events":
        return "bg-green-100 text-green-800";
      case "partnerships":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-16">
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
            <Newspaper className="w-8 h-8 text-green-600 mr-3" />
            Latest News & Updates
          </motion.h1>

          <motion.p variants={itemVariants} className="text-gray-600 text-lg">
            Stay connected with our research journey
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
                }`}
              >
                {getCategoryIcon(category.id)}
                <span>{category.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs ${
                    selectedCategory === category.id
                      ? "bg-blue-500"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Featured Article */}
        {filteredArticles.find((article) => article.featured) && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <motion.div variants={itemVariants}>
              {(() => {
                const featured = filteredArticles.find(
                  (article) => article.featured
                );
                return (
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-64 lg:h-auto bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </div>
                        <div className="text-center p-8">
                          <Newspaper className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                          <div className="text-lg font-semibold text-gray-700">
                            Latest Update
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-4">
                          <span
                            className={`inline-flex items-center px-0 py-0 rounded-full text-sm font-medium ${getCategoryColor(
                              featured.category
                            )}`}
                          >
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/70">
                              {getCategoryIcon(featured.category)}
                            </span>
                          </span>

                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(featured.date)}
                          </div>
                        </div>

                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                          {featured.title}
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          {featured.summary}
                        </p>

                        <div className="flex items-center justify-between">
                          <motion.button
                            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}

        {/* News Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredArticles
              .filter((article) => !article.featured)
              .map((article) => (
                <motion.div
                  key={article.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group cursor-pointer"
                  whileHover={{ y: -8 }}
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="flex justify-center mb-2">
                        {getCategoryIcon(article.category)}
                      </div>
                      <div className="text-sm text-gray-600 capitalize">
                        {article.category}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Category and Date */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                          article.category
                        )}`}
                      >
                        {article.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(article.date)}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.summary}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-gray-500 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500 text-xs">
                          {article.views} views
                        </span>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
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

export default News;
