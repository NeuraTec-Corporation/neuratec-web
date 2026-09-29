const services=[
["cloud","Cloud & Infrastructure","Modern, scalable and secure environments."],
["shield","Cybersecurity","Proactive protection for your business."],
["ai","AI + Automation","Intelligent workflows that increase efficiency."],
["windows","Microsoft 365","Collaboration tools for modern teams."],
["code","Custom Solutions","Flexible systems designed for your needs."]
];
const industries=[
["health","Healthcare & Dental","Secure, compliant and reliable IT.","https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=90"],
["car","Automotive & Service","Streamline operations and improve efficiency.","https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=90"],
["people","Professional Services","Work smarter. Collaborate better.","https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=90"],
["factory","Manufacturing & Logistics","Reliable, scalable and connected.","https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=90"]
];
function Icon({type}){
 const d={cloud:"M5 17h13a4 4 0 0 0 .4-8A6 6 0 0 0 7 8.5 4.5 4.5 0 0 0 5 17Z",shield:"M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Zm-3 9 2 2 4-5",ai:"M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M18 9h3M3 15h3M18 15h3M8 7h8v10H8zM10 10h4M10 13h4",windows:"M4 5l7-1v8H4V5Zm9-1 7-1v9h-7V4ZM4 14h7v7l-7-1v-6Zm9 0h7v8l-7-1v-7Z",code:"m8 7-5 5 5 5m8-10 5 5-5 5m-2-12-4 14",health:"M12 21S4 17 4 10a4 4 0 0 1 8-2 4 4 0 0 1 8 2c0 7-8 11-8 11Zm-4-9h2l1-2 2 5 1-3h2",car:"M5 16l1-5 2-3h8l2 3 1 5v2h-2v2h-2v-2H9v2H7v-2H5v-2Zm2-3h10",people:"M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8-1a2.5 2.5 0 1 0 0-5m-14 15c0-4 2-6 6-6s6 2 6 6m1-6c4 0 6 2 6 6",factory:"M3 21V10l6 3V9l6 4V5h6v16H3Z"};
 return <span className="ico"><svg viewBox="0 0 24 24"><path d={d[type]||d.ai}/></svg></span>
}
function Logo(){return <span className="logo"><svg viewBox="0 0 42 32"><path d="M4 7c7 0 8 18 15 18S27 7 34 7M4 25c7 0 8-18 15-18s8 18 15 18"/></svg><b>Neura<span>Tec</span></b></span>}
function Cards({className=""}){return <div className={className}>{services.map(([i,t,d])=><article key={t}><Icon type={i}/><div><b>{t}</b><small>{d}</small></div><span className="arrow">→</span></article>)}</div>}
export default function Home(){return <main>
<nav><Logo/><div className="links"><a href="#solutions">Solutions⌄</a><a href="#industries">Industries⌄</a><a href="#ai">AI + Automation⌄</a><a href="#about">About</a><a href="#resources">Resources⌄</a></div><a className="button" href="mailto:contact@us-neuratec.com">Contact Us →</a></nav>
<section className="hero">
 <div className="heroCopy"><label>PEOPLE · TECHNOLOGY · REAL RESULTS</label><h1>AI-Driven<br/>Technology for<br/><em>a Stronger Business.</em></h1><p>We design, integrate and manage secure, scalable and intelligent technology solutions to help your business grow — today and for what’s next.</p><div><a className="button" href="#contact">Get Started →</a><a className="button ghost" href="#solutions">Our Solutions</a></div></div>
 <div className="server" aria-hidden="true"><div className="slab s1">N</div><div className="slab s2"/><div className="slab s3"/><i/><i/><i/></div>
 <Cards className="sideCards"/>
</section>
<section id="solutions" className="serviceStrip">{services.map(([i,t,d])=><article key={t}><Icon type={i}/><b>{t}</b><p>{d}</p><span>→</span></article>)}</section>
<section id="industries" className="industries"><div className="intro"><label>INDUSTRIES WE SERVE</label><h2>Real technology<br/><em>for real industries.</em></h2><p>We understand the unique challenges of each industry and deliver tailored solutions that drive measurable results.</p><a className="button" href="#contact">Explore All Industries →</a></div><div className="industryGrid">{industries.map(([i,t,d,img])=><article key={t}><div className="photo" style={{backgroundImage:`url("${img}")`}}/><div className="cardBody"><Icon type={i}/><b>{t}</b><p>{d}</p><span>→</span></div></article>)}</div></section>
<section className="trust"><div>🤝 <b>Trusted Partner</b><small>Long-term relationships</small></div><div>♙ <b>Proven Experience</b><small>Across real business environments</small></div><div>▥ <b>Business Focused</b><small>Real operational impact</small></div><div>⚙ <b>End-to-End Support</b><small>From strategy to execution</small></div></section>
<section id="ai" className="global"><div className="globalCopy"><label>GLOBAL TECHNOLOGY PARTNER</label><h2>Connecting<br/>Businesses<br/><em>Without Limits.</em></h2><p>Secure, scalable and intelligent IT solutions for a more connected world.</p><div><a className="button" href="#about">Our Approach →</a><a className="button ghost" href="#contact">Global Reach</a></div></div><div className="globe"><div className="orbit o1"/><div className="orbit o2"/><div className="orbit o3"/></div><Cards className="sideCards globalCards"/></section>
<section id="about" className="future"><div className="futureCopy"><label>LET’S BUILD WHAT’S NEXT</label><h2>Your strategic technology<br/>partner for <em>a stronger tomorrow.</em></h2><p>Whether you need more secure infrastructure, smarter workflows or a complete IT transformation, NeuraTec is here to help.</p><div><a className="button" href="mailto:contact@us-neuratec.com">Contact Us →</a><a className="button ghost" href="mailto:contact@us-neuratec.com">Talk to an Expert</a></div></div><div className="building"><div className="buildingLogo"><Logo/></div></div><div className="checklist"><b>✓ Strategic Advisory</b><b>✓ Implementation</b><b>✓ Ongoing Support</b><b>✓ Measurable Outcomes</b></div></section>
<footer id="contact"><Logo/><span>Enterprise technology designed around the business.</span><a href="mailto:contact@us-neuratec.com">contact@us-neuratec.com</a></footer>
</main>}