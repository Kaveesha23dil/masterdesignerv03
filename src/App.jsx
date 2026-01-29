import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundShapes from './components/BackgroundShapes';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TimelineSection from './components/TimelineSection';
import PrizesSection from './components/PrizesSection';
import GuidelinesSection from './components/GuidelinesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import Preloader from './components/Preloader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    const cursorRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        if (!isLoading) {
            // Force a refresh when loading completes to ensure start/end positions are correct
            ScrollTrigger.refresh();
        }
    }, [isLoading]);

    useEffect(() => {
        // Custom cursor logic
        const cursor = cursorRef.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', moveCursor);

        // Hover effect for links/buttons
        const hoverables = document.querySelectorAll('button, a');
        hoverables.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursor, { scale: 2, backgroundColor: "white", mixBlendMode: "difference" });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(cursor, { scale: 1, backgroundColor: "transparent", mixBlendMode: "normal" });
            });
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            // Clean up event listeners for hoverables would be ideal here too
        };
    }, []);

    return (
        <div className="relative min-h-screen w-full bg-[#050505] text-white selection:bg-[var(--color-primary)] selection:text-black">
            {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

            {/* Custom Cursor */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-8 h-8 border-2 border-[var(--color-primary)] rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 hidden md:block"
            />

            <BackgroundShapes />
            <Navbar />
            <Hero loading={isLoading} />
            <AboutSection />
            <ServicesSection />
            <TimelineSection />
            <PrizesSection />
            <GuidelinesSection />
            <ContactSection />
            <Footer />
            <ScrollIndicator />
        </div>
    );
};

export default App;
