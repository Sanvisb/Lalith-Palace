import React from 'react';
import { motion } from 'framer-motion';
import ImageModal from '../components/ImageModal';

function Facilities() {
    const facilities = [
        {
             id: 1,
      image: `${import.meta.env.BASE_URL}lali5.jpeg`,
      title: 'Common Hall',
      description: 'A spacious and luxurious hall where guests can sit back, relax or socialize in a calm, pleasant, fully furnished atmosphere.'
          
        },
        {
          id: 2,
          image: `${import.meta.env.BASE_URL}lili.jpeg`,
          title: 'Spacious Open Area',
          description: 'A wide, open area located in front of the guest house, perfect for leisure time, light activities and get togethers.'
        },
    {
      id:3,
      image: `${import.meta.env.BASE_URL}lali 4.jpeg`,
      title: 'Dining Area',
      description: 'Our dining area offers a warm and inviting space where guests can enjoy meals in comfort with a calm ambience perfect for relaxed dining.'
    },
    {
       id:4,
      image: `${import.meta.env.BASE_URL}lali6.jpeg`,
          title: 'Kitchen',
          description: 'Our kitchen is a clean, well maintained space designed to ensure hygienic and delicious meal preparation. Equipped with essential appliances and quality utensils.'
    }
  ];

  const [selectedImage, setSelectedImage] = React.useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="p-8 md:px-16 md:py-8 max-w-[1400px] mx-auto"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-accent font-serif text-center mb-12 text-[2.5rem]"
      >
        FACILITIES
      </motion.h1>
      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
         {facilities.map(item => (
          <motion.div 
            key={item.id} 
            variants={itemVariants}
            className="bg-white shadow-md rounded overflow-hidden transition-shadow duration-300 hover:shadow-xl"
          >
            <div 
              className="h-[300px] overflow-hidden bg-[#f5f5f5] cursor-pointer"
              onClick={() => setSelectedImage({ src: item.image, alt: item.title })}
            >
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain" 
                />
            </div>
            <div className="p-6">
                <h3 className="mb-2 text-text-primary font-serif text-xl font-semibold">{item.title}</h3>
                <p className="text-subtext text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <ImageModal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        imageSrc={selectedImage?.src} 
        altText={selectedImage?.alt}
      />
    </motion.div>
  );
}

export default Facilities;

