import React, { useState, useEffect } from 'react';

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      text: "The Forex Training Course transformed my understanding of the markets. From beginner to confident trader in just weeks!",
      author: "Sarah M.",
      role: "Course Graduate"
    },
    {
      text: "PrimeTrades' market signals are incredibly accurate. The $20 monthly subscription has been my best trading investment.",
      author: "Mike T.",
      role: "Signal Subscriber"
    },
    {
      text: "The one-on-one mentorship gave me the confidence to trade live accounts. The personal guidance is priceless!",
      author: "David K.",
      role: "Mentorship Student"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">
            What Our <span className="text-blue-600">Students</span> Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-['Inter']">
            Hear from traders who transformed their skills and achieved consistent results
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-x-auto hide-scrollbar py-8">
            <div className="flex gap-8 px-8 min-w-max">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-80 md:w-96 bg-white border-2 rounded-xl p-8 shadow-lg transition-all duration-500 ease-in-out ${
                    index === activeIndex 
                      ? 'opacity-100 scale-100 border-blue-500 shadow-xl' 
                      : 'opacity-60 scale-95 border-gray-200'
                  }`}
                >
                  <div className="text-blue-500 text-4xl mb-4">"</div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed italic font-['Inter']">
                    {testimonial.text}
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <strong className="text-gray-900 block text-lg font-semibold font-['Plus_Jakarta_Sans']">
                      {testimonial.author}
                    </strong>
                    <span className="text-blue-600 text-sm font-medium font-['Inter']">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;