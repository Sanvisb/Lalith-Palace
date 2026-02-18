import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-text-primary text-white py-12 px-8"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-serif tracking-widest mb-4 text-accent">LALITH PALACE</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-[300px]">
            A luxurious stay where comfort meets elegance. Experience the best hospitality in Kunjathbail, Karnataka.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-serif font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/accommodations" className="hover:text-accent transition-colors">Accommodations</Link></li>
            <li><Link to="/facilities" className="hover:text-accent transition-colors">Facilities</Link></li>
            <li><Link to="/posts" className="hover:text-accent transition-colors">Posts</Link></li>
            <li><Link to="/booking" className="hover:text-accent transition-colors">Book Now</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-serif font-semibold mb-4 text-white">Contact Us</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <p>
              <strong className="text-white block mb-1">Address:</strong>
              Near Coast Guard Quarters, Marakada,<br/>
              Near Airport Road, Kunjathbail,<br/>
              Karnataka 575015
            </p>
            <p className="mt-2">
              <strong className="text-white">Phone:</strong> +91 97419 00250
            </p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-xs">
        <p>&copy; {new Date().getFullYear()} Lalith Palace. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;

