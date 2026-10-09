import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, AlertCircle, Calendar, Users, Mail, Ticket, User, Link } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const GuidelinesSection = () => {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(gridRef.current.children, {
                y: 50,
                autoAlpha: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const guidelines = [
        {
            icon: <Link className="w-8 h-8 text-[var(--color-primary)]" />,
            title: "Registration",
            description: "Register individually for each session. For PreXtreme, one captain registers the complete three-member team. Registration links are pending.",
            className: "md:col-span-2 md:row-span-1 bg-white/5"
        },
        {
            icon: <AlertCircle className="w-6 h-6 text-[#56dce4]" />,
            title: "Accuracy",
            description: "Check all names and contact details before submitting. Team registration requires each member's email, WhatsApp number, and SLTC student ID.",
            className: "md:col-span-1 md:row-span-1 bg-white/5"
        },
        {
            icon: <User className="w-6 h-6 text-[#56dce4]" />,
            title: "Eligibility",
            description: "Sessions welcome everyone. The PreXtreme challenge is exclusively for teams of exactly three SLTC undergraduates. Free; no IEEE membership needed.",
            className: "md:col-span-1 md:row-span-1 bg-white/5"
        },
        {
            icon: <Calendar className="w-8 h-8 text-[#64b9e7]" />,
            title: "Deadlines",
            description: "All session and challenge registrations share one closing deadline. The date and time will be announced. Event times use Sri Lanka time (UTC+05:30).",
            className: "md:col-span-2 md:row-span-1 bg-white/5"
        },
        {
            icon: <Users className="w-6 h-6 text-[#60cdd7]" />,
            title: "Team Policy",
            description: "The captain submits all three members together. Final roster, collaboration, AI, and permitted-resource policies are awaiting organizer approval.",
            className: "md:col-span-1 md:row-span-1 bg-white/5"
        },
        {
            icon: <Mail className="w-6 h-6 text-[#a9c0cd]" />,
            title: "Confirmation",
            description: "The planned flow confirms registration after details are saved. Email delivery is tracked separately; joining instructions will follow from the delegate team.",
            className: "md:col-span-1 md:row-span-1 bg-white/5"
        },
        {
            icon: <Ticket className="w-8 h-8 text-[var(--color-primary)]" />,
            title: "Get Ready",
            description: "Prepare reliable internet and your coding environment. Follow the approved HackerRank instructions. On 24 October, check in at 8:00 AM; coding runs 9:00 AM-6:00 PM.",
            className: "md:col-span-2 md:row-span-1 bg-white/5"
        },
        {
            icon: <CheckCircle2 className="w-6 h-6 text-[#64b9e7]" />,
            title: "Challenge Rules",
            description: "Scoring, tie-breaks, technical incidents, appeals, and conduct rules will be published after organizer approval. Read the final rules before team registration.",
            className: "md:col-span-2 md:row-span-1 bg-white/5"
        }
    ];

    return (
        <section ref={sectionRef} className="relative w-full py-24 px-6 md:px-12 bg-[#0c1d2b] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        Delegate Guide
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Review the confirmed local event requirements. Final challenge policies and support details are pending.
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {guidelines.map((item, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-3xl border border-white/10 hover:border-[var(--color-primary)]/50 transition-colors duration-300 group ${item.className}`}
                        >
                            <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-display">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GuidelinesSection;
