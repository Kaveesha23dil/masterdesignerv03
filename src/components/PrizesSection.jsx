import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TrophyIcon = ({ className, color = "var(--color-primary)" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
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

const PrizeCard = ({ title, amount, subTitle, isWinner = false, color = "var(--color-primary)", delay = 0 }) => {
    return (
        <div
            className={`prize-card relative opacity-0 translate-y-8 flex flex-col items-center justify-center p-8 rounded-2xl border transition-all duration-500 group
                ${isWinner 
                    ? 'bg-gradient-to-b from-white/10 to-transparent border-[var(--color-primary)]/50 shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.15)] scale-105 z-10' 
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                }
            `}
            style={{ 
                '--card-color': color,
                // Fallback visibility if JS fails, though opacity-0 handles the GSAP start
            }}
        >
            {/* Ambient Background Glow for Winner */}
            {isWinner && (
                <div className="absolute inset-0 bg-[var(--color-primary)]/5 blur-3xl -z-10 rounded-full" />
            )}

            {/* Icon Container */}
            <div className={`
                relative mb-6 p-5 rounded-full border transition-all duration-500
                ${isWinner 
                    ? 'bg-[var(--color-primary)]/20 border-[var(--color-primary)]/50 shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)]' 
                    : 'bg-white/5 border-white/10 group-hover:border-white/30'
                }
            `}>
                <TrophyIcon 
                    className={`w-12 h-12 ${isWinner ? 'text-[var(--color-primary)] drop-shadow-[0_0_8px_rgba(var(--color-primary-rgb),0.5)]' : 'text-white/60 group-hover:text-white/90'}`} 
                    color={isWinner ? color : "currentColor"}
                />
            </div>

            {/* Subtitle (Rank/Category) */}
            {subTitle && (
                <span className={`text-xs font-bold tracking-[0.3em] uppercase mb-3 ${isWinner ? 'text-[var(--color-primary)]' : 'text-gray-400'}`}>
                    {subTitle}
                </span>
            )}

            {/* Title */}
            <h3 className={`text-xl font-bold uppercase tracking-wider mb-4 text-center ${isWinner ? 'text-white' : 'text-white/80'}`}>
                {title}
            </h3>

            {/* Amount */}
            <div className={`text-3xl sm:text-4xl font-black tabular-nums tracking-tight ${isWinner ? 'text-[var(--color-primary)] drop-shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.4)]' : 'text-white/70 group-hover:text-white'}`}>
                {amount}
            </div>

            {/* Winner Badge */}
            {isWinner && (
                <div className="absolute -top-3 px-4 py-1 bg-[var(--color-primary)] text-black text-[10px] font-black tracking-widest uppercase rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                    Champion
                </div>
            )}
        </div>
    );
};

const PrizesSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Reveal
            gsap.fromTo(".prize-title-anim",
                { autoAlpha: 0, y: 50 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );

            // Cards Stagger
            gsap.fromTo(".prize-card",
                { autoAlpha: 0, y: 50 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: ".prizes-grid-container",
                        start: "top 80%",
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full py-32 px-4 md:px-10 bg-[#050505] overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto space-y-24 prizes-grid-container">

                {/* Section Header */}
                <div className="text-center prize-title-anim opacity-0">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                        PRIZES <span className="text-[var(--color-primary)]">&</span> AWARDS
                    </h2>
                    <p className="max-w-xl mx-auto text-white/50 text-lg">
                        Recognizing excellence and innovation with premium rewards for the best performers.
                    </p>
                </div>

                {/* Team Prizes */}
                <div className="space-y-12">
                     <h3 className="text-2xl font-bold text-white text-center uppercase tracking-[0.2em] opacity-80 prize-title-anim">
                        Team Prizes
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-5xl mx-auto">
                        <PrizeCard
                            title="1st Runner Up"
                            amount="LKR 45,000"
                            subTitle="Silver"
                            delay={0.1}
                        />
                        <PrizeCard
                            title="Winner"
                            amount="LKR 60,000"
                            subTitle="Gold"
                            isWinner={true}
                            delay={0.2}
                        />
                        <PrizeCard
                            title="2nd Runner Up"
                            amount="LKR 30,000"
                            subTitle="Bronze"
                            delay={0.3}
                        />
                    </div>
                </div>

                {/* Individual Prizes */}
                <div className="space-y-12">
                    <h3 className="text-2xl font-bold text-white text-center uppercase tracking-[0.2em] opacity-80 prize-title-anim">
                        Individual Prizes
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-5xl mx-auto">
                        <PrizeCard
                            title="1st Runner Up"
                            amount="LKR 15,000"
                            subTitle="Silver"
                        />
                        <PrizeCard
                            title="Winner"
                            amount="LKR 20,000"
                            subTitle="Gold"
                            isWinner={true}
                        />
                        <PrizeCard
                            title="2nd Runner Up"
                            amount="LKR 10,000"
                            subTitle="Bronze"
                        />
                    </div>
                </div>

                 {/* Popularity Prize */}
                <div className="space-y-12">
                   <h3 className="text-2xl font-bold text-white text-center uppercase tracking-[0.2em] opacity-80 prize-title-anim">
                        Audience Choice
                    </h3>
                    <div className="flex justify-center max-w-5xl mx-auto">
                        <PrizeCard
                            title="Most Popular"
                            amount="LKR 10,000"
                            subTitle="Voting" // Changed from VOTING to Voting for consistency
                            isWinner={true}
                            color="#8b5cf6" // Keep purple override
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrizesSection;
