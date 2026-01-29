import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BackgroundShapes = () => {
    const shape1Ref = useRef(null);
    const shape2Ref = useRef(null);

    useLayoutEffect(() => {
        gsap.to(shape1Ref.current, {
            rotation: 360,
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 1
            }
        });

        gsap.to(shape2Ref.current, {
            rotation: -360,
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 2
            }
        });
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Shape 1 - Top Left */}
            <div ref={shape1Ref} className="absolute -top-[10%] -left-[10%] w-[60vh] h-[60vh] opacity-20 text-gray-500">
                <svg viewBox="0 0 200 200" className="w-full h-full stroke-current stroke-[0.5] fill-none">
                    <path d="M100,10 L190,60 L190,140 L100,190 L10,140 L10,60 Z" />
                    <path d="M100,10 L100,190 M190,60 L10,140 M190,140 L10,60" />
                    <circle cx="100" cy="100" r="80" className="stroke-[0.2]" />
                </svg>
            </div>

            {/* Shape 2 - Right */}
            <div ref={shape2Ref} className="absolute top-[10%] -right-[20%] w-[120vh] h-[120vh] opacity-20 text-gray-500">
                <svg viewBox="0 0 200 200" className="w-full h-full stroke-current stroke-[0.3] fill-none">
                    {/* Dodecahedron-like structure simulation */}
                    <path d="M100,5 L155,30 L180,80 L145,130 L100,195 L55,130 L20,80 L45,30 Z" />
                    <path d="M100,5 L100,70 M155,30 L100,70 M45,30 L100,70" />
                    <path d="M100,70 L60,110 M100,70 L140,110" />
                    <path d="M60,110 L20,80 M140,110 L180,80" />
                    <path d="M60,110 L100,195 M140,110 L100,195" />
                    <path d="M55,130 L145,130" />
                </svg>
            </div>

            {/* Small floating shape */}
            <div className="absolute bottom-[5%] left-[30%] w-[30vh] h-[30vh] opacity-10 text-white animate-float">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-current stroke-[0.5] fill-none">
                    <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
                    <line x1="10" y1="25" x2="90" y2="75" />
                    <line x1="90" y1="25" x2="10" y2="75" />
                    <line x1="50" y1="5" x2="50" y2="95" />
                </svg>
            </div>
        </div>
    );
};

export default BackgroundShapes;
