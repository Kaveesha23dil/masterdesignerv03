import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import questMap from '../assets/timeline-map.png';
import './TimelineSection.css';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
    { date: '12 OCTOBER 2026', label: 'Awareness', title: 'Discover the challenge', description: 'Explore IEEEXtreme and your participation pathway. Begin your journey with the Awareness session, open to everyone.', time: '8:00 PM - approx. 10:00 PM', platform: 'Zoom · Open to everyone', x: 18.2, y: 60.5, labelY: 65.4 },
    { date: '14 OCTOBER 2026', label: 'Fundamentals', title: 'Build your foundations', description: 'Break problems into steps. Explore algorithms, coding, testing, and debugging in Programming Fundamentals.', time: '8:00 PM - approx. 10:00 PM', platform: 'Zoom · Open to everyone', x: 46.4, y: 36, labelY: 40.8 },
    { date: '21 OCTOBER 2026', label: 'Strategy', title: 'Plan your next move', description: 'Prepare your team for problem triage, time management, and contest execution in Advanced Strategy.', time: '8:00 PM - approx. 10:00 PM', platform: 'Zoom · Open to everyone', x: 83.7, y: 22.4, labelY: 27.1 },
    { date: '24 OCTOBER 2026', label: 'PreXtreme', title: 'Enter the final challenge', description: 'Put your preparation to the test in a nine-hour coding challenge. Your captain registers a complete team of exactly three SLTC undergraduates.', time: 'Check-in 8:00 AM · Coding 9:00 AM - 6:00 PM', platform: 'HackerRank · SLTC teams of three', x: 84, y: 69.8, labelY: 75.1 },
];

const TimelineSection = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const [active, setActive] = useState(0);

    useLayoutEffect(() => {
        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            invalidateOnRefresh: true,
            onUpdate: self => setActive(Math.min(3, Math.floor(self.progress * 4))),
        });
        triggerRef.current = trigger;
        return () => { trigger.kill(); triggerRef.current = null; };
    }, []);

    const goToStop = index => {
        const trigger = triggerRef.current;
        if (!trigger) return;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: trigger.start + (trigger.end - trigger.start) * ((index + 0.1) / 4), behavior: reducedMotion ? 'instant' : 'smooth' });
    };
    const event = timelineData[active];

    return (
        <section id="timeline" ref={sectionRef} className="quest-timeline" aria-label="DecodeXtreme event timeline">
            <div className="quest-sticky">
                <header className="quest-header">
                    <div>
                        <p className="quest-eyebrow">DECODEXTREME 2026 / THE MISSION PATH</p>
                        <h2>Your next <span>checkpoint.</span></h2>
                    </div>
                    <p className="quest-scroll-hint"><ArrowDown size={15} /> Scroll to explore the journey</p>
                </header>

                <div className="quest-layout">
                    <div className="quest-map" aria-label="Four event locations on a parchment map">
                        <img src={questMap} alt="Parchment quest map with a coastal city, central palace, mountain fortress, and desert ruins" width="1672" height="941" />
                        {timelineData.map((stop, index) => (
                            <button key={stop.date} className={`quest-location ${index === active ? 'is-active' : ''} ${index < active ? 'is-complete' : ''}`} style={{ '--x': `${stop.x}%`, '--y': `${stop.y}%`, '--label-y': `${stop.labelY}%` }} onClick={() => goToStop(index)} aria-label={`${stop.date}: ${stop.label}`} aria-current={index === active ? 'step' : undefined}>
                                <span className="quest-marker" />
                                <span className="quest-map-label">{stop.label}</span>
                            </button>
                        ))}
                        <div className="quest-map-caption">FOUR CHECKPOINTS. ONE JOURNEY.</div>
                    </div>

                    <div className="quest-details" aria-live="polite" aria-atomic="true">
                        <div className="quest-step"><span>CHECKPOINT {String(active + 1).padStart(2, '0')}</span><span>04</span></div>
                        <div className="quest-progress" aria-hidden="true">{timelineData.map((stop, index) => <span key={stop.date} className={index <= active ? 'is-filled' : ''} />)}</div>
                        <article key={active} className="quest-event">
                            <p className="quest-date">{event.date}</p>
                            <p className="quest-session">{event.label}</p>
                            <h3>{event.title}</h3>
                            <p className="quest-description">{event.description}</p>
                            <dl className="quest-facts">
                                <div><dt>WHEN</dt><dd>{event.time}</dd></div>
                                <div><dt>WHERE / WHO</dt><dd>{event.platform}</dd></div>
                            </dl>
                            <p className="quest-timezone">Sri Lanka time (UTC+05:30) · Free entry</p>
                            <a className="quest-cta" href="/services">Explore the program <ArrowUpRight size={18} /></a>
                        </article>
                        <p className="quest-footnote">No IEEE membership needed. Registration links and the common closing deadline will be announced.</p>
                    </div>
                </div>
                <nav className="quest-stops" aria-label="Timeline checkpoints">
                    {timelineData.map((stop, index) => <button key={stop.date} onClick={() => goToStop(index)} className={index === active ? 'is-active' : ''} aria-current={index === active ? 'step' : undefined}><span>{String(index + 1).padStart(2, '0')}</span> {stop.label}</button>)}
                </nav>
            </div>
        </section>
    );
};

export default TimelineSection;
