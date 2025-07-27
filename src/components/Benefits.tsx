import React from 'react';
import { Infinity, Heart, Moon, Mic } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Infinity,
      title: "Endless Stories, Zero Repetition",
      description: "Our AI creates unique adventures every time, ensuring your child never gets bored with the same old tales.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Heart,
      title: "Stronger Parent-Child Bond",
      description: "Share magical moments together as you explore personalized stories that create lasting memories.",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Moon,
      title: "A Magical Bedtime Routine That Just Works",
      description: "Transform chaotic bedtimes into peaceful, anticipated moments that help your child drift off to dreamland.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Mic,
      title: "Stories Told in Your Voice",
      description: "Record your voice once, and our AI will narrate every story in your familiar, comforting tone.",
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 font-serif px-4">
            Why Parents Choose STORYO
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            More than just stories – it's about creating magical moments that strengthen bonds and make bedtime something to look forward to.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${benefit.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 font-serif">
                  {benefit.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};