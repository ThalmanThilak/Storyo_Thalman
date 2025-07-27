import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { CaseStudies } from './components/CaseStudies';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <div className="relative z-10">
          <Header />
          <Hero />
          <Benefits />
          <HowItWorks />
          <CaseStudies />
          <FAQ />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;