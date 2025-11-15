import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Headphones, MessageCircle, Phone, Mail, Instagram, Video } from 'lucide-react';

const Support: React.FC = () => {
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
            <Headphones className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">
            💬 24/7 CLIENT SUPPORT
          </h1>
          <div className="bg-blue-600 text-white inline-block px-6 py-3 rounded-full font-bold text-lg font-['Inter'] shadow-lg">
            Always Here For You
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed font-['Inter']">
          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">Your Success is Our Priority</h2>
            <p className="mb-4">
              At PRIMETRADES FOREX ACADEMY, your success is our top priority. We're more than just a Forex learning platform — we're your trading family. Our support team is dedicated to providing you with fast, friendly, and professional assistance to make sure you never feel lost in your trading journey.
            </p>
            <p className="mb-4">
              Whether you need help joining our mentorship program, subscribing to our market signals, setting up your trading account, or understanding market strategies — we're here for you every step of the way. We believe that great results come from great support, and that's why our communication lines are always open for our students and members worldwide.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-['Plus_Jakarta_Sans']">Contact Channels</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors">
                <MessageCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                <div>
                  <div className="font-bold text-lg text-gray-900 font-['Inter']">WhatsApp</div>
                  <div className="text-gray-600">+254 745 707 731</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors">
                <Phone className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <div className="font-bold text-lg text-gray-900 font-['Inter']">Telephone</div>
                  <div className="text-gray-600">+254 745 122 871</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors">
                <Instagram className="w-8 h-8 text-pink-500 flex-shrink-0" />
                <div>
                  <div className="font-bold text-lg text-gray-900 font-['Inter']">Instagram</div>
                  <div className="text-gray-600">@ephramoh_fx</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors">
                <Video className="w-8 h-8 text-red-500 flex-shrink-0" />
                <div>
                  <div className="font-bold text-lg text-gray-900 font-['Inter']">TikTok</div>
                  <div className="text-gray-600">@ephramoh_fx</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors md:col-span-2">
                <Mail className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                <div>
                  <div className="font-bold text-lg text-gray-900 font-['Inter']">Email</div>
                  <div className="text-gray-600">mainaephraim708@gmail.com</div>
                  <div className="text-gray-600">ephramohfx@gmail.com</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-gray-900 font-semibold mb-2 font-['Inter']">📱 Telegram: PRIMETRADES FOREX ACADEMY</p>
              <p className="text-gray-600 text-sm">
                Our support team is available Monday to Saturday, offering real-time responses and personalized guidance to ensure that every trader — beginner or pro — feels supported, informed, and confident.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl text-center text-white">
            <h2 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">Join Our Trading Community</h2>
            <p className="mb-6 text-blue-100">
              Join our ever-growing community of traders who are not just learning how to trade but mastering the art of consistency and financial independence. At PRIMETRADES FOREX ACADEMY, we combine education, mentorship, and real market experience to help you become the trader you've always dreamed of.
            </p>
            <p className="mb-6 text-xl font-semibold">
              Reach out today — let's help you learn, trade, and prosper! 💹
            </p>
            
            <div className="mb-6 p-6 bg-blue-500/20 rounded-lg border border-blue-400">
              <p className="font-bold text-lg font-['Plus_Jakarta_Sans']">PRIMETRADES FOREX ACADEMY</p>
              <p className="text-blue-100">Smart Signals. Smart Mentorship. Smart Results.</p>
              <p className="text-blue-100 mt-2 font-semibold">Educate | Trade | Prosper</p>
            </div>
            
            <Link 
              to="/contact"
              className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-lg hover:bg-blue-50 transition-colors text-lg font-['Inter'] shadow-lg hover:shadow-xl transition-all"
            >
              Get Support Now
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Support;