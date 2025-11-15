import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">
            About <span className="text-blue-600">PrimeTrades</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>
        
        <div className="space-y-6 text-gray-700 leading-relaxed fade-in font-['Inter']">
          <p className="text-lg">
            PrimeTrades Forex Academy is a trusted and dynamic Forex training institution based in Kenya, 
            dedicated to equipping aspiring traders with the knowledge, discipline, and skills required 
            to succeed in the global financial markets. With years of industry experience, we pride 
            ourselves on delivering high-quality education, practical mentorship, and real-world trading insights.
          </p>
          
          <p>
            At PrimeTrades Forex Academy, we go beyond theory — we prepare our students for real market 
            conditions through hands-on training, live trading sessions, and result-driven mentorship. 
            Our mission is to empower traders, entrepreneurs, and financial enthusiasts with the mindset 
            and strategies needed to achieve consistent profitability and financial independence.
          </p>
          
          <p>
            We believe success in trading begins with quality education, discipline, and real market experience. 
            That's why our training sessions are designed to take you beyond theory — straight into live trading 
            environments, where you'll learn how to analyze market movements, identify trading opportunities, 
            and apply strategies used by professional traders.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p className="text-gray-900 font-semibold italic">
              This is more than just learning; it's about transformation — developing the mindset, discipline, 
              and confidence needed to succeed in the Forex market. Welcome to PRIMETRADES FOREX ACADEMY — 
              where traders are built, not born!
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-blue-600 font-['Plus_Jakarta_Sans']">500+</div>
            <div className="text-gray-600 text-sm font-['Inter']">Traders Trained</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-blue-600 font-['Plus_Jakarta_Sans']">82%</div>
            <div className="text-gray-600 text-sm font-['Inter']">Success Rate</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-blue-600 font-['Plus_Jakarta_Sans']">5+</div>
            <div className="text-gray-600 text-sm font-['Inter']">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-blue-600 font-['Plus_Jakarta_Sans']">24/7</div>
            <div className="text-gray-600 text-sm font-['Inter']">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;