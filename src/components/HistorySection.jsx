import { ArrowRight, CalendarDays, Diamond, Trophy, Users } from 'lucide-react';
import ruins from '../assets/preparation-ruins.png';
import './HistorySection.css';

const preparation = [
    { number: '01', title: 'Problem Solving', description: 'Learn to break problems into steps, choose algorithms, and test and debug your code in the Programming Fundamentals session.', icon: Diamond, date: '14 October', audience: 'Open to everyone', href: '/services' },
    { number: '02', title: 'Team Strategy', description: 'Practice problem triage, teamwork, and time management in Advanced Strategy before putting your approach to the test.', icon: Users, date: '21 October', audience: 'Open to everyone', href: '/services' },
    { number: '03', title: 'Contest Confidence', description: 'Apply your preparation in the nine-hour online PreXtreme challenge on HackerRank with a complete three-member SLTC team.', icon: Trophy, date: '24 October', audience: 'SLTC teams only', href: '/pages' },
];

const HistorySection = () => (
    <section className="preparation-hud" style={{ '--preparation-background': `url("${ruins}")` }} aria-labelledby="preparation-title">
        <div className="preparation-inner">
            <header className="preparation-heading">
                <div className="preparation-emblem" aria-hidden="true"><Diamond size={28} strokeWidth={1} /></div>
                <p className="preparation-eyebrow">PREPARATION JOURNEY</p>
                <h2 id="preparation-title">Your <span>Preparation</span></h2>
                <p className="preparation-subtitle">Build the skills and confidence to think clearly, solve together, and compete.</p>
                <div className="preparation-divider" aria-hidden="true"><Diamond size={12} /></div>
            </header>
            <div className="preparation-grid">
                {preparation.map(item => {
                    const Icon = item.icon;
                    return (
                        <article className="preparation-frame" key={item.number}>
                            <div className="preparation-card">
                                <div className="preparation-card-top">
                                    <span className="preparation-number">{item.number}</span>
                                    <div className="preparation-hologram" aria-hidden="true">
                                        <span className="preparation-orbit preparation-orbit-outer" />
                                        <span className="preparation-orbit preparation-orbit-inner" />
                                        <span className="preparation-crosshair" />
                                        <span className="preparation-pedestal" />
                                        <Icon className="preparation-holo-icon" size={72} strokeWidth={1.2} />
                                    </div>
                                </div>
                                <h3>{item.title}</h3>
                                <p className="preparation-description">{item.description}</p>
                                <div className="preparation-card-bottom">
                                    <div className="preparation-date"><CalendarDays size={17} /><span>{item.date}</span></div>
                                    <span className="preparation-audience">{item.audience}</span>
                                    <a href={item.href} aria-label={`Explore ${item.title}`}><ArrowRight size={20} /></a>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
            <div className="preparation-motto"><span />THINK. SOLVE. COMPETE.<span /></div>
            <div className="preparation-endmark" aria-hidden="true"><Diamond size={12} /></div>
        </div>
    </section>
);
export default HistorySection;
