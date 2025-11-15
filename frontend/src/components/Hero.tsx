import React from 'react';
import backgroundImage from '../assets/hero.jpeg';

const Hero: React.FC = () => {
  return (
    <div 
      id="home"
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative text-center px-4 max-w-2xl mx-auto">
        {/* Smaller container with minimal blur */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-white/20">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans'] leading-tight">
            PRIMETRADES FOREX ACADEMY
          </h1>
          <p className="text-lg md:text-xl text-blue-600 mb-6 font-['Inter'] font-semibold">
            MASTER THE MARKETS, SECURE YOUR FUTURE
          </p>
          <p className="text-gray-700 mb-6 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
            Transform from beginner to confident trader with our expert-led courses, 
            mentorship programs, and accurate market signals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 
                         transition-colors duration-300 font-['Inter'] shadow-md text-sm md:text-base"
            >
              Explore Courses
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 font-semibold py-2 px-6 rounded-lg 
                         hover:bg-blue-600 hover:text-white transition-colors duration-300 font-['Inter'] text-sm md:text-base"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;