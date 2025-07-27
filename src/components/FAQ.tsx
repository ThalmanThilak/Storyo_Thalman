import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "How does STORYO create personalized stories?",
      answer: "Our advanced AI analyzes your child's details – name, age, interests, and favorite characters – to weave them into unique, engaging narratives. Each story is completely original and tailored specifically for your child."
    },
    {
      question: "Can I use my own voice for narration?",
      answer: "Absolutely! You can record your voice reading a sample text, and our AI will use it to narrate all future stories. This ensures your child hears bedtime stories in your familiar, comforting voice even when you're not available."
    },
    {
      question: "What age range is STORYO suitable for?",
      answer: "STORYO is designed for children ages 2-10. Our AI automatically adjusts story complexity, vocabulary, and themes based on your child's age to ensure age-appropriate content that's both engaging and educational."
    },
    {
      question: "How many stories can I generate?",
      answer: "With our subscription plans, you get unlimited story generation. Create as many unique adventures as your child desires – there's no limit to the magic we can create together."
    },
    {
      question: "Is STORYO available in multiple languages?",
      answer: "Yes! STORYO supports over 20 languages and can even create bilingual stories to help children learn new languages or maintain their cultural heritage through storytelling."
    },
    {
      question: "How long are the stories?",
      answer: "Stories typically range from 5-15 minutes in length, perfect for bedtime routines. You can also customize the length based on your preferences and your child's attention span."
    },
    {
      question: "Is my child's data safe and secure?",
      answer: "Absolutely. We take privacy very seriously. All personal information is encrypted and stored securely. We never share your child's data with third parties, and you can delete all information at any time."
    },
    {
      question: "Can I save and replay favorite stories?",
      answer: "Yes! All generated stories are automatically saved to your library, so you can replay your child's favorites anytime. You can also create collections and share special stories with family members."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 font-serif px-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            Everything you need to know about STORYO and creating magical bedtime moments.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex justify-between items-center hover:bg-purple-50 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm sm:text-base text-gray-600 mb-4 px-4">
            Still have questions? We'd love to help!
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};