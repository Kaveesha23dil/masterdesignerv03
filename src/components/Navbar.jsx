import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-8 z-50 mix-blend-difference">
            <div className="text-2xl font-bold font-display tracking-tighter">
                A.
            </div>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer">
                <Menu size={32} />
            </button>
        </nav>
    );
};

export default Navbar;
