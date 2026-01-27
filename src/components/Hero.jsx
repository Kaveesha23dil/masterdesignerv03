import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight, MoveRight } from 'lucide-react';
import gsap from 'gsap';
import heroImage from '../assets/hero.png';

const Hero = ({ loading }) => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);

    useLayoutEffect(() => {
        if (loading) return; // Wait for loading to finish

        const ctx = gsap.context(() => {
            gsap.from(titleRef.current.children, {
                y: 100,
                autoAlpha: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out",
                delay: 0.2
            });

            gsap.from(".hero-btn", {
                y: 20,
                autoAlpha: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                delay: 0.8,
                clearProps: "all"
            });

            gsap.from(".side-text", {
                x: -20,
                autoAlpha: 0,
                duration: 1,
                ease: "power2.out",
                delay: 1.0
            });

            gsap.from(".hero-bg-img", {
                scale: 1.2,
                autoAlpha: 0,
                duration: 2,
                ease: "power2.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, [loading]);

    return (
        <div ref={containerRef} className="relative z-10 flex flex-col justify-center min-h-screen container mx-auto px-6 lg:px-20">

            {/* Hero Background Image */}
            <div className="absolute inset-0 z-[-1] overflow-hidden flex items-center justify-center pointer-events-none">
                <img
                    src={heroImage}
                    alt="Hero Background"
                    className="hero-bg-img w-full h-full object-cover opacity-30 mix-blend-screen bg-blend-overlay"
                />
            </div>

            {/* Side Text */}
            <div className="side-text absolute left-6 bottom-32 -rotate-90 origin-left text-xs tracking-[0.3em] text-gray-400 font-medium hidden md:block">
                HOMEPAGE
            </div>

            <div ref={titleRef} className="mb-12 mt-10">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium leading-[1.1] tracking-tight">
                    <div className="overflow-hidden">
                        <span className="block">Designing <span className="font-light text-gray-400 text-5xl md:text-7xl lg:text-8xl align-baseline">a Better</span></span>
                    </div>
                    <div className="overflow-hidden">
                        <span className="block font-bold">World <span className="font-light text-gray-400 text-5xl md:text-7xl lg:text-8xl align-baseline">Today</span></span>
                    </div>
                </h1>
            </div>

            <div className="max-w-xl mb-12 text-gray-400 text-sm md:text-base leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                <p>
                    Welcome to our world of endless imagination and boundless creativity.
                    Together, let's embark on a remarkable journey where dreams become tangible realities.
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <button className="hero-btn group relative px-8 py-4 bg-[var(--color-primary)] text-black rounded-full font-semibold flex items-center gap-4 hover:bg-orange-600 transition-all duration-300">
                    <span className="text-xs tracking-widest uppercase">What is Master Designer?</span>
                    <span className="p-1 bg-black text-white rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                        <MoveRight size={16} />
                    </span>
                </button>

                <button className="hero-btn group px-8 py-4 bg-transparent border border-white/10 text-white rounded-full font-semibold flex items-center gap-4 hover:bg-white/5 transition-all duration-300">
                    <span className="text-xs tracking-widest uppercase">Timeline</span>
                    <span className="p-1 bg-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                        <MoveRight size={16} />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Hero;
