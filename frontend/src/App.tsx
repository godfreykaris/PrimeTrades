import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TrainingCourse from './pages/TrainingCourse';
import Mentorship from './pages/Mentorship';
import Signals from './pages/Signals';
import LiveTrading from './pages/LiveTrading';
import PsychologyCoaching from './pages/PsychologyCoaching';
import Support from './pages/Support';
import './index.css';

function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          entry.target.classList.add('show');
          if (entry.target.classList.contains('animated-card')) {
            const delay = entry.target.classList.contains('delay-0') ? 300 :
                         entry.target.classList.contains('delay-1') ? 600 : 900;
            entry.target.style.transitionDelay = `${delay}ms`;
          }
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
      if (el instanceof HTMLElement) observer.observe(el);
    });
    document.querySelectorAll('.animated-card').forEach(card => {
      if (card instanceof HTMLElement) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/training-course" element={<TrainingCourse />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/signals" element={<Signals />} />
          <Route path="/live-trading" element={<LiveTrading />} />
          <Route path="/psychology-coaching" element={<PsychologyCoaching />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;