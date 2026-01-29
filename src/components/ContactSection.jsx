import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import contactImg1 from '../assets/contact_1.png'; // Start importing images
import contactImg2 from '../assets/contact_2.png';
import contactImg3 from '../assets/contact_3.png';

gsap.registerPlugin(ScrollTrigger);

const ContactImageItem = ({ image, title, subTitle, link, delay = 0 }) => {
    return (
        <a
            href={link}
            className="group relative block w-full h-full overflow-hidden cursor-pointer"
        >
            <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder while loading */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

            {/* Content Overlay - mimicking "Meet Our Team" caption style if typical, or just clean info */}
            <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-[var(--color-primary)] text-xs tracking-[0.2em] font-bold uppercase mb-1">
                    {subTitle}
                </h4>
                <p className="text-xl font-bold text-white">
                    {title}
                </p>
            </div>
        </a>
    );
};

// Icons (Same as before, simplified for portability)
const MailIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const PhoneIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const MapPinIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const ShareIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
);

const ContactSection = () => {
    const sectionRef = useRef(null);
    const leftTextRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(leftTextRef.current,
                { autoAlpha: 0, y: 30 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    }
                }
            );

            gsap.from(".contact-grid > div", {
                y: 50,
                autoAlpha: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".contact-grid",
                    start: "top 80%"
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen bg-white text-black flex flex-col lg:flex-row overflow-hidden">

            {/* Background Grid Lines (Subtle) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="w-full h-full grid grid-cols-12 gap-0">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className={`h-full border-r border-[#f0f0f0] ${i === 0 || i === 11 ? 'hidden md:block' : ''}`}></div>
                    ))}
                </div>
            </div>

            {/* Circular Decorations */}
            <div className="absolute left-0 top-1/4 -translate-x-1/2 w-[600px] h-[600px] border border-[#f0f0f0] rounded-full pointer-events-none opacity-50 z-0"></div>
            <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] border border-[#f0f0f0] rounded-full pointer-events-none opacity-50 z-0"></div>


            {/* LEFT SIDE (Content) */}
            <div className="relative w-full lg:w-[45%] p-10 lg:p-24 flex flex-col justify-center border-r border-[#e5e5e5] bg-white z-10">
                <div ref={leftTextRef} className="max-w-lg">
                    {/* Heading */}
                    <h2 className="text-6xl lg:text-7xl font-bold leading-tight mb-8 text-black tracking-tight font-display">
                        Meet <br /> Our Team
                    </h2>

                    {/* Description */}
                    <p className="text-gray-500 text-lg leading-relaxed mb-12 font-light">
                        We are talented individuals who are passionate about bringing ideas to life. With a diverse range of backgrounds and skill sets, we collaborate to produce effective solutions for our clients.
                        <br /><br />
                        Together, our creative team is committed to delivering impactful work that exceeds expectations.
                    </p>

                    {/* CTA Button */}
                    <button className="group flex items-center justify-between w-48 bg-[var(--color-primary)] text-black px-6 py-4 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-[#1BC2C5] transition-colors mb-20 shadow-lg shadow-[var(--color-primary)]/20">
                        Read More
                        <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full group-hover:bg-white group-hover:text-black transition-colors -mr-2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </span>
                    </button>

                    {/* Bottom Emphasis Text */}
                    <div className="text-2xl mt-auto">
                        <span className="font-light text-gray-500">We </span>
                        <span className="font-bold text-black">delivering</span> <br />
                        <span className="font-light text-gray-500">exceptional </span>
                        <span className="font-bold text-black">results.</span>
                    </div>
                </div>

                {/* Vertical text */}
                <div className="absolute left-10 bottom-32 -rotate-90 origin-left text-[10px] tracking-[0.3em] font-bold text-gray-400 uppercase">
                    Homepage
                </div>
            </div>

            {/* RIGHT SIDE (Grid) */}
            <div className="relative w-full lg:w-[55%] flex flex-col bg-white z-10">
                {/* Top Label */}
                <div className="absolute top-10 right-10 flex items-center gap-2 text-xs font-medium text-gray-400 z-20">
                    <span className="text-[var(--color-primary)] text-lg">✦</span> The founders of our agency
                </div>

                {/* Grid Container */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 contact-grid">
                    {/* Grid Images */}
                    <div className="border-b border-r border-white aspect-square md:aspect-auto relative">
                        <ContactImageItem image={contactImg1} title="Email Us" subTitle="Support" link="mailto:hello@master.design" />
                    </div>

                    <div className="border-b border-white aspect-square md:aspect-auto relative">
                        <ContactImageItem image={contactImg3} title="Visit Us" subTitle="Office" link="#" />
                    </div>

                    <div className="border-r border-white aspect-square md:aspect-auto relative">
                        <ContactImageItem image={contactImg2} title="Call Us" subTitle="Sales" link="tel:+94771234567" />
                    </div>

                    <div className="aspect-square md:aspect-auto relative">
                        {/* Reusing image 3 for the 4th slot as placeholder */}
                        <ContactImageItem image={contactImg3} title="Socials" subTitle="Follow" link="#" />
                    </div>
                </div>
            </div>

            {/* Back to Top */}
            <div className="absolute right-8 bottom-10 hidden lg:flex flex-col items-center gap-4 z-20">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-10 h-10 rounded-full bg-[#f0f0f0] flex items-center justify-center hover:bg-[#e0e0e0] transition-colors"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="19" x2="12" y2="5"></line>
                        <polyline points="5 12 12 5 19 12"></polyline>
                    </svg>
                </button>
                <span className="writing-vertical -rotate-90 text-[10px] tracking-[0.2em] font-bold text-gray-400 uppercase whitespace-nowrap">
                    Back to Top
                </span>
            </div>

        </section>
    );
};

export default ContactSection;
