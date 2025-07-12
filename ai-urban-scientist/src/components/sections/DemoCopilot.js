import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  X, 
  Sparkles, 
  Clock,
  Bell
} from 'lucide-react';

const DemoCopilot = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <Brain className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Hypothesis Generation Copilot
          </h2>
          
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Clock className="w-4 h-4 mr-2" />
              Under Active Development
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Our AI-powered hypothesis generation copilot is currently under active development. 
              This cutting-edge tool will help urban researchers generate research hypotheses, 
              explore data patterns, and discover new insights.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-900">Coming Soon</span>
            </div>
            <p className="text-sm text-blue-800">
              The copilot will be released to the public soon. Stay tuned for updates!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DemoCopilot; 