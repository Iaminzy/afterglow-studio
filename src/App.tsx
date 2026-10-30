import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Asterisk, MoveUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Reveal from './components/Reveal';
import { projects, services } from './data/content';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export default function App() {
  useSmoothScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLElement>(null);
  const artRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const { scrollYProgress: artProgress } = useScroll({ target: artRef, offset: ['start end', 'end start'] });
  const heroY = useTransform(heroProgress, [0, 1], [0, 180]);
  const artScale = useTransform(artProgress, [0, 1], [1.18, 1]);
  const artY = useTransform(artProgress, [0, 1], [-45, 45]);
  const introY = useTransform(heroProgress, [0, 1], [0, -70]);
  const artCaptionY = useTransform(artProgress, [0, 1], [15, -15]);

  useEffect(() => scrollYProgress.on('change', setScrollProgress), [scrollYProgress]);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: scrollProgress, transformOrigin: '0%' }} />
      <Header />
      <main>
        <section ref={heroRef} className="hero section-shell" id="home">
          <div className="hero-topline"><span>Independent creative studio</span><span>Colombo · Working everywhere</span></div>
          <div className="hero-copy">
            <motion.p className="eyebrow hero-kicker" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>GOOD IDEAS, MADE TANGIBLE.</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>Make room<br />for <span className="italic-word">wonder.</span><sup>✳</sup></motion.h1>
            <motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <p>We build thoughtful brands and digital experiences for a world that never stands still.</p>
              <a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDown size={19} /></a>
            </motion.div>
          </div>
          <motion.div ref={artRef} className="hero-art" style={{ y: heroY }} aria-label="Abstract creative studio image">
            <motion.img style={{ scale: artScale, y: artY }} src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=2000&q=90" alt="Sculptural abstract installation with warm light" fetchPriority="high" />
            <motion.div
              className="art-caption"
              style={{ y: artCaptionY }}
            >
              <span>Independent by nature.</span>
              <span>Curious by design. ↗</span>
            </motion.div>
            <div className="art-stamp"><Asterisk size={23} /><span>DESIGN<br />WITH FEELING</span></div>
          </motion.div>
          <div className="hero-foot"><span>Scroll to explore</span><span>01 — 04</span></div>
        </section>

        <section className="intro section-shell" id="studio">
          <Reveal><div className="section-label"><span>01 / THE STUDIO</span><span>Small studio. Big perspective.</span></div></Reveal>
          <div className="intro-grid">
            <Reveal><h2>We make digital<br />feel <span className="serif-italic">human.</span></h2></Reveal>
            <Reveal delay={0.15}><div className="intro-copy"><p className="large-copy">The internet doesn’t need more noise. It needs ideas with intention, identities with character, and experiences people remember.</p><p>We’re an independent creative studio partnering with ambitious people to turn complex challenges into clear, considered, beautifully crafted work.</p><a className="text-link" href="#services">Get to know us <ArrowUpRight size={17} /></a></div></Reveal>
          </div>
          <motion.div className="stats-row" style={{ y: introY }}>
            {[["12", "+", "Years of curiosity"], ["34", "", "Ideas brought to life"], ["08", "", "Countries reached"]].map(([value, suffix, label], i) => <motion.div key={label} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.7 }}><strong>{value}<span>{suffix}</span></strong><span>{label}</span></motion.div>)}
            <div className="stats-note">Good work starts<br />with good questions.</div>
          </motion.div>
        </section>

        <div className="motion-marquee" aria-label="Ideas made with intention"><div className="motion-marquee-track"><span>IDEAS WITH INTENTION ✳ DESIGN THAT CONNECTS ✳ DIGITAL WITH FEELING ✳ </span><span aria-hidden="true">IDEAS WITH INTENTION ✳ DESIGN THAT CONNECTS ✳ DIGITAL WITH FEELING ✳ </span></div></div>

        <section className="work section-shell" id="work">
          <Reveal><div className="section-label"><span>02 / SELECTED WORK</span><span>A few things we’ve made</span></div></Reveal>
          <div className="work-heading"><Reveal><h2>Curiosity, <span className="serif-italic">in practice.</span></h2></Reveal><Reveal delay={0.12}><p>Different challenges. Distinct points of view.<br />Always made with intention.</p></Reveal></div>
          <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}</div>
          <Reveal><a className="text-link work-link" href="#contact">Have a project in mind? <span>Let’s make it real</span><ArrowUpRight size={17} /></a></Reveal>
        </section>

        <section className="services section-shell" id="services">
          <Reveal><div className="section-label"><span>03 / WHAT WE DO</span><span>Thoughtful from start to finish</span></div></Reveal>
          <div className="services-heading"><Reveal><h2>Good thinking.<br /><span className="serif-italic">Better making.</span></h2></Reveal><Reveal delay={0.1}><p>We bring strategy, design, and technology together to make brands matter.</p></Reveal></div>
          <div className="service-list">{services.map((service, index) => <Reveal key={service.number} delay={index * 0.08}><article className="service-item"><span className="service-number">/{service.number}</span><div className="service-title"><h3>{service.title}</h3><p>{service.text}</p></div><span className="service-icon">{service.icon}</span></article></Reveal>)}</div>
        </section>

        <section className="manifesto section-shell">
          <Reveal><p className="eyebrow">A SMALL REMINDER</p><h2>Less, but with<br /><span className="serif-italic">more meaning.</span></h2><p className="manifesto-note">We believe the best work doesn’t shout to be noticed. It gives people a reason to care.</p></Reveal>
          <motion.div className="manifesto-orbit" animate={{ rotate: 360 }} transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}><span>THOUGHTFUL BY DESIGN · MADE TO MATTER · </span><Asterisk size={32} /></motion.div>
        </section>

        <footer className="footer section-shell" id="contact">
          <Reveal><div className="section-label"><span>04 / YOUR TURN</span><span>Good things start here</span></div><p className="eyebrow footer-kicker">HAVE A GOOD ONE IN MIND?</p><a className="footer-title" href="mailto:hello@afterglow.studio">Let’s make<br /><span className="serif-italic">something</span><br />matter.<MoveUpRight className="footer-arrow" size={58} /></a></Reveal>
          <div className="footer-bottom"><a className="wordmark" href="#home">afterglow<span>®</span></a><span>Independent by nature. Curious by design.</span><a href="mailto:hello@afterglow.studio">hello@afterglow.studio <ArrowUpRight size={14} /></a><span>© {new Date().getFullYear()} Afterglow Studio</span></div>
        </footer>
      </main>
      <a className="back-top" href="#home" aria-label="Back to top"><ArrowRight size={17} /></a>
    </>
  );
}
