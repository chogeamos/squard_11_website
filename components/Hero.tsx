'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://readdy.ai/api/search-image?query=Young%20African%20football%20players%20in%20green%20jerseys%20training%20on%20grass%20field%20in%20Kenya%2C%20team%20practice%20session%20with%20coach%2C%20grassroots%20football%20development%2C%20Eldoret%20Kenya%20sports%20training%20ground%20with%20mountains%20background&width=1920&height=1080&seq=squad11-hero1&orientation=landscape',
      title: 'Squad 11 Football Club',
      subtitle: 'Nurturing Young Talent Since 2017',
      description: 'Building champions on and off the field'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Football%20match%20action%20shot%20with%20young%20African%20players%20in%20green%20jerseys%20competing%20on%20grass%20field%2C%20dynamic%20sports%20photography%2C%20grassroots%20football%20game%20in%20Kenya%20with%20passionate%20players&width=1920&height=1080&seq=squad11-hero2&orientation=landscape',
      title: 'Excellence in Every Match',
      subtitle: 'Dedicated to Victory',
      description: 'Training daily at Wareng High School'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Group%20photo%20of%20young%20African%20football%20team%20in%20green%20jerseys%20celebrating%20victory%2C%20team%20unity%20and%20camaraderie%2C%20grassroots%20football%20club%20success%20story%2C%20Eldoret%20Kenya%20sports%20community&width=1920&height=1080&seq=squad11-hero3&orientation=landscape',
      title: 'Community Champions',
      subtitle: 'Founded by ICT Professionals',
      description: 'Promoting physical fitness in Eldoret'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl">
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                
                <h2 className="text-2xl md:text-3xl text-green-400 mb-4 font-semibold">
                  {slide.subtitle}
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed">
                  {slide.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link 
                    href="/join-us" 
                    className="bg-green-600 text-white px-10 py-4 rounded-full hover:bg-green-700 transition-colors font-bold text-lg whitespace-nowrap cursor-pointer inline-flex items-center justify-center"
                  >
                    Join Our Team
                    <i className="ri-arrow-right-line ml-3 text-xl"></i>
                  </Link>
                  
                  <Link 
                    href="/support" 
                    className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all font-bold text-lg whitespace-nowrap cursor-pointer inline-flex items-center justify-center"
                  >
                    <i className="ri-heart-line mr-3 text-xl"></i>
                    Support Squad 11
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
              index === currentSlide ? 'bg-green-500 scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-20 right-8 text-white">
        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Club Motto</h3>
          <p className="text-green-400 font-semibold">"Unity, Passion, Victory"</p>
        </div>
      </div>
    </section>
  );
}