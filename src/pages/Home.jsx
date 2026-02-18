import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col w-full min-h-[80vh]">
      <div 
        className="flex min-h-screen w-full bg-cover bg-center justify-center items-center m-0 max-w-full relative"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${import.meta.env.BASE_URL}lali5.jpeg')` }}
      >
        
        <div className="p-4 md:p-8 flex flex-col justify-center items-center text-center text-white mt-[60px]">
            <h1 className="text-white text-4xl md:text-[3.5rem] mb-2 tracking-[0.15em] font-serif uppercase">LALITH PALACE</h1>
            <h2 className="text-accent tracking-[0.3em] mb-8 uppercase text-lg md:text-xl font-semibold">GUEST HOUSE</h2>
            <p className="text-lg md:text-xl mb-8 uppercase font-bold tracking-[0.15em] text-accent">Kunjathbail, Karnataka</p>
            
            <div className="bg-black/50 p-6 md:p-8 rounded-lg max-w-[600px] border border-white/20 mx-4">
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
            </div>
        </div>
      </div>

      <div className="py-16 px-8 bg-white text-center">
        <h2 className="text-4xl mb-16 text-text-primary font-serif uppercase tracking-widest">Services We Provide</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12 max-w-[1400px] mx-auto justify-items-center">
            {/* WiFi */}
            <div className="flex flex-col items-center w-full max-w-[160px] md:max-w-[250px] text-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full p-4 bg-bg-color shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-accent/20">
                    <img src={`${import.meta.env.BASE_URL}wifi icon.png`} alt="WiFi" className="w-full h-full object-contain" />
                </div>
                <h3 className="mb-2 md:mb-3 text-lg md:text-xl text-text-primary font-serif font-semibold">WiFi</h3>
                <p className="text-subtext text-xs md:text-sm leading-relaxed">We offer complimentary WiFi for Every guest.</p>
            </div>
            
            {/* A/C Rooms */}
            <div className="flex flex-col items-center w-full max-w-[160px] md:max-w-[250px] text-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full p-4 bg-bg-color shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-accent/20">
                     <img src={`${import.meta.env.BASE_URL}ac.png`} alt="A/C Rooms" className="w-full h-full object-contain" />
                </div>
                <h3 className="mb-2 md:mb-3 text-lg md:text-xl text-text-primary font-serif font-semibold">A/C Rooms</h3>
                <p className="text-subtext text-xs md:text-sm leading-relaxed">All rooms are equipped with Air Condition.</p>
            </div>

            {/* 24/7 Assistance */}
            <div className="flex flex-col items-center w-full max-w-[160px] md:max-w-[250px] text-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full p-4 bg-bg-color shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-accent/20">
                     <img src={`${import.meta.env.BASE_URL}twentyfourseven.png`} alt="24/7 Assistance" className="w-full h-full object-contain" />
                </div>
                <h3 className="mb-2 md:mb-3 text-lg md:text-xl text-text-primary font-serif font-semibold">24/7 Assistance</h3>
                <p className="text-subtext text-xs md:text-sm leading-relaxed">Available 24/7 to receive your call.</p>
            </div>

            {/* Campfire */}
            <div className="flex flex-col items-center w-full max-w-[160px] md:max-w-[250px] text-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full p-4 bg-bg-color shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-accent/20">
                     <img src={`${import.meta.env.BASE_URL}campfire.png`} alt="Campfire" className="w-full h-full object-contain" />
                </div>
                <h3 className="mb-2 md:mb-3 text-lg md:text-xl text-text-primary font-serif font-semibold">Campfire</h3>
                <p className="text-subtext text-xs md:text-sm leading-relaxed">Enjoy Campfire services (on demand).</p>
            </div>

            {/* Hot & Cold Water */}
            <div className="flex flex-col items-center w-full max-w-[160px] md:max-w-[250px] text-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full p-4 bg-bg-color shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-accent/20">
                     <img src={`${import.meta.env.BASE_URL}water.png`} alt="Hot & Cold Water" className="w-full h-full object-contain" />
                </div>
                <h3 className="mb-2 md:mb-3 text-lg md:text-xl text-text-primary font-serif font-semibold">Hot & Cold Water</h3>
                <p className="text-subtext text-xs md:text-sm leading-relaxed">Enjoy uninterrupted access to both hot and cold water.</p>
            </div>

            {/* Barbeque */}
            <div className="flex flex-col items-center w-full max-w-[160px] md:max-w-[250px] text-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full p-4 bg-bg-color shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-accent/20">
                     <img src={`${import.meta.env.BASE_URL}barbeque.png`} alt="Barbeque" className="w-full h-full object-contain" />
                </div>
                <h3 className="mb-2 md:mb-3 text-lg md:text-xl text-text-primary font-serif font-semibold">Barbeque</h3>
                <p className="text-subtext text-xs md:text-sm leading-relaxed">Enjoy Barbeque services (on demand).</p>
            </div>

            {/* Refrigerator */}
            <div className="flex flex-col items-center w-full max-w-[160px] md:max-w-[250px] text-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full p-4 bg-bg-color shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-accent/20">
                     <img src={`${import.meta.env.BASE_URL}refrigerator.png`} alt="Refrigerator" className="w-full h-full object-contain" />
                </div>
                <h3 className="mb-2 md:mb-3 text-lg md:text-xl text-text-primary font-serif font-semibold">Refrigerator</h3>
                <p className="text-subtext text-xs md:text-sm leading-relaxed">Refrigerator available for use.</p>
            </div>

            {/* CareTaker */}
             <div className="flex flex-col items-center w-full max-w-[160px] md:max-w-[250px] text-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full p-4 bg-bg-color shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-accent/20">
                     <img src={`${import.meta.env.BASE_URL}caretaker.png`} alt="CareTaker" className="w-full h-full object-contain" />
                </div>
                <h3 className="mb-2 md:mb-3 text-lg md:text-xl text-text-primary font-serif font-semibold">CareTaker</h3>
                <p className="text-subtext text-xs md:text-sm leading-relaxed">caretaker at just one call away</p>
            </div>

            {/* Electricity */}
            <div className="flex flex-col items-center w-full max-w-[160px] md:max-w-[250px] text-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full p-4 bg-bg-color shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-accent/20">
                     <img src={`${import.meta.env.BASE_URL}electricity.png`} alt="Electricity" className="w-full h-full object-contain" />
                </div>
                <h3 className="mb-2 md:mb-3 text-lg md:text-xl text-text-primary font-serif font-semibold">Electricity</h3>
                <p className="text-subtext text-xs md:text-sm leading-relaxed">24*7 Electricity with power back up.</p>
            </div>

            {/* Washing Machine */}
            <div className="flex flex-col items-center w-full max-w-[160px] md:max-w-[250px] text-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full p-4 bg-bg-color shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-accent/20">
                     <img src={`${import.meta.env.BASE_URL}washingmachine.png`} alt="Washing Machine" className="w-full h-full object-contain" />
                </div>
                <h3 className="mb-2 md:mb-3 text-lg md:text-xl text-text-primary font-serif font-semibold">Washing Machine</h3>
                <p className="text-subtext text-xs md:text-sm leading-relaxed">Washing Machine available for use.</p>
            </div>

            {/* Parking */}
             <div className="flex flex-col items-center w-full max-w-[160px] md:max-w-[250px] text-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full p-4 bg-bg-color shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-accent/20">
                     <img src={`${import.meta.env.BASE_URL}parking.png`} alt="Parking" className="w-full h-full object-contain" />
                </div>
                <h3 className="mb-2 md:mb-3 text-lg md:text-xl text-text-primary font-serif font-semibold">Parking</h3>
                <p className="text-subtext text-xs md:text-sm leading-relaxed">Free Parking Facility avaialble in premises.</p>
            </div>

            {/* Events */}
            <div className="flex flex-col items-center w-full max-w-[160px] md:max-w-[250px] text-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full p-4 bg-bg-color shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-accent/20">
                     <img src={`${import.meta.env.BASE_URL}party.png`} alt="Events" className="w-full h-full object-contain" />
                </div>
                <h3 className="mb-2 md:mb-3 text-lg md:text-xl text-text-primary font-serif font-semibold">Events</h3>
                <p className="text-subtext text-xs md:text-sm leading-relaxed">Events and parties in premises could be hosted at resonable rates.</p>
            </div>
        </div>
      </div>

      <div className="w-full p-8 md:p-16 bg-bg-color">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.026774686915!2d74.834!3d12.924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzI2LjQiTiA3NMKwNTAnMDIuNCJF!5e0!3m2!1sen!2sin!4v1625630000000!5m2!1sen!2sin" 
            width="100%" 
            height="400" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy">
        </iframe>
      </div>
    </div>
  );
}

export default Home;
