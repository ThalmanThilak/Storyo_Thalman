import React from 'react';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-serif">
            Ready to Create Magic Together?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-4">
            Join thousands of families who have transformed bedtime into the best part of their day.
          </p>
          <button className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
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
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  STORYO
                </span>
              </div>
              
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 max-w-md leading-relaxed">
                Creating magical, personalized bedtime stories that strengthen family bonds and make every night an adventure. 
                Where AI meets imagination, and every child becomes the hero of their own story.
              </p>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  <span className="text-sm sm:text-base text-gray-400">hello@storyo.app</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  <span className="text-sm sm:text-base text-gray-400">1-800-STORYO-1</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  <span className="text-sm sm:text-base text-gray-400">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#features" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">How It Works</a></li>
                <li><a href="#stories" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">Success Stories</a></li>
                <li><a href="#faq" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Legal</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">Data Security</a></li>
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">Child Safety</a></li>
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-sm sm:text-base text-gray-400 px-4">
              © 2025 STORYO. All rights reserved. Made with ❤️ for families worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};