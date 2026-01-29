import { Menu, X } from 'lucide-react';
import { useState, useRef, useLayoutEffect } from 'react'; // Added useRef, useLayoutEffect
import NavOverlay from './NavOverlay';
import logo from '../assets/logo.png';
import gsap from 'gsap'; // Added gsap
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Added ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const showAnim = gsap.from(navRef.current, {
                yPercent: -100,
                paused: true,
                duration: 0.2
            }).progress(1);

            ScrollTrigger.create({
                start: "top top",
                end: "max",
                onUpdate: (self) => {
                    self.direction === -1 ? showAnim.play() : showAnim.reverse();
                }
            });
        }, navRef);

        return () => ctx.revert();
    }, []);

    // Check if scrolled to add background
    const [isScrolled, setIsScrolled] = useState(false);

    useLayoutEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <NavOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <nav
                ref={navRef}
                className={`fixed top-0 left-0 w-full flex justify-between items-center p-8 z-50 text-white transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-md py-4' : 'mix-blend-difference'}`}
            >
                <div className="w-12">
                    <img src={logo} alt="Logo" className="w-full h-auto" />
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </nav>
        </>
    );
};

export default Navbar;
