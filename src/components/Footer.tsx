import React from 'react';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`text-white transition-colors ${
      isDarkMode ? 'bg-black' : 'bg-gray-900'
    }`}>
      {/* CTA Section */}
      <div className={`py-16 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-purple-700 to-pink-700' 
          : 'bg-gradient-to-r from-purple-600 to-pink-600'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-serif">
            Ready to Create Magic Together?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-4">
            Join thousands of families who have transformed bedtime into the best part of their day.
          </p>
          <button className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-lg ${
            isDarkMode 
              ? 'bg-gray-100 text-purple-700 hover:bg-white' 
              : 'bg-white text-purple-600 hover:bg-gray-100'
          }`}>
            Let the Magic Begin
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
                    : 'bg-gradient-to-br from-purple-400 to-pink-400'
                }`}>
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className={`text-xl sm:text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                  isDarkMode 
                    ? 'from-purple-300 to-pink-300' 
                    : 'from-purple-400 to-pink-400'
                }`}>
                  STORYO
                </span>
              </div>
              
              <p className={`text-sm sm:text-base mb-4 sm:mb-6 max-w-md leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-400'
              }`}>
                Creating magical, personalized bedtime stories that strengthen family bonds and make every night an adventure. 
                Where AI meets imagination, and every child becomes the hero of their own story.
              </p>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className={`w-4 h-4 sm:w-5 sm:h-5 ${isDarkMode ? 'text-purple-300' : 'text-purple-400'}`} />
                  <span className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}>hello@storyo.app</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className={`w-4 h-4 sm:w-5 sm:h-5 ${isDarkMode ? 'text-purple-300' : 'text-purple-400'}`} />
                  <span className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}>1-800-STORYO-1</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className={`w-4 h-4 sm:w-5 sm:h-5 ${isDarkMode ? 'text-purple-300' : 'text-purple-400'}`} />
                  <span className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#features" className={`text-sm sm:text-base transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-purple-300' : 'text-gray-400 hover:text-purple-400'
                }`}>Features</a></li>
                <li><a href="#how-it-works" className={`text-sm sm:text-base transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-purple-300' : 'text-gray-400 hover:text-purple-400'
                }`}>How It Works</a></li>
                <li><a href="#stories" className={`text-sm sm:text-base transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-purple-300' : 'text-gray-400 hover:text-purple-400'
                }`}>Success Stories</a></li>
                <li><a href="#faq" className={`text-sm sm:text-base transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-purple-300' : 'text-gray-400 hover:text-purple-400'
                }`}>FAQ</a></li>
                <li><a href="#" className={`text-sm sm:text-base transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-purple-300' : 'text-gray-400 hover:text-purple-400'
                }`}>Pricing</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Legal</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" className={`text-sm sm:text-base transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-purple-300' : 'text-gray-400 hover:text-purple-400'
                }`}>Privacy Policy</a></li>
                <li><a href="#" className={`text-sm sm:text-base transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-purple-300' : 'text-gray-400 hover:text-purple-400'
                }`}>Terms & Conditions</a></li>
                <li><a href="#" className={`text-sm sm:text-base transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-purple-300' : 'text-gray-400 hover:text-purple-400'
                }`}>Data Security</a></li>
                <li><a href="#" className={`text-sm sm:text-base transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-purple-300' : 'text-gray-400 hover:text-purple-400'
                }`}>Child Safety</a></li>
                <li><a href="#" className={`text-sm sm:text-base transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-purple-300' : 'text-gray-400 hover:text-purple-400'
                }`}>Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className={`border-t mt-8 sm:mt-12 pt-6 sm:pt-8 text-center ${
            isDarkMode ? 'border-gray-700' : 'border-gray-800'
          }`}>
            <p className={`text-sm sm:text-base px-4 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-400'
            }`}>
              © 2025 STORYO. All rights reserved. Made with ❤️ for families worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};