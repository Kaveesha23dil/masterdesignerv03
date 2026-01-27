import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundShapes from './components/BackgroundShapes';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import GuidelinesSection from './components/GuidelinesSection';
import ScrollIndicator from './components/ScrollIndicator';
import Preloader from './components/Preloader';
import gsap from 'gsap';

const App = () => {
    const cursorRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

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
        <div className="relative min-h-screen w-full bg-[#050505] text-white selection:bg-orange-500 selection:text-black">
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
            <GuidelinesSection />
            <ScrollIndicator />
        </div>
    );
};

export default App;
