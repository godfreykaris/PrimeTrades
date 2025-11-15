import React from 'react';
import backgroundImage from '../assets/hero.jpeg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="flex flex-col pt-24 md:pt-6">
      {/* -------------------------------------------------
          MOBILE LAYOUT: Text at top, then image with buttons overlay
         ------------------------------------------------- */}
      
      {/* MOBILE: Text Content Section (Top) */}
      <div className="md:hidden bg-white w-full py-2 px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 font-['Plus_Jakarta_Sans'] leading-tight"> {/* Reduced mb-3 to mb-2 */}
            PRIMETRADES FOREX ACADEMY
          </h1>

          <p className="text-lg text-blue-600 mb-2 font-['Inter'] font-semibold"> {/* Reduced mb-4 to mb-2 */}
            MASTER THE MARKETS, SECURE YOUR FUTURE
          </p>

          <p className="text-gray-700 mb-1 max-w-lg mx-auto leading-relaxed text-sm">
            Transform from beginner to confident trader with our expert-led courses,
            mentorship programs, and accurate market signals.
          </p>
        </div>
      </div>

      {/* MOBILE: Image with Buttons Overlay */}
      <div className="md:hidden relative w-full min-h-[50vh]">
        <img
          src={backgroundImage}
          alt="PrimeTrades Forex Academy - Master the Markets"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Buttons Overlay on Image - Smaller buttons */}
        <div className="absolute inset-0 flex items-end justify-center pb-6 px-4">
          <div className="flex flex-col sm:flex-row gap-2 justify-center w-full max-w-xs">
            <button
              onClick={() =>
                document
                  .getElementById('services')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 
                         transition-colors duration-300 font-['Inter'] shadow-lg text-sm flex-1"
            >
              Explore Courses
            </button>

            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg 
                         hover:bg-blue-50 transition-colors duration-300 
                         font-['Inter'] shadow-lg text-sm flex-1 border border-blue-600"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------
          DESKTOP LAYOUT: Original design with background image
         ------------------------------------------------- */}
      <div className="hidden md:flex min-h-screen bg-cover bg-center bg-no-repeat items-center justify-center relative pt-16"
           style={{ backgroundImage: `url(${backgroundImage})` }}>
        
        {/* Dark overlay for better text readability on desktop */}
        <div className="absolute inset-0"></div>
        
        <div className="relative text-center px-4 max-w-2xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans'] leading-tight">
              PRIMETRADES FOREX ACADEMY
            </h1>

            <p className="text-xl text-blue-600 mb-6 font-['Inter'] font-semibold">
              MASTER THE MARKETS, SECURE YOUR FUTURE
            </p>

            <p className="text-gray-700 mb-6 max-w-lg mx-auto leading-relaxed text-base">
              Transform from beginner to confident trader with our expert-led courses,
              mentorship programs, and accurate market signals.
            </p>

            <div className="flex flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  document
                    .getElementById('services')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 
                           transition-colors duration-300 font-['Inter'] shadow-md text-base"
              >
                Explore Courses
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-lg 
                           hover:bg-blue-600 hover:text-white transition-colors duration-300 
                           font-['Inter'] text-base"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;