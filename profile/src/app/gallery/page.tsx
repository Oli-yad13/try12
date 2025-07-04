'use client';
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Lanchi",
    subtitle: "Empowering Ethiopia's Digital Future",
    image: "/lanchi.png",
    tags: ["Digital Platform", "Innovation", "Technology", "Ethiopia"],
    url: "https://lanchi.et/"
  },
  {
    title: "Keteme",
    subtitle: "Ethiopia's First Rent-to-Own Furniture Platform",
    image: "/keteme.png",
    tags: ["Furniture", "Rent-to-Own", "App", "Ethiopia"],
    url: "https://www.keteme.app/"
  },
  {
    title: "IDNET",
    subtitle: "Digital Identity Solutions for Ethiopia",
    image: "/idnet.png",
    tags: ["Digital Identity", "Technology", "Security", "Ethiopia"],
    url: "https://idnet.et/"
  },
  {
    title: "Advanced Attorneys & Legal Consultants",
    subtitle: "Delivering Excellence in Legal Services",
    image: "/Advanced Attorneys & Legal Consultants.png",
    tags: ["Legal", "Consulting", "South Sudan", "Law Firm"],
    url: "https://advancedattorneysandlcss.com/"
  },
  {
    title: "Tenadam Training, Consultancy and Research PLC",
    subtitle: "Transforming Potential into Performance",
    image: "https://dummyimage.com/800x400/ccc/232323&text=Tenadam",
    tags: ["Consulting", "Training", "Research", "Ethiopia"],
    url: "https://tenadamconsulting.com"
  },
  {
    title: "ET Star IT Solutions",
    subtitle: "Business Solutions, Creatively Done.",
    image: "/etstar.png",
    tags: ["IT", "Web Development", "Branding", "Consultancy"],
    url: "https://etstarit.com"
  },
  {
    title: "Growup",
    subtitle: "Helping Ethiopian Startups to Grow",
    image: "/grow.png",
    tags: ["Startup", "Support", "Ethiopia", "Funding"],
    url: "https://growup.et"
  },
  {
    title: "CSO.et",
    subtitle: "The #1 source of Funding Opportunities for CSOs in Ethiopia.",
    image: "/cso.png",
    tags: ["Funding", "CSO", "Ethiopia", "Opportunities"],
    url: "https://cso.et"
  },
  {
    title: "CBGA Ethiopia",
    subtitle: "Advocating for Participation and Human Rights Consciousness in Budgeting",
    image: "/cbga.png",
    tags: ["Advocacy", "Budgeting", "Governance", "Ethiopia"],
    url: "https://www.cbgaethiopia.org/"
  },
  {
    title: "Youth for Human Rights Ethiopia (YHRE)",
    subtitle: "Youth-Led and Youth-Focused Initiative for Human Rights Advocacy",
    image: "/yhret.png",
    tags: ["Human Rights", "Youth", "Ethiopia", "Advocacy"],
    url: "https://yhreth.org"
  },
  {
    title: "HuluCares",
    subtitle: "Revolutionizing Healthcare in Ethiopia",
    image: "/hulucares.png",
    tags: ["Healthcare", "Blockchain", "Insurance", "Ethiopia"],
    url: "https://www.hulucares.com/"
  },
  {
    title: "The Birrama Vision",
    subtitle: "",
    image: "/birrama.png",
    tags: ["Vision", "Ethiopia"],
    url: "https://www.thebirramavision.com/"
  },
  {
    title: "IRIF (እርፍ)",
    subtitle: "Experience the IRIF intelligent farming solution",
    image: "/irif.png",
    tags: ["Smart Farming", "IoT", "AI", "Ethiopia"],
    url: "https://www.irif.et/"
  },
  
];

function NavBar() {
  const [flip, setFlip] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setFlip(f => !f), 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* Top NavBar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#232323] text-white flex items-center justify-between px-6 py-4 border-b-2 border-black">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="relative w-32 h-20 flex items-center" style={{ overflow: 'visible' }}>
            <Image
              src="/tenadam-logo-small-Aq26gNbBBbuwxDq1.svg"
              alt="Tenadam Logo"
              width={180}
              height={80}
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
        {/* Tagline */}
        <div className="text-lg md:text-2xl font-serif font-bold tracking-tight text-center flex-1">
          <span className="italic transition-all duration-500" style={{ display: 'inline-block', minWidth: 110 }}>
            &#123;{flip ? 'creative' : 'development'}&#125;
          </span> agency
        </div>
      </nav>
    </>
  );
}

export default function GalleryPage() {
  return (
    <main className="bg-[#F6F6ED] min-h-screen w-full">
      <NavBar />
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 flex flex-col md:flex-row items-start md:items-end justify-between">
        <div className="w-full flex justify-between items-center px-12 pt-8 pb-4 text-xs font-mono text-black/80 tracking-widest">
          <span>EST. 2023</span>
          <span>( SCROLL DOWN )</span>
          <span>WE LIVE IN THE DETAILS ( C )</span>
        </div>
        <div>
          <h1 className="text-6xl md:text-8xl font-serif font-light text-black leading-none mb-2">Our Work</h1>
          <div className="h-0.5 w-full bg-black/60 mb-2" />
        </div>
        <div className="flex flex-col items-end gap-4 mt-8 md:mt-0">
          <div className="flex gap-4 text-2xl">
            <span className="inline-block w-8 h-8 bg-black rounded-sm" title="List view"></span>
            <span className="inline-block w-8 h-8 bg-black/80 rounded-sm" title="Grid view"></span>
            <span className="inline-block w-8 h-8 border-2 border-black rounded-sm" title="Fullscreen"></span>
          </div>
          <div className="text-right text-xs md:text-sm font-mono text-black/80 max-w-xs">
            IT DOESN&apos;T MATTER WHETHER YOU&apos;RE REVOLUTIONIZING EVS, BUILDING AN AI EMPIRE, DISRUPTING INSURTECH, OR SIMPLY THE SOLID DENTIST DOWN THE STREET. WE APPROACH EVERY PROJECT WITH A MISSION TO TELL A COMPELLING STORY THAT STANDS OUT FROM THE REST.
          </div>
        </div>
      </div>
      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
      Root Directory
The directory within your project, where your code is located. Leave this field empty if your code is not located in a subdirectory.

    {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl border-8 border-[#171717] bg-white overflow-hidden shadow-xl flex flex-col mb-4"
            style={{ minHeight: 400 }}
          >
            <div className="w-full h-72 md:h-96 bg-gray-200 flex items-center justify-center overflow-hidden">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-full h-full block">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                />
              </a>
            </div>
            <div className="p-6 flex flex-col gap-2 bg-white">
              <div className="flex items-center gap-2">
                <span className="text-xl font-black uppercase text-black">{project.title}</span>
                <span className="text-black/80 text-base ml-4 font-sans font-light">{project.subtitle.replace(/'/g, "&apos;")}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-black text-black px-4 py-1 rounded-full text-xs font-bold bg-white"
                  >
                    {tag.replace(/'/g, "&apos;")}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 