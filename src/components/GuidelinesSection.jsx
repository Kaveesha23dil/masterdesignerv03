import { CalendarDays, Check, CheckCircle2, Code2, Mail, ShieldCheck, Users, Wifi } from 'lucide-react';
import './GuidelinesSection.css';

const GuidelinesSection = () => (
    <section className="delegate-guide" aria-labelledby="delegate-guide-title">
        <div className="delegate-container">
            <header className="delegate-heading">
                <p>YOUR PREXTREME PLAYBOOK</p>
                <h2 id="delegate-guide-title">Delegate <span>Guide.</span></h2>
                <p className="delegate-intro">Everything to prepare your team and reach the starting line. Final challenge policies and support details are pending.</p>
            </header>
            <div className="delegate-bento">
                <article className="delegate-card delegate-eligibility">
                    <span className="delegate-kicker">01 / WHO CAN JOIN</span>
                    <h3>Your team. Your challenge.</h3>
                    <p>Sessions welcome everyone. PreXtreme is exclusively for teams of exactly three SLTC undergraduates. Free; no IEEE membership needed.</p>
                    <div className="delegate-team-art" aria-hidden="true">
                        <span><Users size={20} /><small>MEMBER</small></span>
                        <span className="delegate-captain"><ShieldCheck size={28} /><small>CAPTAIN</small></span>
                        <span><Users size={20} /><small>MEMBER</small></span>
                    </div>
                    <div className="delegate-card-tag">3 members · 1 complete team</div>
                </article>
                <article className="delegate-card delegate-registration">
                    <span className="delegate-kicker">02 / REGISTRATION</span>
                    <h3>Make every detail count.</h3>
                    <p>Register individually for each session. For PreXtreme, one captain submits all three members together. Check names, email addresses, WhatsApp numbers, and SLTC student IDs before submitting.</p>
                    <div className="delegate-field-art" aria-hidden="true">
                        <span><Check size={13} /> Full name &amp; email</span>
                        <span><Check size={13} /> WhatsApp number</span>
                        <span><Check size={13} /> SLTC student ID</span>
                    </div>
                    <div className="delegate-card-tag">Registration links pending</div>
                </article>
                <article className="delegate-card delegate-rules">
                    <span className="delegate-kicker">03 / FAIR PLAY</span>
                    <h3>A level playing field.</h3>
                    <p>Final roster, collaboration, AI, and permitted-resource policies await organizer approval. Scoring, tie-breaks, technical incidents, appeals, and conduct rules will be published with the final challenge rules.</p>
                    <div className="delegate-shield-art" aria-hidden="true"><span><Code2 size={21} /></span><ShieldCheck size={56} /><span><CheckCircle2 size={21} /></span></div>
                    <div className="delegate-card-tag">Read final rules before registering</div>
                </article>
                <article className="delegate-card delegate-readiness">
                    <span className="delegate-kicker">04 / GET READY</span>
                    <h3>Arrive ready to solve.</h3>
                    <p>Prepare reliable internet and your coding environment. Follow approved HackerRank instructions. The planned registration flow confirms your place after details are saved; email delivery is tracked separately. Joining instructions follow from the delegate team.</p>
                    <div className="delegate-ready-list">
                        <span><Wifi size={16} /> Reliable connection</span>
                        <span><Code2 size={16} /> Coding environment</span>
                        <span><Mail size={16} /> Joining instructions</span>
                    </div>
                </article>
                <article className="delegate-card delegate-schedule">
                    <span className="delegate-kicker">05 / CHALLENGE DAY</span>
                    <h3>One day. Nine hours. All in.</h3>
                    <p>24 October 2026 · Sri Lanka time (UTC+05:30). All session and challenge registrations share one closing deadline; its date and time will be announced.</p>
                    <div className="delegate-day-path">
                        <div><span><CalendarDays size={18} /></span><strong>8:00 AM</strong><small>CHECK-IN</small></div>
                        <div><span><Code2 size={18} /></span><strong>9:00 AM</strong><small>CODING BEGINS</small></div>
                        <div><span><CheckCircle2 size={18} /></span><strong>6:00 PM</strong><small>CODING ENDS</small></div>
                    </div>
                    <div className="delegate-card-tag">Online on HackerRank</div>
                </article>
            </div>
        </div>
    </section>
);
export default GuidelinesSection;
