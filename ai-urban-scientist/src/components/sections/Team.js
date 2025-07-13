import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  MapPin,
  Mail,
  Linkedin,
  Github,
  Award,
  BookOpen,
  Building2,
} from "lucide-react";

const Team = () => {
  const faculty = [
    {
      id: 1,
      name: "Prof. Jinhua Zhao",
      role: "Principal Investigator",
      title: "Professor of Cities and Transportation",
      institution: "MIT",
      location: "Cambridge, MA",
      expertise: ["Transportation", "Urban Analytics", "Behavioral Science"],
      bio: "Prof. Jinhua Zhao is an MIT urban planning professor focusing on mobility systems, behavioral science, and AI. He directs the MIT Mobility Initiative and JTL Urban Mobility Lab, advancing sustainable transportation globally.",
      social: {
        email: "#",
        linkedin: "#",
        twitter: "#",
        scholar: "#",
      },
      image: "/api/placeholder/200/200",
    },
  ];

  const students = [
    {
      id: 5,
      name: "Ao Qu",
      role: "",
      title: "",
      institution: "",
      location: "",
      expertise: [],
      bio: "",
      achievements: [],
      social: {
        email: "#",
        linkedin: "#",
        github: "#",
        scholar: "#",
      },
      image: "/api/placeholder/200/200",
    },
    {
      id: 6,
      name: "Yutong Xia",
      role: "",
      title: "",
      institution: "",
      location: "",
      expertise: [],
      bio: "",
      achievements: [],
      social: {
        email: "#",
        linkedin: "#",
        github: "#",
        scholar: "#",
      },
      image: "/api/placeholder/200/200",
    },
    {
      id: 7,
      name: "Yihong Tang",
      role: "",
      title: "",
      institution: "",
      location: "",
      expertise: [],
      bio: "",
      achievements: [],
      social: {
        email: "#",
        linkedin: "#",
        github: "#",
        scholar: "#",
      },
      image: "/api/placeholder/200/200",
    },
    {
        id: 8,
        name: "Yunhan Zheng",
        role: "",
        title: "",
        institution: "",
        location: "",
        expertise: [],
        bio: "",
        achievements: [],
        social: {
          email: "#",
          linkedin: "#",
          github: "#",
          scholar: "#",
        },
        image: "/api/placeholder/200/200",
      },
      {
        id: 9,
        name: "Xinyi Huang",
        role: "",
        title: "",
        institution: "",
        location: "",
        expertise: [],
        bio: "",
        achievements: [],
        social: {
          email: "#",
          linkedin: "#",
          github: "#",
          scholar: "#",
        },
        image: "/api/placeholder/200/200",
      },
      {
        id: 10,
        name: "Dingyi Zhuang",
        role: "",
        title: "",
        institution: "",
        location: "",
        expertise: [],
        bio: "",
        achievements: [],
        social: {
          email: "#",
          linkedin: "#",
          github: "#",
          scholar: "#",
        },
        image: "/api/placeholder/200/200",
      },
      {
        id: 11,
        name: "Xiaotong Guo",
        role: "",
        title: "",
        institution: "",
        location: "",
        expertise: [],
        bio: "",
        achievements: [],
        social: {
          email: "#",
          linkedin: "#",
          github: "#",
          scholar: "#",
        },
        image: "/api/placeholder/200/200",
      },
      {
        id: 12,
        name: "Minwei Kong",
        role: "",
        title: "",
        institution: "",
        location: "",
        expertise: [],
        bio: "",
        achievements: [],
        social: {
          email: "#",
          linkedin: "#",
          github: "#",
          scholar: "#",
        },
        image: "/api/placeholder/200/200",
      },
  ];

  const advisors = [
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-16">
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
            <Users className="w-8 h-8 text-purple-600 mr-3" />
            Meet Our Team
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg"
          >
            The minds behind AI Urban Scientist
          </motion.p>
        </motion.div>

        {/* Faculty Section */}
        <div className="mb-24">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
              Faculty
            </h2>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left"
          >
            {faculty.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group"
                whileHover={{ y: -8 }}
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                        <Users className="w-12 h-12 text-blue-600" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-1">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        {member.title}
                      </p>
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <Building2 className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{member.institution}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{member.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-600 text-sm leading-relaxed my-4">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center space-x-2 pt-4 mt-4 border-t border-gray-100">
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.scholar && (
                      <a
                        href={member.social.scholar}
                        className="p-2 text-gray-500 hover:text-green-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      >
                        <BookOpen className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Students Section */}
        <div className="mb-24 text-left">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
              PhD Researchers
            </h2>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {students.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group"
                whileHover={{ y: -8 }}
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-teal-100 to-green-100 rounded-full flex items-center justify-center">
                        <Users className="w-12 h-12 text-teal-600" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-green-600 font-medium mb-1">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        {member.title}
                      </p>
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <Building2 className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{member.institution}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{member.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-600 text-sm leading-relaxed my-4">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center space-x-2 pt-4 mt-4 border-t border-gray-100">
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.scholar && (
                      <a
                        href={member.social.scholar}
                        className="p-2 text-gray-500 hover:text-green-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      >
                        <BookOpen className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Advisors Section */}
        <div className="text-left">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
              Advisors
            </h2>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg p-8 card-hover group"
                whileHover={{ y: -8 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {advisor.name}
                </h3>
                <p className="text-purple-600 font-medium mb-2">
                  {advisor.role}
                </p>
                <p className="text-gray-500 text-sm">{advisor.institution}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;
