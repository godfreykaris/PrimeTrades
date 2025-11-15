import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Users, Target, TrendingUp } from 'lucide-react';

const Mentorship: React.FC = () => {
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
            <Users className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">
            📈 FOREX MENTORSHIP PROGRAM 📈
          </h1>
          <div className="bg-blue-600 text-white inline-block px-6 py-3 rounded-full font-bold text-lg font-['Inter'] shadow-lg">
            $20 One-Time Fee
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed font-['Inter']">
          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">A Warm Welcome to All Dedicated Traders!</h2>
            <p className="mb-4">
              A warm welcome to all dedicated and aspiring traders joining PRIMETRADES FOREX ACADEMY for our exclusive Forex Mentorship Program — all at an affordable $20 fee! 🎯
            </p>
            <p className="mb-4">
              Here at PRIMETRADES, we believe that knowledge is the most powerful trading tool. This mentorship is designed to help you grow from where you are to where you want to be — from confusion to clarity, from losses to consistency, and from a learner to a confident trader.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">What You'll Gain</h2>
            <p className="mb-4">
              Throughout this mentorship, you'll gain practical insights into technical analysis, price action, risk management, and trading psychology — all explained in simple, easy-to-apply methods. We'll also conduct live sessions and market breakdowns focusing on XAUUSD (Gold) and other major pairs to help you see how professional traders make informed decisions.
            </p>
            <p className="mb-4">
              This is your chance to learn directly from experienced mentors who will guide you step-by-step through real market setups, strategies, and trading disciplines. Every dollar invested here is a seed for your future financial growth.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">Mentorship Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Practical Technical Analysis & Price Action",
                "Risk Management Strategies", 
                "Trading Psychology Development",
                "Live Trading Sessions",
                "Market Breakdowns & Analysis",
                "XAUUSD (Gold) Focus",
                "Major Currency Pairs Coverage",
                "Real Market Setups & Strategies",
                "Step-by-Step Guidance",
                "Personalized Feedback"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">The Path to Success</h2>
            <p className="mb-4">
              Remember — success in Forex doesn't come overnight; it comes through learning, discipline, and consistency. And that's exactly what this mentorship is all about.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Target className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-gray-900">From Confusion to Clarity:</strong> Clear understanding of market dynamics
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <TrendingUp className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-gray-900">From Losses to Consistency:</strong> Develop profitable trading habits
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Users className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-gray-900">From Learner to Confident Trader:</strong> Build unshakable trading confidence
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl text-center text-white">
            <h2 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">Join Our Mentorship Family</h2>
            <p className="mb-6 text-blue-100">
              Welcome once again to PRIMETRADES FOREX ACADEMY, where we educate, mentor, and empower traders to trade with skill and confidence.
            </p>
            <p className="mb-6 text-xl font-semibold">
              Let's grow together, one trade at a time. 💹
            </p>
            
            <div className="mb-6 p-6 bg-blue-500/20 rounded-lg border border-blue-400">
              <p className="font-bold text-lg font-['Plus_Jakarta_Sans']">PRIMETRADES FOREX ACADEMY</p>
              <p className="text-blue-100">Educate. Trade. Prosper.</p>
            </div>
            
            <Link 
              to="/contact"
              className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-lg hover:bg-blue-50 transition-colors text-lg font-['Inter'] shadow-lg hover:shadow-xl transition-all"
            >
              Join Mentorship - $20
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;