import React from 'react'
import AboutUs from '../screens/AboutUs'
import ContactUs from '../screens/ContactUs'
import Features from '../screens/Features'
import Footer from '../screens/Footer'
import Gallery from '../screens/Gallery'
import Login from '../screens/Login'
import Products from '../screens/Products'
import Service from '../screens/Service'
import Spotlight from '../screens/Spotlight'

function LandingPage() {
  return (
    <>
    <Spotlight />
    <AboutUs />
    <Service />
    <Gallery />
    <ContactUs />
    <Footer />
    </>
  )
}

export default LandingPage