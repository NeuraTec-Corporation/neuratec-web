const services=[
["☁","Cloud & Infrastructure","Modern, scalable and secure environments."],
["♢","Cybersecurity","Proactive protection for your business."],
["◉","AI + Automation","Intelligent workflows that increase efficiency."],
["⊞","Microsoft 365","Collaboration tools for modern teams."],
["</>","Custom Solutions","Flexible systems designed for your needs."]
];
const industries=[
["♡","Healthcare & Dental","Secure, compliant and reliable IT.","https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=90"],
["▣","Automotive & Service","Streamline operations and improve efficiency.","https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=90"],
["♙","Professional Services","Work smarter. Collaborate better.","https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=90"],
["▥","Manufacturing & Logistics","Reliable, scalable and connected.","https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=90"]
];
function Logo(){return <span className="logo"><span className="mark">N</span><b>Neura<span>Tec</span></b></span>}
function ServiceCards(){return <div className="serviceCards">{services.map(([i,t,d])=><article key={t}><span className="serviceIcon">{i}</span><div><b>{t}</b><small>{d}</small></div><span className="go">→</span></article>)}</div>}
export default function Home(){return <main>
<header><Logo/><nav><a href="#solutions">Solutions⌄</a><a href="#industries">Industries⌄</a><a href="#ai">AI + Automation⌄</a><a href="#about">About</a><a href="#resources">Resources⌄</a></nav><a className="btn" href="mailto:contact@us-neuratec.com">Contact Us →</a></header>
<section className="hero">
 <div className="heroText"><label>PEOPLE · TECHNOLOGY · REAL RESULTS</label><h1>AI-Driven<br/>Technology for<br/><em>a Stronger Business.</em></h1><p>We design, integrate and manage secure, scalable and intelligent technology solutions to help your business grow — today and for what’s next.</p><div className="actions"><a className="btn" href="#contact">Get Started →</a><a className="btn secondary" href="#solutions">Our Solutions</a></div></div>
 <div className="heroVisual"><div className="core"><span className="coreTop">N</span><span/><span/></div><div className="circuit c1"/><div className="circuit c2"/><div className="circuit c3"/></div>
 <ServiceCards/>
</section>
<section id="solutions" className="solutionRow">{services.map(([i,t,d])=><article key={t}><span className="bigIcon">{i}</span><b>{t}</b><p>{d}</p><span className="go">→</span></article>)}</section>
<section id="industries" className="industries"><div className="industryIntro"><label>INDUSTRIES WE SERVE</label><h2>Real technology<br/><em>for real industries.</em></h2><p>We understand the unique challenges of each industry and deliver tailored solutions that drive measurable results.</p><a className="btn" href="#industries">Explore All Industries →</a></div><div className="industryCards">{industries.map(([i,t,d,img])=><article key={t}><div className="industryPhoto" style={{backgroundImage:`url("${img}")`}}/><div className="industryBody"><span className="roundIcon">{i}</span><b>{t}</b><p>{d}</p><span className="go">→</span></div></article>)}</div></section>
<section className="trust"><div><span>◇</span><b>Trusted Partner</b><small>Long-term relationships</small></div><div><span>♙</span><b>Proven Experience</b><small>Across real business environments</small></div><div><span>▥</span><b>Business Focused</b><small>Real operational impact</small></div><div><span>⚙</span><b>End-to-End Support</b><small>From strategy to execution</small></div></section>
<section id="ai" className="world"><div className="worldText"><label>GLOBAL TECHNOLOGY PARTNER</label><h2>Connecting<br/>Businesses<br/><em>Without Limits.</em></h2><p>Secure, scalable and intelligent IT solutions for a more connected world.</p><div className="actions"><a className="btn" href="#about">Our Approach →</a><a className="btn secondary" href="#contact">Global Reach →</a></div></div><div className="earth"><span className="arc a1"/><span className="arc a2"/><span className="arc a3"/></div><ServiceCards/></section>
<section id="about" className="future"><div className="futureText"><label>LET’S BUILD WHAT’S NEXT</label><h2>Your strategic technology<br/>partner for <em>a stronger tomorrow.</em></h2><p>Whether you need more secure infrastructure, smarter workflows or a complete IT transformation, NeuraTec is here to help.</p><div className="actions"><a className="btn" href="mailto:contact@us-neuratec.com">Contact Us →</a><a className="btn secondary" href="mailto:contact@us-neuratec.com">Talk to an Expert</a></div></div><div className="hq"><div className="hqBrand"><Logo/></div></div><div className="support"><b>✓ Strategic Advisory</b><b>✓ Implementation</b><b>✓ Ongoing Support</b><b>✓ Measurable Results</b></div></section>
<footer id="contact"><Logo/><span>Enterprise technology designed around the business.</span><a href="mailto:contact@us-neuratec.com">contact@us-neuratec.com</a></footer>
</main>}