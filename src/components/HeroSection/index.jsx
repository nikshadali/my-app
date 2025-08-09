import React from 'react'
import './style.css'
const HeroSection = () => {
  return (
    <div className='hero-section' >
        <div className="main-grid" style={{maxHeight:"400px"}}>
  <div>
        <h1>Little Lemon</h1>
        <h2 className='hero-sub-title'>Chicago</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className='btn'>Resrve a Tabel</button>
      </div>
      <div className='img-container'>
        <img src="images/restauranfood.jpg" alt="Little Lemon Restaurant" />
      </div>
        </div>
    
    </div>
  )
}

export default HeroSection
