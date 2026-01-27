import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TrophyIcon = ({ className, color = "var(--color-primary)" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
);

const PrizeCard = ({ title, amount, subTitle, isWinner = false, delay = 0, color = "var(--color-primary)" }) => {
    return (
        <div
            className={`prize-card relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-[${color}]/50 hover:shadow-[0_0_20px_rgba(37,242,245,0.1)] group ${isWinner ? 'scale-110 z-10 my-4 md:my-0' : 'scale-100 z-0'}`}
        >
            {/* Glow effect */}
            <div className={`absolute -inset-0.5 bg-gradient-to-b from-[${color}] to-transparent opacity-0 group-hover:opacity-20 rounded-2xl transition duration-500 blur-md`}></div>

            <div className="relative z-10 flex flex-col items-center">
                <div className={`mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-[${color}]/30 transition-colors duration-300`}>
                    <TrophyIcon className={`w-16 h-16 sm:w-20 sm:h-20 ${isWinner ? "text-[var(--color-primary)]" : "text-white/70"}`} color={isWinner ? color : "currentColor"} />
                </div>

                {subTitle && (
                    <span className={`text-sm tracking-[0.2em] font-medium mb-1 ${isWinner ? 'text-[var(--color-primary)]' : 'text-gray-400'}`}>
                        {subTitle}
                    </span>
                )}

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center uppercase tracking-wide">
                    {title}
                </h3>

                <div className={`text-2xl sm:text-3xl font-black ${isWinner ? 'text-[var(--color-primary)] text-shadow-glow' : 'text-white/90'}`}>
                    {amount}
                </div>
            </div>

            {isWinner && (
                <div className="absolute -top-4 px-4 py-1 bg-[var(--color-primary)] text-black font-bold text-xs tracking-wider rounded-full uppercase">
                    Champion
                </div>
            )}
        </div>
    );
};

const PrizesSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation
            gsap.fromTo(titleRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Cards Animation
            gsap.from(".prize-card", {
                opacity: 0,
                y: 50,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".prizes-container",
                    start: "top 75%",
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full py-24 px-4 md:px-10 bg-[#050505] overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[var(--color-primary)]/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto">

                {/* Section Title */}
                <div ref={titleRef} className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
                        PRI<span className="text-[var(--color-primary)]">ZES</span>
                    </h2>
                    <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto"></div>
                </div>

                {/* Team Prizes */}
                <div className="mb-24 prizes-container">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white uppercase tracking-wider">
                        Team Prizes
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
                        <PrizeCard
                            title="1st Runner Up"
                            amount="LKR 45.000"
                            subTitle="SILVER"
                        />
                        <PrizeCard
                            title="Winner"
                            amount="LKR 60.000"
                            subTitle="GOLD"
                            isWinner={true}
                        />
                        <PrizeCard
                            title="2nd Runner Up"
                            amount="LKR 30.000"
                            subTitle="BRONZE"
                        />
                    </div>
                </div>

                {/* Individual Prizes */}
                <div className="mb-24 prizes-container">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white uppercase tracking-wider">
                        Individual Prizes
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
                        <PrizeCard
                            title="1st Runner Up"
                            amount="LKR 15.000"
                            subTitle="SILVER"
                        />
                        <PrizeCard
                            title="Winner"
                            amount="LKR 20.000"
                            subTitle="GOLD"
                            isWinner={true}
                        />
                        <PrizeCard
                            title="2nd Runner Up"
                            amount="LKR 10.000"
                            subTitle="BRONZE"
                        />
                    </div>
                </div>

                {/* Popularity Prize */}
                <div className="prizes-container">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white uppercase tracking-wider">
                        Popularity Prize
                    </h3>
                    <div className="flex justify-center max-w-5xl mx-auto">
                        <PrizeCard
                            title="Most Popular"
                            amount="LKR 10.000"
                            subTitle="VOTING"
                            isWinner={true}
                            color="#8b5cf6" // Purple accent
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PrizesSection;
