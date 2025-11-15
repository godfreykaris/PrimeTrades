import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  Signal, 
  Headphones,
  Users,
  Target,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  price: string;
  features: string[];
  path: string;
}

const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = (path: string) => {
    // Scroll to top first
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Then navigate after a small delay to ensure scroll completes
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  const services: Service[] = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "Forex Training Course",
      shortDescription: "Master Forex trading with our intensive course focusing on XAUUSD and major currency pairs. Transform from beginner to confident trader.",
      price: "$50 one-time",
      features: [
        "Market structure & price action",
        "Technical & fundamental analysis",
        "Risk management & psychology", 
        "Live trading environments",
        "XAUUSD (Gold) focused"
      ],
      path: "/training-course"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Forex Mentorship Program", 
      shortDescription: "Personalized guidance to grow from confusion to clarity. Live sessions and real market breakdowns with experienced mentors.",
      price: "$20 one-time",
      features: [
        "One-on-one mentorship",
        "Live trading sessions",
        "Market breakdowns",
        "Risk management strategies",
        "XAUUSD & major pairs focus"
      ],
      path: "/mentorship"
    },
    {
      icon: <Signal className="w-8 h-8 text-blue-600" />,
      title: "Market Signals Subscription",
      shortDescription: "Accurate, high-quality Forex signals on XAUUSD and major pairs. Backed by solid technical analysis and market structure.",
      price: "$20/month",
      features: [
        "Daily accurate signals",
        "XAUUSD & major pairs",
        "Technical analysis backed",
        "Risk management guidance",
        "Continuous mentorship"
      ],
      path: "/signals"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Live Forex Trading",
      shortDescription: "Real-time trading sessions with expert strategies. Learn directly from experienced traders in live market conditions.",
      price: "Contact for pricing",
      features: [
        "Real-time trading sessions",
        "Expert strategies & insights",
        "Live market conditions",
        "Professional trading techniques",
        "Hands-on learning"
      ],
      path: "/live-trading"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Trading Psychology Coaching",
      shortDescription: "Develop the mindset, discipline, and confidence needed for consistent trading success and long-term profitability.",
      price: "Contact for pricing",
      features: [
        "Mindset development",
        "Emotional control",
        "Discipline building",
        "Confidence building",
        "Long-term success strategies"
      ],
      path: "/psychology-coaching"
    },
    {
      icon: <Headphones className="w-8 h-8 text-blue-600" />,
      title: "24/7 Client Support",
      shortDescription: "Fast, friendly, and professional assistance throughout your trading journey. Real-time support when you need it.",
      price: "Included with all services",
      features: [
        "Monday to Saturday availability",
        "Real-time responses",
        "Trading guidance",
        "Account setup help",
        "Strategy understanding"
      ],
      path: "/support"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">
            Our <span className="text-blue-600">Trading</span> Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-['Inter']">
            Comprehensive Forex education and tools designed to transform your trading journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-['Plus_Jakarta_Sans']">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow font-['Inter']">
                {service.shortDescription}
              </p>
              
              <ul className="mb-4 text-gray-700 text-sm space-y-2 font-['Inter']">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto space-y-3">
                <div className="flex justify-between items-center">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-bold font-['Inter']">
                    {service.price}
                  </span>
                  <button 
                    onClick={() => handleLearnMoreClick(service.path)}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors text-sm font-semibold font-['Inter'] group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;