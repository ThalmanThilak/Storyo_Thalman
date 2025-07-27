import React from 'react';
import { Clock, Globe, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const studies = [
    {
      icon: Clock,
      title: "From Chaos to Calm – Bedtime Transformation for Busy Parents",
      challenge: "Sarah, a working mom of two, struggled with 2-hour bedtime battles that left everyone exhausted and frustrated.",
      solution: "With STORYO's personalized stories featuring her children as heroes, bedtime became a 20-minute magical routine they all looked forward to.",
      result: "95% reduction in bedtime resistance, improved sleep quality for the whole family, and precious bonding moments every night.",
      color: "from-purple-400 to-purple-600",
      testimonial: "STORYO saved our sanity! My kids now ask to go to bed early just to hear their next adventure."
    },
    {
      icon: Globe,
      title: "The Multilingual Magic – Raising a Bilingual Child with Stories",
      challenge: "Maria wanted to preserve her Spanish heritage while her daughter was becoming English-dominant at school.",
      solution: "STORYO's multilingual capabilities allowed stories in both languages, featuring cultural elements and family traditions.",
      result: "Daughter's Spanish vocabulary improved by 40%, stronger cultural connection, and bedtime became a celebration of heritage.",
      color: "from-pink-400 to-pink-600",
      testimonial: "My daughter now proudly speaks Spanish and loves learning about our family's traditions through her personalized stories."
    },
    {
      icon: Smartphone,
      title: "Turning Screen Time Into Story Time – A Smart Alternative",
      challenge: "The Johnson family was concerned about their 5-year-old's increasing screen time and decreasing interest in traditional books.",
      solution: "STORYO provided interactive, personalized stories that felt as engaging as games but promoted imagination and language development.",
      result: "80% reduction in evening screen time, improved vocabulary, and renewed love for storytelling and reading.",
      color: "from-blue-400 to-blue-600",
      testimonial: "Who knew putting away the iPad could be this easy? Our son now creates his own stories during the day!"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % studies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + studies.length) % studies.length);
  };

  return (
    <section id="stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 font-serif px-4">
            Real Families, Real Magic
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            See how STORYO has transformed bedtime routines and strengthened family bonds for thousands of families worldwide.
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
          </button>

          {/* Case study cards */}
          <div className="overflow-hidden mx-8 sm:mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {studies.map((study, index) => {
                const IconComponent = study.icon;
                return (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl max-w-4xl mx-auto">
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${study.color} rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4`}>
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 font-serif">
                          {study.title}
                        </h3>
                      </div>

                      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6">
                          <h4 className="font-bold text-red-600 mb-2 sm:mb-3 text-sm sm:text-base">Challenge</h4>
                          <p className="text-gray-600 text-xs sm:text-sm">{study.challenge}</p>
                        </div>
                        
                        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6">
                          <h4 className="font-bold text-blue-600 mb-2 sm:mb-3 text-sm sm:text-base">Solution</h4>
                          <p className="text-gray-600 text-xs sm:text-sm">{study.solution}</p>
                        </div>
                        
                        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6">
                          <h4 className="font-bold text-green-600 mb-2 sm:mb-3 text-sm sm:text-base">Result</h4>
                          <p className="text-gray-600 text-xs sm:text-sm">{study.result}</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6">
                        <p className="text-gray-700 italic text-sm sm:text-base lg:text-lg leading-relaxed">
                          "{study.testimonial}"
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {studies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-purple-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};