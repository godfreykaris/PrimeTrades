import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Target, Brain, Shield } from 'lucide-react';

const PsychologyCoaching: React.FC = () => {
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
            <Target className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">
            🧠 TRADING PSYCHOLOGY COACHING
          </h1>
          <div className="bg-blue-600 text-white inline-block px-6 py-3 rounded-full font-bold text-lg font-['Inter'] shadow-lg">
            Master Your Mindset
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed font-['Inter']">
          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">The Missing Piece in Trading Success</h2>
            <p className="mb-4 text-lg">
              Trading is 80% psychology and 20% strategy. Many traders have the technical knowledge but struggle with the mental and emotional aspects of trading. Our Trading Psychology Coaching addresses this critical gap.
            </p>
            <p className="mb-4">
              Develop the mindset, discipline, and confidence needed for consistent trading success. Overcome emotional barriers and build winning habits that lead to long-term profitability.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">What You'll Transform</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Overcoming Fear & Greed Cycles",
                "Building Unshakable Discipline",
                "Developing Patience in Trading",
                "Managing Trading Emotions",
                "Building Consistent Confidence",
                "Overcoming Loss Aversion",
                "Developing Risk Tolerance",
                "Building Resilience to Losses",
                "Creating Winning Habits",
                "Eliminating Revenge Trading",
                "Developing Professional Mindset",
                "Maintaining Emotional Balance"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">Your Mental Trading Edge</h2>
            <p className="mb-4">
              Successful trading isn't just about knowing what to trade; it's about having the mental fortitude to execute your plan consistently, manage risk properly, and maintain emotional balance through wins and losses.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Brain className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-gray-900">Mental Fortitude:</strong> Develop the strength to stick to your trading plan
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Shield className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-gray-900">Emotional Protection:</strong> Learn to protect yourself from emotional trading decisions
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Target className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-gray-900">Consistent Execution:</strong> Build habits that lead to consistent trading performance
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl text-center text-white">
            <h2 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">Ready to Master Your Trading Mind?</h2>
            <p className="mb-6 text-blue-100">
              The difference between struggling traders and consistently profitable traders isn't just strategy—it's psychology. Master your mind, master your trading.
            </p>
            <p className="mb-6 text-xl font-semibold">
              Transform your trading psychology and unlock your full potential as a trader.
            </p>
            
            <Link 
              to="/contact"
              className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-lg hover:bg-blue-50 transition-colors text-lg font-['Inter'] shadow-lg hover:shadow-xl transition-all"
            >
              Start Psychology Coaching
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PsychologyCoaching;