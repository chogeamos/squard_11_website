'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function JoinUsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    previousClub: '',
    whyJoin: '',
    availability: '',
    emergencyContact: '',
    emergencyPhone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [showPayment, setShowPayment] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://readdy.ai/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          id: 'squad11-registration-form',
          fullName: formData.fullName,
          age: formData.age,
          email: formData.email,
          phone: formData.phone,
          position: formData.position,
          experience: formData.experience,
          previousClub: formData.previousClub,
          whyJoin: formData.whyJoin,
          availability: formData.availability,
          emergencyContact: formData.emergencyContact,
          emergencyPhone: formData.emergencyPhone
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setShowPayment(true);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMpesaPayment = () => {
    // Simulate M-PESA payment
    alert('M-PESA payment initiated. You will receive an STK push on your phone. Registration fee: KES 2,000');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              Join Squad 11 FC
            </h1>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ready to be part of Eldoret's premier grassroots football club? Fill out our registration 
              form and take the first step towards joining our football family.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="bg-green-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="ri-check-circle-line text-green-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">Age 16-30 years</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-circle-line text-green-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">Commitment to regular training</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-circle-line text-green-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">Basic football skills</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-circle-line text-green-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">Team player attitude</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-circle-line text-green-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">Registration fee: KES 2,000</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="ri-shirt-line text-green-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">Official team jersey</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-run-line text-green-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">Professional training sessions</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-trophy-line text-green-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">Tournament participation</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-heart-pulse-line text-green-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">Fitness and conditioning</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-team-line text-green-600 mr-3 mt-1"></i>
                    <span className="text-gray-700">Team brotherhood</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-600 text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Training Schedule</h3>
                <div className="space-y-2 text-green-100">
                  <p>Mon-Fri: 5:00 PM - 7:00 PM</p>
                  <p>Saturday: 3:00 PM - 5:00 PM</p>
                  <p>Sunday: 8:00 AM - 10:00 AM</p>
                </div>
                <div className="mt-4 pt-4 border-t border-green-500">
                  <p className="text-sm">
                    <i className="ri-map-pin-line mr-2"></i>
                    Wareng High School Football Field
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Player Registration Form</h2>
                
                {!showPayment ? (
                  <form onSubmit={handleSubmit} id="squad11-registration-form">
                    <div className="grid gap-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name *</label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                            placeholder="Enter your full name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="age" className="block text-gray-700 font-medium mb-2">Age *</label>
                          <input
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                            min="16"
                            max="30"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                            placeholder="Your age"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                            placeholder="your.email@example.com"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                            placeholder="+254 7XX XXX XXX"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="position" className="block text-gray-700 font-medium mb-2">Preferred Position *</label>
                          <select
                            id="position"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm pr-8"
                          >
                            <option value="">Select Position</option>
                            <option value="goalkeeper">Goalkeeper</option>
                            <option value="defender">Defender</option>
                            <option value="midfielder">Midfielder</option>
                            <option value="forward">Forward/Striker</option>
                            <option value="any">Any Position</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">Football Experience *</label>
                          <select
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm pr-8"
                          >
                            <option value="">Select Experience</option>
                            <option value="beginner">Beginner (0-1 years)</option>
                            <option value="intermediate">Intermediate (2-4 years)</option>
                            <option value="experienced">Experienced (5+ years)</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="previousClub" className="block text-gray-700 font-medium mb-2">Previous Club (if any)</label>
                        <input
                          type="text"
                          id="previousClub"
                          name="previousClub"
                          value={formData.previousClub}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                          placeholder="Name of previous football club"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="availability" className="block text-gray-700 font-medium mb-2">Training Availability *</label>
                        <select
                          id="availability"
                          name="availability"
                          value={formData.availability}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm pr-8"
                        >
                          <option value="">Select Availability</option>
                          <option value="weekdays-only">Weekdays Only</option>
                          <option value="weekends-only">Weekends Only</option>
                          <option value="full-schedule">Full Schedule</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="emergencyContact" className="block text-gray-700 font-medium mb-2">Emergency Contact Name *</label>
                          <input
                            type="text"
                            id="emergencyContact"
                            name="emergencyContact"
                            value={formData.emergencyContact}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                            placeholder="Emergency contact person"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="emergencyPhone" className="block text-gray-700 font-medium mb-2">Emergency Contact Phone *</label>
                          <input
                            type="tel"
                            id="emergencyPhone"
                            name="emergencyPhone"
                            value={formData.emergencyPhone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                            placeholder="+254 7XX XXX XXX"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="whyJoin" className="block text-gray-700 font-medium mb-2">Why do you want to join Squad 11 FC? *</label>
                        <textarea
                          id="whyJoin"
                          name="whyJoin"
                          value={formData.whyJoin}
                          onChange={handleChange}
                          required
                          rows={4}
                          maxLength={500}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                          placeholder="Tell us about your motivation and goals..."
                        ></textarea>
                        <div className="text-right text-sm text-gray-500 mt-1">
                          {formData.whyJoin.length}/500 characters
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-4">
                          <input type="checkbox" id="terms" required className="mr-3" />
                          <label htmlFor="terms" className="text-sm text-gray-700">
                            I agree to the club's terms and conditions, training schedule, and code of conduct *
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="payment" required className="mr-3" />
                          <label htmlFor="payment" className="text-sm text-gray-700">
                            I understand the registration fee is KES 2,000 (non-refundable) *
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting || formData.whyJoin.length > 500}
                      className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap mt-8"
                    >
                      {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                    </button>
                    
                    {submitStatus === 'error' && (
                      <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center">
                          <i className="ri-error-warning-line text-red-600 mr-2"></i>
                          <span className="text-red-700">Sorry, there was an error submitting your application. Please try again.</span>
                        </div>
                      </div>
                    )}
                  </form>
                ) : (
                  <div className="text-center">
                    <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                      <i className="ri-check-circle-line text-green-600 text-4xl mb-4"></i>
                      <h3 className="text-2xl font-bold text-green-800 mb-2">Application Submitted!</h3>
                      <p className="text-green-700">Your registration has been received. Please complete the payment to finalize your membership.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-8 rounded-lg mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Your Registration</h3>
                      <p className="text-gray-600 mb-6">Registration Fee: <span className="font-bold text-2xl text-green-600">KES 2,000</span></p>
                      
                      <div className="space-y-4">
                        <button
                          onClick={handleMpesaPayment}
                          className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold whitespace-nowrap flex items-center justify-center"
                        >
                          <i className="ri-smartphone-line mr-3 text-xl"></i>
                          Pay via M-PESA
                        </button>
                        
                        <p className="text-sm text-gray-500">
                          After payment, you will receive a confirmation SMS and email with further instructions.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}