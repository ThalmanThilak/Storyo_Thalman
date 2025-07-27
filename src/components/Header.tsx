import React from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              STORYO
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              How It Works
            </a>
            <a href="#stories" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Stories
            </a>
            <a href="#faq" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              FAQ
            </a>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 lg:px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 font-medium text-sm lg:text-base">
              Get Started
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-purple-100">
          <div className="px-4 py-4 space-y-3">
            <a href="#features" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium">
              How It Works
            </a>
            <a href="#stories" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Stories
            </a>
            <a href="#faq" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium">
              FAQ
            </a>
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};