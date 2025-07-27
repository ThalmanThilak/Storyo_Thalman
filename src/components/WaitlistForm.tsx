import React, { useState } from 'react';
import { X, User, Mail, Phone, Loader2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface WaitlistFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({ isOpen, onClose }) => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.phone.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Google Apps Script Web App URL
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbyGoLj--2VeR2zHRuzxVKNYcg398Mf56QdTqepztNEfY9YtXOeQq0VUGSbMfsvkCqKw-Q/exec';
      
      // Try multiple approaches for better compatibility
      console.log('Attempting to submit to:', scriptUrl);
      console.log('Form data:', formData);

      // First try with JSON (more reliable)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      let response;
      try {
        // Try JSON first
        response = await fetch(scriptUrl, {
          method: 'POST',
        console.log('Submitting to:', scriptUrl);
        console.log('Data:', formData);

        // Use FormData approach which works better with Google Apps Script
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name.trim());
        formDataToSend.append('email', formData.email.trim());
        formDataToSend.append('phone', formData.phone.trim());
        formDataToSend.append('timestamp', new Date().toISOString());

        const response = await fetch(scriptUrl, {
          method: 'POST',
          body: formDataToSend,
        });
      alert(`Error: ${error.message}\n\nNote: The data might still be saved. Please check the Google Sheet to confirm.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({ name: '', email: '', phone: '' });
      setErrors({});
      setIsSubmitted(false);
      onClose();
    }
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
        <div className={`relative w-full max-w-md rounded-2xl shadow-2xl p-8 text-center ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
            isDarkMode ? 'bg-green-900' : 'bg-green-100'
          }`}>
            <div className="w-8 h-8 border-2 border-green-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Welcome to the Waitlist!
          </h3>
          <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Thank you for joining! We'll notify you as soon as STORYO is ready.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className={`relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        {/* Header */}
        <div className={`flex items-center justify-between p-6 border-b ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <h2 className={`text-xl font-bold font-serif ${
            isDarkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>
            Join the Waitlist
          </h2>
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode 
                ? 'hover:bg-gray-700 text-gray-300 hover:text-gray-100' 
                : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
            } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <X className="w-5 h-5" />
        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);
        
        // Try to read response text
        let responseText = '';
        try {
          responseText = await response.text();
          console.log('Response text:', responseText);
        } catch (e) {
          console.log('Could not read response text:', e);
        }

        console.log('Form submitted successfully');
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Be the first to know when STORYO launches! We'll send you early access and special offers.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Name *
              </label>
              <div className="relative">
                <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-500' 
                      : isDarkMode 
                        ? 'border-gray-600 focus:border-purple-500 bg-gray-700 text-gray-100' 
                        : 'border-gray-300 focus:border-purple-500 bg-white text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Email Address *
              </label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-500' 
                      : isDarkMode 
                        ? 'border-gray-600 focus:border-purple-500 bg-gray-700 text-gray-100' 
                        : 'border-gray-300 focus:border-purple-500 bg-white text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Phone Number *
              </label>
              <div className="relative">
                <Phone className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                    errors.phone 
                      ? 'border-red-500 focus:border-red-500' 
                      : isDarkMode 
                        ? 'border-gray-600 focus:border-purple-500 bg-gray-700 text-gray-100' 
                        : 'border-gray-300 focus:border-purple-500 bg-white text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                  placeholder="Enter your phone number"
                  disabled={isSubmitting}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Maybe Later
              </button>
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-center ${
                  isFormValid && !isSubmitting
                    ? isDarkMode 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};