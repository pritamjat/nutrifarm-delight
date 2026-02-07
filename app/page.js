'use client';

import React, { useState } from 'react';
import { Leaf, Award, Menu, X, ChevronRight, Heart, Shield, Sprout, Mail, Store, MessageCircle } from 'lucide-react';

export default function NutrifarmDelight() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);

  const whatsappNumber = "918368821279";

  const products = [
    { name: 'Apni Chai', category: 'Tea', image: '🍵' },
    { name: 'Pure Spices', category: 'Spices', image: '🌶️' },
    { name: 'Fresh Pulses', category: 'Grains', image: '🫘' },
    { name: 'Poha', category: 'Grains', image: '🌾' },
    { name: 'Pasta', category: 'Grains', image: '🍝' },
    { name: 'Roasted Channa', category: 'Snacks', image: '🥜' },
  ];

  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Pure & Natural',
      description: 'Products in their most natural form without unnecessary additions'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assured',
      description: 'Rigorous sorting, grading, and quality checks at every step'
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: 'Direct from Farmers',
      description: 'Sourced directly from farmers ensuring authenticity and freshness'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Trusted by Families',
      description: 'Building a brand families can rely on for everyday needs'
    }
  ];

  
  return (
    <div className="min-h-screen bg-white">
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href={`https://wa.me/${whatsappNumber}?text=Hi%20Nutrifarm%20Delight!%20I%20would%20like%20to%20know%20more%20about%20your%20products.`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          onMouseEnter={() => setShowWhatsAppTooltip(true)}
          onMouseLeave={() => setShowWhatsAppTooltip(false)}
        >
          {/* Pulsing Rings Animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
          <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse"></div>
          
          {/* Main Button */}
          <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
            <MessageCircle className="w-8 h-8" />
          </div>
          
          {/* Tooltip */}
          {showWhatsAppTooltip && (
            <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
              Chat with us on WhatsApp
              <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
            </div>
          )}
        </a>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center -m-20 ">
              <img src='logo.svg' alt="Logo" width="140" />
              {/*<Leaf className="w-8 h-8 text-green-600" />*/}
              <div className="-m-7">
              <span className="text-2xl font-bold text-orange-600 ">N</span>
              <span className="text-2xl font-bold text-green-800">utrifarm</span>
              <span className="text-2xl font-bold text-orange-600">D</span>
              <span className="text-2xl font-bold text-green-800">elight</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition">About</a>
              <a href="#products" className="text-gray-700 hover:text-green-600 transition">Products</a>
              <a href="#values" className="text-gray-700 hover:text-green-600 transition">Our Values</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition">Contact</a>
              <a href="mailto:bhoomidelight@gmail.com" className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
               </a>
              <a href="https://www.store.nutrifarmdelight.in" className="text-gray-700 hover:text-green-600 transition">
                <Store className="w-8 h-8" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="#home" className="block py-2 text-gray-700 hover:text-green-600">Home</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-green-600">About</a>
              <a href="#products" className="block py-2 text-gray-700 hover:text-green-600">Products</a>
              <a href="#values" className="block py-2 text-gray-700 hover:text-green-600">Our Values</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-green-600">Contact</a>
              <a href="mailto:bhoomidelight@gmail.com" className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition mt-2">
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-linear-to-br from-orange-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6">
              Pure. Natural. Trusted.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Quality food products in their most natural form, sourced directly from farmers to your table
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#products" className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition inline-flex items-center justify-center">
                Explore Products <ChevronRight className="w-5 h-5 ml-2" />
              </a>
              <a href="#about" className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition border-2 border-green-600">
                About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Nutrifarm Delight</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nutrifarm Delight is a food brand committed to delivering the best quality products in their purest and most natural form, without any unnecessary additions. Our aim is simple yet powerful — to become a brand that customers can trust blindly and rely on for their everyday food needs.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We believe that true quality begins at the source. We directly procure raw materials from farmers and producers, ensuring authenticity, freshness, and consistency right from origin to packaging.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Each product goes through careful sorting, grading, and quality checks, followed by hygienic and secure packaging designed to preserve natural taste, aroma, and nutrition.
              </p>
            </div>
            <div >
              <div className="text-center">
                {/*<Leaf className="w-32 h-32 text-green-600 mx-auto mb-4" />
                <p className="text-2xl font-semibold text-green-900">From Farm to Family</p>*/}
                <img src='apnichai.jpeg' alt="Logo" width="500"  />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">What makes Nutrifarm Delight special</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
                <div className="text-green-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600">Carefully selected and processed with focus on purity and safety</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-linear-to-br from-orange-50 to-white p-8 rounded-xl border-2 border-orange-100 hover:border-green-300 transition cursor-pointer group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition">{product.image}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-green-600 font-medium">{product.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Our Promise to You</h2>
          <p className="text-xl leading-relaxed">
            Nutrifarm Delight stands for purity, transparency, and reliability. As we grow, our promise remains unchanged: to deliver wholesome, high-quality food products that families can trust every day. We don't believe in shortcuts — every step is managed with attention, responsibility, and respect for food.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">We'd love to hear from you</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"  />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Tell us how we can help you"></textarea>
              </div>
              <button onClick={() => alert('Thank you for your interest! Please email us at bhoomidelight@gmail.com')} className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src='logo.svg' alt="Logo" width="140" />
               {/* <Leaf className="w-8 h-8 text-green-400" />*/}
                <span className="text-xl font-bold -m-8">Nutrifarm Delight</span>
              </div>
              <p className="text-gray-400">Pure, natural, and trusted food products for your family.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition">Products</a></li>
                <li><a href="#values" className="text-gray-400 hover:text-white transition">Our Values</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <p className="text-gray-400 mb-2">Email: bhoomidelight@gmail.com</p>
              <p className="text-gray-400 mb-4">Phone: +91 836 882 1279</p>
              <h3 className="text-lg font-semibold mb-4 mt-6">Visit Us</h3>
              <p className="text-gray-400">2-3rd floor, Plot no 281,<br />Sagar Setu Enclave,<br />Jaipur Road, Bikaner<br />334001, Rajasthan</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Nutrifarm Delight. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
