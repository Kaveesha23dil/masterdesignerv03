import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const NavLink = ({ children, active, onClick, to }) => (
  <Link
    to={to || "#"}
    onClick={onClick}
    className={`text-4xl md:text-6xl font-display font-medium block mb-4 transition-colors duration-300 ${active ? "text-[var(--color-primary)]" : "text-white hover:text-gray-400"}`}
  >
    {children}
  </Link>
);

const NavOverlay = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null);
  const linksRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, { x: "0%", duration: 0.8, ease: "power3.out" });
      gsap.fromTo(
        linksRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(overlayRef.current, { x: "100%", duration: 0.8, ease: "power3.inOut" });
    }
  }, [isOpen]);
  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black z-40 translate-x-full h-screen w-full flex items-center pl-8 md:pl-24"
    >
      <div ref={linksRef}>
        <NavLink active onClick={onClose} to="/">Homepage</NavLink>
        <NavLink onClick={onClose} to="/portfolio">Our Team</NavLink>
        <NavLink onClick={onClose} to="/services">Program</NavLink>
        <NavLink onClick={onClose} to="/newsletter">Updates</NavLink>
        <NavLink onClick={onClose} to="/pages">Delegate Guide</NavLink>
      </div>
    </div>
  );
};

export default NavOverlay;

