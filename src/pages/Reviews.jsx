import React from 'react';
import { motion } from 'framer-motion';

function Reviews() {
  const reviews = [
    {
      platform: 'Google',
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className="w-12 h-12">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.79l7.97-6.2z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
      ),
      title: 'Google Reviews',
      description: 'Read what our guests say about us on Google.',
      link: 'https://www.google.com/search?q=LALITH+PALACE&stick=H4sIAAAAAAAA_-NgU1I1qDBOSjQ2NUwzTDIxMLY0MEyyMqgwT0lJTDVITjI1Mza0tLRMXsTK6-Po4xnioRDg6OPo7AoANUVcPjkAAAA&hl=en-GB&mat=CZ-VNf7HnYn_ElcBTVDHnoY4NokZQuNRNm-dBlxgLny5ENjqVlwnZpOLZjIXbR1kuxKOwkiKpJ22oGiz1h2A5Mv3Ooi7cL8OuR5_OUWZbqt-TmxxIhFB1lxbb_uJCyks9lk&authuser=0',
      cta: 'Read Google Reviews'
    },
    {
      platform: 'Airbnb',
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#FF5A5F"  className="w-12 h-12 text-[#FF5A5F]">
           <path d="M22.5 11.8c-.8-2.3-2.5-4.3-4.8-5.7C16.2 5.1 14.2 4.6 12 4.6s-4.2.5-5.7 1.5c-2.3 1.4-4 3.4-4.8 5.7-.3.8-.4 1.7-.4 2.5 0 2.2.9 4.3 2.5 5.8 1.6 1.6 3.7 2.4 5.9 2.4s4.3-.9 5.9-2.4c1.6-1.6 2.5-3.6 2.5-5.8 0-.8-.1-1.7-.4-2.5zm-5.6-5.4c1.5.8 2.6 2.2 3.2 3.7.1.3.2.6.2.9 0 2-.8 3.9-2.2 5.3-1.4 1.4-3.3 2.2-5.3 2.2s-3.9-.8-5.3-2.2C6.1 15 5.3 13.1 5.3 11.1c0-.3.1-.6.2-.9.6-1.6 1.7-2.9 3.2-3.7 1.1-.6 2.3-.9 3.5-.9s2.4.3 3.5.9z"/>
           <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
           <path fill="currentColor" d="M11.97 2.05c-5.48.01-9.92 4.47-9.92 9.95 0 5.48 4.44 9.94 9.92 9.95 5.48-.01 9.92-4.47 9.92-9.95 0-5.48-4.44-9.94-9.92-9.95zm0 17.65c-4.25 0-7.7-3.45-7.7-7.7s3.45-7.7 7.7-7.7 7.7 3.45 7.7 7.7-3.45 7.7-7.7 7.7zm4.7-8.8c-.85-2.05-2.65-3.65-4.7-3.65s-3.85 1.6-4.7 3.65c-.2.5-.35 1.05-.35 1.6 0 2.55 2.05 4.65 5.05 4.65s5.05-2.1 5.05-4.65c0-.55-.1-1.1-.35-1.6z"/>
        </svg>
      ),
      title: 'Airbnb Reviews',
      description: 'Check out our verified reviews and ratings on Airbnb.',
      link: 'https://www.airbnb.co.in/rooms/1588945645689068018?locale=en&_set_bev_on_new_domain=1771238620_EANTk4OGUwYWU0Nj&set_everest_cookie_on_new_domain=1771238620.EANGFkMWQzZmFmNTZmM2.XZGhFAKzrkZuAoxWybo-QZLBwTIAmjgay15C8aWX5bo&source_impression_id=p3_1771395019_P3gM1yhPsZJB6Ssb',
      cta: 'Book on Airbnb'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="px-4 py-8 md:px-16 md:py-8 max-w-[1400px] mx-auto min-h-[60vh] flex flex-col items-center"
    >
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-accent font-serif text-center mb-8 md:mb-16 text-2xl md:text-[2.5rem] uppercase tracking-widest"
      >
        Guest Reviews
      </motion.h1>

      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl w-full"
      >
        {reviews.map((review, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="bg-white p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg flex flex-col items-center text-center border border-gray-100 hover:-translate-y-2"
          >
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="mb-6"
            >
              {review.logo}
            </motion.div>
            
            <h2 className="text-xl md:text-2xl font-serif font-bold text-text-primary mb-4">
              {review.title}
            </h2>
            
            <p className="text-subtext mb-8 leading-relaxed max-w-sm">
              {review.description}
            </p>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={review.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-accent hover:bg-[#8c7330] text-white font-serif font-bold py-3 px-8 rounded-sm uppercase tracking-widest transition-colors duration-300 shadow-md"
            >
              {review.cta}
            </motion.a>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-16 text-center max-w-2xl px-4"
      >
        <p className="text-text-primary text-lg font-serif italic mb-6">
          "We take pride in providing our guests with a comfortable and memorable stay. Your feedback helps us serve you better."
        </p>
        <div className="w-16 h-1 bg-accent mx-auto opacity-50"></div>
      </motion.div>
    </motion.div>
  );
}

export default Reviews;

