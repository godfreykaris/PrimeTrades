import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, TrendingUp, Monitor, Zap } from 'lucide-react';

import eurusdImage from '../assets/eurusd.jpeg'; 

const LiveTrading: React.FC = () => {
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
            <TrendingUp className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">
            📊 LIVE FOREX TRADING
          </h1>
          <div className="bg-blue-600 text-white inline-block px-6 py-3 rounded-full font-bold text-lg font-['Inter'] shadow-lg">
            Real-Time Market Experience
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed font-['Inter']">
          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">Experience Real Market Action</h2>
            <p className="mb-4">
              Step into the world of live Forex trading with PRIMETRADES FOREX ACADEMY. Our live trading sessions take you beyond theory and straight into real market environments where professional trading happens.
            </p>
            <p className="mb-4">
              Watch as experienced traders analyze market movements in real-time, identify trading opportunities, and execute strategies while explaining every decision. This is your front-row seat to professional trading in action.
            </p>
          </section>

          {/* EURUSD Setup Chart Section */}
          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-['Plus_Jakarta_Sans']">Live EURUSD Trading Setup</h2>
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 font-['Inter']">EURUSD Live Analysis</h3>
                <div className="text-right">
                  <div className="text-green-600 text-sm font-semibold">Live Session</div>
                  <div className="text-gray-600 text-xs">Real-time Execution</div>
                </div>
              </div>
              <img 
                src={eurusdImage}  
                alt="EURUSD Live Trading Setup - PrimeTrades Forex Academy"
                className="w-full h-auto rounded-lg shadow-md bg-gray-100"
              />
              <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                <span>Technical Analysis</span>
                <span>Live Execution</span>
                <span>Risk Management</span>
                <span className="text-blue-600 font-semibold">Professional Setup</span>
              </div>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Our live trading sessions include real-time analysis of major pairs like EURUSD, demonstrating professional 
              entry strategies, risk management techniques, and trade execution in actual market conditions.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">What You'll Experience</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Real-Time Market Analysis",
                "Live Trade Executions",
                "Professional Strategy Application",
                "Risk Management in Action",
                "XAUUSD (Gold) Live Trading",
                "Major Currency Pairs Trading",
                "Market Movement Explanations",
                "Entry & Exit Decision Making",
                "Emotional Control Demonstrations",
                "Trade Management Techniques",
                "Real-Time Problem Solving",
                "Professional Mindset Development"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">Learn From Live Market Conditions</h2>
            <p className="mb-4">
              Unlike pre-recorded sessions or theoretical lessons, our live trading shows you exactly how to navigate real market volatility, news events, and price movements as they happen.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Monitor className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-gray-900">Real-Time Learning:</strong> Watch and learn as market conditions unfold
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Zap className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-gray-900">Immediate Application:</strong> Apply what you learn directly to your trading
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <TrendingUp className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-gray-900">Professional Insights:</strong> Understand why professionals make specific decisions
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl text-center text-white">
            <h2 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">Ready for Live Trading Experience?</h2>
            <p className="mb-6 text-blue-100">
              Transform from watching others trade to understanding how professional traders think, analyze, and execute in real market conditions.
            </p>
            <p className="mb-6 text-xl font-semibold">
              This is where theoretical knowledge meets practical application and real trading confidence is built.
            </p>
            
            <Link 
              to="/contact"
              className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-lg hover:bg-blue-50 transition-colors text-lg font-['Inter'] shadow-lg hover:shadow-xl transition-all"
            >
              Join Live Trading Sessions
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LiveTrading;