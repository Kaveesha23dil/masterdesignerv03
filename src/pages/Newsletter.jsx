import React from 'react';
import Footer from '../components/Footer';

const Newsletter = () => {
  return (
    <div className='relative min-h-screen w-full bg-[#07131e] text-white'>
      <div className='container mx-auto px-6 lg:px-20 py-40'>
        <h1 className='text-6xl md:text-8xl font-display font-bold mb-8'>Event Updates</h1>
        <p className='text-gray-400 text-lg max-w-2xl'>
          DecodeXtreme 2026 sessions take place on 12, 14, and 21 October, followed by PreXtreme on 24 October. Registration links, the common closing deadline, speaker profiles, and approved resources will be announced here. Local participation is free and requires no IEEE membership.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Newsletter;
