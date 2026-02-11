import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Categories from "./components/Categories";
import About from "./components/About";

import TechnologyBooks from "./components/TechnologyBooks";
import SportsBooks from "./components/SportsBooks";
import TravelBooks from "./components/TravelBooks";
import FashionBooks from "./components/FashionBooks";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />

        {/* Books pages */}
        <Route path="/categories/technology" element={<TechnologyBooks />} />
        <Route path="/categories/sports" element={<SportsBooks />} />
        <Route path="/categories/travel" element={<TravelBooks />} />
        <Route path="/categories/fashion" element={<FashionBooks />} />

        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
