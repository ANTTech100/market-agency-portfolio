'use client';

import { useState } from 'react';
import { Award, BookOpen, Users, Building, GraduationCap, TrendingUp, Globe, ChevronRight, ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timeline = [
    {
      year: 'Early Career',
      role: 'Marketing Manager',
      company: 'Sant Meditech',
      description: 'Started journey in healthcare marketing, laying foundation for strategic thinking',
      icon: Building
    },
    {
      year: 'Growth Phase',
      role: 'Marcom Manager',
      company: 'HCG Health Care Global',
      description: 'Honed strategic marketing and management skills in healthcare sector',
      icon: TrendingUp
    },
    {
      year: 'Leadership Era',
      role: 'Head of Operations',
      company: 'Vasan Eye Care & Health-sprint',
      description: 'Led teams and drove innovation as Head of Bangalore Operations and Marketing',
      icon: Users
    },
    {
      year: 'Entrepreneurial Success',
      role: 'Founder',
      company: 'Max Medi Support (MMS)',
      description: 'Founded MMS, achieved 7.75Cr turnover in under 3 years, acquired by Kemwell Pharma',
      icon: Award
    },
    {
      year: 'Current',
      role: 'Founder & Mentor',
      company: 'Virtual Closer & Multiple Ventures',
      description: 'Leading India\'s only GST-registered closing firm and mentoring 37+ startups',
      icon: Globe
    }
  ];

  const expertise = [
    {
      title: 'Business Strategy',
      description: 'Strategic planning and execution for scalable business growth',
      icon: TrendingUp,
      skills: ['Market Analysis', 'Growth Strategy', 'Business Modeling', 'Strategic Planning']
    },
    {
      title: 'Sales Closing',
      description: 'Ancient Vedic techniques combined with modern sales psychology',
      icon: Users,
      skills: ['Vedic Closing Techniques', 'Pain Point Identification', 'Deal Structuring', 'Negotiation']
    },
    {
      title: 'Mentorship & Coaching',
      description: 'Empowering entrepreneurs and businesses to achieve excellence',
      icon: GraduationCap,
      skills: ['Startup Mentoring', 'Leadership Coaching', 'Team Building', 'Performance Enhancement']
    },
    {
      title: 'Brand Strategy',
      description: 'Creating compelling brand narratives that resonate with audiences',
      icon: BookOpen,
      skills: ['Brand Positioning', 'Content Strategy', 'Digital Marketing', 'Brand Development']
    }
  ];

  const philosophyPrinciples = [
    {
      title: 'Ancient Wisdom, Modern Application',
      description: 'Leveraging time-tested Vedic principles to solve contemporary business challenges'
    },
    {
      title: 'Inclusive Growth',
      description: 'Empowering people from all backgrounds, including homemakers and businesswomen'
    },
    {
      title: 'Economic Empowerment',
      description: 'Contributing to individual financial independence and India\'s economic growth'
    },
    {
      title: 'Skill-Based Success',
      description: 'Belief that closing skills are crucial for business success, regardless of educational background'
    }
  ];

  const recognitions = [
    {
      title: 'Governor of Karnataka Award',
      subtitle: 'Best Emerging Business Mentor 2022-23',
      description: 'Recognized for outstanding contribution to business mentorship in Bangalore'
    },
    {
      title: 'Amazon Best-Selling Author',
      subtitle: 'UM3: Unlimited Money Making Machine',
      description: 'Published insights on wealth creation and business strategies'
    },
    {
      title: 'TEDx Speaker',
      subtitle: 'Global Stage Recognition',
      description: 'Shared expertise on business strategy and entrepreneurship'
    },
    {
      title: 'International Memberships',
      subtitle: 'Global Business Networks',
      description: 'Director at World of Marketing, Member of ERNI, Strategy Consultant for Swiss & Austrian Universities'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button className="flex items-center space-x-2 hover:text-gray-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span onClick={() => window.history.back()}>Back to Home</span>
            </button>
            <div className="text-2xl font-bold">
              Dr. <span className="text-black">Amit Nath</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About 
              <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                {' '}Dr. Amit Nath
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A visionary entrepreneur, mentor, and strategist dedicated to empowering individuals 
              and businesses through ancient wisdom and modern innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold mb-6">The Journey</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Dr. Amit Nath's journey is a testament to the power of combining traditional wisdom 
                  with modern business acumen. With a DBA degree from California University, his academic 
                  foundation is as solid as his practical experience is extensive.
                </p>
                <p>
                  From his early days at St. Johns Medical College Bangalore to founding multiple 
                  successful ventures, Dr. Nath has consistently demonstrated an ability to identify 
                  opportunities and create value where others see challenges.
                </p>
                <p>
                  His philosophy centers on the belief that ancient Vedic techniques, when applied to 
                  modern business contexts, can create unprecedented success. This unique approach has 
                  earned him recognition as one of India's most innovative business mentors.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <GraduationCap className="w-8 h-8 text-black" />
                    <div>
                      <h3 className="text-xl font-semibold">Education</h3>
                      <p className="text-gray-600">DBA, California University</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Award className="w-8 h-8 text-black" />
                    <div>
                      <h3 className="text-xl font-semibold">Recognition</h3>
                      <p className="text-gray-600">Governor of Karnataka Award Winner</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Building className="w-8 h-8 text-black" />
                    <div>
                      <h3 className="text-xl font-semibold">Current Role</h3>
                      <p className="text-gray-600">Founder, Virtual Closer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Globe className="w-8 h-8 text-black" />
                    <div>
                      <h3 className="text-xl font-semibold">Global Reach</h3>
                      <p className="text-gray-600">23+ International Agencies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Career Timeline</h2>
            <p className="text-xl text-gray-600">A journey of growth, leadership, and innovation</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-gray-300 to-transparent"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <div key={index} className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className={`bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                        activeTimeline === index ? 'shadow-xl border-gray-300' : ''
                      }`} onClick={() => setActiveTimeline(index)}>
                        <div className="flex items-center space-x-3 mb-3">
                          <Icon className="w-6 h-6 text-black" />
                          <h3 className="text-xl font-semibold">{item.year}</h3>
                        </div>
                        <h4 className="text-lg font-medium text-gray-700 mb-2">{item.role}</h4>
                        <p className="text-gray-600 font-medium mb-3">{item.company}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Areas of Expertise</h2>
            <p className="text-xl text-gray-600">Core competencies driving business transformation</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-semibold">{area.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                  <div className="space-y-2">
                    {area.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Philosophy & Vision</h2>
            <p className="text-xl text-gray-600">Core principles guiding the mission</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {philosophyPrinciples.map((principle, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Vision for India</h3>
              <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                "To see India reclaim its glory as 'Sone Ki Chidiya' (The Golden Bird) by empowering people with unique closing skills, driving economic prosperity and individual empowerment."
              </blockquote>
              <p className="text-lg text-gray-600">
                This grand vision drives every initiative, every mentorship session, and every business strategy crafted by Dr. Amit Nath.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Recognition & Awards</h2>
            <p className="text-xl text-gray-600">Acknowledgments of excellence and impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {recognitions.map((recognition, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{recognition.title}</h3>
                    <h4 className="text-lg text-gray-700 mb-3">{recognition.subtitle}</h4>
                    <p className="text-gray-600 leading-relaxed">{recognition.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands who have benefited from Dr. Amit Nath's unique approach to business growth and success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors">
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              Dr. <span className="text-black">Amit Nath</span>
            </div>
            <div className="text-gray-600 text-center md:text-right">
              <p>© 2024 Dr. Amit Nath. All rights reserved.</p>
              <p className="text-sm">Building India's Future, One Business at a Time</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}