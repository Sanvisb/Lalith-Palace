import React from 'react';
import { motion } from 'framer-motion';
import ImageModal from '../components/ImageModal';

function Accommodations() {
  const rooms = [
    {
       id: 1,
       image: `${import.meta.env.BASE_URL}bedroom6.jpeg`,
       title: 'Ground Floor – Room 1',
       description: 'A well maintained and cozy room designed for a comfortable stay, featuring clean interior, soft lighting and peaceful ambience ideal for rest and relaxation.'
    },
    {
      id: 2,
      image: `${import.meta.env.BASE_URL}bedroom1.jpeg`,
      title: 'Ground Floor – Room 2',
      description: 'A balance between minimalist restraint and personal expression, often pairing sleek modern furniture with luxurious comfort.'
    },
    {
      id: 3,
      image: `${import.meta.env.BASE_URL}upperbedroom1.jpeg`,
      title: 'First Floor – Room 1',
      description: 'A neatly maintained room that provides a calm environment, simple decor and a restful setting after a long day.'
    },
    {
      id: 4,
      image: `${import.meta.env.BASE_URL}bedroom4.jpeg`,
      title: 'First Floor – Room 2',
      description: 'This premium room offers comfort withmtranquil atmosphere. Ideal for guests who value privacy and convenience.'
    },
    {
      id: 5,
      image: `${import.meta.env.BASE_URL}bedroom5.jpeg`,
      title: 'First Floor – Room 3',
      description: 'This well appointed room offers a warm and relaxing atmosphere, ideal for both short and extended stays.'
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
      className="px-4 py-8 md:px-16 md:py-8 max-w-[1400px] mx-auto"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-accent font-serif text-center mb-8 md:mb-12 text-2xl md:text-[2.5rem] break-words"
      >
        ACCOMMODATIONS
      </motion.h1>
      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {rooms.map(room => (
          <motion.div 
            key={room.id} 
            variants={itemVariants}
            className="bg-white shadow-md rounded overflow-hidden transition-shadow duration-300 hover:shadow-xl"
          >
            <div 
              className="aspect-[4/3] w-full overflow-hidden bg-[#f5f5f5] cursor-pointer"
              onClick={() => setSelectedImage({ src: room.image, alt: room.title })}
            >
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover" 
                />
            </div>
            <div className="p-6">
                <h3 className="mb-2 text-text-primary font-serif text-xl font-semibold">{room.title}</h3>
                <p className="text-subtext text-sm leading-relaxed">{room.description}</p>
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

export default Accommodations;

