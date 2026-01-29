import React from 'react';
import { MoveRight, ArrowUp, Facebook, Instagram, Twitter, Github } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import footerMountains from '../assets/footer_bg.jpg';
import projectChair from '../assets/projectchair.jpeg'; // Assuming this might be needed, but sticking to text for now based on image

const Footer = () => {
  const footerRef = React.useRef(null);
  const bgRef = React.useRef(null);
  const leftRef = React.useRef(null);
  const rightRef = React.useRef(null);
  const columnsRef = React.useRef([]);

  React.useLayoutEffect(() => {
    // Register ScrollTrigger specific to this component execution to avoid registration issues if called multiple times or HMR
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.fromTo(bgRef.current,
        { scale: 1.1, y: -20 },
        {
          scale: 1,
          y: 0,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,
          }
        }
      );

      // Left Side Text (Homepage) - Slide in from left
      gsap.fromTo(leftRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          }
        }
      );

      // Right Side Button (Back to Top) - Slide in from right
      gsap.fromTo(rightRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          }
        }
      );

      // Columns Staggered Animation
      gsap.fromTo(columnsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 75%",
          }
        }
      );

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const addToColumnsRef = (el) => {
    if (el && !columnsRef.current.includes(el)) {
      columnsRef.current.push(el);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="w-full relative overflow-hidden bg-black text-white font-sans min-h-screen flex flex-col justify-center">

      {/* Background Image with Heavy Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgRef}
          src={footerMountains}
          alt="Background"
          className="w-full h-full object-cover opacity-20 scale-110" // Initial scale set for consistency before JS loads
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col md:flex-row">

        {/* Left Vertical Text */}
        <div className="hidden md:flex w-24 items-end justify-center pb-12 border-r border-white/10 overflow-hidden">
          <div ref={leftRef}>
            <span className="block text-xs uppercase tracking-[0.3em] -rotate-90 whitespace-nowrap text-gray-400">Homepage</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col justify-between px-8 md:px-16 py-16 md:py-24">

          {/* Top Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">

            {/* Column 1: Brand & Newsletter */}
            <div ref={addToColumnsRef} className="flex flex-col gap-8">
              <h2 className="text-4xl font-bold font-display">Ashley.</h2>

              <div className="mt-4">
                <label className="block text-sm text-gray-400 mb-4">Subscribe our newsletter:</label>
                <div className="relative max-w-sm">
                  <input
                    type="email"
                    placeholder="ENTER OUR EMAIL"
                    className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-14 text-xs tracking-widest uppercase placeholder:text-gray-500 focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-black hover:bg-white transition-colors">
                    <MoveRight size={16} />
                  </button>
                </div>
              </div>

              <div className="flex gap-6 mt-12 md:mt-24">
                <a href="#" className="text-white hover:text-[var(--color-primary)] transition-colors"><span className="font-bold">Bē</span></a>
                <a href="#" className="text-white hover:text-[var(--color-primary)] transition-colors"><GlobeIcon size={18} /></a>
                <a href="#" className="text-white hover:text-[var(--color-primary)] transition-colors"><Twitter size={18} /></a>
                <a href="#" className="text-white hover:text-[var(--color-primary)] transition-colors"><Github size={18} /></a>
              </div>

              <div className="mt-8 text-xs text-gray-500">
                <p>© Copyright 2023 - Mil. All Rights Reserved.</p>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div ref={addToColumnsRef} className="flex flex-col gap-6 lg:pl-12">
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-2xl font-bold text-[var(--color-primary)]">Home</a>
                <a href="#" className="text-2xl font-bold text-gray-400 hover:text-white transition-colors">Portfolio</a>
                <a href="#" className="text-2xl font-bold text-gray-400 hover:text-white transition-colors">Services</a>
                <a href="#" className="text-2xl font-bold text-gray-400 hover:text-white transition-colors">Contact</a>
                <a href="#" className="text-2xl font-bold text-gray-400 hover:text-white transition-colors">Blog</a>
              </nav>

              <div className="mt-auto pt-16">
                <h3 className="text-sm font-bold mb-4">Canada</h3>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">
                  71 South Los Carneros Road,<br />
                  California +51 174 705 812
                </p>
              </div>
            </div>

            {/* Column 3: Links & Address 2 */}
            <div ref={addToColumnsRef} className="flex flex-col gap-4">
              <nav className="flex flex-col gap-4 text-sm text-gray-500">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms and conditions</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                <a href="#" className="hover:text-white transition-colors">Careers</a>
              </nav>

              <div className="mt-auto pt-16">
                <h3 className="text-sm font-bold mb-4">Germany</h3>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">
                  Leehove 40, 2678 MC De Lier,<br />
                  Netherlands +31 174 705 811
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Vertical Action */}
        <div className="hidden md:flex w-24 flex-col items-center justify-end pb-12 border-l border-white/10 group cursor-pointer overflow-hidden" onClick={scrollToTop}>
          <div ref={rightRef} className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[var(--color-primary)] group-hover:text-black transition-colors">
              <ArrowUp size={16} />
            </div>
            <span className="text-xs uppercase tracking-[0.3em] -rotate-90 whitespace-nowrap text-gray-400 group-hover:text-white transition-colors">Back to Top</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const GlobeIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);

export default Footer;
