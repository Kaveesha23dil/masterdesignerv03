import React from 'react';
import Footer from '../components/Footer';
import GuidelinesSection from '../components/GuidelinesSection';
import TimelineSection from '../components/TimelineSection';
import PrizesSection from '../components/PrizesSection';

const Pages = () => {
  return (
    <div className='relative min-h-screen w-full bg-[#07131e] text-white'>
      <div className='container mx-auto px-6 lg:px-20 py-40'>
        <h1 className='text-6xl md:text-8xl font-display font-bold mb-8'>Delegate Guide</h1>
      </div>
      <GuidelinesSection />
      <TimelineSection />
      <PrizesSection />
      <Footer />
    </div>
  );
};

export default Pages;
