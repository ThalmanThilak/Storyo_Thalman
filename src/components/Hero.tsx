import React from 'react';
import { Star, Sparkles, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Modal } from './Modal';
import { WaitlistForm } from './WaitlistForm';

export const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [showActionModal, setShowActionModal] = React.useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const openActionModal = () => {
    setShowActionModal(true);
  };

  const closeActionModal = () => {
    setShowActionModal(false);
  };

  const openWaitlistModal = () => {
    setShowWaitlistModal(true);
  };

  const closeWaitlistModal = () => {
    setShowWaitlistModal(false);
  };

  const sampleStoryText = `Sia's Forest Adventure. Once upon a time, little Sia ventured into the enchanted forest with her trusty teddy bear. The magical trees whispered her name as she discovered a hidden path covered in sparkling fairy dust. As Sia walked deeper into the forest, she met a friendly rabbit who needed help finding his way home. With her brave heart and kind spirit, Sia helped the rabbit navigate through the mystical woods, making a new friend along the way. The forest creatures celebrated their friendship with a beautiful light show from the fireflies, and Sia knew this was just the beginning of many magical adventures to come.`;

  const handlePlayPause = () => {
    if (!('speechSynthesis' in window)) {
      alert('Sorry, your browser doesn\'t support text-to-speech. Please try a modern browser like Chrome, Firefox, or Safari.');
      return;
    }

    if (isPlaying) {
      // Stop current narration
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      // Start narration
      const utterance = new SpeechSynthesisUtterance(sampleStoryText);
      
      // Configure voice settings for natural, human-like storytelling with Indian accent
      utterance.rate = 0.75; // Slower for natural storytelling pace
      utterance.pitch = 1.0; // Natural pitch
      utterance.volume = 0.9;
      
      // Try to find an Indian accent voice first, then fallback to other warm voices
      const voices = window.speechSynthesis.getVoices();
      
      // Look for Indian English voices first
      const indianVoice = voices.find(voice => 
        voice.lang.includes('en-IN') || 
        voice.name.toLowerCase().includes('indian') ||
        voice.name.toLowerCase().includes('hindi') ||
        voice.name.toLowerCase().includes('ravi') ||
        voice.name.toLowerCase().includes('veena') ||
        voice.name.toLowerCase().includes('aditi')
      );
      
      // If no Indian voice found, look for other natural-sounding voices
      const naturalVoice = !indianVoice && voices.find(voice => 
        voice.name.toLowerCase().includes('natural') ||
        voice.name.toLowerCase().includes('neural') ||
        voice.name.toLowerCase().includes('premium') ||
        (voice.lang.includes('en') && voice.name.toLowerCase().includes('female'))
      );
      
      if (indianVoice) {
        utterance.voice = indianVoice;
      } else if (naturalVoice) {
        utterance.voice = naturalVoice;
      }

      utterance.onstart = () => {
        setIsPlaying(true);
      };

      utterance.onend = () => {
        setIsPlaying(false);
      };

      utterance.onerror = (event) => {
        setIsPlaying(false);
        console.error('Speech synthesis error:', event.error);
        // Don't show alert, just reset the state silently
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  // Load voices when component mounts
  React.useEffect(() => {
    if ('speechSynthesis' in window) {
      // Load voices
      window.speechSynthesis.getVoices();
      
      // Some browsers need this event to load voices
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }

    // Cleanup on unmount
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);
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
                onClick={openWaitlistModal}
                className={`text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-lg ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
              }`}>
                Join Waitlist
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
                  <button 
                    onClick={handlePlayPause}
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                      isDarkMode ? 'bg-purple-500 hover:bg-purple-600' : 'bg-purple-400 hover:bg-purple-500'
                    }`}
                    title={isPlaying ? 'Stop story narration' : 'Play story narration'}
                  >
                    <span className="text-white text-xs sm:text-sm">
                      {isPlaying ? '⏹' : '▶'}
                    </span>
                  </button>
                  <div className={`flex-1 h-2 rounded-full ${isDarkMode ? 'bg-purple-800' : 'bg-purple-200'}`}>
                    <div className={`h-2 rounded-full transition-all duration-300 ${
                      isPlaying ? 'w-2/3 animate-pulse' : 'w-1/3'
                    } ${isDarkMode ? 'bg-purple-400' : 'bg-purple-500'}`}></div>
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

    {/* Waitlist Modal */}
    <WaitlistForm
      isOpen={showWaitlistModal}
      onClose={closeWaitlistModal}
    />
    </>
  );
};