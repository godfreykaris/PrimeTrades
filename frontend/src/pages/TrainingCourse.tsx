import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Star } from 'lucide-react';

const TrainingCourse: React.FC = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">
             FOREX TRAINING COURSE 
          </h1>
          <div className="bg-blue-600 text-white inline-block px-6 py-3 rounded-full font-bold text-lg font-['Inter'] shadow-lg">
            $50 One-Time Enrollment
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed font-['Inter']">
          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">Welcome to Your Trading Transformation!</h2>
            <p className="mb-4 text-lg">
              We're excited to welcome all passionate, dedicated, and aspiring traders to the PRIMETRADES FOREX ACADEMY Training Course — your gateway to mastering the world of Forex trading!
            </p>
            <p className="mb-4">
              This is not just another class; it's a life-changing opportunity to build real trading knowledge, confidence, and skills that can empower you to navigate the financial markets like a pro. With a one-time registration fee of just $50, you gain full access to an intensive and practical learning experience that focuses on XAUUSD (Gold) and major currency pairs.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">Our Approach to Success</h2>
            <p className="mb-4">
              At PRIMETRADES FOREX ACADEMY, we believe success in trading begins with quality education, discipline, and real market experience. That's why our training sessions are designed to take you beyond theory — straight into live trading environments, where you'll learn how to analyze market movements, identify trading opportunities, and apply strategies used by professional traders.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">What You'll Master</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Market Structure & Price Action",
                "Technical & Fundamental Analysis", 
                "Risk Management Strategies",
                "Trading Psychology Development",
                "Live Trading Environments",
                "Profitable Trading Plan Creation",
                "XAUUSD (Gold) Trading Strategies",
                "Major Currency Pairs Analysis"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">Course Highlights</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Star className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-gray-900">💰 Enrollment Fee:</strong> Only $50
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Star className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-gray-900">📈 Focus:</strong> XAUUSD (Gold) & Major Currency Pairs
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Star className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-gray-900">🎯 Goal:</strong> To equip traders with the skills and strategies to trade confidently and consistently
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl text-center text-white">
            <h2 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">Ready to Transform Your Trading?</h2>
            <p className="mb-6 text-blue-100">
              If you're truly ready to change your financial future, this is your moment to take action. Don't just watch others trade — learn, trade, and grow with PRIMETRADES FOREX ACADEMY.
            </p>
            <p className="mb-6 font-semibold text-white">
              Join us today and become part of a family of ambitious traders who believe in learning, discipline, and financial freedom.
            </p>
            <div className="text-xl font-bold mb-6 font-['Plus_Jakarta_Sans']">
              Welcome aboard PRIMETRADES FOREX ACADEMY — where traders are built, not born! 💹
            </div>
            
            <Link 
              to="/contact"
              className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-lg hover:bg-blue-50 transition-colors text-lg font-['Inter'] shadow-lg hover:shadow-xl transition-all"
            >
              Enroll Now - $50
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TrainingCourse;