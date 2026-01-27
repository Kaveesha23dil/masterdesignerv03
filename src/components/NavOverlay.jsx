import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const NavLink = ({ children, active, onClick }) => {
    return (
        <a
            href="#"
            onClick={onClick}
            className={`text-4xl md:text-6xl font-display font-medium block mb-4 transition-colors duration-300 ${active ? 'text-[var(--color-primary)]' : 'text-white hover:text-gray-400'
                }`}
        >
            {children}
        </a>
    );
};

const NavOverlay = ({ isOpen, onClose }) => {
    const overlayRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.to(overlayRef.current, {
                x: '0%',
                duration: 0.8,
                ease: 'power3.out',
            });
            gsap.fromTo(
                linksRef.current.children,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    delay: 0.3,
                    ease: 'power2.out',
                }
            );
        } else {
            gsap.to(overlayRef.current, {
                x: '100%',
                duration: 0.8,
                ease: 'power3.inOut',
            });
        }
    }, [isOpen]);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 bg-black z-40 translate-x-full h-screen w-full flex items-center pl-8 md:pl-24"
        >
            <div ref={linksRef}>
                <NavLink active onClick={onClose}>Homepage</NavLink>
                <NavLink onClick={onClose}>Portfolio</NavLink>
                <NavLink onClick={onClose}>Services</NavLink>
                <NavLink onClick={onClose}>Newsletter</NavLink>
                <NavLink onClick={onClose}>Other pages</NavLink>
            </div>
        </div>
    );
};

export default NavOverlay;
