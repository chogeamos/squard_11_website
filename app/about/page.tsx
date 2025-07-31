
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              About Squad 11 Football Club
            </h1>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Founded in 2017 by passionate young ICT professionals in Eldoret, Kenya, Squad 11 FC has grown 
              into a beacon of hope for grassroots football development in our region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Squad 11 Football Club was born from a simple yet powerful vision shared by a group of young 
                ICT professionals in Eldoret. Recognizing the immense potential in local youth and the need 
                for structured football development, they established Squad 11 FC in 2017 with a mission to 
                nurture talent and promote physical fitness in the community.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                What started as weekend kickabouts among friends has evolved into a structured football program 
                that trains daily at Wareng High School football field. Our commitment to excellence, 
                discipline, and community development has made us one of Eldoret's most respected grassroots football clubs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-calendar-line text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Founded in 2017</h4>
                    <p className="text-gray-600">7 years of football excellence</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-map-pin-line text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Wareng High School Ground</h4>
                    <p className="text-gray-600">Our official training facility</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-group-line text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">ICT Professional Founders</h4>
                    <p className="text-gray-600">Technology meets football passion</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=African%20football%20team%20founders%20and%20coaches%20in%20green%20jerseys%20standing%20together%20at%20training%20ground%2C%20ICT%20professionals%20turned%20football%20mentors%2C%20grassroots%20football%20leadership%20in%20Kenya%20Eldoret&width=600&height=500&seq=squad11-founders&orientation=portrait"
                alt="Squad 11 FC Founders"
                className="rounded-lg shadow-xl w-full h-96 object-cover object-top"
              />
              <div className="absolute inset-0 bg-green-600/20 rounded-lg"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Our Founders</h4>
                <p className="text-gray-600 text-sm">Young ICT professionals with a passion for football development</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Vision</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-target-line text-3xl text-white"></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h4>
                <p className="text-gray-600 leading-relaxed">
                  To nurture young football talent in Eldoret and surrounding regions while promoting 
                  physical fitness, discipline, and community values. We strive to create pathways 
                  for young athletes to achieve their dreams both in football and in life.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-eye-line text-3xl text-white"></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h4>
                <p className="text-gray-600 leading-relaxed">
                  To become Kenya's premier grassroots football club, recognized for excellence in 
                  player development, community engagement, and youth empowerment. We envision a 
                  future where Squad 11 FC graduates compete at national and international levels.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white shadow-lg rounded-xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-trophy-line text-2xl text-white"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h4>
              <p className="text-gray-600">Striving for the highest standards in training, performance, and character development</p>
            </div>
            
            <div className="text-center p-8 bg-white shadow-lg rounded-xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line text-2xl text-white"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Community</h4>
              <p className="text-gray-600">Building strong bonds within our team and contributing positively to Eldoret</p>
            </div>
            
            <div className="text-center p-8 bg-white shadow-lg rounded-xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-seedling-line text-2xl text-white"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Development</h4>
              <p className="text-gray-600">Continuous improvement of skills, knowledge, and opportunities for our players</p>
            </div>
          </div>

          <div className="text-center bg-green-600 text-white p-12 rounded-xl">
            <h3 className="text-3xl font-bold mb-6">Training Schedule</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="text-xl font-semibold mb-4">Weekly Training</h4>
                <p className="text-green-100 mb-2">Sunday: 8:00 AM - 10:00 AM</p>
                <p className="text-green-100">Wednesday: 5:00 PM - 7:00 PM</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">Training Ground</h4>
                <p className="text-green-100 mb-2">Wareng High School Football Field</p>
                <p className="text-green-100 mb-2">Eldoret, Kenya</p>
                <p className="text-green-100">Open to all skill levels</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
