import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    { title: "WiFi", desc: "We offer complimentary WiFi for Every guest.", icon: "wifi icon.png" },
    { title: "A/C Rooms", desc: "All King sized rooms are equipped with Air Condition.", icon: "ac.png" },
    { title: "24/7 Assistance", desc: "Available 24/7 to receive your call.", icon: "twentyfourseven.png" },
    { title: "Campfire", desc: "Enjoy Campfire services (on demand).", icon: "campfire.png" },
    { title: "Hot & Cold Water", desc: "Enjoy uninterrupted access to both hot and cold water.", icon: "water.png" },
    { title: "Barbeque", desc: "Enjoy Barbeque services (on demand).", icon: "barbeque.png" },
    { title: "Refrigerator", desc: "Refrigerator available for use.", icon: "refrigerator.png" },
    { title: "CareTaker", desc: "Caretaker at just one call away.", icon: "caretaker.png" },
    { title: "Electricity", desc: "24*7 Electricity with power back up.", icon: "electricity.png" },
    { title: "Washing Machine", desc: "Washing Machine available for use.", icon: "washingmachine.png" },
    { title: "Parking", desc: "Free Parking Facility avaialble in premises.", icon: "parking.png" },
    { title: "Events", desc: "Events and parties in premises could be hosted at resonable rates.", icon: "party.png" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col w-full min-h-[80vh]"
    >
      <div 
        className="flex min-h-screen w-full bg-cover bg-center justify-center items-center m-0 max-w-full relative"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${import.meta.env.BASE_URL}lali5.jpeg')` }}
      >
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="p-4 md:p-8 flex flex-col justify-center items-center text-center text-white mt-[60px]"
        >
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white text-4xl md:text-[3.5rem] mb-2 tracking-[0.15em] font-serif uppercase"
            >
              LALITH PALACE
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-accent tracking-[0.3em] mb-8 uppercase text-lg md:text-xl font-semibold"
            >
              GUEST HOUSE
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl mb-8 uppercase font-bold tracking-[0.15em] text-accent"
            >
              Marakada, Mangalore
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-black/50 p-6 md:p-8 rounded-lg max-w-[600px] border border-white/20 mx-4"
            >
              <p className="text-[#f0f0f0] text-base md:text-lg font-medium mb-8 italic">
                A luxurious stay where comfort meets elegance for affordable rates.
              </p>
              
              <div className="text-center mt-6 text-white font-bold">
                <strong className="text-white block mb-2 text-lg md:text-xl font-extrabold">Address:</strong>
                <p className="font-bold my-1 text-[#f0f0f0] text-sm md:text-base">Near Coast Guard Quarters, Marakada,</p>
                <p className="font-bold my-1 text-[#f0f0f0] text-sm md:text-base">Near Airport Road, Kunjathbail,</p>
                <p className="font-bold my-1 text-[#f0f0f0] text-sm md:text-base">Karnataka 575015</p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/accommodations" className="inline-block bg-transparent hover:bg-accent text-white font-serif font-bold py-2 px-6 md:py-3 md:px-8 text-sm md:text-base rounded-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:scale-105 border border-white hover:border-transparent">
                    Explore Rooms
                </Link>
                <Link to="/booking" className="inline-block bg-accent hover:bg-[#8c7330] text-white font-serif font-bold py-2 px-6 md:py-3 md:px-8 text-sm md:text-base rounded-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl border border-transparent hover:border-white/20">
                    Book Now
                </Link>
              </div>
            </motion.div>
        </motion.div>
      </div>

      <div className="py-16 px-8 bg-white text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl mb-16 text-text-primary font-serif uppercase tracking-widest"
        >
          Services We Provide
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12 max-w-[1400px] mx-auto justify-items-center"
        >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center w-full max-w-[160px] md:max-w-[250px] text-center group"
              >
                  <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full p-4 bg-bg-color shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-accent/20">
                      <img src={`${import.meta.env.BASE_URL}${service.icon}`} alt={service.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="mb-2 md:mb-3 text-lg md:text-xl text-text-primary font-serif font-semibold">{service.title}</h3>
                  <p className="text-subtext text-xs md:text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full p-8 md:p-16 bg-bg-color"
      >
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.026774686915!2d74.834!3d12.924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzI2LjQiTiA3NMKwNTAnMDIuNCJF!5e0!3m2!1sen!2sin!4v1625630000000!5m2!1sen!2sin" 
            width="100%" 
            height="400" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy">
        </iframe>
      </motion.div>
    </motion.div>
  );
}

export default Home;

