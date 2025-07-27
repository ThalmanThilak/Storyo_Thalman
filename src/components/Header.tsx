import React from 'react';
import { BookOpen, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors ${
      isDarkMode 
        ? 'bg-gray-900/90 border-purple-800' 
        : 'bg-white/90 border-purple-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center ${
              isDarkMode 
                ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
                : 'bg-gradient-to-br from-purple-400 to-pink-400'
            }`}>
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className={`text-xl sm:text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
              isDarkMode 
                ? 'from-purple-400 to-pink-400' 
                : 'from-purple-600 to-pink-600'
            }`}>
              STORYO
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`hover:text-purple-500 transition-colors font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Features
            </a>
            <a href="#how-it-works" className={`hover:text-purple-500 transition-colors font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              How It Works
            </a>
            <a href="#stories" className={`hover:text-purple-500 transition-colors font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Stories
            </a>
            <a href="#faq" className={`hover:text-purple-500 transition-colors font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              FAQ
            </a>
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button className={`text-white px-4 lg:px-6 py-2 rounded-full transition-all transform hover:scale-105 font-medium text-sm lg:text-base ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
            }`}>
              Get Started
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-5 h-5 sm:w-6 sm:h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} />
            ) : (
              <Menu className={`w-5 h-5 sm:w-6 sm:h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden border-b transition-colors ${
          isDarkMode 
            ? 'bg-gray-900 border-purple-800' 
            : 'bg-white border-purple-100'
        }`}>
          <div className="px-4 py-4 space-y-3">
            <a href="#features" className={`block hover:text-purple-500 transition-colors font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Features
            </a>
            <a href="#how-it-works" className={`block hover:text-purple-500 transition-colors font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              How It Works
            </a>
            <a href="#stories" className={`block hover:text-purple-500 transition-colors font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Stories
            </a>
            <a href="#faq" className={`block hover:text-purple-500 transition-colors font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              FAQ
            </a>
            <div className="flex items-center justify-between">
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
            <button className={`w-full text-white px-6 py-2 rounded-full transition-all font-medium ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
            }`}>
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};