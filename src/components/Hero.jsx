import React, { useLayoutEffect, useRef } from 'react';
import { MoveRight } from 'lucide-react';
import gsap from 'gsap';
import heroImage from '../assets/hero.png';
import heroVideo from '../assets/Hooded_character_gazing_at_city_20261007122346.mp4';
import OrganizerLogos from './OrganizerLogos';
import './Hero.css';

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
        <section ref={containerRef} className="hero-section" aria-label="DecodeXtreme introduction">

            {/* Hero Background Video */}
            <div className="hero-media">
                <video
                    src={heroVideo}
                    poster={heroImage}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                    className="hero-bg-img"
                />
            </div>
            <div className="hero-shade" aria-hidden="true" />
            <div className="hero-content">

            {/* Side Text */}
            <div className="side-text absolute left-6 bottom-32 -rotate-90 origin-left text-xs tracking-[0.3em] text-gray-400 font-medium hidden md:block">
                HOMEPAGE
            </div>

            <div ref={titleRef} className="mb-8 md:mb-12">
                <h1 className="hero-heading font-display font-medium">
                    <div className="overflow-hidden">
                        <span className="block">Think. <span className="hero-heading-secondary">Solve.</span></span>
                    </div>
                    <div className="overflow-hidden">
                        <span className="block font-bold">Compete. <span className="hero-heading-secondary">Beyond.</span></span>
                    </div>
                </h1>
            </div>

            <div className="max-w-xl mb-12 text-gray-400 text-sm md:text-base leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                <p>
                    DecodeXtreme 2026: three open sessions and one SLTC team challenge. Prepare for IEEEXtreme 20.0. Free, fully online, and no IEEE membership needed.
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <button onClick={() => window.location.assign("/services")} className="hero-btn group relative px-8 py-4 bg-[var(--color-primary)] text-black rounded-full font-semibold flex items-center gap-4 hover:bg-[#56dce4] transition-all duration-300">
                    <span className="text-xs tracking-widest uppercase">Explore the Program</span>
                    <span className="p-1 bg-black text-white rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                        <MoveRight size={16} />
                    </span>
                </button>

                <button onClick={() => document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })} className="hero-btn group px-8 py-4 bg-transparent border border-white/10 text-white rounded-full font-semibold flex items-center gap-4 hover:bg-white/5 transition-all duration-300">
                    <span className="text-xs tracking-widest uppercase">Timeline</span>
                    <span className="p-1 bg-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                        <MoveRight size={16} />
                    </span>
                </button>
            </div>
            <OrganizerLogos />
            </div>
        </section>
    );
};

export default Hero;
