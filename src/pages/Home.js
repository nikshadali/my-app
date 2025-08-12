import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Specials from '../components/Specials/Specials'
import Testimonials from '../components/Testimonials/Testimonials'
import About from '../components/About/About'

const Home = () => {
  return (
    <>
      <HeroSection />
      <Specials/>
      <Testimonials/>
      <About/>
    </>
  )
}

export default Home
