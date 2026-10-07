import React from 'react';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className='relative min-h-screen w-full bg-[#111210] text-white'>
      <div className='container mx-auto px-6 lg:px-20 py-40'>
        <h1 className='text-6xl md:text-8xl font-display font-bold mb-8'>Our Team &amp; Legacy</h1>
        <p className='text-gray-400 text-lg max-w-2xl'>
          Organized by the IEEE Student Branch of SLTC and its Computer Society. Committee members, advisors, the current ambassador, and past ambassadors will be introduced here once their names, roles, portraits, and years are confirmed.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
