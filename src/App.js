import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Categories from "./components/Categories";
import About from "./components/About";
import Cart from "./components/Cart";


// Books
import TechnologyBooks from "./components/TechnologyBooks";
import SportsBooks from "./components/SportsBooks";
import TravelBooks from "./components/TravelBooks";
import FashionBooks from "./components/FashionBooks";
import RomanceBooks from "./components/RomanceBooks";
import KidsBooks from "./components/KidsBooks";
import HorrorBooks from "./components/HorrorBooks";

// ✅ Context
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />

          <Route path="/categories/technology" element={<TechnologyBooks />} />
          <Route path="/categories/sports" element={<SportsBooks />} />
          <Route path="/categories/travel" element={<TravelBooks />} />
          <Route path="/categories/fashion" element={<FashionBooks />} />

          <Route path="/romance" element={<RomanceBooks />} />
          <Route path="/kids" element={<KidsBooks />} />
          <Route path="/horror" element={<HorrorBooks />} />

          {/* ✅ CART */}
          <Route path="/cart" element={<Cart />} />

          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;