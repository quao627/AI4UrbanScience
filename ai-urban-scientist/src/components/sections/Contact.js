import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Phone, MapPin, Send, CheckCircle, Users, Briefcase, GraduationCap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', organization: '', interest: '', message: '' });
  };

  const interests = [
    { id: 'collaboration', label: 'Research Collaboration', icon: Users },
    { id: 'partnership', label: 'Industry Partnership', icon: Briefcase },
    { id: 'education', label: 'Educational Collaboration', icon: GraduationCap },
    { id: 'other', label: 'Other Inquiries', icon: MessageCircle }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'General inquiries and collaboration requests',
      contact: 'aiurbanscientist@gmail.com',
      color: 'text-blue-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.1, staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 20, stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-16">
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
            <MessageCircle className="w-8 h-8 text-green-600 mr-3" />
            Get In Touch
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg"
          >
            Let's collaborate on urban innovation
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Start a Conversation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your university, company, or organization"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Area of Interest</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {interests.map((interest) => (
                      <label key={interest.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="interest"
                          value={interest.id}
                          onChange={(e) => setFormData({...formData, interest: e.target.value})}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <interest.icon className="w-5 h-5 text-gray-600" />
                        <span className="text-sm text-gray-700">{interest.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your interests, goals, or how we might collaborate..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isSubmitted 
                      ? 'bg-green-600 text-white' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                  whileHover={{ scale: isSubmitted ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center ${method.color}`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                      <p className={`font-medium ${method.color}`}>{method.contact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 