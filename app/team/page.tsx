'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TeamPage() {
  const players = [
    {
      name: 'David Kipchoge',
      position: 'Goalkeeper',
      age: 24,
      experience: '5 years',
      bio: 'Our reliable last line of defense with exceptional reflexes and leadership qualities.',
      image: 'https://readdy.ai/api/search-image?query=African%20football%20goalkeeper%20in%20green%20jersey%20making%20a%20save%2C%20professional%20sports%20portrait%2C%20grassroots%20football%20player%20from%20Kenya&width=300&height=400&seq=squad11-player1&orientation=portrait'
    },
    {
      name: 'Michael Rotich',
      position: 'Defender',
      age: 22,
      experience: '3 years',
      bio: 'Strong central defender known for his aerial ability and tactical awareness.',
      image: 'https://readdy.ai/api/search-image?query=African%20football%20defender%20in%20green%20jersey%20heading%20the%20ball%2C%20strong%20athletic%20build%2C%20grassroots%20football%20player%20portrait&width=300&height=400&seq=squad11-player2&orientation=portrait'
    },
    {
      name: 'John Kipketer',
      position: 'Midfielder',
      age: 21,
      experience: '4 years',
      bio: 'Creative midfielder with excellent passing ability and vision on the field.',
      image: 'https://readdy.ai/api/search-image?query=African%20football%20midfielder%20in%20green%20jersey%20dribbling%20ball%2C%20skilled%20playmaker%2C%20young%20talented%20football%20player%20from%20Kenya&width=300&height=400&seq=squad11-player3&orientation=portrait'
    },
    {
      name: 'Samuel Kemboi',
      position: 'Forward',
      age: 20,
      experience: '2 years',
      bio: 'Fast and agile striker with a natural instinct for finding the back of the net.',
      image: 'https://readdy.ai/api/search-image?query=African%20football%20striker%20in%20green%20jersey%20celebrating%20goal%2C%20young%20energetic%20forward%2C%20grassroots%20football%20talent&width=300&height=400&seq=squad11-player4&orientation=portrait'
    },
    {
      name: 'Peter Langat',
      position: 'Defender',
      age: 23,
      experience: '4 years',
      bio: 'Versatile fullback who contributes both defensively and in attack.',
      image: 'https://readdy.ai/api/search-image?query=African%20football%20fullback%20in%20green%20jersey%20running%20with%20ball%2C%20athletic%20defender%2C%20grassroots%20football%20player%20action%20shot&width=300&height=400&seq=squad11-player5&orientation=portrait'
    },
    {
      name: 'Joseph Kiprotich',
      position: 'Midfielder',
      age: 19,
      experience: '2 years',
      bio: 'Young talent with great potential and dedication to improving his game.',
      image: 'https://readdy.ai/api/search-image?query=Young%20African%20football%20midfielder%20in%20green%20jersey%20training%2C%20promising%20talent%2C%20grassroots%20football%20youth%20development&width=300&height=400&seq=squad11-player6&orientation=portrait'
    },
    {
      name: 'Daniel Cheruiyot',
      position: 'Forward',
      age: 25,
      experience: '6 years',
      bio: 'Experienced winger with pace and the ability to create chances for teammates.',
      image: 'https://readdy.ai/api/search-image?query=African%20football%20winger%20in%20green%20jersey%20crossing%20ball%2C%20experienced%20player%2C%20grassroots%20football%20veteran&width=300&height=400&seq=squad11-player7&orientation=portrait'
    },
    {
      name: 'Emmanuel Koech',
      position: 'Midfielder',
      age: 22,
      experience: '3 years',
      bio: 'Box-to-box midfielder known for his work rate and commitment to the team.',
      image: 'https://readdy.ai/api/search-image?query=African%20football%20midfielder%20in%20green%20jersey%20tackling%2C%20hardworking%20player%2C%20grassroots%20football%20team%20member&width=300&height=400&seq=squad11-player8&orientation=portrait'
    }
  ];

  const staff = [
    {
      name: 'Robert Mutai',
      role: 'Head Coach',
      experience: '8 years coaching',
      bio: 'Former professional player with extensive coaching experience in youth development.',
      image: 'https://readdy.ai/api/search-image?query=African%20football%20coach%20in%20coaching%20attire%20holding%20clipboard%2C%20experienced%20mentor%2C%20grassroots%20football%20development%20coach&width=300&height=400&seq=squad11-coach1&orientation=portrait'
    },
    {
      name: 'Grace Chepkoech',
      role: 'Assistant Coach',
      experience: '4 years coaching',
      bio: 'Specializes in fitness training and player conditioning programs.',
      image: 'https://readdy.ai/api/search-image?query=African%20female%20football%20coach%20in%20sports%20attire%2C%20fitness%20trainer%2C%20grassroots%20football%20coaching%20staff&width=300&height=400&seq=squad11-coach2&orientation=portrait'
    },
    {
      name: 'William Ruto',
      role: 'Team Manager',
      experience: '3 years management',
      bio: 'Handles team logistics and ensures smooth operations during training and matches.',
      image: 'https://readdy.ai/api/search-image?query=African%20football%20team%20manager%20in%20casual%20attire%2C%20administrative%20role%2C%20grassroots%20football%20management&width=300&height=400&seq=squad11-manager&orientation=portrait'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              Meet Our Team
            </h1>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Get to know the dedicated players and staff who make Squad 11 FC a force 
              to be reckoned with in Eldoret's football scene.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Players</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {players.map((player, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={player.image}
                      alt={player.name}
                      className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {player.position}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{player.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <i className="ri-calendar-line mr-2"></i>
                      <span>Age: {player.age}</span>
                      <span className="mx-2">•</span>
                      <span>{player.experience}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{player.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Coaching Staff</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {staff.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group text-center">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Staff
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <h4 className="text-green-600 font-semibold mb-2">{member.role}</h4>
                    <div className="flex items-center justify-center text-gray-600 text-sm mb-3">
                      <i className="ri-time-line mr-2"></i>
                      <span>{member.experience}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 bg-green-600 text-white p-12 rounded-xl text-center">
            <h3 className="text-3xl font-bold mb-6">Want to Join Our Team?</h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Squad 11 FC is always looking for talented and dedicated players who share our 
              passion for football and commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/join-us" 
                className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold whitespace-nowrap cursor-pointer"
              >
                Apply to Join
              </a>
              <a 
                href="/contact" 
                className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition-colors font-semibold whitespace-nowrap cursor-pointer"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}