'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function SupportPage() {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    anonymous: false
  });
  const [showPayment, setShowPayment] = useState(false);

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000, 25000];

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = customAmount || donationAmount;
    if (amount) {
      setShowPayment(true);
    }
  };

  const handleMpesaPayment = () => {
    const amount = customAmount || donationAmount;
    alert(`M-PESA payment initiated for KES ${amount}. You will receive an STK push on your phone.`);
  };

  const sponsors = [
    {
      name: 'Fahari Brands Designs',
      logo: 'https://readdy.ai/api/search-image?query=Creative%20branding%20and%20design%20company%20logo%20with%20colorful%20artistic%20elements%2C%20modern%20graphic%20design%20business%20branding&width=200&height=100&seq=sponsor1&orientation=landscape',
      category: 'Main Sponsor',
      contribution: 'Training equipment and jerseys'
    },
    {
      name: 'Wareng Sports Store',
      logo: 'https://readdy.ai/api/search-image?query=Sports%20equipment%20store%20logo%20with%20football%20and%20athletic%20symbols%2C%20sporty%20business%20branding%20design&width=200&height=100&seq=sponsor2&orientation=landscape',
      category: 'Equipment Partner',
      contribution: 'Football boots and sports gear'
    },
    {
      name: 'Eldoret Transport Co.',
      logo: 'https://readdy.ai/api/search-image?query=Transport%20company%20logo%20with%20vehicle%20symbols%2C%20professional%20transportation%20business%20branding&width=200&height=100&seq=sponsor3&orientation=landscape',
      category: 'Travel Partner',
      contribution: 'Transportation for away matches'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              Support Squad 11 FC
            </h1>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Help us continue nurturing young talent and building champions. Your support makes 
              a real difference in the lives of our players and the broader Eldoret community.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">How Your Support Helps</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6">
                    <i className="ri-shirt-line text-green-600 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Training Equipment</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Jerseys, football boots, training cones, and balls to ensure our players have 
                      the best equipment for development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6">
                    <i className="ri-car-line text-green-600 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Transportation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Travel costs for away matches, tournaments, and training camps to give our 
                      players more exposure and experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6">
                    <i className="ri-heart-pulse-line text-green-600 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Medical Support</h3>
                    <p className="text-gray-600 leading-relaxed">
                      First aid supplies, injury treatment, and regular health checkups to keep 
                      our players safe and healthy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6">
                    <i className="ri-graduation-cap-line text-green-600 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Education Programs</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Academic support and life skills training to ensure our players succeed 
                      both on and off the field.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-green-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Impact Statistics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
                    <div className="text-gray-600">Players Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                    <div className="text-gray-600">Tournaments</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">12</div>
                    <div className="text-gray-600">Trophies Won</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">7</div>
                    <div className="text-gray-600">Years Strong</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Make a Donation</h2>

              {!showPayment ? (
                <form onSubmit={handleDonationSubmit}>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Amount (KES)</h3>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {predefinedAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => {
                            setDonationAmount(amount.toString());
                            setCustomAmount('');
                          }}
                          className={`p-3 rounded-lg border-2 transition-colors font-semibold whitespace-nowrap ${
                            donationAmount === amount.toString()
                              ? 'border-green-600 bg-green-50 text-green-600'
                              : 'border-gray-300 hover:border-green-300'
                          }`}
                        >
                          {amount.toLocaleString()}
                        </button>
                      ))}
                    </div>

                    <div className="mt-4">
                      <label className="block text-gray-700 font-medium mb-2">Or enter custom amount</label>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setDonationAmount('');
                        }}
                        min="100"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter amount in KES"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        value={donorInfo.name}
                        onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                          type="email"
                          value={donorInfo.email}
                          onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          value={donorInfo.phone}
                          onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="+254 7XX XXX XXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Message (Optional)</label>
                      <textarea
                        value={donorInfo.message}
                        onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
                        rows={3}
                        maxLength={200}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Any message for the team..."
                      ></textarea>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="anonymous"
                        checked={donorInfo.anonymous}
                        onChange={(e) => setDonorInfo({ ...donorInfo, anonymous: e.target.checked })}
                        className="mr-3"
                      />
                      <label htmlFor="anonymous" className="text-gray-700">Make this donation anonymous</label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!donationAmount && !customAmount}
                    className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    Proceed to Payment
                  </button>
                </form>
              ) : (
                <div className="text-center">
                  <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                    <i className="ri-heart-line text-green-600 text-4xl mb-4"></i>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-700">Your support means the world to us.</p>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-lg mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Your Donation</h3>
                    <p className="text-gray-600 mb-6">Amount: <span className="font-bold text-2xl text-green-600">KES {(customAmount || donationAmount).toLocaleString()}</span></p>

                    <div className="space-y-4">
                      <button
                        onClick={handleMpesaPayment}
                        className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold whitespace-nowrap flex items-center justify-center"
                      >
                        <i className="ri-smartphone-line mr-3 text-xl"></i>
                        Pay via M-PESA
                      </button>

                      <button
                        className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap flex items-center justify-center"
                      >
                        <i className="ri-bank-line mr-3 text-xl"></i>
                        Bank Transfer
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Sponsors & Partners</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                  <img 
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-32 h-16 object-contain mx-auto mb-6"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sponsor.name}</h3>
                  <div className="text-green-600 font-semibold mb-3">{sponsor.category}</div>
                  <p className="text-gray-600 text-sm">{sponsor.contribution}</p>
                </div>
              ))}
            </div>

            <div className="text-center bg-green-600 text-white p-12 rounded-xl">
              <h3 className="text-3xl font-bold mb-6">Become a Sponsor</h3>
              <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                Partner with Squad 11 FC and get your brand in front of our growing community. 
                We offer various sponsorship packages to fit your budget and marketing goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold whitespace-nowrap cursor-pointer"
                >
                  Sponsorship Inquiry
                </a>
                <a 
                  href="mailto:sponsors@squad11fc.com" 
                  className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition-colors font-semibold whitespace-nowrap cursor-pointer"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg">
                <div className="text-green-600 text-4xl mb-4">"</div>
                <p className="text-gray-600 mb-6 italic">
                  Supporting Squad 11 FC has been incredibly rewarding. Seeing these young men grow 
                  and develop both as players and individuals makes every contribution worthwhile.
                </p>
                <div className="font-semibold text-gray-900">- Sarah Kimani, Local Supporter</div>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <div className="text-green-600 text-4xl mb-4">"</div>
                <p className="text-gray-600 mb-6 italic">
                  As a sponsor, we've seen firsthand the positive impact Squad 11 FC has on the 
                  community. Their dedication to youth development is truly inspiring.
                </p>
                <div className="font-semibold text-gray-900">- John Mutai, Fahari Brands Designs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
