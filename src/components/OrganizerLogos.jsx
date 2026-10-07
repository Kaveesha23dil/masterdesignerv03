import branchLogo from '../assets/sb-logo-color.webp';
import societyLogo from '../assets/IEEE-CS_LogoTM-orange.webp';
import './OrganizerLogos.css';

const OrganizerLogos = () => (
    <div className="organizer-identity">
        <p>ORGANIZED BY</p>
        <div className="organizer-logos">
            <div><img src={branchLogo} alt="IEEE Student Branch of SLTC" /></div>
            <div><img src={societyLogo} alt="IEEE Computer Society" /></div>
        </div>
    </div>
);
export default OrganizerLogos;
