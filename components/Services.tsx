
'use client';

export default function Services() {
  const services = [
    {
      icon: 'ri-computer-line',
      title: 'IT Infrastructure Setup',
      description: 'Complete network setup, server installation, and hardware configuration for optimal business operations.',
      features: ['Network Design & Setup', 'Server Installation', 'Hardware Configuration', 'System Integration']
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive security measures and threat monitoring systems.',
      features: ['Security Assessment', 'Firewall Configuration', 'Data Protection', 'Threat Monitoring']
    },
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Solutions',
      description: 'Migrate to cloud platforms and optimize your business operations with scalable cloud services.',
      features: ['Cloud Migration', 'Cloud Storage', 'Backup Solutions', 'Scalable Infrastructure']
    },
    {
      icon: 'ri-settings-line',
      title: 'System Maintenance',
      description: 'Regular maintenance and support to keep your IT systems running smoothly and efficiently.',
      features: ['Regular Updates', 'Performance Monitoring', 'Technical Support', 'System Optimization']
    },
    {
      icon: 'ri-database-line',
      title: 'Database Management',
      description: 'Professional database design, implementation, and management for secure data handling.',
      features: ['Database Design', 'Data Migration', 'Performance Tuning', 'Backup & Recovery']
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'IT Training & Consultation',
      description: 'Comprehensive training programs and expert consultation to enhance your team\'s technical skills.',
      features: ['Staff Training', 'Technical Consultation', 'Best Practices', 'Skill Development']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Our ICT Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive ICT solutions designed to meet your business needs and drive technological advancement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <i className="ri-check-line text-sm text-blue-600"></i>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 text-center">
                <a 
                  href="#contact" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer inline-block"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need Custom ICT Solutions?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            We understand that every business is unique. Let's discuss your specific requirements 
            and create a tailored ICT solution that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold whitespace-nowrap cursor-pointer"
            >
              Request Quote
            </a>
            <a 
              href="tel:+254729558845" 
              className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold whitespace-nowrap cursor-pointer"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}