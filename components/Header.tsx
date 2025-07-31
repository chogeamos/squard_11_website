'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-green-600">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <i className="ri-football-line text-2xl text-white"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Squad 11 FC</h1>
              <p className="text-xs text-gray-600">Eldoret's Premier Football Club</p>
            </div>
          </Link>
          
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer">
              About Us
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer">
              Our Team
            </Link>
            <Link href="/join-us" className="text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer">
              Join Us
            </Link>
            <Link href="/support" className="text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer">
              Support Us
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer">
              News
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/join-us" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors font-medium cursor-pointer whitespace-nowrap">
              Join Squad 11
            </Link>
          </div>

          <button
            className="lg:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer">
                About Us
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer">
                Our Team
              </Link>
              <Link href="/join-us" className="text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer">
                Join Us
              </Link>
              <Link href="/support" className="text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer">
                Support Us
              </Link>
              <Link href="/news" className="text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer">
                News
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer">
                Contact
              </Link>
              <Link href="/join-us" className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-medium cursor-pointer text-center whitespace-nowrap">
                Join Squad 11
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}