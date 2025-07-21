import React from 'react';
import { Star, Award, Users, Globe } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "10K+", label: "Happy Customers" },
    { icon: <Globe className="w-8 h-8" />, number: "50+", label: "Countries Served" },
    { icon: <Award className="w-8 h-8" />, number: "5+", label: "Years Experience" },
    { icon: <Star className="w-8 h-8" />, number: "4.8", label: "Average Rating" }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We source only the finest materials and work with skilled artisans to ensure every product meets our high standards."
    },
    {
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We listen to feedback and continuously improve our products and services."
    },
    {
      title: "Sustainable Practices",
      description: "We're committed to environmentally responsible manufacturing and packaging to protect our planet."
    },
    {
      title: "Innovation",
      description: "We constantly explore new designs, materials, and technologies to bring you the latest in comfort and style."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/api/placeholder/300/300",
      description: "With 15 years in fashion retail, Sarah founded Creative Store to bring quality, comfortable products to everyone."
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image: "/api/placeholder/300/300",
      description: "Michael leads our design team, ensuring every product balances style, comfort, and functionality."
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Success Manager",
      image: "/api/placeholder/300/300",
      description: "Emily ensures every customer has an exceptional experience from browse to delivery and beyond."
    }
  ];

  return (
    <div className="min-h-screen bg-white mt-20">
  

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-100 to-yellow-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Creative <span className="text-green-500">Store</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're passionate about creating comfortable, high-quality products that enhance your everyday experiences. 
              Since our founding, we've been dedicated to bringing you the perfect blend of style, comfort, and durability.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-green-500 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Creative Store was born from a simple idea: everyone deserves access to comfortable, 
                  well-made products that enhance their daily lives. What started as a small venture 
                  has grown into a trusted brand serving customers worldwide.
                </p>
                <p>
                  Our journey began when our founder noticed a gap in the market for truly comfortable, 
                  durable footwear and accessories. We set out to create products that don't compromise 
                  on style, comfort, or quality.
                </p>
                <p>
                  Today, we're proud to offer a curated selection of products that have been tested, 
                  refined, and loved by thousands of customers. Every item in our collection reflects 
                  our commitment to excellence and our passion for customer satisfaction.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Creative Store workshop" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from product development to customer service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Creative Store who work tirelessly to bring you the best products and service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-500 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Creative Store for quality, comfort, and style.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto">
              Shop Collection
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
    
    </div>
  );
};

export default AboutPage;