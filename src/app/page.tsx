import React from 'react'
import Navbar from "@/Component/Navbar";
import Footer from '@/Component/Footer';
import Home from '@/Solarpage/Home';

const page = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <Footer/>
    </div>
  )
}

export default page