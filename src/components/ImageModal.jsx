import React, { useEffect } from 'react';

function ImageModal({ isOpen, onClose, imageSrc, altText }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-[1010] p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
        aria-label="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div 
        className="relative max-w-5xl w-full max-h-[90vh] flex justify-center items-center"
        onClick={e => e.stopPropagation()}
      >
        <img 
          src={imageSrc} 
          alt={altText || 'Enlarged view'} 
          className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl animate-scale-in"
        />
      </div>
    </div>
  );
}

export default ImageModal;
