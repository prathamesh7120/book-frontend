<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import TechnologyBooks from "./components/TechnologyBooks";
import SportsBooks from "./components/SportsBooks";
import TravelBooks from "./components/TravelBooks";
import FashionBooks from "./components/FashionBooks";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/categories" element={<Categories />} />

        <Route path="/technology" element={<TechnologyBooks />} />
        <Route path="/sports" element={<SportsBooks />} />
        <Route path="/travel" element={<TravelBooks />} />
        <Route path="/fashion" element={<FashionBooks />} />

        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ForgotPassword from "./Components/ForgotPassword";
import VerifyOtp from "./Components/VerifyOtp";
import ResetPassword from "./Components/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
>>>>>>> master
  );
}

export default App;
