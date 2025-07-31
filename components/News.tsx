'use client';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: 'Squad 11 FC Wins Regional Championship',
      date: '2024-01-15',
      category: 'Match Results',
      excerpt: 'Our team secured a decisive 3-1 victory in the Eldoret Regional Championship final, showcasing months of dedicated training.',
      image: 'https://readdy.ai/api/search-image?query=African%20football%20team%20in%20green%20jerseys%20celebrating%20championship%20victory%20with%20trophy%2C%20team%20celebration%20on%20grass%20field%2C%20grassroots%20football%20success%20in%20Kenya&width=400&height=250&seq=squad11-news1&orientation=landscape'
    },
    {
      id: 2,
      title: 'New Training Equipment Donated by Local Sponsor',
      date: '2024-01-10',
      category: 'Club News',
      excerpt: 'Thanks to generous support from Eldoret Tech Solutions, we have received new training cones, balls, and jerseys for our players.',
      image: 'https://readdy.ai/api/search-image?query=New%20football%20training%20equipment%20including%20balls%20cones%20jerseys%20laid%20out%20on%20grass%20field%2C%20football%20gear%20donation%20for%20African%20grassroots%20club&width=400&height=250&seq=squad11-news2&orientation=landscape'
    },
    {
      id: 3,
      title: 'Youth Development Program Launches',
      date: '2024-01-05',
      category: 'Development',
      excerpt: 'Squad 11 FC announces new youth development program for players aged 12-16, focusing on skill development and education.',
      image: 'https://readdy.ai/api/search-image?query=Young%20African%20children%20learning%20football%20skills%20with%20coach%20on%20grass%20field%2C%20youth%20football%20training%20session%20in%20Kenya%2C%20grassroots%20development%20program&width=400&height=250&seq=squad11-news3&orientation=landscape'
    },
    {
      id: 4,
      title: 'Upcoming Match Against Eldoret United',
      date: '2024-01-20',
      category: 'Fixtures',
      excerpt: 'Mark your calendars! Squad 11 FC will face Eldoret United this Saturday at 3:00 PM at Wareng High School ground.',
      image: 'https://readdy.ai/api/search-image?query=Football%20match%20poster%20design%20with%20green%20and%20white%20colors%2C%20upcoming%20match%20announcement%20for%20grassroots%20football%20club%20in%20Kenya&width=400&height=250&seq=squad11-news4&orientation=landscape'
    },
    {
      id: 5,
      title: 'Player Spotlight: John Kipketer',
      date: '2024-01-12',
      category: 'Player News',
      excerpt: 'Meet our star midfielder John Kipketer, whose exceptional performance has caught the attention of regional scouts.',
      image: 'https://readdy.ai/api/search-image?query=African%20football%20player%20in%20green%20jersey%20dribbling%20ball%20on%20grass%20field%2C%20skilled%20midfielder%20in%20action%20during%20training%2C%20grassroots%20football%20talent&width=400&height=250&seq=squad11-news5&orientation=landscape'
    },
    {
      id: 6,
      title: 'Community Outreach Program Success',
      date: '2024-01-08',
      category: 'Community',
      excerpt: 'Our players visited local schools to promote physical fitness and healthy living, reaching over 200 students.',
      image: 'https://readdy.ai/api/search-image?query=Football%20players%20in%20green%20jerseys%20teaching%20children%20at%20school%2C%20community%20outreach%20program%2C%20African%20football%20club%20visiting%20local%20school%20in%20Kenya&width=400&height=250&seq=squad11-news6&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Latest News & Updates
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest happenings at Squad 11 FC - from match results 
            to community initiatives and player achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
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
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                
                <button className="text-green-600 hover:text-green-800 font-semibold inline-flex items-center transition-colors cursor-pointer">
                  Read More
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold whitespace-nowrap cursor-pointer">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}