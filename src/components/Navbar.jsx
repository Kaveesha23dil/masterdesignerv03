import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import NavOverlay from './NavOverlay';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <NavOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-8 z-50 mix-blend-difference text-white">
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
