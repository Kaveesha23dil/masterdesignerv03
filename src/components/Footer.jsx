import React from 'react';
import { MoveRight } from 'lucide-react';
import footerMountains from '../assets/footer_bg.jpg';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col relative overflow-hidden">

      {/* Background Image Container covering top and middle */}
      <div className="absolute top-0 left-0 w-full h-[800px] z-0 pointer-events-none">
        <img
          src={footerMountains}
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradients for smooth blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050A18]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-transparent to-[#050505]/80"></div>
      </div>

      {/* Content Section - CTA */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-32 pb-48 px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight drop-shadow-2xl">
          Inovujte s nami
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md">
          A spravte svoju farmu efektívnejšou s modernými technológiami.
          <br />
          Poleťte spolu s nami. Za pokus to stojí...
        </p>

        <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold flex items-center gap-4 hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(37,242,245,0.1)] hover:shadow-[0_0_30px_rgba(37,242,245,0.4)]">
          <span className="text-xs tracking-widest uppercase">Odoslať žiadosť</span>
          <span className="p-1 bg-white/20 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
            <MoveRight size={16} />
          </span>
        </button>
      </div>

      {/* Bottom Dark Section */}
      <div className="relative z-20 bg-[#050A18]/90 backdrop-blur-md border-t border-white/5 pt-16 pb-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Agrodrony.sk" className="h-8 max-w-[150px] object-contain opacity-100 brightness-200 contrast-125 grayscale-0" />
            </div>
            <div className="text-xs text-gray-500 leading-relaxed space-y-1">
              <p>Agrodrony.sk je spoločnosťou Blumeria Consulting.</p>
              <p>Všetky práva vyhradené.</p>
              <p>© Copyright Blumeria s.r.o. 2023.</p>
            </div>
            <div className="flex gap-4 mt-2">
              {/* Social Icons */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-black transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-black transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Sluzby */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-semibold text-white tracking-wider uppercase text-xs">Služby</h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors hover:translate-x-1 duration-200 inline-block w-fit">Postrekovanie</a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors hover:translate-x-1 duration-200 inline-block w-fit">Multispektrálna analýza</a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors hover:translate-x-1 duration-200 inline-block w-fit">Rozmetanie</a>
            </div>
          </div>

          {/* Column 3: Drony */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-semibold text-white tracking-wider uppercase text-xs">Drony</h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors hover:translate-x-1 duration-200 inline-block w-fit">DJI Agras T30</a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors hover:translate-x-1 duration-200 inline-block w-fit">DJI Agras T10</a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors hover:translate-x-1 duration-200 inline-block w-fit">DJI Mavic 3 Multispectral</a>
            </div>
          </div>

          {/* Column 4: O nas */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-semibold text-white tracking-wider uppercase text-xs">O nás</h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors hover:translate-x-1 duration-200 inline-block w-fit">O spoločnosti</a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors hover:translate-x-1 duration-200 inline-block w-fit">Kontakt</a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors hover:translate-x-1 duration-200 inline-block w-fit">Najčastejšie otázky</a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors hover:translate-x-1 duration-200 inline-block w-fit">Legislatíva</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
