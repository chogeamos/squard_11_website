'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: 'Squad 11 FC Wins Regional Championship',
      date: '2024-01-15',
      category: 'Match Results',
      excerpt: 'Our team secured a decisive 3-1 victory in the Eldoret Regional Championship final, showcasing months of dedicated training.',
      content: 'In a thrilling final match that kept spectators on the edge of their seats, Squad 11 FC defeated Eldoret Rangers 3-1 to claim the Regional Championship title. Goals from John Kipketer, Samuel Kemboi, and Daniel Cheruiyot sealed the victory in front of a packed crowd at Wareng High School ground.',
      image: 'https://readdy.ai/api/search-image?query=African%20football%20team%20in%20green%20jerseys%20celebrating%20championship%20victory%20with%20trophy%2C%20team%20celebration%20on%20grass%20field%2C%20grassroots%20football%20success%20in%20Kenya&width=800&height=400&seq=squad11-news1&orientation=landscape',
      featured: true
    },
    {
      id: 2,
      title: 'New Training Equipment Donated by Local Sponsor',
      date: '2024-01-10',
      category: 'Club News',
      excerpt: 'Thanks to generous support from Eldoret Tech Solutions, we have received new training cones, balls, and jerseys for our players.',
      content: 'Eldoret Tech Solutions, our main sponsor, has generously donated a complete set of training equipment worth KES 150,000. The donation includes 50 training cones, 20 professional footballs, 30 new jerseys, and goalkeeper equipment.',
      image: 'https://readdy.ai/api/search-image?query=New%20football%20training%20equipment%20including%20balls%20cones%20jerseys%20laid%20out%20on%20grass%20field%2C%20football%20gear%20donation%20for%20African%20grassroots%20club&width=800&height=400&seq=squad11-news2&orientation=landscape',
      featured: false
    },
    {
      id: 3,
      title: 'Youth Development Program Launches',
      date: '2024-01-05',
      category: 'Development',
      excerpt: 'Squad 11 FC announces new youth development program for players aged 12-16, focusing on skill development and education.',
      content: 'We are excited to launch our new youth development program targeting young players aged 12-16. The program combines football training with academic support, ensuring holistic development of young talent in Eldoret.',
      image: 'https://readdy.ai/api/search-image?query=Young%20African%20children%20learning%20football%20skills%20with%20coach%20on%20grass%20field%2C%20youth%20football%20training%20session%20in%20Kenya%2C%20grassroots%20development%20program&width=800&height=400&seq=squad11-news3&orientation=landscape',
      featured: true
    },
    {
      id: 4,
      title: 'Upcoming Match Against Eldoret United',
      date: '2024-01-20',
      category: 'Fixtures',
      excerpt: 'Mark your calendars! Squad 11 FC will face Eldoret United this Saturday at 3:00 PM at Wareng High School ground.',
      content: 'Our next big match is scheduled for this Saturday, January 20th, at 3:00 PM. We will be hosting Eldoret United at our home ground, Wareng High School football field. This promises to be an exciting match as both teams are currently at the top of their league.',
      image: 'https://readdy.ai/api/search-image?query=Football%20match%20poster%20design%20with%20green%20and%20white%20colors%2C%20upcoming%20match%20announcement%20for%20grassroots%20football%20club%20in%20Kenya&width=800&height=400&seq=squad11-news4&orientation=landscape',
      featured: false
    },
    {
      id: 5,
      title: 'Player Spotlight: John Kipketer',
      date: '2024-01-12',
      category: 'Player News',
      excerpt: 'Meet our star midfielder John Kipketer, whose exceptional performance has caught the attention of regional scouts.',
      content: 'John Kipketer, our 21-year-old midfielder, has been making waves in the local football scene. His vision, passing accuracy, and leadership qualities have not only helped Squad 11 FC win matches but have also attracted scouts from professional clubs.',
      image: 'https://readdy.ai/api/search-image?query=African%20football%20player%20in%20green%20jersey%20dribbling%20ball%20on%20grass%20field%2C%20skilled%20midfielder%20in%20action%20during%20training%2C%20grassroots%20football%20talent&width=800&height=400&seq=squad11-news5&orientation=landscape',
      featured: false
    },
    {
      id: 6,
      title: 'Community Outreach Program Success',
      date: '2024-01-08',
      category: 'Community',
      excerpt: 'Our players visited local schools to promote physical fitness and healthy living, reaching over 200 students.',
      content: 'Squad 11 FC players visited three local primary schools last week as part of our community outreach program. They conducted football clinics, spoke about the importance of physical fitness, and distributed sports equipment to over 200 students.',
      image: 'https://readdy.ai/api/search-image?query=Football%20players%20in%20green%20jerseys%20teaching%20children%20at%20school%2C%20community%20outreach%20program%2C%20African%20football%20club%20visiting%20local%20school%20in%20Kenya&width=800&height=400&seq=squad11-news6&orientation=landscape',
      featured: false
    },
    {
      id: 7,
      title: 'Squad 11 FC Partners with Local Hospital for Player Health',
      date: '2024-01-03',
      category: 'Partnership',
      excerpt: 'New partnership with Eldoret Medical Center ensures our players receive the best healthcare and injury prevention.',
      content: 'We are pleased to announce a new partnership with Eldoret Medical Center that will provide comprehensive healthcare services to our players. This includes regular health checkups, injury treatment, and sports medicine consultation.',
      image: 'https://readdy.ai/api/search-image?query=Medical%20partnership%20announcement%20with%20football%20club%2C%20healthcare%20for%20athletes%2C%20sports%20medicine%20facility%20in%20Kenya&width=800&height=400&seq=squad11-news7&orientation=landscape',
      featured: false
    },
    {
      id: 8,
      title: 'Former Player Signs with Professional Club',
      date: '2024-01-01',
      category: 'Success Story',
      excerpt: 'Former Squad 11 FC captain James Kibet has signed a professional contract with Gor Mahia FC.',
      content: 'We are incredibly proud to announce that our former captain, James Kibet, has signed a professional contract with Gor Mahia FC. James developed his skills at Squad 11 FC from 2018-2022 and is now living his dream of playing professional football.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20football%20contract%20signing%20ceremony%2C%20African%20player%20success%20story%2C%20grassroots%20to%20professional%20football%20journey&width=800&height=400&seq=squad11-news8&orientation=landscape',
      featured: true
    }
  ];

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              Latest News & Updates
            </h1>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest happenings at Squad 11 FC - from match results 
              to community initiatives and player achievements.
            </p>
          </div>

          {featuredNews.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Stories</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredNews.map((item) => (
                  <article key={item.id} className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          FEATURED
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <i className="ri-calendar-line mr-2"></i>
                        <time>{new Date(item.date).toLocaleDateString('en-KE', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</time>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {item.content}
                      </p>
                      
                      <button className="text-green-600 hover:text-green-800 font-semibold inline-flex items-center transition-colors cursor-pointer">
                        Read Full Story
                        <i className="ri-arrow-right-line ml-2"></i>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">All News</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((item) => (
                <article key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <i className="ri-calendar-line mr-2"></i>
                      <time>{new Date(item.date).toLocaleDateString('en-KE', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</time>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {item.excerpt}
                    </p>
                    
                    <button className="text-green-600 hover:text-green-800 font-semibold inline-flex items-center transition-colors cursor-pointer text-sm">
                      Read More
                      <i className="ri-arrow-right-line ml-2"></i>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-green-600 text-white p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Don't miss any Squad 11 FC news! Follow us on social media and subscribe 
              to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex space-x-4 justify-center">
                <a href="#" className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-800 transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-800 transition-colors cursor-pointer">
                  <i className="ri-instagram-fill text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-800 transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-800 transition-colors cursor-pointer">
                  <i className="ri-youtube-fill text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}