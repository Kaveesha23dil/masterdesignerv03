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
            description: "Teams or individuals interested in participating in the competition should register through the registration link.",
            className: "md:col-span-2 md:row-span-1 bg-white/5"
        },
        {
            icon: <AlertCircle className="w-6 h-6 text-purple-400" />,
            title: "Accuracy",
            description: "Everyone should fill out all the information in the registration form correctly.",
            className: "md:col-span-1 md:row-span-1 bg-white/5"
        },
        {
            icon: <User className="w-6 h-6 text-yellow-400" />,
            title: "Eligibility",
            description: "Anyone above the age of 15 can participate in the competition.",
            className: "md:col-span-1 md:row-span-1 bg-white/5"
        },
        {
            icon: <Calendar className="w-8 h-8 text-pink-400" />,
            title: "Deadlines",
            description: "The registration deadline varies for workshops and competition rounds. Please refer to the timeline for specific dates.",
            className: "md:col-span-2 md:row-span-1 bg-white/5"
        },
        {
            icon: <Users className="w-6 h-6 text-green-400" />,
            title: "Team Policy",
            description: "After registering your team, you can't change your team members.",
            className: "md:col-span-1 md:row-span-1 bg-white/5"
        },
        {
            icon: <Mail className="w-6 h-6 text-blue-400" />,
            title: "Confirmation",
            description: "Upon successful registration, participants will receive a confirmation email.",
            className: "md:col-span-1 md:row-span-1 bg-white/5"
        },
        {
            icon: <Ticket className="w-8 h-8 text-orange-400" />,
            title: "Your ID",
            description: "After the registration process, you will get a number. You should keep that number with you for the future work of the competition.",
            className: "md:col-span-2 md:row-span-1 bg-white/5"
        },
        {
            icon: <CheckCircle2 className="w-6 h-6 text-red-400" />,
            title: "Participation",
            description: "If you are participating individually, you cannot participate in a team.",
            className: "md:col-span-2 md:row-span-1 bg-white/5"
        }
    ];

    return (
        <section ref={sectionRef} className="relative w-full py-24 px-6 md:px-12 bg-[#080808] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        Guidelines
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Please review the following rules and guidelines before registering for the competition.
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
