import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-center py-12 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-2xl font-bold mb-3 font-['Plus_Jakarta_Sans']">PRIMETRADES FOREX ACADEMY</p>
        <p className="text-blue-100 text-lg mb-3 font-['Inter'] font-light">MASTER THE MARKETS, SECURE YOUR FUTURE</p>
        <p className="text-blue-100 mb-4 font-['Inter']">Smart Signals. Smart Mentorship. Smart Results.</p>
        <p className="text-blue-100 mb-6 font-['Inter'] font-semibold">Educate • Trade • Prosper</p>
        <p className="text-white/90 mb-2 font-['Inter']">&copy; 2025 PrimeTrades Forex Academy. All Rights Reserved.</p>
        <p className="text-blue-200 font-['Inter'] italic">Where traders are built, not born!</p>
        
        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-blue-500/30">
          <p className="text-blue-200 text-sm font-['Inter']">
            Based in Kenya • Serving Traders Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;