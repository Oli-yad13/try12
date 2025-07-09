'use client';
import { useEffect } from "react";
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
      {/* Personal Logo/Name */}
      <div className="flex items-center gap-2">
        <Link href="/" className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'serif', letterSpacing: '-0.03em' }}>
          Oliyad Bekele
        </Link>
      </div>
    </nav>
  );
}

// Replace MarqueeText with a simple hero headline
function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[40vh] flex flex-col items-center justify-center bg-[#FCF7F8] pt-24">
      <h1 className="text-4xl md:text-6xl font-black text-[#232323] text-center mb-4">Hi, I&apos;m Oliyad Bekele</h1>
      <h2 className="text-xl md:text-2xl font-light text-[#A31621] text-center max-w-2xl mx-auto mb-6">A software developer who builds ideas into working systems.<br />Scroll down to explore my personal projects — each one tells part of my story.</h2>
    </section>
  );
}

// Section Narration Components
function Section({ id, title, children }: { id: string, title: string, children: React.ReactNode }) {
  return (
    <section id={id} className="w-full py-24 flex flex-col items-center justify-center bg-[#F6F6ED] border-b border-black/10">
      <div className="max-w-4xl w-full px-4 md:px-0 mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-serif text-black font-bold mb-8 text-center">{title}</h2>
        <div className="text-lg md:text-xl text-black/80 text-center">{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-[#FCF7F8] min-h-screen">
      <NavBar />
      <HeroSection />
      {/* Section Narration */}
      <Section id="journey" title="Entrepreneurial Journey">
        My journey as a developer began with curiosity and a drive to solve real-world problems. From my first lines of code to launching impactful projects, each step has been about learning, experimenting, and building solutions that matter.
      </Section>
      <Section id="solution" title="Solution">
        I focus on creating practical, tech-enabled solutions for challenges in my community. Whether it’s improving access to information or streamlining processes, my work is about making a tangible difference through software.
      </Section>
      <Section id="prototype" title="Prototype">
        Prototyping is at the heart of my process. I rapidly turn ideas into working demos, test them in real-world scenarios, and iterate based on feedback. This approach helps me learn fast and deliver value quickly.
      </Section>
      <Section id="reflection" title="Reflection">
        Every project is a lesson. I reflect on what worked, what didn’t, and how I can improve. This mindset keeps me growing as a developer and ensures that each new project is better than the last.
      </Section>
      <Section id="conclusion" title="Conclusion">
        My portfolio is a snapshot of my journey so far. I’m excited to keep learning, building, and contributing to meaningful projects. Thank you for visiting!
      </Section>
      {/* Projects Section Intro and Gallery Link */}
      <section className="w-full min-h-screen bg-[#F6F6ED] flex flex-col pt-24" id="projects">
        <div className="w-full flex flex-col items-center px-4 md:px-8 mb-8">
          <p className="text-lg md:text-xl text-black/80 text-center max-w-3xl mb-6">
            Here are some of the projects I’ve built.<br />They reflect what I’ve learned, the problems I care about, and how I grow as a developer.<br />Take a look — they’re more than just code.
          </p>
          <Link href="/gallery" className="bg-black text-white text-lg font-bold rounded-full px-8 py-4 shadow-lg hover:bg-[#232323] transition-all duration-200 border-4 border-black">
            View Full Gallery ↗
          </Link>
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
      {/* About Me Section */}
      <section className="w-full bg-[#F6F6ED] py-32 flex flex-col items-center justify-center" id="about">
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row items-center justify-center mb-12">
            <h2 className="text-4xl md:text-6xl font-serif text-black text-center md:text-left font-light">
              About Me
            </h2>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-12 mb-12">
            <div className="flex-1 text-lg md:text-xl text-black font-normal leading-relaxed">
              I&apos;m a self-taught software developer from Addis Ababa, Ethiopia.<br />
              I build tools and systems that solve real-world problems — from healthcare misinformation to smart property management.<br /><br />
              My journey started with curiosity, grew through experimentation, and continues with every new line of code I write.<br /><br />
              I’ve worked with frameworks like Flask, Django, and Firebase. I enjoy turning abstract ideas into useful, working software.<br /><br />
              I believe in learning by doing — and everything you see on this site is a reflection of that.
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="w-full bg-[#F6F6ED] pt-24 pb-8 flex flex-col items-center justify-center border-t border-black/10">
        <div className="w-full text-center">
          <span className="text-2xl md:text-3xl font-black uppercase text-black leading-none tracking-tight block">© Oliyad Bekele {new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  );
}
