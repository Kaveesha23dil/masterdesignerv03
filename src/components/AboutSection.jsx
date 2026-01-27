import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, ArrowUp } from 'lucide-react';
import projectChair from '../assets/projectchair.jpeg';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const shapesRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                    end: "bottom center",
                    toggleActions: "play none none reverse"
                }
            });

            // Text Reveal Animation
            tl.from(textRef.current.children, {
                y: 50,
                autoAlpha: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power4.out"
            });

            // Image Reveal
            tl.from(imageRef.current, {
                y: 100,
                autoAlpha: 0,
                duration: 1.2,
                ease: "power3.out"
            }, "-=0.8");

            // Parallax Effect for Image
            gsap.to(imageRef.current.querySelector('img'), {
                yPercent: -10,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Shapes rotation on scroll
            gsap.to(shapesRef.current, {
                rotation: 45,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen bg-white text-black py-20 px-8 md:px-24 overflow-hidden flex items-center">
            {/* Background Geometric Shapes */}
            <div ref={shapesRef} className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-5 origin-center">
                <div className="absolute top-0 left-0 w-full h-px bg-black"></div>
                <div className="absolute top-1/2 left-0 w-full h-px bg-black"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-black"></div>
                <div className="absolute top-0 left-0 w-px h-full bg-black"></div>
                <div className="absolute top-0 right-0 w-px h-full bg-black"></div>

                <div className="absolute top-0 left-0 w-[600px] h-[600px] border border-black rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] border border-black rounded-full -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center relative z-10 w-full">
                {/* Left Content */}
                <div ref={textRef} className="space-y-10 relative">
                    {/* Decorative Dot */}
                    <div className="absolute -left-8 top-[35%] w-3 h-3 bg-gray-200 rounded-full hidden md:block"></div>

                    <h2 className="text-6xl md:text-7xl font-display leading-[1.1]">
                        What is <br />
                        <span className="font-bold">Master</span> <span className="font-light">Designer?</span>
                    </h2>

                    <div className="space-y-6 text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
                        <p>
                            At our design studio, we are a collective of talented individuals ignited by our unwavering passion for transforming ideas into reality. With a harmonious blend of diverse backgrounds and a vast array of skill sets, we join forces to create compelling solutions for our esteemed clients.
                        </p>
                        <p>
                            Collaboration is at the heart of what we do. Our team thrives on the synergy that arises when unique perspectives converge, fostering an environment of boundless creativity. By harnessing our collective expertise, we produce extraordinary results that consistently surpass expectations.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <div className="relative shrink-0">
                            <img
                                src={projectChair}
                                alt="Founder"
                                className="w-16 h-16 rounded-full object-cover grayscale"
                            />
                            <div className="absolute -bottom-1 -right-1 bg-[var(--color-primary)] p-1.5 rounded-full text-black flex items-center justify-center w-8 h-8">
                                <Quote size={14} fill="currentColor" className="text-black" />
                            </div>
                        </div>
                        <div className="text-sm">
                            <p className="font-bold text-black">Induwara Lakdinu <span className="font-light text-gray-500"></span></p>
                            <p className="font-bold text-black">Chairperson <span className="font-light text-gray-500 italic">, Master Designer</span></p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div ref={imageRef} className="relative h-[500px] md:h-[700px] w-full overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1550684846-91a9258ae31b?auto=format&fit=crop&w=800&q=80"
                        alt="Creative Studio"
                        className="w-full h-[120%] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                </div>
            </div>

            {/* Vertical Text Indicators */}
            <div className="absolute bottom-12 right-12 flex flex-col items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                    <ArrowUp size={16} />
                </div>
                <div className="writing-vertical-rl text-[10px] font-bold tracking-[0.2em] opacity-40 uppercase">
                    Back to Top
                </div>
            </div>
            <div className="absolute bottom-12 left-12 writing-vertical-rl text-[10px] font-bold tracking-[0.2em] opacity-40 uppercase rotate-180">
                Homepage
            </div>
        </section>
    );
};

export default AboutSection;
