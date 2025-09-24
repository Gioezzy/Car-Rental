import React from 'react';
import Navbar from '../components/Navbar';
import HeroSleek from '../components/HomeBanner';
import HomeCars from '../components/HomeCars';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSleek />
      <HomeCars />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
