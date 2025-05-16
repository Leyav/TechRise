// App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import UserHeader from "./components/UserLayout/Header";
import ScrollToTop from "./components/Layout/ScrollToTop";

// Import your page components
import Home from "./pages/Home";
// Uncomment or add additional pages as needed
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
import Categories from "./pages/Categories";

import UserPage from "./pages/User";

function App() {
  const location = useLocation();

  // Define routes where Header/Footer should be hidden
  const hideLayoutRoutes = ["/user"];

  // Check if current route starts with any path in hideLayoutRoutes
  const shouldHideHeaderFooter = hideLayoutRoutes.some((path) =>
    location.pathname.startsWith(path)
  );
  return (
    <div style={{ fontFamily: '"Poppins", sans-serif' }}>

      {!shouldHideHeaderFooter && <Header />}
      {shouldHideHeaderFooter && < UserHeader />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserPage />} />

        {/*
            Uncomment or add additional routes below:
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            
          */}
        <Route path="/categories" element={<Categories />} />
        {/* <Route path="/frontend/reactjs" element={<ReactjsPage/>} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
