import HeroSection from '@/components/home/herosection';
import Navbar from '@/components/home/Navbar';
import { TopArticles } from '@/components/home/topArticles';
import React from 'react'; 

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TopArticles />
    </div>
  )
}

export default page
