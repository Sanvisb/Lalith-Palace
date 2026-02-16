import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ViewModal from './ViewModal';

function Navbar() {
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Base navbar classes
  const navClasses = `flex justify-between items-center px-4 md:px-16 py-4 h-20 z-50 transition-all duration-300 ${
    isHome 
      ? 'absolute top-0 left-0 w-full bg-transparent text-white border-none' 
      : 'relative bg-bg-color text-text-primary'
  }`;

  const linkClasses = ({ isActive }) => 
    `font-semibold text-sm tracking-widest pb-1 border-b-2 transition-all duration-300 ${
      isActive 
        ? 'text-accent border-accent' 
        : (isHome ? 'text-white hover:text-accent border-transparent' : 'text-text-primary hover:text-accent border-transparent')
    }`;
    
  // Button classes similar to link classes but without active state
  const buttonClasses = `font-semibold text-sm tracking-widest pb-1 border-b-2 transition-all duration-300 cursor-pointer bg-transparent p-0 ${
    isHome 
      ? 'text-white hover:text-accent border-transparent' 
      : 'text-text-primary hover:text-accent border-transparent'
  }`;

  return (
    <>
      <nav className={navClasses}>
         <div className="h-full flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center">
              <img src={`${import.meta.env.BASE_URL}logo.jpeg`} alt="Lalith Palace Logo" className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] object-cover rounded-full" />
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-2xl focus:outline-none"
              onClick={() => setIsMenuOpen(!isViewOpen ? !isMenuOpen : false)}
              aria-label="Toggle menu"
            >
              <div className={`w-8 h-0.5 bg-current mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-8 h-0.5 bg-current mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-8 h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
         </div>

         {/* Desktop Menu */}
         <div className="hidden md:flex gap-8 items-center">
          <NavLink to="/" className={linkClasses}>HOME</NavLink>
          <NavLink to="/accommodations" className={linkClasses}>ACCOMMODATIONS</NavLink>
          <NavLink to="/facilities" className={linkClasses}>FACILITIES</NavLink>
          <NavLink to="/posts" className={linkClasses}>POSTS</NavLink>
          <button onClick={() => setIsViewOpen(true)} className={buttonClasses}>VIEW</button>
         </div>

         {/* Mobile Menu */}
         <div className={`absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 md:hidden transition-all duration-300 origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 overflow-hidden'}`}>
            <NavLink to="/" className={({ isActive }) => `text-text-primary ${isActive ? 'text-accent font-bold' : ''}`} onClick={() => setIsMenuOpen(false)}>HOME</NavLink>
            <NavLink to="/accommodations" className={({ isActive }) => `text-text-primary ${isActive ? 'text-accent font-bold' : ''}`} onClick={() => setIsMenuOpen(false)}>ACCOMMODATIONS</NavLink>
            <NavLink to="/facilities" className={({ isActive }) => `text-text-primary ${isActive ? 'text-accent font-bold' : ''}`} onClick={() => setIsMenuOpen(false)}>FACILITIES</NavLink>
            <NavLink to="/posts" className={({ isActive }) => `text-text-primary ${isActive ? 'text-accent font-bold' : ''}`} onClick={() => setIsMenuOpen(false)}>POSTS</NavLink>
            <button onClick={() => { setIsViewOpen(true); setIsMenuOpen(false); }} className="text-text-primary font-semibold">VIEW</button>
         </div>
      </nav>
      
      <ViewModal isOpen={isViewOpen} onClose={() => setIsViewOpen(false)} />
    </>
  );
}

export default Navbar;
