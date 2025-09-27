import React from 'react';
import { Star, Quote, User, Briefcase, Calendar } from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sandeep Karan Singh",
      role: "Professional",
      date: "1st",
      content: "DADA YOU R A Man with the Big brain an Big heart for every needed specially the closes 🙏",
      likes: 1,
      replies: 1
    },
    {
      id: 2,
      name: "Ganesha & Georgett",
      role: "Professional Coach Cum Behavioural Trainer",
      date: "1st",
      content: "Amazing style - You can change your way and bring success in 2025 for you and your company !",
      likes: 1,
      replies: 1
    },
    {
      id: 3,
      name: "Bani Kumar Maity",
      role: "Insurance Agent at LIC",
      date: "3rd+",
      content: "Extremely overwhelming, it seems like all left out stocks of 2024 Dada has given to us. Even much more thing he has in his basket to give. Anyone who want to grow in his/her business multifold DADA can make their God Mode On.",
      likes: 1,
      replies: 2
    },
    {
      id: 4,
      name: "Sanjay Kumar",
      role: "Area Business Manager in HDFC Life Insurance",
      date: "2nd",
      content: "Highly recommended",
      likes: 1,
      replies: 2
    },
    {
      id: 5,
      name: "Srinivasa Rao Kotamraju",
      role: "AWS Solutions Architect |Senior Cloud SRE | Cloud Security | DevOps",
      date: "1st",
      content: "Thank you for the informative session! It's clear that you put a lot of effort into researching the content and distilling it down to the most important insights on current trends. Your expertise is much appreciated!!",
      likes: 1,
      replies: 1
    },
    {
      id: 6,
      name: "Satyavrat Singh",
      role: "Software Engineer 2(R&D) at Dell EMC",
      date: "1st",
      content: "It was powerful like other monthly meetings. Thanks Dada for conducting such meetings full of knowledge sharing by GOD.",
      likes: 1,
      replies: 1
    },
    {
      id: 7,
      name: "Mamta Mathe",
      role: "Social Media Manager",
      date: "2nd",
      content: "Met Dada. You can handle your posts, comments, newsletters and social media -so, you can focus on more important things. Let's grow your reach. DM 'CREATE'. October 2, 2024. Amit Nath, senior to Mamta directly. Amit Nath is a great leader who knows a lot about teaching and helping people start their own businesses. He's also a good writer, knows how to build brands, and is a smart investor. He's a great person to know and work with.",
      category: "recommendation"
    },
    {
      id: 8,
      name: "RANJIT PADMAKUMAR",
      role: "Executive Director-International Sales",
      date: "3rd",
      content: "Amit's exceptional mentorship and strategic guidance have been instrumental in shaping the careers of many. His keen eye for innovative trends and effective communication make him an invaluable asset. As a skilled influencer and thought leader, Amit has consistently demonstrated his ability to inspire and empower those around him. His mentorship has been transformative for countless professionals. I have personally had very invigorating knowledge exchange sessions with him.",
      category: "recommendation"
    },
    {
      id: 9,
      name: "Sanobar Khwaja Syed",
      role: "Product Owner at Codewane | Helping Businesses Build Impactful Digital Solutions",
      date: "3rd",
      content: "It's not often when you can find yourself in the state of curiosity, that exactly how I felt after speaking with Dr. Amit Nath. Our 10min call went upto and hour indulging into some deep thoughts, and restructuring few unhealthy belief system. Mr. Nath is blessed with great knowledge and experience. Like I said I curious to know more and hope universe will unfold itself the beautiful knowledge he possesses.",
      category: "recommendation"
    },
    {
      id: 10,
      name: "Durga Karthik",
      role: "SaaS Content and copywriter| Crafting compelling copy that drives engagement",
      date: "2nd",
      content: "I will consider you because you are a mom of a 2.5-year-old toddler.' This is what he told me in my discovery call with him. In a world where people in leadership positions often feel skeptical about working with new moms, he showed immense trust in me, which touched me a lot. Apart from this, he is a man of lots of energy, enthusiasm, and dreams. I am so looking forward to working with him. Fingers crossed.",
      category: "recommendation"
    },
    {
      id: 11,
      name: "Shyam U",
      role: "Educator",
      date: "3rd",
      content: "Your magic touch turns ordinary into extraordinary. Grateful for your eye opening practical oriented sessions to be able to monetize even out of thin air where for me was even unimaginable to think about. A recommendation! Absolutely! Dr. Amit Nath each and all clients.",
      category: "recommendation"
    },
    {
      id: 12,
      name: "Krishnaraj Venkataraman",
      role: "Enterprise Manager EMEA & APAC @ ICCG | Business Professional",
      date: "3rd",
      content: "Amit Mohammed 'Dada' for his friend, is an amazing human being who acts as a leader. He has been instrumental in changing the mindset in every aspect. He has helped me understand my mindset and this has helped me introspect myself. He is a good catalyst in my life and his passion can help achieve dreams which has been an wishlist. Keep doing the good work Dada. Always with you!!",
      category: "recommendation"
    },
    {
      id: 13,
      name: "Sachin Hebbar",
      role: "Integrative Nutrition Health Coach| Founder Of Self Healers Hub| Best-selling Author",
      date: "3rd",
      content: "Amit is an amazing human being who has helped me transform my complete mindset in sales and marketing. he has helped me go from ground zero and connected me to correct mentors at the right time. He is a great catalyst to my growth. thanks Amit Dada 🙏🙏 Grateful to share this recommendation about you! Thank You ❤️ 🙏",
      category: "recommendation"
    },
    {
      id: 14,
      name: "Bhavin Karya",
      role: "Retail branding Simplified",
      date: "3rd",
      content: "Amit has exceptional management skills. His knowledge in the field of marketing, lead generation, lead closure, scaling up a business is amazing. He loves business processes and has a knack for them. Getting to know him is an honour.",
      category: "recommendation"
    },
    {
      id: 15,
      name: "Roger .C. Aranzamendi",
      role: "High ticket closer",
      date: "3rd",
      content: "Amit Nath is one the greatest mentor that you can learn of - so he is a well - performing , intelligent , heart pure , connector , curator , great leader all what he does is perfectly well defined . He is a master in what he does . You can trust in him .",
      category: "recommendation"
    },
    {
      id: 16,
      name: "Sonal Gaba",
      role: "Senior Project Manager at Myndful",
      date: "3rd",
      content: "Dr Amit, fondly Dada is a great visionary - He has amazing energy and charisma - He is very knowledgeable . Well read and has deep insights about business and people . Best wishes to him in health, happiness , joy in his endeavors .",
      category: "recommendation"
    },
    {
      id: 17,
      name: "Satya Datta",
      role: "Consulting Editor, Source Monthly, Author, Source Media, Digital and Design Consultant",
      date: "3rd",
      content: "I am delighted to write a LinkedIn recommendation for Dr. Amit Nath (fondly called as Dada), a truly exceptional professional in the field of business. I have had the privilege of being a part of his program, FEST, and it has been a transformative experience under his guidance. Dr. Nath is not just a teacher and mentor; he is a visionary leader with a profound understanding of business closing strategies. His depth of knowledge in the field is unparalleled, and his ability to convey complex concepts in a clear and engaging manner is truly commendable.",
      category: "recommendation"
    },
    {
      id: 18,
      name: "Viresh Gendle",
      role: "Data Scientist | Founder of Krishnav Tech",
      date: "3rd",
      content: "I am having the privilege of benefiting from Dr. Amit Nath's FEST initiative, not just in understanding finance but in life. His ability to connect various aspects of knowledge and provide practical advice for business is truly exceptional. If you're looking for someone who understands the complexities of life and can guide you in multiple dimensions, I highly recommend connecting with DADA.",
      category: "recommendation"
    }
  ];

  const regularTestimonials = testimonials.filter(t => !t.category);
  const recommendations = testimonials.filter(t => t.category === 'recommendation');

  return (
    <div className="min-h-screen bg-white">
 

      {/* Regular Testimonials Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-2 text-center">Client Feedback</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {regularTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white border-2 border-black rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 text-sm flex items-center mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {testimonial.date}
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-300" />
                  <p className="text-black leading-relaxed pl-6 pr-2">
                    {testimonial.content}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-gray-600">
                      <Star className="w-4 h-4 mr-1" />
                      {testimonial.likes} Like{testimonial.likes !== 1 ? 's' : ''}
                    </span>
                    <span className="text-gray-600">
                      {testimonial.replies} Repl{testimonial.replies !== 1 ? 'ies' : 'y'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations Section */}
        <div>
          <div className="bg-black text-white py-3 px-6 rounded-lg inline-block mb-12">
            <h2 className="text-3xl font-bold">RECOMMENDATIONS</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {recommendations.map((recommendation) => (
              <div key={recommendation.id} className="bg-white border-2 border-black rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black text-lg">{recommendation.name}</h3>
                    <p className="text-gray-600 text-sm flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {recommendation.role}
                    </p>
                    <p className="text-gray-500 text-sm flex items-center mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {recommendation.date}
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-300" />
                  <p className="text-black leading-relaxed pl-6 pr-2">
                    {recommendation.content}
                  </p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Join hundreds of satisfied clients who have experienced remarkable growth and success
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </div>

  
    </div>
  );
};

export default TestimonialsPage;