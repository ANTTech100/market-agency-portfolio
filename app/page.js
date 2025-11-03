'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Award, TrendingUp, Globe, Quote, ArrowRight, Check, ChevronRight } from 'lucide-react';
import TestimonialsPage from './Testimonial';
import MediaCoverageDisplay from './Featured';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const objections = [
    {
      title: "I've joined too many programs.",
      content: "Unlike other programs that overwhelm you with information, DADA's system provides a clear, actionable path with personalized guidance. We focus on execution, not just theory."
    },
    {
      title: "I don't have time.",
      content: "Our system is designed for busy professionals. We help you optimize your existing time and efforts, not add more to your plate. Most clients see results with just 30 minutes of focused work daily."
    },
    {
      title: "I'm not sure if this will work for me.",
      content: "That's why we have a qualification process. We only work with coaches and consultants we know we can help. If you qualify, it's because we've identified specific opportunities in your business."
    },
    {
      title: "It seems expensive.",
      content: "Our clients typically see a return on their investment within the first 30-60 days. This isn't an expense—it's an investment in your business growth that pays dividends quickly."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">DADA</span>
            </div>
            <div className="flex space-x-8 text-sm font-medium">
              <a href="#hero" className="hover:text-amber-400 transition-colors">Home</a>
              <a href="#program" className="hover:text-amber-400 transition-colors">Program</a>
            </div>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section id="hero" className="min-h-screen relative flex flex-col pt-20 bg-gradient-to-b from-black via-gray-900 to-blue-900" >
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 py-20 gap-12">
          {/* Left Side: Text Block */}
          <div className="md:w-1/2 space-y-8 z-10" style={{marginTop: '-50px'}}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              For Coaches and Consultants Ready to <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Rise</span> —
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
              From No Leads, No Confidence to Daily Wins.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Built by DADA — Mentor for Coaches and Consultants who are ready to transform their practice into a thriving business.
            </p>
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-5 px-10 rounded-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-amber-500/50">
              SEE IF YOU QUALIFY
            </button>
          </div>

          {/* Right Side: Hero Image */}
          <div className="md:w-1/2 z-10" style={{marginTop: '-50px'}}>
           <iframe width="560" height="345" src="https://www.youtube.com/embed/e133BpG6ccA?si=BTFlZO_XtlHNpvtc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
          <p className="mb-2 text-sm text-gray-400">Discover the System</p>
          <ChevronDown size={24} className="text-amber-400" />
        </div>
      </section>

      {/* SECTION 2: PROBLEM IDENTIFICATION */}
      <section className="py-24 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            You're Not Failing Because You Lack...
          </h2>
          <p className="text-center text-gray-600 text-xl mb-16 max-w-3xl mx-auto">
            You've tried courses, funnels, ads, and countless strategies. Yet something's still missing.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="w-full h-[350px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center shadow-lg">
             
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">😓</div>
                  <p className="text-2xl font-bold text-gray-700">Overwhelmed Coach</p>
                  <p className="text-gray-600 mt-2">Stuck in the cycle</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-lg"><span className="text-red-600 font-bold">Overwhelmed by noise</span> — Too many gurus, too many conflicting strategies.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-lg"><span className="text-red-600 font-bold">Tried too many systems</span> — Jumping from one tactic to another without seeing results.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-lg"><span className="text-red-600 font-bold">Lack of clear execution plan</span> — Knowledge without implementation is just information.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-2xl md:text-3xl font-bold max-w-3xl mx-auto">
              You don't need more information — you need a <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Prescription System</span>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: SOLUTION INTRODUCTION */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Clarity Begins When Confusion Ends.
          </h2>
          <p className="text-center text-gray-700 text-xl mb-20 max-w-3xl mx-auto">
            Here's the system that brings everything together.
          </p>

          {/* Center Diagram */}
          <div className="flex justify-center mb-20">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center min-w-[140px] hover:scale-105 transition-transform">
                <h3 className="font-bold text-xl text-red-600">CHAOS</h3>
              </div>
              <ChevronRight className="transform rotate-90 md:rotate-0 text-amber-600" size={32} />
              <div className="bg-white p-8 rounded-xl shadow-lg text-center min-w-[140px] hover:scale-105 transition-transform">
                <h3 className="font-bold text-xl text-blue-600">CLARITY</h3>
              </div>
              <ChevronRight className="transform rotate-90 md:rotate-0 text-amber-600" size={32} />
              <div className="bg-white p-8 rounded-xl shadow-lg text-center min-w-[140px] hover:scale-105 transition-transform">
                <h3 className="font-bold text-xl text-green-600">CONSISTENCY</h3>
              </div>
              <ChevronRight className="transform rotate-90 md:rotate-0 text-amber-600" size={32} />
              <div className="bg-white p-8 rounded-xl shadow-lg text-center min-w-[140px] hover:scale-105 transition-transform">
                <h3 className="font-bold text-xl text-amber-600">SCALING</h3>
              </div>
            </div>
          </div>

          {/* 3 Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Award size={36} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">VORTEX Framework</h3>
              <p className="text-gray-600 text-lg leading-relaxed">The systematic approach to identify your unique value and position it for maximum impact.</p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <TrendingUp size={36} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">R.I.S.E.</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Reverse Invitation Strategy for Expansion - The client acquisition system that works while you sleep.</p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Globe size={36} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">BizMap Framework</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Your personalized roadmap from where you are to where you want to be, with clear milestones.</p>
            </div>
          </div>

          <p className="text-center text-2xl font-bold mt-20 text-gray-800">
            Now see how this system transforms lives.
          </p>
        </div>
      </section>

    

      {/* SECTION 4: PROGRAM INVITATION */}
      <section id="program" className="py-24 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Not Everyone Qualifies to Work with DADA.
          </h2>
          <p className="text-center text-gray-700 text-xl mb-20 max-w-3xl mx-auto">
            But those who do, never look back.
          </p>

          {/* Flow Diagram */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mb-20 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-full shadow-xl text-center w-20 h-20 flex items-center justify-center hover:scale-110 transition-transform">
                <span className="font-bold text-2xl text-white">1</span>
              </div>
              <div className="text-center md:text-left">
                <p className="font-bold text-lg">Fill Application</p>
              </div>
            </div>
            <ChevronRight className="transform rotate-90 md:rotate-0 text-amber-600" size={28} />
            
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-full shadow-xl text-center w-20 h-20 flex items-center justify-center hover:scale-110 transition-transform">
                <span className="font-bold text-2xl text-white">2</span>
              </div>
              <div className="text-center md:text-left">
                <p className="font-bold text-lg">Review</p>
              </div>
            </div>
            <ChevronRight className="transform rotate-90 md:rotate-0 text-amber-600" size={28} />
            
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-full shadow-xl text-center w-20 h-20 flex items-center justify-center hover:scale-110 transition-transform">
                <span className="font-bold text-2xl text-white">3</span>
              </div>
              <div className="text-center md:text-left">
                <p className="font-bold text-lg">Invitation</p>
              </div>
            </div>
            <ChevronRight className="transform rotate-90 md:rotate-0 text-amber-600" size={28} />
            
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-full shadow-xl text-center w-20 h-20 flex items-center justify-center hover:scale-110 transition-transform">
                <span className="font-bold text-2xl text-white">4</span>
              </div>
              <div className="text-center md:text-left">
                <p className="font-bold text-lg">Call</p>
              </div>
            </div>
            <ChevronRight className="transform rotate-90 md:rotate-0 text-amber-600" size={28} />
            
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-full shadow-xl text-center w-20 h-20 flex items-center justify-center hover:scale-110 transition-transform">
                <span className="font-bold text-2xl text-white">5</span>
              </div>
              <div className="text-center md:text-left">
                <p className="font-bold text-lg">Begin</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-16">
            <div className="md:w-1/2 flex justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-6 px-12 rounded-lg transition-all transform hover:scale-105 shadow-2xl text-lg">
                SEE IF YOU QUALIFY →
              </button>
            </div>
            
            <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="font-bold text-2xl mb-6">You're a good fit if you are:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <p className="text-lg">Ready to Execute</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <p className="text-lg">Coachable</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <p className="text-lg">Consistent for 30–40 Days</p>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-center italic mt-12 text-2xl text-gray-700 font-serif">
            "We'll review and invite personally."
          </p>
        </div>
      </section>

      {/* SECTION 5: OBJECTION HANDLING */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            Let's Clear What's Holding You Back.
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {objections.map((objection, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-amber-500 transition-all shadow-xl"
              >
                <button 
                  className="w-full px-8 py-6 text-left font-semibold text-lg flex justify-between items-center hover:bg-gray-800 transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  {objection.title}
                  <ChevronDown 
                    className={`transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''} text-amber-500`} 
                    size={24} 
                  />
                </button>
                {activeAccordion === index && (
                  <div className="px-8 py-6 bg-gray-800/50 border-t border-gray-700">
                    <p className="text-gray-300 text-lg leading-relaxed">{objection.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-6 px-12 rounded-lg transition-all transform hover:scale-105 shadow-2xl text-lg">
              SEE IF YOU QUALIFY →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: CLOSING & LEGACY */}
      <section className="py-24 bg-gradient-to-b from-blue-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-blue-500/10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              I'm not here to sell you information…
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              I'm here to build transformation.
            </p>
            
            <div className="my-12 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-700">
              <Quote className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <p className="text-xl md:text-2xl italic text-gray-200 leading-relaxed">
                "When you step in, you join a family of coaches who've gone from confusion to confidence, from struggle to scaling."
              </p>
            </div>

            <div className="py-8">
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full">
                <p className="text-3xl md:text-4xl font-bold text-black">500+ Crores Closed</p>
              </div>
              <p className="text-gray-400 mt-4">Through This System</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-6 px-12 rounded-lg transition-all transform hover:scale-105 shadow-2xl text-lg">
                SEE IF YOU QUALIFY →
              </button>
              <button className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-bold py-6 px-12 rounded-lg transition-all text-lg">
                LET'S BEGIN →
              </button>
            </div>
          </div>
        </div>
      </section>
        {/* Media Coverage */}
      <MediaCoverageDisplay />

      {/* Testimonials */}
      <TestimonialsPage />

      {/* Footer */}
      <footer className="py-12 bg-black text-center border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <p className="text-gray-400 text-lg">© {new Date().getFullYear()} Dr. Amit Nath (DADA) - The Mentor for Coaches & Consultants. All rights reserved.</p>
          <p className="text-amber-500 font-semibold text-xl italic">For those ready to rise — your next level begins.</p>
          <div className="flex justify-center gap-6 mt-6">
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}