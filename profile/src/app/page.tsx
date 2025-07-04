'use client';
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


declare global {
  interface Window {
    UnicornStudio?: unknown; 
  }
}

function NavBar() {
  
  useEffect(() => {
    const interval = setInterval(() => {}, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#232323] text-white flex items-center justify-between px-6 py-4 border-b-2 border-black">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href="/" className="relative w-32 h-20 flex items-center" style={{ overflow: 'visible' }}>
          <Image
            src="/tenadam-logo-small-Aq26gNbBBbuwxDq1.svg"
            alt="Tenadam Logo"
            width={32}
            height={32}
            priority
            style={{
              marginTop: '-1.2rem',
              marginLeft: '-0.5rem',
              height: '5rem',
              width: 'auto',
              objectFit: 'contain',
              zIndex: 10,
              pointerEvents: 'auto',
            }}
          />
        </Link>
      </div>
    </nav>
  );
}

// MarqueeText component for smooth, seamless looping
function MarqueeText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    if (width === 0) return;
    const animate = async () => {
      while (true) {
        await controls.start({ x: 0 });
        await controls.start({ x: -width, transition: { duration: 32, ease: "linear" } });
      }
    };
    animate();
  }, [width, controls]);

  const marqueeText = (
    <div
      ref={textRef}
      className="text-6xl md:text-8xl font-black uppercase text-[#A31621] whitespace-nowrap px-8 tracking-tight"
      style={{ letterSpacing: "-0.04em" }}
    >
      Tenadam Training, Consultancy and Research PLC &nbsp; • &nbsp; Tenadam Training, Consultancy and Research PLC &nbsp; • &nbsp; Tenadam Training, Consultancy and Research PLC &nbsp; • &nbsp; Tenadam Training, Consultancy and Research PLC
    </div>
  );

  return (
    <div className="absolute bottom-8 left-0 w-full z-20 overflow-hidden">
      <motion.div
        className="flex relative z-10"
        ref={containerRef}
        animate={controls}
        initial={{ x: 0 }}
        style={{ willChange: "transform" }}
      >
        {marqueeText}
        {marqueeText}
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[#FCF7F8] min-h-screen">
      <NavBar />
      {/* Animated Hero Section */}
      <section className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center bg-[#FCF7F8]">
        {/* More prominent animated background shapes */}
        <motion.div
          className="absolute inset-0 z-0 flex items-center justify-center"
          initial={{}}
          animate={{}}
        >
          <motion.div
            className="w-[80vw] h-[80vw] bg-[#A31621] rounded-full blur-3xl opacity-50 absolute -left-40 -top-40"
            animate={{ scale: [1, 1.15, 1], x: [0, 40, 0], y: [0, -40, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />
          <motion.div
            className="w-[70vw] h-[70vw] bg-[#A31621] rounded-full blur-3xl opacity-40 absolute -right-40 -bottom-40"
            animate={{ scale: [1, 1.1, 1], x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          />
        </motion.div>
        {/* Infinite seamless marquee sliding text at the bottom */}
        <MarqueeText />
      </section>

      {/* Our Featured Work Section (full-screen, punchy, left-aligned, seamless) */}
      <section className="w-full min-h-screen bg-[#F6F6ED] flex flex-col pt-24">
        {/* Top Bar */}
        <div className="w-full flex justify-between items-center px-12 pt-8 pb-4 text-xs font-mono text-black/80 tracking-widest">
          <span>EST. 2023</span>
          <span>( SCROLL DOWN )</span>
          <span>WE LIVE IN THE DETAILS ( C )</span>
        </div>
        {/* Section Title */}
        <div className="w-full flex flex-col items-start pl-12 mt-4 mb-4">
          <h2 className="text-5xl md:text-7xl font-light text-black flex items-end gap-4">
            <span>Our</span>
            <span className="italic font-serif font-bold">featured</span>
            <span className="font-black">Work</span>
          </h2>
          <div className="uppercase text-xs md:text-base tracking-widest text-black/60 mt-2">
            GIVING STARTUPS THE UNFAIR ADVANTAGE
          </div>
        </div>
        {/* Gallery Container for equal side gaps */}
        <div className="w-full px-4 md:px-8 flex flex-col gap-8">
          {/* Big Hero Gallery Card (top, full-width, now below heading) */}
          <div className="border-8 border-[#171717] rounded-3xl bg-[#232323] overflow-hidden shadow-2xl mb-4 mt-2 w-full h-screen flex flex-col">
            <div className="flex-1 bg-gray-200 flex items-center justify-center overflow-hidden">
              {/* Embedded IRIF site preview */}
              <a
                href="https://www.irif.et/"
            target="_blank"
            rel="noopener noreferrer"
                className="w-full h-full block"
              >
                <iframe
                  src="https://www.irif.et/"
                  title="IRIF (እርፍ)"
                  className="w-full h-full border-0"
                  style={{ minHeight: '100%', minWidth: '100%', background: '#fff' }}
                  allowFullScreen
                />
              </a>
            </div>
            <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-[#232323]">
              <div>
                <span className="text-white text-xl font-black uppercase">IRIF (እርፍ)</span>
                <span className="text-white/80 text-base ml-4">Experience the IRIF intelligent farming solution</span>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Smart Farming</span>
                <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">IoT</span>
                <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Satellite Data</span>
                <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">AI</span>
                <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Climate Resilience</span>
                <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Agriculture</span>
                <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Ethiopia</span>
              </div>
            </div>
          </div>
          {/* Two big gallery frames side by side (middle, very tall) */}
          <div className="w-full flex flex-col md:flex-row gap-8">
            {/* First card (Runway, very tall) */}
            <div className="flex-[1_1_48%] border-8 border-[#171717] rounded-3xl bg-[#232323] overflow-hidden shadow-2xl">
              <div className="w-full h-[64rem] bg-gray-200 flex items-center justify-center overflow-hidden">
                {/* Embedded IDNET site preview */}
                <a
                  href="https://idnet.et/"
            target="_blank"
            rel="noopener noreferrer"
                  className="w-full h-full block"
                >
                  <iframe
                    src="https://idnet.et/"
                    title="IDNET"
                    className="w-full h-full border-0"
                    style={{ minHeight: '100%', minWidth: '100%', background: '#fff' }}
                    allowFullScreen
                  />
          </a>
        </div>
              <div className="p-6 flex flex-col gap-2 bg-[#232323]">
                <div>
                  <span className="text-white text-xl font-black uppercase">IDNET</span>
                  <span className="text-white/80 text-base ml-4">Digital Identity Solutions for Ethiopia</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Digital Identity</span>
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Ethiopia</span>
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Technology</span>
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Security</span>
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Platform</span>
                </div>
              </div>
            </div>
            {/* Second card (Campfire, very tall) */}
            <div className="flex-[1_1_52%] border-8 border-[#171717] rounded-3xl bg-[#232323] overflow-hidden shadow-2xl">
              <div className="w-full h-[64rem] bg-gray-200 flex items-center justify-center overflow-hidden">
                {/* Embedded HuluCares site preview */}
                <a
                  href="https://www.hulucares.com/"
          target="_blank"
          rel="noopener noreferrer"
                  className="w-full h-full block"
                >
                  <iframe
                    src="https://www.hulucares.com/"
                    title="HuluCares"
                    className="w-full h-full border-0"
                    style={{ minHeight: '100%', minWidth: '100%', background: '#fff' }}
                    allowFullScreen
                  />
                </a>
              </div>
              <div className="p-6 flex flex-col gap-2 bg-[#232323]">
                <div>
                  <span className="text-white text-xl font-black uppercase">HuluCares</span>
                  <span className="text-white/80 text-base ml-4">Revolutionizing Healthcare in Ethiopia</span>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Healthcare</span>
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Blockchain</span>
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Insurance</span>
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Tech-Enabled</span>
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Telemedicine</span>
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Ethiopia</span>
                </div>
              </div>
            </div>
          </div>
          {/* Next row: two shorter, asymmetric cards */}
          <div className="w-full flex flex-col md:flex-row gap-8">
            {/* Left card (Aerodome, wide) */}
            <div className="flex-[1_1_65%] border-8 border-[#171717] rounded-3xl bg-[#232323] overflow-hidden shadow-2xl">
              <div className="w-full h-[44rem] bg-gray-200 flex items-center justify-center overflow-hidden">
                {/* Embedded Growup site preview */}
                <a
                  href="https://growup.et/"
          target="_blank"
          rel="noopener noreferrer"
                  className="w-full h-full block"
                >
                  <iframe
                    src="https://growup.et/"
                    title="Growup"
                    className="w-full h-full border-0"
                    style={{ minHeight: '100%', minWidth: '100%', background: '#fff' }}
                    allowFullScreen
                  />
                </a>
              </div>
              <div className="p-6 flex flex-col gap-2 bg-[#232323]">
                <div>
                  <span className="text-white text-xl font-black uppercase">Growup</span>
                  <span className="text-white/80 text-base ml-4">Helping Ethiopian Startups to Grow</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Startup Support</span>
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Funding</span>
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Legal Setup</span>
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Compliance</span>
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Financial Planning</span>
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Ethiopia</span>
                </div>
              </div>
            </div>
            {/* Right card (Journey, narrow) */}
            <div className="flex-[1_1_35%] border-8 border-[#171717] rounded-3xl bg-[#232323] overflow-hidden shadow-2xl">
              <div className="w-full h-[44rem] bg-gray-200 flex items-center justify-center overflow-hidden">
                {/* Embedded Lanchi site preview */}
                <a
                  href="https://lanchi.et/"
          target="_blank"
          rel="noopener noreferrer"
                  className="w-full h-full block"
                >
                  <iframe
                    src="https://lanchi.et/"
                    title="Lanchi"
                    className="w-full h-full border-0"
                    style={{ minHeight: '100%', minWidth: '100%', background: '#fff' }}
                    allowFullScreen
                  />
                </a>
              </div>
              <div className="p-6 flex flex-col gap-2 bg-[#232323]">
                <div>
                  <span className="text-white text-xl font-black uppercase">Lanchi</span>
                  <span className="text-white/80 text-base ml-4">Empowering Ethiopias Digital Future</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Digital Platform</span>
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Innovation</span>
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Technology</span>
                  <span className="bg-[#232323] border border-white text-white px-4 py-1 rounded-full text-xs font-bold">Ethiopia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section: See All Work */}
      <section className="w-full bg-[#F6F6ED] py-24 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          <div className="flex-1 flex justify-center md:justify-end min-w-0">
            <span className="text-3xl md:text-6xl font-serif text-black whitespace-nowrap">We do many</span>
          </div>
          <div className="flex-1 flex justify-center my-8 md:my-0 min-w-0">
            <a
              href="/gallery"
              className="bg-black text-white text-lg md:text-2xl font-extrabold rounded-full px-8 md:px-16 py-6 md:py-10 flex items-center justify-center shadow-lg hover:bg-[#232323] transition-all duration-200 border-8 border-black min-w-0 w-full max-w-[420px] min-h-[80px] md:min-h-[170px]"
              style={{ letterSpacing: '0.01em' }}
            >
              SEE ALL WORK
              <span className="ml-4 text-2xl md:text-3xl transition-transform duration-200 group-hover:translate-x-2 group-hover:rotate-12">↗</span>
            </a>
          </div>
          <div className="flex-1 flex justify-center md:justify-start min-w-0">
            <span className="text-3xl md:text-6xl font-serif text-black whitespace-nowrap">things very well.</span>
          </div>
        </div>
      </section>

      {/* Selected Clients Section */}
      <section className="w-full bg-[#F6F6ED] py-24 flex flex-col items-center justify-center">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-12 md:gap-0 items-start md:items-center">
          <div className="w-full md:w-1/5 flex flex-col items-start justify-center pl-4 md:pl-0 mb-8 md:mb-0">
            <span className="font-black text-lg md:text-xl uppercase leading-tight tracking-tight text-black">SELECTED<br />CLIENTS</span>
          </div>
          <div className="w-full md:w-4/5 grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8 md:gap-x-16 items-center justify-items-center">
            <Image src="/logos/logo1.png" alt="Logo" width={120} height={80} className="h-16 md:h-20 max-w-[120px] object-contain" />
            <Image src="/logos/aalc-logo-AQE841DJ3zSL2pP5.svg" alt="Advanced Attorneys & Legal Consultants" width={120} height={80} className="h-16 md:h-20 max-w-[120px] object-contain" />
            <Image src="/logos/cbga-logo-YyvPO3eO03fNB5yv.avif" alt="CBGA" width={120} height={80} className="h-16 md:h-20 max-w-[120px] object-contain" />
            <Image src="/logos/csoet-powered-by-csankofa-Yyv3bgP3G0CyynJ5.avif" alt="CSO.et" width={120} height={80} className="h-16 md:h-20 max-w-[120px] object-contain" />
            <Image src="/logos/et-star-logo-2-YX41zZkjPwH6WX3X.avif" alt="ET Star IT Solutions" width={120} height={80} className="h-16 md:h-20 max-w-[120px] object-contain" />
            <Image src="/logos/Group 33.svg" alt="Birrama" width={120} height={80} className="h-16 md:h-20 max-w-[120px] object-contain" />
            <Image src="/logos/Group 42.png" alt="Tele Medhin" width={120} height={80} className="h-16 md:h-20 max-w-[120px] object-contain" />
            <Image src="/logos/Growup-logo.webp" alt="Growup" width={120} height={80} className="h-16 md:h-20 max-w-[120px] object-contain" />
            <Image src="/logos/hulucares logo.svg" alt="HuluCares" width={120} height={80} className="h-16 md:h-20 max-w-[120px] object-contain" />
            <Image src="/logos/IDNET GREEN.png" alt="IDNET" width={120} height={80} className="h-16 md:h-20 max-w-[120px] object-contain" />
            <Image src="/logos/irif logo.png" alt="IRIF" width={120} height={80} className="h-16 md:h-20 max-w-[120px] object-contain" />
            <Image src="/logos/keteme logo 2.svg" alt="Keteme" width={120} height={80} className="h-16 md:h-20 max-w-[120px] object-contain" />
            <Image src="/logos/lanchi logo 1.png" alt="Lanchi" width={120} height={80} className="h-16 md:h-20 max-w-[120px] object-contain" />
            <Image src="/logos/logo-yhre-m7VpRlVayoU7o52q.png" alt="YHRE" width={120} height={80} className="h-16 md:h-20 max-w-[120px] object-contain" />
            <Image src="/logos/Tena sabi logo.png" alt="Tena Sabi" width={120} height={80} className="h-16 md:h-20 max-w-[120px] object-contain" />
          </div>
        </div>
      </section>

      {/* Your Story Section (About Us) */}
      <section className="w-full bg-[#F6F6ED] py-32 flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row items-center justify-center mb-12">
            <h2 className="text-4xl md:text-6xl font-serif text-black text-center md:text-left font-light">
              <span>Your story has a future.</span>
              <span className="mx-4">&larr;</span>
              <span>We design and build to tell it.</span>
            </h2>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-12 mb-12">
            <div className="flex-1 text-lg md:text-xl text-black font-normal leading-relaxed">
              Not just a pitch, not just a product...there&apos;s a reason you do what you do. It&apos;s the late nights, the wild ideas, the belief that this thing you&apos;re building actually matters. That&apos;s the story people will connect with. That&apos;s the story worth telling. It&apos;s the story we can craft for you.
            </div>
            <div className="flex-1 text-lg md:text-xl text-black font-normal leading-relaxed">
              A great story deserves more than a place to live. A story needs a way to move. We design brands, craft interfaces, and build digital experiences that don&apos;t just inform but pull people in. Every detail, every interaction, every pixel works to make your story impossible to ignore.
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full bg-[#F6F6ED] py-24 flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-serif text-black font-light mb-12">Our Team</h2>
          <div className="w-full flex justify-center">
            <Image src="/teams.png" alt="Our Team" width={1200} height={400} className="w-full max-w-4xl rounded-3xl shadow-xl object-cover" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#F6F6ED] pt-24 pb-8 flex flex-col items-center justify-center border-t border-black/10">
        {/* Bottom: Huge Company Name */}
        <div className="w-full text-center">
          <span className="text-[10vw] md:text-[7vw] font-black uppercase text-black leading-none tracking-tight block">TENADAM<span className="align-super text-3xl md:text-5xl">©</span></span>
        </div>
      </footer>
    </main>
  );
}
