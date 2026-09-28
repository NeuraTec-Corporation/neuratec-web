const capabilities=[
["☁","Cloud & Infrastructure","Modern, scalable and secure environments."],
["♢","Cybersecurity","Proactive protection for people, data and operations."],
["✦","AI + Automation","Intelligent workflows designed around real operations."],
["▦","Microsoft 365","Modern collaboration, identity and productivity."],
["</>","Custom Solutions","Purpose-built systems for unique business needs."]
];
const industries=[
["Healthcare & Dental","Secure, reliable technology for patient-centered operations.","https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"],
["Automotive & Service","Connected workflows from intake through delivery.","https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=900&q=80"],
["Professional Services","Secure collaboration and smarter business workflows.","https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80"],
["Manufacturing & Logistics","Resilient infrastructure for connected operations.","https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80"]
];
export const metadata={title:"NeuraTec Corporation | Technology + AI for Business",description:"NeuraTec designs, integrates and manages secure technology, cloud, cybersecurity, AI automation and custom systems around real business operations."};
function Icon({children}){return <span className="icon">{children}</span>}
export default function Home(){return <main className="site">
<nav className="nav"><a className="brand" href="#"><span className="brandMark">N</span><span>Neura<span>Tec</span><small>CORPORATION</small></span></a><div className="navLinks"><a href="#solutions">Solutions⌄</a><a href="#industries">Industries⌄</a><a href="#ai">AI + Automation⌄</a><a href="#about">About</a><a href="#resources">Resources⌄</a></div><a className="btn primary" href="#contact">Contact Us <b>→</b></a></nav>

<section className="hero">
<div className="heroShade"/>
<div className="heroCopy"><div className="eyebrow">PEOPLE · TECHNOLOGY · REAL RESULTS</div><h1>AI-Driven<br/>Technology for<br/><em>a Stronger Business.</em></h1><p>We design, integrate and manage secure, scalable and intelligent technology solutions to help your business grow — today and for what’s next.</p><div className="actions"><a className="btn primary" href="#contact">Get Started →</a><a className="btn outline" href="#solutions">Our Solutions</a></div></div>
<div className="heroTech"><div className="core"><span>N</span><i/><i/><i/></div><div className="circuit c1"/><div className="circuit c2"/></div>
<div className="heroCards">{capabilities.map(([i,t,d])=><article key={t}><Icon>{i}</Icon><div><strong>{t}</strong><small>{d}</small></div><b>→</b></article>)}</div>
</section>

<section id="solutions" className="capabilities">{capabilities.map(([i,t,d])=><article key={t}><Icon>{i}</Icon><strong>{t}</strong><p>{d}</p><a href="#contact">→</a></article>)}</section>

<section id="industries" className="industries section">
<div className="industryIntro"><div className="eyebrow">INDUSTRIES WE SERVE</div><h2>Real technology<br/><em>for real industries.</em></h2><p>We understand the operational challenges behind each environment and design technology around the way the business works.</p><a className="btn primary" href="#contact">Explore All Industries →</a></div>
<div className="industryGrid">{industries.map(([t,d,img])=><article key={t}><div className="industryPhoto" style={{backgroundImage:`url("${img}")`}}/><div className="industryBody"><Icon>⌁</Icon><h3>{t}</h3><p>{d}</p><a href="#contact">→</a></div></article>)}</div>
</section>

<section className="trust"><article><Icon>◇</Icon><div><b>Trusted Partner</b><span>Long-term relationships</span></div></article><article><Icon>◎</Icon><div><b>Business Focused</b><span>Technology aligned to operations</span></div></article><article><Icon>↗</Icon><div><b>End-to-End</b><span>From strategy to execution</span></div></article><article><Icon>⚙</Icon><div><b>Built to Fit</b><span>Solutions around your business</span></div></article></section>

<section id="ai" className="global">
<div className="globalCopy"><div className="eyebrow">GLOBAL TECHNOLOGY PARTNER</div><h2>Connecting<br/>Businesses<br/><em>Without Limits.</em></h2><p>Secure, scalable and intelligent IT solutions for a more connected world.</p><div className="actions"><a className="btn primary" href="#about">Our Approach →</a><a className="btn outline" href="#contact">Global Reach</a></div></div>
<div className="globe" aria-hidden="true"><div className="earth"/><i className="arc a1"/><i className="arc a2"/><i className="arc a3"/><i className="dot d1"/><i className="dot d2"/><i className="dot d3"/><i className="dot d4"/></div>
<div className="globalCards">{capabilities.map(([i,t,d])=><article key={t}><Icon>{i}</Icon><div><strong>{t}</strong><small>{d}</small></div><b>→</b></article>)}</div>
</section>

<section id="about" className="partner">
<div className="partnerCopy"><div className="eyebrow">LET’S BUILD WHAT’S NEXT</div><h2>Your strategic technology<br/>partner for <em>a stronger tomorrow.</em></h2><p>Whether you need more secure infrastructure, smarter workflows or a complete IT transformation, NeuraTec is here to help.</p><div className="actions"><a className="btn primary" href="mailto:contact@us-neuratec.com">Contact Us →</a><a className="btn outline" href="mailto:contact@us-neuratec.com">Talk to an Expert</a></div></div>
<div className="building" role="img" aria-label="Conceptual modern technology campus visual"><div className="buildingBrand"><span className="brandMark">N</span> Neura<span>Tec</span></div></div>
<div className="partnerList"><span>✓ Strategic Advisory</span><span>✓ Implementation</span><span>✓ Ongoing Support</span><span>✓ Measurable Outcomes</span></div>
</section>
<section id="contact" className="footer"><div className="brand"><span className="brandMark">N</span><span>Neura<span>Tec</span><small>CORPORATION</small></span></div><p>Enterprise technology designed around the business.</p><a href="mailto:contact@us-neuratec.com">contact@us-neuratec.com</a></section>
</main>}