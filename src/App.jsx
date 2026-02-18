import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Accommodations from './pages/Accommodations';
import Facilities from './pages/Facilities';
import Posts from './pages/Posts';
import Reviews from './pages/Reviews';
import Booking from './pages/Booking';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/accommodations" element={<Accommodations />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App

