import React from 'react'
import About from '../components/About/About'

const AboutPage = () => {
  const imgPath = "/images/Mario.jpg";
  console.log("Passing to About:", imgPath); 

  return <About imgUrl={imgPath} />;
  
}

export default AboutPage
