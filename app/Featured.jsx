'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Star, TrendingUp, Globe, Award } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mediaLogos = [
    // Row 1 - Major Publications
    { name: 'ANI', category: 'News Agency', color: 'bg-red-600' },
    { name: 'Business Standard', category: 'Business', color: 'bg-blue-600' },
    { name: 'ThePrint', category: 'Digital News', color: 'bg-green-600' },
    { name: 'Outlook', category: 'Magazine', color: 'bg-purple-600' },
    { name: 'Ahmedabad Mirror', category: 'Newspaper', color: 'bg-indigo-600' },
    { name: 'Central News of India', category: 'News', color: 'bg-red-500' },
    { name: 'Chronicle Today', category: 'Daily', color: 'bg-blue-500' },
    { name: 'Latest LY', category: 'Digital', color: 'bg-green-500' },
    
    // Row 2 - Digital & Tech Media
    { name: 'Startuptalky', category: 'Startup', color: 'bg-orange-600' },
    { name: 'Inc42', category: 'Business', color: 'bg-red-600' },
    { name: 'YourStory', category: 'Entrepreneur', color: 'bg-blue-600' },
    { name: 'The Hindu', category: 'Newspaper', color: 'bg-purple-600' },
    { name: 'Times of India', category: 'Newspaper', color: 'bg-indigo-600' },
    { name: 'Indian Express', category: 'Daily', color: 'bg-red-500' },
    { name: 'Republic TV', category: 'Television', color: 'bg-blue-500' },
    { name: 'The Economic Times', category: 'Business', color: 'bg-green-500' },
    
    // Row 3 - Regional & Specialized
    { name: 'Asian News', category: 'Regional', color: 'bg-yellow-600' },
    { name: 'Republic', category: 'News', color: 'bg-red-600' },
    { name: 'The Pioneer', category: 'Daily', color: 'bg-blue-600' },
    { name: 'Millennium Post', category: 'English Daily', color: 'bg-green-600' },
    { name: 'Mid Day', category: 'Tabloid', color: 'bg-purple-600' },
    { name: 'Deccan Chronicle', category: 'Newspaper', color: 'bg-indigo-600' },
    { name: 'Free Press Journal', category: 'Daily', color: 'bg-red-500' },
    { name: 'The Statesman', category: 'English Daily', color: 'bg-blue-500' },
    
    // Row 4 - International & Digital
    { name: 'Reuters', category: 'International', color: 'bg-orange-600' },
    { name: 'Press Trust of India', category: 'News Agency', color: 'bg-red-600' },
    { name: 'IANS', category: 'News Service', color: 'bg-blue-600' },
    { name: 'UNI', category: 'News Agency', color: 'bg-green-600' },
    { name: 'DNA', category: 'Daily', color: 'bg-purple-600' },
    { name: 'Hindustan Times', category: 'Newspaper', color: 'bg-indigo-600' },
    { name: 'News18', category: 'Digital News', color: 'bg-red-500' },
    { name: 'NDTV', category: 'Television', color: 'bg-blue-500' },
    
    // Row 5 - Business & Finance
    { name: 'Financial Express', category: 'Business', color: 'bg-green-600' },
    { name: 'Business Today', category: 'Business', color: 'bg-blue-600' },
    { name: 'Forbes India', category: 'Business', color: 'bg-red-600' },
    { name: 'Bloomberg Quint', category: 'Finance', color: 'bg-purple-600' },
    { name: 'Moneycontrol', category: 'Finance', color: 'bg-indigo-600' },
    { name: 'Mint', category: 'Business', color: 'bg-green-500' },
    { name: 'Business Line', category: 'Business', color: 'bg-red-500' },
    { name: 'Capital Market', category: 'Finance', color: 'bg-blue-500' },
    
    // Row 6 - Regional & Lifestyle
    { name: 'Mumbai Mirror', category: 'City Daily', color: 'bg-yellow-600' },
    { name: 'Pune Mirror', category: 'City Daily', color: 'bg-orange-600' },
    { name: 'Bangalore Mirror', category: 'City Daily', color: 'bg-red-600' },
    { name: 'Delhi Times', category: 'Lifestyle', color: 'bg-blue-600' },
    { name: 'Bombay Times', category: 'Lifestyle', color: 'bg-green-600' },
    { name: 'Calcutta Times', category: 'Lifestyle', color: 'bg-purple-600' },
    { name: 'Chennai Times', category: 'Lifestyle', color: 'bg-indigo-600' },
    { name: 'Hyderabad Times', category: 'Lifestyle', color: 'bg-red-500' },
  ];

  const stats = [
    { number: '50+', label: 'Media Publications', icon: Globe },
    { number: '100M+', label: 'Combined Readership', icon: TrendingUp },
    { number: '5+', label: 'Years of Coverage', icon: Award },
    { number: '25+', label: 'Interviews Given', icon: Star }
  ];

  const featuredArticles = [
    {
      title: "Revolutionary Closing Techniques Transform Indian Business Landscape",
      publication: "Business Standard",
      date: "2024",
      category: "Business Strategy",
      excerpt: "Dr. Amit Nath's unique approach combining ancient Vedic wisdom with modern sales techniques has revolutionized how businesses approach client acquisition."
    },
    {
      title: "From 0 to 7.75 Crores: The MMS Success Story",
      publication: "The Economic Times",
      date: "2023",
      category: "Entrepreneurship",
      excerpt: "The remarkable journey of Max Medi Support under Dr. Amit Nath's leadership, achieving unprecedented growth and successful acquisition."
    },
    {
      title: "Governor's Award Winner Shares Secrets of Business Mentorship",
      publication: "Times of India",
      date: "2023",
      category: "Awards & Recognition",
      excerpt: "Karnataka's Best Emerging Business Mentor reveals his philosophy on empowering entrepreneurs across diverse backgrounds."
    },
    {
      title: "TEDx Talk: Ancient Wisdom Meets Modern Business",
      publication: "Inc42",
      date: "2024",
      category: "Innovation",
      excerpt: "Dr. Amit Nath's groundbreaking TEDx presentation on integrating Vedic principles into contemporary business practices."
    }
  ];

  // Create multiple rows for infinite scrolling effect
  const createScrollingRow = (items, direction = 'left', speed = 'slow') => {
    const duplicatedItems = [...items, ...items, ...items];
    return (
      <div className={`flex ${direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left'} ${speed === 'fast' ? 'animate-scroll-fast' : 'animate-scroll-slow'}`}>
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex-shrink-0 mx-4 group cursor-pointer"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 min-w-[200px] group-hover:scale-105">
              <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <span className="text-white font-bold text-lg">
                  {item.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-semibold text-white mb-1 truncate">{item.name}</h3>
              <p className="text-black text-sm">{item.category}</p>
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen  bg-white text-black overflow-hidden">
    
      {/* Hero Section */}
      <section className="pt-24 pb-16  relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255, 255, 255, 1),transparent)]"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Featured
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text ">
                {' '}Coverage
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-black-400 mb-8 max-w-4xl mx-auto leading-relaxed">
              Dr. Amit Nath's expertise and insights have been featured across leading publications, 
              reaching millions of readers worldwide with transformative business strategies.
            </p>
            
            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                      <Icon className="w-8 h-8 mx-auto mb-4 text-black group-hover:text-black transition-colors" />
                      <div className="text-3xl font-bold mb-2">{stat.number}</div>
                      <div className="text-black text-sm">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Media Logos */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute pointer-events-none"></div>
        
        <div className="space-y-8">
          {/* Row 1 - Scrolling Left */}
          <div className="overflow-hidden">
            {createScrollingRow(mediaLogos.slice(0, 8), 'left', 'slow')}
          </div>
          
          {/* Row 2 - Scrolling Right */}
          <div className="overflow-hidden">
            {createScrollingRow(mediaLogos.slice(8, 16), 'right', 'slow')}
          </div>
          
          {/* Row 3 - Scrolling Left Fast */}
          <div className="overflow-hidden">
            {createScrollingRow(mediaLogos.slice(16, 24), 'left', 'fast')}
          </div>
          
          {/* Row 4 - Scrolling Right */}
          <div className="overflow-hidden">
            {createScrollingRow(mediaLogos.slice(24, 32), 'right', 'slow')}
          </div>
          
          {/* Row 5 - Scrolling Left */}
          <div className="overflow-hidden">
            {createScrollingRow(mediaLogos.slice(32, 40), 'left', 'slow')}
          </div>
          
          {/* Row 6 - Scrolling Right Fast */}
          <div className="overflow-hidden">
            {createScrollingRow(mediaLogos.slice(40, 48), 'right', 'fast')}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Notable Features</h2>
            <p className="text-xl text-black">Key articles and interviews that showcase expertise</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={index} className="bg-black/30 border border-white/10 rounded-2xl p-8 hover:bg-black/50 transition-all duration-300 group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                    {article.category}
                  </span>
                  <ExternalLink className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-200 transition-colors">
                  {article.title}
                </h3>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-black">
                  <span className="font-medium">{article.publication}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                
                <p className="text-black leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="mt-6 flex items-center text-white group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-medium">Read Article</span>
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      {/* Footer */}
    

   
    </div>
  );
}