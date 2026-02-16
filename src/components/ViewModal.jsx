import React from 'react';

function ViewModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const views = [
    { id: 1, image: `${import.meta.env.BASE_URL}view1.jpeg` },
    { id: 2, image: `${import.meta.env.BASE_URL}view2.jpeg` },
    { id: 3, image: `${import.meta.env.BASE_URL}view3.jpeg` }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={onClose}>
      <div 
        className="relative bg-white rounded-lg p-2 w-full max-w-5xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-auto max-h-[85vh] overflow-y-auto">
          {/* Main Large Image */}
          <div className="md:col-span-2 h-[300px] md:h-[400px] group relative overflow-hidden rounded-sm">
            <img 
                src={views[0].image} 
                alt={`View ${views[0].id}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>

          {/* Secondary Images */}
          {views.slice(1).map(view => (
            <div key={view.id} className="h-[250px] md:h-[300px] group relative overflow-hidden rounded-sm">
               <img 
                   src={view.image} 
                   alt={`View ${view.id}`} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
               />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewModal;
