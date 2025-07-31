'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import News from '../components/News';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}