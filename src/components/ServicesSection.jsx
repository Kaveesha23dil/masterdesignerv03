import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MoveRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const gridRef = useRef(null);
    const shape1Ref = useRef(null);
    const shape2Ref = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // Title Animation
            gsap.from(titleRef.current.children, {
                y: 100,
                autoAlpha: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    end: "bottom center",
                    toggleActions: "play none none reverse"
                }
            });

            // Grid Animation
            gsap.from(gridRef.current.children, {
                y: 50,
                autoAlpha: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });

            // Rotating Shapes
            gsap.to(shape1Ref.current, {
                rotation: 360,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });

            gsap.to(shape2Ref.current, {
                rotation: -180,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5
                }
            });


        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const services = [
        "Branding and Identity Design",
        "Website Design and Development",
        "Advertising and Marketing Campaigns",
        "Creative Consulting and Development"
    ];

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen bg-[var(--color-dark-bg)] text-white py-20 px-6 md:px-12 flex flex-col justify-center overflow-hidden">

            {/* Background Wireframes */}
            <div className="absolute inset-0 pointer-events-none opacity-20 text-gray-500">
                {/* Top Left Shape */}
                <div ref={shape1Ref} className="absolute -top-20 -left-20 w-[400px] h-[400px]">
                    <svg viewBox="0 0 200 200" className="w-full h-full stroke-current stroke-[0.5] fill-none">
                        <path d="M100,5 L155,30 L180,80 L145,130 L100,195 L55,130 L20,80 L45,30 Z" />
                        <path d="M100,5 L100,70 M155,30 L100,70 M45,30 L100,70" />
                        <path d="M100,70 L60,110 M100,70 L140,110" />
                        <path d="M60,110 L20,80 M140,110 L180,80" />
                        <path d="M60,110 L100,195 M140,110 L100,195" />
                        <path d="M55,130 L145,130" />
                    </svg>
                </div>

                {/* Right Shape */}
                <div ref={shape2Ref} className="absolute top-1/3 -right-32 w-[600px] h-[600px]">
                    <svg viewBox="0 0 200 200" className="w-full h-full stroke-current stroke-[0.3] fill-none">
                        <path d="M100,10 L190,60 L190,140 L100,190 L10,140 L10,60 Z" />
                        <path d="M100,10 L100,190 M190,60 L10,140 M190,140 L10,60" />
                        <circle cx="100" cy="100" r="80" className="stroke-[0.1]" />
                    </svg>
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10 flex-grow flex flex-col justify-center">

                {/* Header Content */}
                <div className="text-right mb-12 text-gray-400 text-sm max-w-xs ml-auto hidden md:block">
                    Professionals focused on helping your brand grow and move forward.
                </div>

                <div ref={titleRef} className="text-center mb-32 space-y-4">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                        {/* Pill Image */}
                        <div className="w-48 h-16 md:w-64 md:h-24 rounded-full overflow-hidden border border-gray-700 relative group">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
                                alt="Team"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold">
                            Unique <span className="font-light text-gray-400">Ideas</span>
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-display">
                            <span className="font-bold">For Your</span> <span className="font-light text-gray-400">Business.</span>
                        </h2>

                        <button className="bg-[var(--color-primary)] text-black px-8 py-4 rounded-full font-bold flex items-center gap-4 hover:bg-orange-600 transition-colors mt-4 md:mt-0">
                            <span className="text-xs tracking-widest uppercase">What we do</span>
                            <div className="bg-black text-white p-1 rounded-full">
                                <MoveRight size={16} />
                            </div>
                        </button>
                    </div>
                </div>

            </div>

            {/* Services Grid (Bottom) */}
            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`group p-8 min-h-[300px] flex flex-col justify-between border-white/10 hover:bg-white/5 transition-colors cursor-pointer ${index !== services.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''
                            }`}
                    >
                        <h3 className="text-xl font-bold max-w-[150px] leading-tight">
                            {service.split(' ').map((word, i) => (
                                <React.Fragment key={i}>
                                    {word} <br />
                                </React.Fragment>
                            ))}
                        </h3>

                        <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-[var(--color-primary)] transition-colors self-start"></div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default ServicesSection;
