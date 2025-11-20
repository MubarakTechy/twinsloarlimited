import React from 'react';
import Hero from '../Solarpage/Hero';
import Hero2 from '../Solarpage/Hero2';
import About from '../Solarpage/About';
import Testimonial from '../Solarpage/Testimonial';
import Why from '../Solarpage/Why';

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Why/>
      <Hero2/>
      <Testimonial/>
    </div>
  )
}

export default Home