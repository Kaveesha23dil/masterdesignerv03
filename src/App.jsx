import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundShapes from './components/BackgroundShapes';
import AboutSection from './components/AboutSection';
import HistorySection from './components/HistorySection';
import ServicesSection from './components/ServicesSection';
import TimelineSection from './components/TimelineSection';
import PrizesSection from './components/PrizesSection';
import GuidelinesSection from './components/GuidelinesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import Preloader from './components/Preloader';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Newsletter from './pages/Newsletter';
import Pages from './pages/Pages';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = ({ isLoading }) => {
  return (
    <>
      <Hero loading={isLoading} />
      <AboutSection />
      <HistorySection />
      <ServicesSection />
      <TimelineSection />
      <PrizesSection />
      <GuidelinesSection />
      <ContactSection />
      <Footer />
    </>
  );
};

const App = () => {
    const cursorRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        if (!isLoading) {
            ScrollTrigger.refresh();
        }
    }, [isLoading]);

    useEffect(() => {
        const cursor = cursorRef.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
        };

        window.addEventListener('mousemove', moveCursor);

        const hoverables = document.querySelectorAll('button, a');
        hoverables.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursor, { scale: 2, backgroundColor: 'white', mixBlendMode: 'difference' });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(cursor, { scale: 1, backgroundColor: 'transparent', mixBlendMode: 'normal' });
            });
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div className='relative min-h-screen w-full bg-[#07131e] text-white selection:bg-[var(--color-primary)] selection:text-black'>
            {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

            <div
                ref={cursorRef}
                className='fixed top-0 left-0 w-8 h-8 border-2 border-[var(--color-primary)] rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 hidden md:block'
            />

            <BackgroundShapes />
            <Navbar />
            <Routes>
                <Route path='/' element={<Home isLoading={isLoading} />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/services' element={<Services />} />
                <Route path='/newsletter' element={<Newsletter />} />
                <Route path='/pages' element={<Pages />} />
            </Routes>
            <ScrollIndicator />
        </div>
    );
};

export default App;
