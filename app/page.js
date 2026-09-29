const capabilities=[
["cloud","Cloud & Infrastructure","Modern, scalable and secure environments."],
["shield","Cybersecurity","Proactive protection for people, data and operations."],
["spark","AI + Automation","Intelligent workflows designed around real operations."],
["grid","Microsoft 365","Modern collaboration, identity and productivity."],
["code","Custom Solutions","Purpose-built systems for unique business needs."]
];
const industries=[
["medical","Healthcare & Dental","Secure, reliable technology for patient-centered operations.","https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=90"],
["auto","Automotive & Service","Connected workflows from intake through delivery.","https://images.unsplash.com/photo-1632823469850-1b7b1e8b7e18?auto=format&fit=crop&w=1000&q=90"],
["brief","Professional Services","Secure collaboration and smarter business workflows.","https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=90"],
["factory","Manufacturing & Logistics","Resilient infrastructure for connected operations.","https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=90"]
];
export const metadata={title:"NeuraTec Corporation | Technology + AI for Business",description:"NeuraTec designs, integrates and manages secure technology, cloud, cybersecurity, AI automation and custom systems around real business operations."};

function Glyph({type}){
 const paths={
 cloud:<><path d="M7 18h11a4 4 0 0 0 .6-7.95A6 6 0 0 0 7.2 8.2 5 5 0 0 0 7 18Z"/></>,
 shield:<><path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z"/><path d="m9.5 12 1.7 1.7 3.6-4"/></>,
 spark:<><path d="M12 2c.8 5 2 7 7 8-5 .8-6.2 3-7 8-.8-5-2-7.2-7-8 5-.8 6.2-3 7-8Z"/><path d="M19 16c.3 2 1 2.7 3 3-2 .3-2.7 1-3 3-.3-2-1-2.7-3-3 2-.3 2.7-1 3-3Z"/></>,
 grid:<><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/></>,
 code:<><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></>,
 medical:<><path d="M12 21s-8-4.6-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.4-8 11-8 11Z"/><path d="M8 12h2l1-2 2 5 1-3h2"/></>,
 auto:<><path d="m5 15 1-5 2-3h8l2 3 1 5v3h-2v2h-2v-2H9v2H7v-2H5v-3Z"/><path d="M7 13h10M8 16h.01M16 16h.01"/></>,
 brief:<><path d="M4 8h16v11H4zM9 8V5h6v3M4 12h16M10 12v2h4v-2"/></>,
 factory:<><path d="M3 21V10l6 3V9l6 4V5h6v16H3Z"/><path d="M7 17h2M12 17h2M17 17h2"/></>,
 people:<><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20c0-4 2.5-6 6-6s6 2 6 6M15 15c3 0 5 1.5 5 5"/></>,
 chart:<><path d="M4 20V10M10 20V5M16 20v-8M22 20H2"/><path d="m4 9 6-5 6 4 5-6"/></>,
 gear:<><circle cx="12" cy="12" r="3"/><path d="M19 13.5v-3l-2-.7-.7-1.7.9-1.9-2.1-2.1-1.9.9-1.7-.7L10.5 2h-3l-.7 2.3-1.7.7-1.9-.9-2.1 2.1.9 1.9-.7 1.7-2 .7v3l2 .7.7 1.7-.9 1.9 2.1 2.1 1.9-.9 1.7.7.7 2.3h3l.7-2.3 1.7-.7 1.9.9 2.1-2.1-.9-1.9.7-1.7 2-.7Z"/></>
 };
 return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]||paths.spark}</svg>
}
function Icon({type}){return <span className="icon"><Glyph type={type}/></span>}
function Brand(){return <span className="brand"><span className="logoSymbol" aria-hidden="true"><i/><i/></span><span className="wordmark">Neura<span>Tec</span><small>CORPORATION</small></span></span>}
function ServiceCards({className=""}){return <div className={className}>{capabilities.map(([i,t,d])=><article key={t}><Icon type={i}/><div><strong>{t}</strong><small>{d}</small></div><b>→</b></article>)}</div>}

export default function Home(){return <main className="site">
<nav className="nav"><a href="#"><Brand/></a><div className="navLinks"><a href="#solutions">Solutions⌄</a><a href="#industries">Industries⌄</a><a href="#ai">AI + Automation⌄</a><a href="#about">About</a><a href="#resources">Resources⌄</a></div><a className="btn primary" href="#contact">Contact Us <b>→</b></a></nav>

<section className="hero">
<div className="heroShade"/>
<div className="heroCopy"><div className="eyebrow">PEOPLE · TECHNOLOGY · REAL RESULTS</div><h1>AI-Driven<br/>Technology for<br/><em>a Stronger Business.</em></h1><p>We design, integrate and manage secure, scalable and intelligent technology solutions to help your business grow — today and for what’s next.</p><div className="actions"><a className="btn primary" href="#contact">Get Started →</a><a className="btn outline" href="#solutions">Our Solutions</a></div></div>
<div className="heroTech" aria-hidden="true"><div className="core"><span className="coreN"><i/><i/></span></div><div className="pulse p1"/><div className="pulse p2"/><div className="pulse p3"/></div>
<ServiceCards className="heroCards"/>
</section>

<section id="solutions" className="capabilities">{capabilities.map(([i,t,d])=><article key={t}><Icon type={i}/><strong>{t}</strong><p>{d}</p><a href="#contact">→</a></article>)}</section>

<section id="industries" className="industries section">
<div className="industryIntro"><div className="eyebrow">INDUSTRIES WE SERVE</div><h2>Real technology<br/><em>for real industries.</em></h2><p>Technology designed around the real environment — clinical care, service bays, professional teams and connected operations.</p><a className="btn primary" href="#contact">Explore All Industries →</a></div>
<div className="industryGrid">{industries.map(([i,t,d,img])=><article key={t}><div className="industryPhoto" style={{backgroundImage:`url("${img}")`}}/><div className="industryBody"><Icon type={i}/><h3>{t}</h3><p>{d}</p><a href="#contact">→</a></div></article>)}</div>
</section>

<section className="trust"><article><Icon type="shield"/><div><b>Trusted Partner</b><span>Long-term relationships</span></div></article><article><Icon type="people"/><div><b>Business Focused</b><span>Technology aligned to operations</span></div></article><article><Icon type="chart"/><div><b>End-to-End</b><span>From strategy to execution</span></div></article><article><Icon type="gear"/><div><b>Built to Fit</b><span>Solutions around your business</span></div></article></section>

<section id="ai" className="global">
<div className="globalCopy"><div className="eyebrow">GLOBAL TECHNOLOGY PARTNER</div><h2>Connecting<br/>Businesses<br/><em>Without Limits.</em></h2><p>Secure, scalable and intelligent IT solutions for a more connected world.</p><div className="actions"><a className="btn primary" href="#about">Our Approach →</a><a className="btn outline" href="#contact">Global Reach</a></div></div>
<div className="world" aria-hidden="true"><svg viewBox="0 0 900 430"><defs><radialGradient id="g"><stop offset="0" stopColor="#dff5ff"/><stop offset=".65" stopColor="#80c9ff"/><stop offset="1" stopColor="#1687ed"/></radialGradient><filter id="glow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><ellipse cx="450" cy="260" rx="335" ry="205" fill="url(#g)" opacity=".8"/><g className="continents"><path d="M210 167l42-42 55-10 35 17 33-8 33 20-14 32-42 11-28 31-40 4-26-24-35-4Z"/><path d="M358 226l42 17 19 38-12 53-31 51-21-27 7-48-24-39Z"/><path d="M485 130l49-25 82 11 35 27 75 12 35 30-26 25-56-3-35 27-62-10-37-30-50-3-24-27Z"/><path d="M548 235l42 11 24 44-17 66-38 28-28-58 6-50Z"/><path d="M708 292l47 8 28 28-25 27-52-10-12-28Z"/></g><g className="routes" filter="url(#glow)"><path d="M255 180Q420 35 600 170"/><path d="M310 205Q475 100 715 310"/><path d="M395 280Q500 155 650 215"/><path d="M560 250Q660 165 760 325"/></g><g className="nodes"><circle cx="255" cy="180" r="7"/><circle cx="310" cy="205" r="6"/><circle cx="395" cy="280" r="6"/><circle cx="600" cy="170" r="7"/><circle cx="650" cy="215" r="6"/><circle cx="715" cy="310" r="7"/><circle cx="760" cy="325" r="5"/></g></svg></div>
<ServiceCards className="globalCards"/>
</section>

<section id="about" className="partner">
<div className="partnerCopy"><div className="eyebrow">LET’S BUILD WHAT’S NEXT</div><h2>Your strategic technology<br/>partner for <em>a stronger tomorrow.</em></h2><p>Whether you need more secure infrastructure, smarter workflows or a complete IT transformation, NeuraTec is here to help.</p><div className="actions"><a className="btn primary" href="mailto:contact@us-neuratec.com">Contact Us →</a><a className="btn outline" href="mailto:contact@us-neuratec.com">Talk to an Expert</a></div></div>
<div className="office" role="img" aria-label="Modern technology office reception"><div className="officeGlass"/><div className="officeDoor"><span>NEURATEC</span><small>TECHNOLOGY · AI · OPERATIONS</small></div><div className="officeLogo"><Brand/></div></div>
<div className="partnerList"><span>✓ Strategic Advisory</span><span>✓ Implementation</span><span>✓ Ongoing Support</span><span>✓ Measurable Outcomes</span></div>
</section>
<section id="contact" className="footer"><Brand/><p>Enterprise technology designed around the business.</p><a href="mailto:contact@us-neuratec.com">contact@us-neuratec.com</a></section>
</main>}