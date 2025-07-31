'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <i className="ri-football-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Squad 11 FC</h3>
                <p className="text-sm text-gray-400">Est. 2017</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Nurturing young football talent in Eldoret since 2017. Founded by passionate 
              ICT professionals, we're committed to excellence on and off the field.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <i className="ri-youtube-fill"></i>
              </a>
              <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <i className="ri-whatsapp-fill"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/team" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Our Team</Link></li>
              <li><Link href="/join-us" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Join Us</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Support Us</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-white transition-colors cursor-pointer">News</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Get Involved</h4>
            <ul className="space-y-3">
              <li><Link href="/join-us" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Become a Player</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Sponsor Our Team</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Volunteer</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Coaching Opportunities</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Youth Programs</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Community Outreach</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-map-pin-line text-green-400 mr-3 mt-1"></i>
                <div>
                  <p className="text-gray-400">Wareng High School</p>
                  <p className="text-gray-400">Football Field</p>
                  <p className="text-gray-400">Eldoret, Kenya</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="ri-phone-line text-green-400 mr-3"></i>
                <a href="tel:+254712345678" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  +254 712 345 678
                </a>
              </div>
              <div className="flex items-center">
                <i className="ri-mail-line text-green-400 mr-3"></i>
                <a href="mailto:info@squad11fc.com" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  info@squad11fc.com
                </a>
              </div>
              <div className="flex items-center">
                <i className="ri-whatsapp-line text-green-400 mr-3"></i>
                <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Squad 11 Football Club. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Code of Conduct</Link>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              "Unity, Passion, Victory" - Squad 11 FC Motto
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}