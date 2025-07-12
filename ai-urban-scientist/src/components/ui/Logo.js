import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "", size = "default" }) => {
  const sizeClasses = {
    small: "w-6 h-6",
    default: "w-8 h-8",
    large: "w-12 h-12"
  };

  return (
    <motion.div 
      className={`relative ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Simple geometric city skyline */}
      <svg
        viewBox="0 0 32 32"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simple city buildings */}
        <g>
          {/* Left building */}
          <rect x="4" y="20" width="4" height="8" fill="#3b82f6" />
          
          {/* Center tall building */}
          <rect x="10" y="14" width="4" height="14" fill="#ffffff" />
          
          {/* Right building */}
          <rect x="16" y="18" width="4" height="10" fill="#3b82f6" />
          
          {/* Far right building */}
          <rect x="22" y="22" width="4" height="6" fill="#ffffff" />
          
          {/* Simple accent lines for AI/tech theme */}
          <rect x="6" y="16" width="1" height="2" fill="#ffffff" />
          <rect x="12" y="10" width="1" height="2" fill="#3b82f6" />
          <rect x="18" y="14" width="1" height="2" fill="#ffffff" />
          <rect x="24" y="18" width="1" height="2" fill="#3b82f6" />
        </g>

        {/* Simple data connection line */}
        <path 
          d="M2 30 Q16 27 30 30" 
          stroke="#3b82f6" 
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </motion.div>
  );
};

export default Logo; 