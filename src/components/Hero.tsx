import React from 'react';
import { Star, Sparkles, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Modal } from './Modal';

export const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [showActionModal, setShowActionModal] = React.useState(false);

  const openActionModal = () => {
    setShowActionModal(true);
  };

  const closeActionModal = () => {
    setShowActionModal(false);
  };

  return (
    <>
    <section className={`relative min-h-screen flex items-center overflow-hidden transition-colors ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900' 
        : 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'
    }`}>
      {/* Floating stars animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 animate-bounce ${isDarkMode ? 'opacity-90' : 'opacity-70'}`}>
          <Star className={`w-4 h-4 fill-current ${isDarkMode ? 'text-yellow-300' : 'text-yellow-400'}`} />
        </div>
        <div className={`absolute top-32 right-20 animate-pulse ${isDarkMode ? 'opacity-80' : 'opacity-60'}`}>
          <Sparkles className={`w-6 h-6 ${isDarkMode ? 'text-purple-300' : 'text-purple-400'}`} />
        </div>
        <div className={`absolute bottom-40 left-20 animate-bounce delay-1000 ${isDarkMode ? 'opacity-90' : 'opacity-80'}`}>
          <Star className={`w-3 h-3 fill-current ${isDarkMode ? 'text-blue-300' : 'text-pink-400'}`} />
        </div>
        <div className={`absolute top-60 right-10 animate-pulse delay-500 ${isDarkMode ? 'opacity-70' : 'opacity-50'}`}>
          <Heart className={`w-5 h-5 fill-current ${isDarkMode ? 'text-pink-300' : 'text-red-300'}`} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              <span className={`block font-serif ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>A Universe of Stories,</span>
              <span className={`block bg-gradient-to-r bg-clip-text text-transparent font-serif ${
                isDarkMode 
                  ? 'from-purple-400 via-pink-400 to-blue-400' 
                  : 'from-purple-600 via-pink-600 to-blue-600'
              }`}>
                All About Your Little Star
              </span>
            </h1>
            
            <p className={`text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              From jungle quests to space missions, let your child be the star of stories made just for them — 
              personalized, spoken aloud, and full of heart
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 px-4 sm:px-0">
              <button 
                onClick={openActionModal}
                className={`text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-lg ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
              }`}>
                Let the Magic Begin
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('how-it-works');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all cursor-pointer ${
                isDarkMode 
                  ? 'border-purple-400 text-purple-400 hover:bg-purple-900/30' 
                  : 'border-purple-300 text-purple-600 hover:bg-purple-50'
              }`}>
                See How It Works
              </button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                ))}
                <span className={`ml-2 text-sm sm:text-base font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>4.9/5</span>
              </div>
              <div className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <span className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>10,000+</span> happy families
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className={`relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl max-w-md mx-auto lg:max-w-none ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-800 to-purple-800' 
                : 'bg-gradient-to-br from-purple-100 to-pink-100'
            }`}>
              {/* AI Generation Mockup */}
              <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-3 sm:mb-4 shadow-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              }`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className={`p-2 sm:p-3 rounded-lg ${isDarkMode ? 'bg-purple-900/50' : 'bg-purple-50'}`}>
                    <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>Child's name: Sia</p>
                  </div>
                  <div className={`p-2 sm:p-3 rounded-lg ${isDarkMode ? 'bg-pink-900/50' : 'bg-pink-50'}`}>
                    <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'}`}>Favorite toy: Paw Patrol</p>
                  </div>
                  <div className={`p-2 sm:p-3 rounded-lg ${isDarkMode ? 'bg-blue-900/50' : 'bg-blue-50'}`}>
                    <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>Setting: Enchanted forest</p>
                  </div>
                </div>
                <button className={`w-full mt-3 sm:mt-4 text-white py-2 rounded-lg text-xs sm:text-sm font-medium ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                    : 'bg-gradient-to-r from-purple-400 to-pink-400'
                }`}>
                  ✨ Generate Story
                </button>
              </div>

              {/* Generated Story Preview */}
              <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-yellow-900/30 to-orange-900/30' 
                  : 'bg-gradient-to-br from-yellow-50 to-orange-50'
              }`}>
                <h3 className={`font-bold mb-2 sm:mb-3 font-serif text-base sm:text-lg ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>Sia's Forest Adventure</h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  "Once upon a time, little Sia ventured into the enchanted forest with her trusty teddy bear. 
                  The magical trees whispered her name as she discovered..."
                </p>
                <div className="flex items-center mt-3 sm:mt-4 space-x-2 sm:space-x-3">
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                    isDarkMode ? 'bg-purple-500' : 'bg-purple-400'
                  }`}>
                    <span className="text-white text-xs sm:text-sm">▶</span>
                  </div>
                  <div className={`flex-1 h-2 rounded-full ${isDarkMode ? 'bg-purple-800' : 'bg-purple-200'}`}>
                    <div className={`h-2 rounded-full w-1/3 ${isDarkMode ? 'bg-purple-400' : 'bg-purple-500'}`}></div>
                  </div>
                  <span className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Mom's Voice</span>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 animate-bounce">
                <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-400' 
                    : 'bg-gradient-to-br from-yellow-300 to-orange-300'
                }`}>
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 animate-pulse">
                <div className={`w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-pink-400 to-purple-400' 
                    : 'bg-gradient-to-br from-pink-300 to-purple-300'
                }`}>
                  <Heart className="w-3 h-3 sm:w-5 sm:h-5 text-white fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Action Modal */}
    <Modal
      isOpen={showActionModal}
      onClose={closeActionModal}
      title="Special Message"
    >
      <div className="text-center py-8">
        <p className={`text-lg leading-relaxed ${
          isDarkMode ? 'text-gray-200' : 'text-gray-700'
        }`}>
          I was wondering if Outskill really checked all the assignments...!! Wow... You guys are amazing
        </p>
        <div className="mt-6">
          <button
            onClick={closeActionModal}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              isDarkMode 
                ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                : 'bg-purple-500 hover:bg-purple-600 text-white'
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
    </>
  );
};