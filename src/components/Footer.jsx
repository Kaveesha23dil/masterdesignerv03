import { ArrowUpRight } from 'lucide-react';
import './Footer.css';
import eventLogo from '../assets/DecodeXtreme Logo.webp';

const Footer = () => (
  <footer className="minimal-footer">
    <div className="minimal-footer-panel">
      <div className="minimal-footer-top">
        <div className="minimal-footer-brand">
          <a href="/" aria-label="DecodeXtreme homepage"><img className="minimal-footer-brand-logo" src={eventLogo} alt="DecodeXtreme 2026" /></a>
          <p>Think. Solve. Compete.<br />Three open sessions. One SLTC team challenge.<br />Prepare together for IEEEXtreme 20.0.</p>
        </div>
        <nav className="minimal-footer-column" aria-label="Footer quick links">
          <h3>Quick links</h3>
          <a href="/">Home</a>
          <a href="/services">Program</a>
          <a href="/pages#timeline">Timeline</a>
          <a href="/newsletter">Updates</a>
        </nav>
        <nav className="minimal-footer-column" aria-label="Footer event links">
          <h3>The event</h3>
          <a href="/portfolio">Our team</a>
          <a href="/pages">Delegate guide</a>
          <a href="https://ieeextreme.org/" target="_blank" rel="noopener noreferrer">IEEEXtreme <ArrowUpRight size={11} /></a>
          <span>Fully online · Sri Lanka</span>
        </nav>
        <div className="minimal-footer-column">
          <h3>Organized by</h3>
          <span>IEEE Student Branch</span>
          <span>of SLTC</span>
          <span>Computer Society</span>
          <span>Free · No membership needed</span>
        </div>
      </div>
      <div className="minimal-footer-meta">
        <p>© 2026 DecodeXtreme. All rights reserved.</p>
        <a href="https://kaveesha-portfolio-khaki.vercel.app/" target="_blank" rel="noopener noreferrer">Developed by <span>Kaveesha Dilshan</span> <ArrowUpRight size={13} /></a>
      </div>
      <div className="minimal-footer-wordmark" aria-hidden="true">DECODEXTREME</div>
    </div>
  </footer>
);

export default Footer;

