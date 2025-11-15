import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Signal } from 'lucide-react';

import xauusdImage from '../assets/gold.jpeg'; 

const Signals: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors font-['Inter']"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Signal className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">
             MARKET SIGNALS SUBSCRIPTION 
          </h1>
          <div className="bg-blue-600 text-white inline-block px-6 py-3 rounded-full font-bold text-lg font-['Inter'] shadow-lg">
            $20 Per Month
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed font-['Inter']">
          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">Your New Home for Accurate Forex Signals</h2>
            <p className="mb-4">
              A special welcome to all traders joining PRIMETRADES FOREX ACADEMY, your new home for accurate, high-quality Forex market signals — all for just $20 per month! 🎯
            </p>
            <p className="mb-4">
              At PRIMETRADES, we believe that trading success begins with the right guidance, accurate analysis, and consistent signals — and that's exactly what we provide. Whether you're a beginner still learning the ropes or an experienced trader looking for reliable confirmations, this platform is designed to help you make smarter and more confident trading decisions every day.
            </p>
          </section>

          {/* XAUUSD Chart Section */}
          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-['Plus_Jakarta_Sans']">Proven XAUUSD Setups That Worked</h2>
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 font-['Inter']">XAUUSD (Gold) Signal Performance</h3>
                <div className="text-right">
                  <div className="text-green-600 text-sm font-semibold">+82% Accuracy</div>
                  <div className="text-gray-600 text-xs">Recent Signals</div>
                </div>
              </div>
              <img 
                src={xauusdImage}  
                alt="XAUUSD Trading Setups That Worked - PrimeTrades Forex Academy"
                className="w-full h-auto rounded-lg shadow-md bg-gray-100"
              />
              <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                <span>Technical Analysis</span>
                <span>Entry Points</span>
                <span>Target Levels</span>
                <span className="text-green-600 font-semibold">Profitable</span>
              </div>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Our XAUUSD signals are backed by comprehensive technical analysis and market structure understanding. 
              Each setup includes clear entry, stop loss, and take profit levels with detailed explanations.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">Professional Analysis & Research</h2>
            <p className="mb-4">
              Our team of professional traders and analysts carefully monitors the market to deliver well-researched signals on XAUUSD (Gold) and major currency pairs such as EURUSD, GBPUSD, USDJPY, and more. Each signal is backed by solid technical analysis, market structure understanding, and price action confirmation, giving you not just trades — but knowledge and insight into why each trade setup makes sense.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">What You Receive</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Accurate XAUUSD (Gold) Signals",
                "Major Pairs: EURUSD, GBPUSD, USDJPY",
                "Solid Technical Analysis Backing",
                "Market Structure Understanding",
                "Price Action Confirmation",
                "Timely Market Updates",
                "Live Market Analyses",
                "Entry & Exit Levels",
                "Risk Management Guidance",
                "Continuous Mentorship",
                "Community Access",
                "Growth-Focused Environment"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">More Than Just Signals</h2>
            <p className="mb-4">
              By subscribing to our $20 monthly plan, you're not just getting signals — you're joining a community that values growth, learning, and discipline. You'll receive timely updates, live analyses, entry and exit levels, risk management guidance, and continuous mentorship that helps you grow as a trader, not just follow trades blindly.
            </p>
            <p className="mb-4">
              We aim to help you develop the patience, confidence, and consistency needed to succeed in the Forex market. Every trade shared here is an opportunity to learn, earn, and build a stronger trading mindset.
            </p>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl text-center text-white">
            <h2 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">Join Our Signals Community</h2>
            <p className="mb-6 text-blue-100">
              So, welcome to PRIMETRADES FOREX ACADEMY, where signals meet strategy — and education meets opportunity.
            </p>
            <p className="mb-6 text-xl font-semibold">
              Let's make every pip count, every session worth it, and every trader a success story. 🚀
            </p>
            
            <div className="mb-6 p-6 bg-blue-500/20 rounded-lg border border-blue-400">
              <p className="font-bold text-lg font-['Plus_Jakarta_Sans']">PRIMETRADES FOREX ACADEMY</p>
              <p className="text-blue-100">Smart Signals. Smart Trading. Smart Growth.</p>
              <p className="text-blue-100 mt-2 font-semibold">💹 Educate | Trade | Prosper 💹</p>
            </div>
            
            <Link 
              to="/contact"
              className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-lg hover:bg-blue-50 transition-colors text-lg font-['Inter'] shadow-lg hover:shadow-xl transition-all"
            >
              Subscribe Now - $20/month
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Signals;