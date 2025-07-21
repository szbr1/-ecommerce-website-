import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className=" text-black py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-bold mb-4">
            Creative <span className="text-green-500">Store</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Quality products for comfortable living. We're committed to bringing you the best in style and comfort.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-green-400 transition-colors">Home</a></li>
            <li><a href="/collection" className="hover:text-green-400 transition-colors">Collection</a></li>
            <li><a href="/about" className="hover:text-green-400 transition-colors">About</a></li>
            <li><a href="/contact" className="hover:text-green-400 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-green-400 transition-colors">Shipping Info</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Size Guide</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-green-400 transition-colors">Newsletter</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Social Media</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Reviews</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Blog</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Creative Store. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer