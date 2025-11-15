import React, { useState } from 'react';
import { Phone, MessageCircle, Instagram, Mail, Video } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const getServiceName = (serviceValue: string): string => {
    switch (serviceValue) {
      case 'training': return 'Forex Training Course ($50)';
      case 'mentorship': return 'Forex Mentorship Program ($20)';
      case 'signals': return 'Market Signals Subscription ($20/month)';
      case 'support': return 'General Inquiry';
      default: return 'General Inquiry';
    }
  };

  const redirectToWhatsApp = (data: FormData) => {
    const serviceName = getServiceName(data.service);
    
    const whatsappMessage = `Hello PRIMETRADES FOREX ACADEMY! 

I'm interested in your services and would like to get started:

*Name:* ${data.name}
*Email:* ${data.email}
*Service:* ${serviceName}
*Message:* ${data.message}

I'm ready to start my trading journey! Please provide me with more information.`;

    // URL encode the message
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp phone number
    const phoneNumber = '254745707731';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    
    
    // Redirect to WhatsApp with pre-filled message
    redirectToWhatsApp(formData);
    
    // Clear the form
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">
            Join Our <span className="text-blue-600">Academy</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-['Inter']">
            Start your trading journey with expert guidance and comprehensive support
          </p>
        </div>

        {/* Client Support Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-['Plus_Jakarta_Sans']">
            CLIENT SUPPORT & CONTACT INFORMATION
          </h3>
          <div className="space-y-4 text-gray-700 font-['Inter'] mb-8">
            <p>
              At PRIMETRADES FOREX ACADEMY, your success is our top priority. We're more than just a 
              Forex learning platform — we're your trading family. Our support team is dedicated to 
              providing you with fast, friendly, and professional assistance to make sure you never 
              feel lost in your trading journey.
            </p>
            <p>
              Whether you need help joining our mentorship program, subscribing to our market signals, 
              setting up your trading account, or understanding market strategies — we're here for you 
              every step of the way.
            </p>
          </div>

          {/* Contact Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <MessageCircle className="w-6 h-6 text-green-500" />
              <div>
                <div className="font-semibold text-gray-900 font-['Inter']">WhatsApp</div>
                <div className="text-gray-600">+254 745 707 731</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <Phone className="w-6 h-6 text-blue-500" />
              <div>
                <div className="font-semibold text-gray-900 font-['Inter']">Telephone</div>
                <div className="text-gray-600">+254 745 122 871</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <Instagram className="w-6 h-6 text-pink-500" />
              <div>
                <div className="font-semibold text-gray-900 font-['Inter']">Instagram</div>
                <div className="text-gray-600">@ephramoh_fx</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <Video className="w-6 h-6 text-red-500" />
              <div>
                <div className="font-semibold text-gray-900 font-['Inter']">TikTok</div>
                <div className="text-gray-600">@ephramoh_fx</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors md:col-span-2">
              <Mail className="w-6 h-6 text-yellow-500" />
              <div>
                <div className="font-semibold text-gray-900 font-['Inter']">Email</div>
                <div className="text-gray-600">mainaephraim708@gmail.com</div>
                <div className="text-gray-600">ephramohfx@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="text-gray-600 text-sm bg-white p-4 rounded-lg border border-gray-200 font-['Inter']">
            <p className="font-semibold mb-2">Telegram: PRIMETRADES FOREX ACADEMY</p>
            <p>Our support team is available Monday to Saturday, offering real-time responses and personalized guidance.</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col bg-white border border-gray-200 rounded-2xl p-8 gap-6 shadow-lg">
          <div>
            <label htmlFor="name" className="block text-gray-900 font-semibold mb-2 font-['Inter']">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="w-full border border-gray-300 p-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-['Inter']"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-900 font-semibold mb-2 font-['Inter']">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full border border-gray-300 p-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-['Inter']"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-gray-900 font-semibold mb-2 font-['Inter']">
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-['Inter']"
            >
              <option value="">Select a service</option>
              <option value="training">Forex Training Course ($50)</option>
              <option value="mentorship">Forex Mentorship Program ($20)</option>
              <option value="signals">Market Signals Subscription ($20/month)</option>
              <option value="support">General Inquiry</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-900 font-semibold mb-2 font-['Inter']">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about your trading goals and how we can help you..."
              required
              className="w-full border border-gray-300 p-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none font-['Inter']"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-['Plus_Jakarta_Sans'] text-lg"
          >
            Submit
          </button>

          <p className="text-center text-gray-600 text-sm font-['Inter'] mt-4">
            After submitting, you'll be redirected to WhatsApp to send your message directly to our team
          </p>
        </form>

        {/* Final Call to Action */}
        <div className="text-center mt-12 text-gray-700 font-['Inter']">
          <p className="text-xl font-semibold mb-4 text-gray-900 font-['Plus_Jakarta_Sans']">
            Join our ever-growing community of traders who are not just learning how to trade but mastering the art of consistency and financial independence.
          </p>
          <p className="mb-4">
            At PRIMETRADES FOREX ACADEMY, we combine education, mentorship, and real market experience to help you become the trader you've always dreamed of.
          </p>
          <p className="text-blue-600 font-bold text-lg font-['Plus_Jakarta_Sans']">
            Reach out today — let's help you learn, trade, and prosper!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;