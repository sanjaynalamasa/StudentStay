import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Listings from './pages/Listings';
import About from './pages/About';
import SignIn from './pages/SignIn';
import LandlordSignIn from './pages/LandlordSignIn';
import ListingDetail from './components/ListingDetail';
import Reviews from './pages/Reviews';
import RoomSwap from './pages/RoomSwap';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/listing/:id" element={<ListingDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/landlord/signin" element={<LandlordSignIn />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/room-swap" element={<RoomSwap />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;