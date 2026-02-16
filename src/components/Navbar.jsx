import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ViewModal from './ViewModal';

function Navbar() {
  const [isViewOpen, setIsViewOpen] = useState(false);
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
         <div className="h-full flex items-center">
            <img src="/logo.jpeg" alt="Lalith Palace Logo" className="h-[60px] w-[60px] object-cover rounded-full" />
         </div>
         <div className="hidden md:flex gap-8 items-center">
          <NavLink to="/" className={linkClasses}>HOME</NavLink>
          <NavLink to="/facilities" className={linkClasses}>FACILITIES</NavLink>
          <NavLink to="/posts" className={linkClasses}>POSTS</NavLink>
          <button onClick={() => setIsViewOpen(true)} className={buttonClasses}>VIEW</button>
         </div>
      </nav>
      
      <ViewModal isOpen={isViewOpen} onClose={() => setIsViewOpen(false)} />
    </>
  );
}

export default Navbar;
