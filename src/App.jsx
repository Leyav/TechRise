// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ScrollToTop from "./components/Layout/ScrollToTop";

// Import your page components
import Home from "./pages/Home";
// Uncomment or add additional pages as needed
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="app-container" style={{ fontFamily: '"Poppins", sans-serif' }}>
      
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/*
            Uncomment or add additional routes below:
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          */}
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
