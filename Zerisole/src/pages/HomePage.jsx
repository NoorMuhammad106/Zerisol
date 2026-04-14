import React from 'react'
import Hero from '../components/Hero'
import TrustedBy from '../components/TrustedBy'
import Services from '../components/Services'
import OurWork from '../components/OurWork'
import Teams from '../components/Teams'
import ContactUs from '../components/ContactUs'
import AboutUs from '../components/AboutUs'
import PartnersMarquee from '../components/PartnersMarquee'
import Testimonials from '../components/Testimonials'

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <PartnersMarquee />
      <OurWork />
      <Testimonials />
      <Teams />
      <ContactUs />
    </>
  )
}

export default HomePage
