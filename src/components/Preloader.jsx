import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
    const containerRef = useRef(null);
    const counterRef = useRef(null);
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    // Slight delay before calling onComplete to allow exit animation to finish
                    // But actually we want to call onComplete possibly after the slide up
                    // Or we let this component handle the slide up and then call onComplete
                }
            });

            // Counter Animation
            const counterObj = { value: 0 };
            tl.to(counterObj, {
                value: 100,
                duration: 2.5,
                ease: "power2.out",
                onUpdate: () => {
                    setCount(Math.round(counterObj.value));
                }
            });

            // Text fade out
            tl.to(".preloader-text", {
                opacity: 0,
                y: -50,
                duration: 0.5,
                ease: "power2.in"
            });

            // Slide Up Reveal
            tl.to(containerRef.current, {
                yPercent: -100,
                duration: 1.2,
                ease: "power4.inOut",
                onComplete: onComplete
            });

        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[1000] bg-black text-white flex flex-col items-center justify-center">
            <div className="preloader-text text-9xl md:text-[12rem] font-display font-bold tabular-nums tracking-tighter mix-blend-difference">
                {count}%
            </div>
            <div className="preloader-text absolute bottom-12 left-12 text-sm uppercase tracking-widest opacity-50">
                Loading Experience
            </div>
            <div className="preloader-text absolute bottom-12 right-12 text-sm uppercase tracking-widest opacity-50">
                Master Designer
            </div>
        </div>
    );
};

export default Preloader;
