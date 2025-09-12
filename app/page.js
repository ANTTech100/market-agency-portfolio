'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Award, BookOpen, Users, TrendingUp, Globe, Quote, ArrowRight } from 'lucide-react';
import FeaturedPage from './Featured';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    { number: '7.75Cr', label: 'Turnover Achieved', icon: TrendingUp },
    { number: '37+', label: 'Startups Mentored', icon: Users },
    { number: '23+', label: 'Global Agencies', icon: Globe },
    { number: '10+', label: 'Ventures Founded', icon: Award }
  ];

  const ventures = [
    'Indian Closer (Virtual Indian Closer)',
    'Max Medi Support (MMS)',
    'Spinwild Pvt Ltd',
    'Just Be You Luxury Salon',
    'Pup N Tub',
    'Spinwash',
    'Mentors Institutions',
    'Digital Marketing Gadgets'
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              Dr. <span className="text-black">Amit Nath</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="hover:text-gray-600 transition-colors">Home</a>
              <a href="/about" className="hover:text-gray-600 transition-colors">About</a>
              <a href="#achievements" className="hover:text-gray-600 transition-colors">Achievements</a>
              <a href="#ventures" className="hover:text-gray-600 transition-colors">Ventures</a>
              <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm">
                  🏆 Governor of Karnataka Award Winner 2022-23
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Dr. Amit Nath
                  <br />
                 
                </h1>
                <div className="space-y-2 text-xl lg:text-2xl text-gray-700">
                  <p>Business Strategist • TEDx Speaker</p>
                  <p>Amazon Best-Selling Author</p>
                  <p>Founder of Virtual Closer</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Empowering entrepreneurs and businesses through ancient Vedic closing techniques, 
                  driving India towards becoming 'Sone Ki Chidiya' once again.
                </p>
                <div className="flex space-x-4">
                  <button className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                    Explore Work
                  </button>
                  <button className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-transparent rounded-full"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-6xl text-gray-400">
                    <img src="/image.png" alt="Dr. Amit Nath" className="w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-black rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">About Dr. Amit Nath</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A visionary leader combining ancient wisdom with modern business strategies
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">Educational Excellence</h3>
                    <p className="text-gray-600">DBA degree from California University, combining academic rigor with practical expertise.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">Corporate Journey</h3>
                    <p className="text-gray-600">Distinguished career spanning Sant Meditech, HCG Health Care Global, and Vasan Eye Care.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">Entrepreneurial Success</h3>
                    <p className="text-gray-600">Founded MMS with 7.75Cr turnover, successfully acquired by Kemwell Pharma.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <div className="mb-6">
                <Quote className="w-8 h-8 text-gray-400 mb-4" />
                <blockquote className="text-lg italic text-gray-700 leading-relaxed">
                  "My aim is to make everyone skilled in Closing by using the unbeatable Ancient Vedic Techniques so that they become experts in identifying pain in any business, helping businesses scale and grow, enabling financial independence for women and men across age groups, and contributing to India's economic growth as much as we can."
                </blockquote>
                <cite className="text-black font-semibold mt-4 block">- Dr. Amit Nath</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">Key Achievements</h2>
            <p className="text-xl text-gray-600">Numbers that speak of impact and excellence</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                    <Icon className="w-8 h-8 mx-auto mb-4 text-gray-600 group-hover:text-black transition-colors" />
                    <div className="text-3xl font-bold mb-2 text-black">{achievement.number}</div>
                    <div className="text-gray-600">{achievement.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Award className="w-8 h-8 mb-4 text-black" />
              <h3 className="text-xl font-semibold mb-2 text-black">Governor's Award</h3>
              <p className="text-gray-600">Best Emerging Business Mentor of the Year 2022-23 by Governor of Karnataka</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <BookOpen className="w-8 h-8 mb-4 text-black" />
              <h3 className="text-xl font-semibold mb-2 text-black">Amazon Bestseller</h3>
              <p className="text-gray-600">Author of "UM3" (Unlimited Money Making Machine) - Amazon Best-Selling Book</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Users className="w-8 h-8 mb-4 text-black" />
              <h3 className="text-xl font-semibold mb-2 text-black">TEDx Speaker</h3>
              <p className="text-gray-600">Sharing insights on business strategy and entrepreneurship on global platforms</p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedPage />

      {/* Ventures Section */}
      <section id="ventures" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">Ventures & Companies</h2>
            <p className="text-xl text-gray-600">Building businesses that make a difference</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventures.map((venture, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-black">{venture}</h3>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">Let's Connect</h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to transform your business with proven strategies?
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">Book a Consultation</h3>
              <p className="text-gray-600 mb-6">Get personalized business strategy guidance</p>
              <button className="w-full px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                Schedule Meeting
              </button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">Join Closing Program</h3>
              <p className="text-gray-600 mb-6">Learn ancient Vedic closing techniques</p>
              <button className="w-full px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-black">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="text-gray-600">
            <p>📧 Contact: info@virtualcloser.com</p>
            <p>🇮🇳 Based in India, Serving Globally</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
          <p>© 2024 Dr. Amit Nath. All rights reserved. Building India's Future.</p>
        </div>
      </footer>
    </div>
  );
}