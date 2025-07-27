import React from 'react';
import { Star, Sparkles, Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Floating stars animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-bounce">
          <Star className="w-4 h-4 text-yellow-400 fill-current opacity-70" />
        </div>
        <div className="absolute top-32 right-20 animate-pulse">
          <Sparkles className="w-6 h-6 text-purple-400 opacity-60" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce delay-1000">
          <Star className="w-3 h-3 text-pink-400 fill-current opacity-80" />
        </div>
        <div className="absolute top-60 right-10 animate-pulse delay-500">
          <Heart className="w-5 h-5 text-red-300 fill-current opacity-50" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="block text-gray-800 font-serif">A Universe of Stories,</span>
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent font-serif">
                All About Your Little Star
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              From jungle quests to space missions, let your child be the star of stories made just for them — 
              personalized, spoken aloud, and full of heart
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 px-4 sm:px-0">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg">
                Let the Magic Begin
              </button>
              <button className="border-2 border-purple-300 text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-purple-50 transition-all">
                See How It Works
              </button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm sm:text-base text-gray-600 font-medium">4.9/5</span>
              </div>
              <div className="text-sm sm:text-base text-gray-500">
                <span className="font-semibold text-gray-700">10,000+</span> happy families
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl max-w-md mx-auto lg:max-w-none">
              {/* AI Generation Mockup */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-3 sm:mb-4 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-2 sm:p-3 rounded-lg">
                    <p className="text-xs sm:text-sm text-purple-700 font-medium">Child's name: Sia</p>
                  </div>
                  <div className="bg-pink-50 p-2 sm:p-3 rounded-lg">
                    <p className="text-xs sm:text-sm text-pink-700 font-medium">Favorite toy: Paw Patrol</p>
                  </div>
                  <div className="bg-blue-50 p-2 sm:p-3 rounded-lg">
                    <p className="text-xs sm:text-sm text-blue-700 font-medium">Setting: Enchanted forest</p>
                  </div>
                </div>
                <button className="w-full mt-3 sm:mt-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white py-2 rounded-lg text-xs sm:text-sm font-medium">
                  ✨ Generate Story
                </button>
              </div>

              {/* Generated Story Preview */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                <h3 className="font-bold text-gray-800 mb-2 sm:mb-3 font-serif text-base sm:text-lg">Sia's Forest Adventure</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  "Once upon a time, little Sia ventured into the enchanted forest with her trusty teddy bear. 
                  The magical trees whispered her name as she discovered..."
                </p>
                <div className="flex items-center mt-3 sm:mt-4 space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm">▶</span>
                  </div>
                  <div className="flex-1 bg-purple-200 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full w-1/3"></div>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500">Mom's Voice</span>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 animate-bounce">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 animate-pulse">
                <div className="w-7 h-7 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-3 h-3 sm:w-5 sm:h-5 text-white fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};