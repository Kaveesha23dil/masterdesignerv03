import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
    { date: "12 OCTOBER 2026", title: "AWARENESS", description: "Discover the competition and participation pathway. Zoom, 8:00 PM; expected finish 10:00 PM. Open to everyone." },
    { date: "14 OCTOBER 2026", title: "PROGRAMMING FUNDAMENTALS", description: "Problem decomposition, algorithms, coding, testing, and debugging. Zoom, 8:00 PM; expected finish 10:00 PM. Open to everyone." },
    { date: "21 OCTOBER 2026", title: "ADVANCED STRATEGY", description: "Teamwork, time management, problem triage, and contest execution. Zoom, 8:00 PM; expected finish 10:00 PM. Open to everyone." },
    { date: "24 OCTOBER 2026", title: "PREXTREME CHALLENGE", description: "Online on HackerRank. Check-in 8:00 AM; coding 9:00 AM to 6:00 PM. Exactly three SLTC undergraduates per team. All times are Sri Lanka time (UTC+05:30)." }
];

const TimelineSection = () => {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the vertical line drawing down
            gsap.fromTo(lineRef.current,
                { height: "0%" },
                {
                    height: "100%",
                    duration: 1.5,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        end: "bottom 80%",
                        scrub: 1
                    }
                }
            );

            // Animate each timeline item
            itemsRef.current.forEach((item, index) => {
                const direction = index % 2 === 0 ? -50 : 50; // Alternate slide in from left/right

                gsap.fromTo(item,
                    {
                        opacity: 0,
                        y: 50,
                        // x: direction 
                    },
                    {
                        opacity: 1,
                        y: 0,
                        // x: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !itemsRef.current.includes(el)) {
            itemsRef.current.push(el);
        }
    };

    return (
        <section id="timeline" ref={sectionRef} className="relative w-full py-20 px-4 md:px-10 overflow-hidden bg-[#050505]">
            {/* Background elements if needed */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0">
                {/* Optional subtle gradient or noise */}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
                        TIME<span className="text-[var(--color-primary)]">LINE</span>
                    </h2>
                    <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto"></div>
                </div>

                <div className="relative">
                    {/* Vertical Center Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 transform">
                        <div ref={lineRef} className="w-full bg-[var(--color-primary)] origin-top"></div>
                    </div>

                    <div className="space-y-12">
                        {timelineData.map((item, index) => (
                            <div
                                key={index}
                                ref={addToRefs}
                                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Spacer for opposite side */}
                                <div className="hidden md:block w-5/12"></div>

                                {/* Center Dot */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[var(--color-primary)] rounded-full -translate-x-1/2 transform z-20 shadow-[0_0_10px_var(--color-primary)]"></div>

                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 w-full md:w-5/12 pl-4 md:pl-0">
                                    <div className={`p-6 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm hover:border-[var(--color-primary)]/50 transition-colors duration-300 text-left`}>
                                        <h3 className="text-[var(--color-primary)] font-bold text-lg mb-2 tracking-wide uppercase">
                                            {item.date}
                                        </h3>
                                        <h4 className="text-2xl font-bold text-white mb-3">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
