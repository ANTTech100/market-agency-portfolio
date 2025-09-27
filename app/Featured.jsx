import React from 'react';
import { Globe, TrendingUp, Award, Star, ExternalLink, Calendar, Tag } from 'lucide-react';

const MediaCoverageDisplay = () => {
  const mediaLogos = [
    // Row 1 - Major Publications
    { name: 'ANI', category: 'News Agency', color: 'bg-gray-800', logo: '🏛️', link: 'https://www.aninews.in/news/business/business/10-dynamic-business-leaders-to-inspire-in-202320230321155520/' },
    { name: 'Business Standard', category: 'Business', color: 'bg-gray-700', logo: '📈', link: 'https://www.business-standard.com/content/press-releases-ani/10-dynamic-business-leaders-to-inspire-in-2023-123032100792_1.html' },
    { name: 'ThePrint', category: 'Digital News', color: 'bg-gray-600', logo: '📰', link: 'https://theprint.in/ani-press-releases/10-dynamic-business-leaders-to-inspire-in-2023-2/1461089/' },
    { name: 'Zee5', category: 'Digital Media', color: 'bg-gray-500', logo: '📺', link: 'https://www.zee5.com/articles/10-dynamic-business-leaders-to-inspire-in-2023' },
    { name: 'Ahmedabad Mirror', category: 'Newspaper', color: 'bg-gray-800', logo: '🪞', link: 'https://www.ahmedabadmirror.com/10-dynamic-business-leaders-to-inspire-in-2023/81853217.html' },
    { name: 'United News of India', category: 'News Agency', color: 'bg-gray-700', logo: '📡', link: 'https://www.uniindia.com/10-dynamic-business-leaders-to-inspire-in-2023/pnn/news/2938055.html' },
    { name: 'Lokmat Times', category: 'Daily', color: 'bg-gray-600', logo: '📅', link: 'https://www.lokmattimes.com/business/10-dynamic-business-leaders-to-inspire-in-2023-1/' },
    { name: 'Latestly', category: 'Digital', color: 'bg-gray-500', logo: '⚡', link: 'https://www.latestly.com/agency-news/business-news-10-dynamic-business-leaders-to-inspire-in-2023-4974251.html' },
    
    // Row 2 - Digital & News Platforms
    { name: 'New Kerala', category: 'Regional News', color: 'bg-gray-800', logo: '🌴', link: 'https://www.newkerala.com/news/2023/36754.htm' },
    { name: 'Jio News', category: 'Digital News', color: 'bg-gray-700', logo: '📱', link: 'https://jionews.com/home/article/10/268539391/Business-News-10-Dynamic-Business-Leaders-to-Inspire-in-2023' },
    { name: 'Daily Hunt', category: 'News Aggregator', color: 'bg-gray-600', logo: '📖', link: 'https://m.dailyhunt.in/news/india/english/ani%2Benglish-epaper-anieng/10%2Bdynamic%2Bbusiness%2Bleaders%2Bto%2Binspire%2Bin%2B2023-newsid-n482445058?sm=Y' },
    { name: 'UP 18 News', category: 'Regional', color: 'bg-gray-500', logo: '📻', link: 'https://up18news.com/10-dynamic-business-leaders-to-inspire-in-2023/' },
    { name: 'Asian News', category: 'Regional', color: 'bg-gray-800', logo: '🌏', link: 'https://asiannews.in/10-dynamic-business-leaders-to-inspire-in-2023-primex-news-network/' },
    { name: 'Republic News Today', category: 'Digital News', color: 'bg-gray-700', logo: '🏛️', link: 'https://republicnewstoday.com' },
    { name: 'News Networks', category: 'News Portal', color: 'bg-gray-600', logo: '🔗', link: 'https://newsnetworks.co.in/en/2023/03/22/10-dynamic-business-leaders-to-inspire-in-2023/' },
    { name: 'Entrepreneur View', category: 'Business', color: 'bg-gray-500', logo: '💼', link: 'https://entrepreneurview.in/10-dynamic-business-leaders-to-inspire-in-2023/' },
    
    // Row 3 - Financial & Business News
    { name: 'Financial News Day', category: 'Finance', color: 'bg-gray-800', logo: '💰', link: 'https://financialnewsday.com/10-dynamic-business-leaders-to-inspire-in-2023/' },
    { name: 'Forex News Times', category: 'Finance', color: 'bg-gray-700', logo: '💹', link: 'https://forexnewstimes.com/10-dynamic-business-leaders-to-inspire-in-2023/' },
    { name: 'Global News Tonight', category: 'International', color: 'bg-gray-600', logo: '🌐', link: 'https://globalnewstonight.com/2023/03/22/10-dynamic-business-leaders-to-inspire-in-2023/' },
    { name: 'Latest Gold News', category: 'Finance', color: 'bg-gray-500', logo: '🏆', link: 'https://latestgoldnews.com/index.php/2023/03/22/10-dynamic-business-leaders-to-inspire-in-2023/' },
    { name: 'Business Voice Now', category: 'Business', color: 'bg-gray-800', logo: '📊', link: 'https://businessvoicenow.com/10-dynamic-business-leaders-to-inspire-in-2023/' },
    { name: 'Economic India', category: 'Economics', color: 'bg-gray-700', logo: '📈', link: 'https://economicindia.co.in/business/10-dynamic-business-leaders-to-inspire-in-2023/' },
    { name: 'Financial Post', category: 'Finance', color: 'bg-gray-600', logo: '📋', link: 'https://financialpost.co.in/index.php/2023/03/22/10-dynamic-business-leaders-to-inspire-in-2023/' },
    { name: 'Financial Telegraph', category: 'Finance', color: 'bg-gray-500', logo: '📡', link: 'https://financialtelegraph.in/index.php/2023/03/22/10-dynamic-business-leaders-to-inspire-in-2023/' },
    
    // Row 4 - Regional Indian News
    { name: 'South India News', category: 'Regional', color: 'bg-gray-800', logo: '🏛️', link: 'https://www.southindianews.in/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'Haryana Today', category: 'State News', color: 'bg-gray-700', logo: '🌾', link: 'https://www.haryanatoday.in/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'Maharashtra Samachar', category: 'State News', color: 'bg-gray-600', logo: '🏙️', link: 'https://www.maharashtrasamachar.com/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'Gujarat Varta', category: 'State News', color: 'bg-gray-500', logo: '🦁', link: 'https://www.gujaratvarta.com/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'Telangana Journal', category: 'State News', color: 'bg-gray-800', logo: '💎', link: 'https://www.telanganajournal.in/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'West Bengal Khabar', category: 'State News', color: 'bg-gray-700', logo: '🐅', link: 'https://www.westbengalkhabar.in/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'Delhi Live News', category: 'City News', color: 'bg-gray-600', logo: '🏛️', link: 'https://www.delhilivenews.in/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'Karnataka Live', category: 'State News', color: 'bg-gray-500', logo: '🌸', link: 'https://www.karnatakalive.in/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    
    // Row 5 - More Regional Coverage
    { name: 'Rajasthan Ki Khabar', category: 'State News', color: 'bg-gray-800', logo: '🏰', link: 'https://www.rajasthankikhabar.com/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'Punjab Live', category: 'State News', color: 'bg-gray-700', logo: '🌾', link: 'https://www.punjablive.news/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'Bihar 24x7', category: 'State News', color: 'bg-gray-600', logo: '📚', link: 'https://www.bihar24x7.com/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'Odisha Post', category: 'State News', color: 'bg-gray-500', logo: '🏛️', link: 'https://www.odishapost.news/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'Chhattisgarh Today', category: 'State News', color: 'bg-gray-800', logo: '🌿', link: 'https://www.chhattisgarhtoday.in/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'Himachal Patrika', category: 'State News', color: 'bg-gray-700', logo: '🏔️', link: 'https://www.himachalpatrika.com/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'Jharkhand Times', category: 'State News', color: 'bg-gray-600', logo: '⛰️', link: 'https://www.jharkhandtimes.in/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'Tamil Nadu News', category: 'State News', color: 'bg-gray-500', logo: '🏛️', link: 'https://www.vanakkamtamilnadu.com/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    
    // Row 6 - International Coverage
    { name: 'Sydney Evening Post', category: 'International', color: 'bg-gray-800', logo: '🦘', link: 'https://www.sydneyeveningpost.com/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'British Columbia Times', category: 'International', color: 'bg-gray-700', logo: '🍁', link: 'https://www.britishcolumbiatimes.com/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'Los Angeles Evening Dispatch', category: 'International', color: 'bg-gray-600', logo: '🌴', link: 'https://www.losangeleseveningdespatch.com/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'US World Today', category: 'International', color: 'bg-gray-500', logo: '🗽', link: 'https://www.usworldtoday.com/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'Toronto Sun Times', category: 'International', color: 'bg-gray-800', logo: '🏒', link: 'https://www.torontosuntimes.com/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'London Channel News', category: 'International', color: 'bg-gray-700', logo: '🏰', link: 'https://www.londonchannelnews.com/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'European Sun Times', category: 'International', color: 'bg-gray-600', logo: '🇪🇺', link: 'https://www.europeansuntimes.com/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
    { name: 'World News Network', category: 'International', color: 'bg-gray-500', logo: '🌍', link: 'https://www.worldnewsnetwork.net/news/10-dynamic-business-leaders-to-inspire-in-202320230321155518/' },
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Black accent */}
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Media Coverage
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Recognized across leading publications worldwide for innovative business leadership and transformational impact
          </p>
        </div>
      </div>

      {/* Stats Section - White background */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Articles Section - White background */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <div className="flex items-center mb-4">
                  <Tag className="w-5 h-5 text-black mr-2" />
                  <span className="text-black font-semibold text-sm bg-gray-200 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {article.title}
                </h3>
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{article.date}</span>
                  <span className="font-semibold">{article.publication}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Logos Section - White background with black accents */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">
            Featured In
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Covered by leading media outlets across India and internationally
          </p>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-4 lg:grid-cols-8 gap-4">
            {mediaLogos.map((media, index) => (
              <a
                key={index}
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-black hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="text-2xl mb-2">{media.logo}</div>
                <div className="text-xs font-semibold text-black group-hover:text-black transition-colors">
                  {media.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {media.category}
                </div>
                <ExternalLink className="w-3 h-3 text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          {/* Mobile 3 Rows with Horizontal Scroll */}
          <div className="md:hidden">
            {/* Split media logos into 3 rows */}
            {[0, 1, 2].map((rowIndex) => (
              <div key={rowIndex} className="mb-6">
                <div className="overflow-x-auto pb-4">
                  <div className="flex space-x-4 w-max">
                    {mediaLogos
                      .filter((_, index) => index % 3 === rowIndex)
                      .map((media, index) => (
                        <a
                          key={`${rowIndex}-${index}`}
                          href={media.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-black transition-all duration-300 flex-shrink-0 w-32 text-center"
                        >
                          <div className="text-xl mb-2">{media.logo}</div>
                          <div className="text-xs font-semibold text-black mb-1">
                            {media.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {media.category}
                          </div>
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center text-sm text-gray-500 mt-4">
              ← Scroll horizontally in each row to see more →
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action - Black section */}
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the ranks of successful entrepreneurs who have benefited from proven strategies and mentorship.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaCoverageDisplay;