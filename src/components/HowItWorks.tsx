import React from 'react';
import { User, Mic, Sparkles, BookOpen } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const HowItWorks: React.FC = () => {
  const { isDarkMode } = useTheme();

  const steps = [
    {
      icon: User,
      title: "Enter Your Child's Details",
      description: "Tell us about your little one – their name, age, favorite toys, beloved characters, and what makes them unique. The more we know, the more magical the story becomes.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Mic,
      title: "Choose Language and Voice",
      description: "Select from recorded family voices or choose from our AI narrator options. Your child will hear stories in the most comforting voice possible – yours.",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Sparkles,
      title: "Generate a Custom Story",
      description: "Our AI weaves together all the details to create a completely personalized narrative where your child is the brave hero of their own adventure.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: BookOpen,
      title: "Read and Listen Together",
      description: "Snuggle up and enjoy interactive story time with beautiful illustrations and audio narration. Watch your child's eyes light up as they hear their own adventure.",
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  return (
    <section id="how-it-works" className={`py-20 relative overflow-hidden transition-colors ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-800 via-purple-900 to-indigo-900' 
        : 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'
    }`}>
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-32 left-16 animate-bounce delay-500 ${isDarkMode ? 'opacity-60' : 'opacity-30'}`}>
          <Sparkles className={`w-4 h-4 ${isDarkMode ? 'text-purple-300' : 'text-purple-400'}`} />
        </div>
        <div className={`absolute bottom-60 right-24 animate-pulse delay-1000 ${isDarkMode ? 'opacity-50' : 'opacity-25'}`}>
          <BookOpen className={`w-5 h-5 ${isDarkMode ? 'text-blue-300' : 'text-blue-400'}`} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 font-serif px-4 ${
            isDarkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>
            How the Magic Happens
          </h2>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto px-4 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            In just four simple steps, transform ordinary bedtime into an extraordinary adventure that's uniquely theirs.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 sm:gap-8 lg:gap-16`}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-3 sm:mb-4">
                    <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full shadow-lg mr-2 sm:mr-3 md:mr-4 ${
                      isDarkMode ? 'bg-gray-700' : 'bg-white'
                    }`}>
                      <span className={`text-sm sm:text-lg md:text-2xl font-bold ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}>{index + 1}</span>
                    </div>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br ${step.color} rounded-lg sm:rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 font-serif px-2 sm:px-4 lg:px-0 ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}>
                    {step.title}
                  </h3>
                  
                  <p className={`text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 px-2 sm:px-4 lg:px-0 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {step.description}
                  </p>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <div className={`rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-xl max-w-xs sm:max-w-sm md:max-w-md mx-auto ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    <div className={`w-full h-24 sm:h-32 md:h-40 lg:h-48 bg-gradient-to-br ${step.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4`}>
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-white opacity-50" />
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <div className={`h-2 sm:h-3 md:h-4 rounded animate-pulse ${
                        isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
                      }`}></div>
                      <div className={`h-2 sm:h-3 md:h-4 rounded w-3/4 animate-pulse ${
                        isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
                      }`}></div>
                      <div className={`h-2 sm:h-3 md:h-4 rounded w-1/2 animate-pulse ${
                        isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
                      }`}></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};