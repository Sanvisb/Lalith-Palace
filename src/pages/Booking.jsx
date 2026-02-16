import { useState } from 'react';

function Booking() {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [guests, setGuests] = useState('1 adult, 0 children');
  const [hasPets, setHasPets] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate dates
    if (!fromDate || !toDate) {
      alert('Please select check-in and check-out dates');
      return;
    }

    const message = `Hello, I would like to make a booking at Lalith Palace.
    
Check-in: ${fromDate}
Check-out: ${toDate}
Guests: ${guests}
Travelling with pets: ${hasPets ? 'Yes' : 'No'}
`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919741900250?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex flex-col w-full min-h-screen pt-24 bg-bg-color items-center">
      <div className="w-full max-w-4xl px-4 py-6">
        <h1 className="text-4xl text-center font-serif text-text-primary mb-2 uppercase tracking-widest">
          Book Your Stay
        </h1>
        <p className="text-center text-subtext mb-12 font-sans">
          Plan your perfect getaway at Lalith Palace
        </p>

        <div className="bg-white p-8 rounded-lg shadow-lg border border-accent/20">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Date Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-text-primary font-serif font-semibold">Check-in Date</label>
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-accent transition-colors w-full"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-text-primary font-serif font-semibold">Check-out Date</label>
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-accent transition-colors w-full"
                  required
                />
              </div>
            </div>

            {/* Guests */}
            <div className="flex flex-col gap-2">
              <label className="text-text-primary font-serif font-semibold">Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-accent transition-colors w-full bg-white"
              >
                <option value="1 adult, 0 children">1 adult, 0 children</option>
                <option value="2 adults, 0 children">2 adults, 0 children</option>
                <option value="2 adults, 1 child">2 adults, 1 child</option>
                <option value="2 adults, 2 children">2 adults, 2 children</option>
                <option value="3 adults, 0 children">3 adults, 0 children</option>
                <option value="4 adults, 0 children">4 adults, 0 children</option>
                <option value="Other">Other (Specify in message)</option>
              </select>
            </div>

            {/* Pets Checkbox */}
            <div className="flex items-center gap-3 p-4 bg-bg-color/50 rounded-md border border-gray-200">
              <input
                type="checkbox"
                id="pets"
                checked={hasPets}
                onChange={(e) => setHasPets(e.target.checked)}
                className="w-5 h-5 text-accent border-gray-300 rounded focus:ring-accent cursor-pointer"
              />
              <label htmlFor="pets" className="text-text-primary font-serif font-medium cursor-pointer select-none">
                Travelling with pets?
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 bg-accent hover:bg-[#8c7330] text-white font-serif font-bold py-4 px-8 rounded-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl text-center w-full"
            >
              Check Availability via WhatsApp
            </button>
            
            <p className="text-center text-xs text-subtext mt-2">
              * This will open WhatsApp to send your booking details directly to us.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
