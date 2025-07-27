import React from 'react';
import { Star, Sparkles, Heart, Moon, Cloud } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const AnimatedBackground: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating stars */}
      <div className={`absolute top-20 left-10 animate-bounce ${isDarkMode ? 'opacity-80' : 'opacity-40'}`}>
        <Star className={`w-3 h-3 sm:w-4 sm:h-4 ${isDarkMode ? 'text-yellow-300' : 'text-yellow-400'} fill-current`} />
      </div>
      <div className={`absolute top-32 right-20 animate-pulse ${isDarkMode ? 'opacity-70' : 'opacity-50'}`}>
        <Sparkles className={`w-4 h-4 sm:w-6 sm:h-6 ${isDarkMode ? 'text-purple-300' : 'text-purple-400'}`} />
      </div>
      <div className={`absolute bottom-40 left-20 animate-bounce delay-1000 ${isDarkMode ? 'opacity-90' : 'opacity-60'}`}>
        <Star className={`w-2 h-2 sm:w-3 sm:h-3 ${isDarkMode ? 'text-blue-300' : 'text-pink-400'} fill-current`} />
      </div>
      <div className={`absolute top-60 right-10 animate-pulse delay-500 ${isDarkMode ? 'opacity-60' : 'opacity-40'}`}>
        <Heart className={`w-3 h-3 sm:w-5 sm:h-5 ${isDarkMode ? 'text-pink-300' : 'text-red-300'} fill-current`} />
      </div>

      {/* Night mode specific elements */}
      {isDarkMode && (
        <>
          <div className="absolute top-16 left-1/4 animate-pulse delay-300">
            <Moon className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-200 opacity-70" />
          </div>
          <div className="absolute bottom-60 right-1/3 animate-bounce delay-700">
            <Star className="w-3 h-3 text-blue-200 fill-current opacity-80" />
          </div>
          <div className="absolute top-80 left-1/3 animate-pulse delay-1200">
            <Sparkles className="w-5 h-5 text-indigo-300 opacity-60" />
          </div>
        </>
      )}

      {/* Day mode specific elements */}
      {!isDarkMode && (
        <>
          <div className="absolute top-40 right-1/4 animate-bounce delay-800">
            <Cloud className="w-5 h-5 sm:w-7 sm:h-7 text-blue-200 opacity-50" />
          </div>
          <div className="absolute bottom-80 left-1/3 animate-pulse delay-400">
            <Sparkles className="w-4 h-4 text-pink-300 opacity-40" />
          </div>
        </>
      )}

      {/* Additional floating elements */}
      <div className={`absolute top-96 right-16 animate-bounce delay-1500 ${isDarkMode ? 'opacity-70' : 'opacity-50'}`}>
        <Star className={`w-2 h-2 ${isDarkMode ? 'text-purple-200' : 'text-yellow-300'} fill-current`} />
      </div>
      <div className={`absolute bottom-20 left-1/2 animate-pulse delay-2000 ${isDarkMode ? 'opacity-80' : 'opacity-40'}`}>
        <Heart className={`w-3 h-3 ${isDarkMode ? 'text-red-200' : 'text-pink-300'} fill-current`} />
      </div>
    </div>
  );
};