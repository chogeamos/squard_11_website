
'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

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
          id: 'squad11-contact-form',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Have questions about joining Squad 11 FC? Want to support our team? 
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mr-6">
                  <i className="ri-map-pin-line text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Training Ground</h4>
                  <p className="text-gray-600 mb-2">Wareng High School Football Field</p>
                  <p className="text-gray-600">Eldoret, Kenya</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mr-6">
                  <i className="ri-phone-line text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Phone & WhatsApp</h4>
                  <a href="tel:+254727987654" className="text-green-600 hover:text-green-800 transition-colors block mb-2 cursor-pointer">
                    +254 727 987 654
                  </a>
                  <a 
                    href="https://wa.me/254727987654" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors cursor-pointer"
                  >
                    <i className="ri-whatsapp-line mr-2"></i>
                    WhatsApp Us
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mr-6">
                  <i className="ri-mail-line text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Email</h4>
                  <a href="mailto:info@squad11fc.com" className="text-green-600 hover:text-green-800 transition-colors cursor-pointer">
                    info@squad11fc.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mr-6">
                  <i className="ri-time-line text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Training Times</h4>
                  <p className="text-gray-600 mb-1">Sunday: 8:00 AM - 10:00 AM</p>
                  <p className="text-gray-600">Wednesday: 5:00 PM - 7:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-green-50 p-8 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-6 text-xl">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-white text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                  <i className="ri-instagram-fill text-white text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-white text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                  <i className="ri-youtube-fill text-white text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h3>

            <form onSubmit={handleSubmit} id="squad11-contact-form">
              <div className="grid gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                      placeholder="Enter your phone"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm pr-8"
                  >
                    <option value="">Select a subject</option>
                    <option value="joining">Joining the Team</option>
                    <option value="sponsorship">Sponsorship Opportunities</option>
                    <option value="general">General Inquiry</option>
                    <option value="media">Media/Press</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  placeholder="Tell us how we can help you..."
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-check-circle-line text-green-600 mr-2"></i>
                    <span className="text-green-700">Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-red-600 mr-2"></i>
                    <span className="text-red-700">Sorry, there was an error sending your message. Please try again.</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Our Training Ground</h3>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8159234567!2d35.269!3d0.516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzAnNTcuNiJOIDM1wrAxNicwOC40IkU!5e0!3m2!1sen!2ske!4v1234567890"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Squad 11 FC Training Ground - Wareng High School"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
