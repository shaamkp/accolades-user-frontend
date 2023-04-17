import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../../general/LandingPage';
import Header from '../../includes/Header';
import AboutUs from '../../screens/AboutUs';
import Cart from '../../screens/Cart';
import ContactUs from '../../screens/ContactUs';
import Gallery from '../../screens/Gallery';
import ProductsPage from '../../screens/ProductsPage';
import Service from '../../screens/Service';

function AppRouter() {
    console.log("in App Router");
  return (
      <div>
          <Routes>
              <Route path="/" element={<Header />}>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/services" element={<Service />} />
                  <Route path="/gallery" element={<Gallery />} />
              </Route>
          </Routes>
      </div>
  );
}

export default AppRouter
