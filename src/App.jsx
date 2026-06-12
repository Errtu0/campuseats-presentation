import React, { useState, useEffect } from 'react';

import Slide1_Problem from './components/slides/Slide1_Problem';
import Slide2_Features from './components/slides/Slide2_Features';
import Slide3_Showcase from './components/slides/Slide3_Showcase';
import Slide4_Architecture from './components/slides/Slide4_Architecture';
import Slide5_LiveTesting from './components/slides/Slide5_LiveTesting';
import Slide6_Conclusion from './components/slides/Slide6_Conclusion';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 🌐 NAVBAR DURUM VE SCROLL TAKİP STATELERİ
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 👥 Takım Bilgileri - İsteğin doğrultusunda 2 Kadın, 3 Erkek avatar dengesi kilitlendi!
  const teamMembers = [
    {
      name: "Çisel",
      role: "FRONTEND LEAD & PROJECT MANAGER",
      avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Jack" // Erkek
    },
    {
      name: "Şems",
      role: "CYBERSECURITY LEAD",
      avatar: "https://api.dicebear.com/10.x/pixel-art/svg?seed=haasc3ll" // Kadın
    },
    {
      name: "Rustam",
      role: "MOBILE DEVELOPER",
      avatar: "https://api.dicebear.com/10.x/pixel-art/svg?seed=0n8i8mwe" // Erkek
    },
    {
      name: "Oghonazar",
      role: "DATABASE ADMIN",
      avatar: "https://api.dicebear.com/10.x/pixel-art/svg?seed=ae89iiwc" // Erkek
    },
    {
      name: "Furkan",
      role: "BACKEND & DEVOPS LEAD",
      avatar: "https://api.dicebear.com/10.x/pixel-art/svg?seed=r47y7w3a" // Kadın
    }
  ];

  // 🗼 TOWER DEFENSE DURAKLARI
  const mapNodes = [
    { id: "01", title: "THE PROBLEM & SOLUTION", sub: "Project Aim, Scope & Problem Statement", color: "bg-[#FF6B6B]", pos: "top-10 left-12" },
    { id: "02", title: "OUR ADDITIONAL FEATURES", sub: "Advanced Feature Ecosystem Breakdown", color: "bg-[#4D96FF]", pos: "top-10 right-4" },
    { id: "03", title: "USER INTERFACES & MOBILE FLOW", sub: "Customer & Staff & Admin Portal UX/UI Showcase", color: "bg-[#FFD166]", pos: "bottom-50 right-4" },
    { id: "04", title: "DEVELOPER BASEMENT & ARCHITECTURE", sub: "File Structure, Middleware & Security Graphs", color: "bg-[#00F5D4]", pos: "bottom-31 left-12" },
    { id: "05", title: "LIVE TESTING & CONCLUSION", sub: "Emulator Core Simulation & Conclusion Summary", color: "bg-black text-white", pos: "bottom-13 right-25" }
  ];

  // 🔄 SCROLL DETEKTÖRÜ: Navbar Gizleme/Gösterme Mantığı
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        if (currentScrollY < 10) {
          setShowNavbar(true);
        } else if (currentScrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToPresentation = () => {
    const nextSection = document.getElementById('presentation-start');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBEB] bg-grid-pattern bg-[size:24px_24px] text-black font-sans antialiased pb-12 selection:bg-[#FF6B6B] selection:text-white relative overflow-x-hidden">
      
      {/* 🌐 NEOBRUTALIST NAVBAR (Dinamik Gizleme Sınıfları Aktif) */}
      <nav className={`fixed top-0 left-0 w-full z-40 bg-[#FDFBEB] border-b-4 border-black h-20 flex items-center justify-between px-6 md:px-12 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex items-center gap-8">
          {/* EMU STORE LOGO */}
          <div className="flex items-center gap-4 bg-white border-4 border-black px-5 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer select-none">
            <img 
              src="/emustore-logo.png" 
              alt="EMU Store" 
              className="object-contain w-9 h-9"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '<span class="font-syne font-black text-2xl tracking-wider text-[#4D96FF]">E</span>';
              }}
            />
            <span className="hidden pl-3 text-2xl font-black tracking-tighter text-black uppercase border-l-4 border-black sm:inline-block font-syne">
              EMU STORE
            </span>
          </div>
          
          <div className="items-center hidden gap-6 text-xs font-black tracking-widest uppercase md:flex font-syne">
            <span className="bg-[#FF6B6B] text-white border-2 border-black px-3 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer">SLIDES</span>
            <span className="cursor-pointer hover:underline">ARCHITECTURE</span>
            <span className="cursor-pointer hover:underline">DATABASE</span>
          </div>
        </div>

        <div className="flex-1 max-w-lg mx-8 hidden sm:flex items-center bg-white border-4 border-black px-4 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <svg className="w-5 h-5 mr-3 stroke-black stroke-[3]" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <input type="text" placeholder="SEARCH CAMPUS DATA CODES..." className="w-full text-xs font-bold tracking-wider text-black placeholder-gray-500 bg-transparent outline-none" disabled />
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#FF6B6B] border-3 border-black flex items-center justify-center font-black text-sm text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-syne">
            IT
          </div>
        </div>
      </nav>

      {/* 📱 CORE VIEWPORT OVERRIDE */}
      <main className="px-6 mx-auto mt-24 max-w-[1240px]">
        
        {/* ÜST PANEL: İkili Bölüm */}
        <div className="flex flex-col items-stretch gap-6 pb-4 border-b-4 border-black lg:flex-row">
          
          {/* SOL KOLON: Mağaza Kartı */}
          <div className="w-full lg:w-[42%] bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-row lg:flex-col items-center text-left lg:text-center gap-4 justify-center">
            <div className="w-28 h-28 bg-white border-4 border-black p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center shrink-0">
              <img 
                src="/logo.png" 
                alt="CampusEats Logo" 
                className="object-contain w-full h-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<div class="text-3xl font-black text-[#FF6B6B]">CE ☕</div>';
                }}
              />
            </div>

            <div className="flex-1 w-full">
              <h1 className="text-4xl font-black leading-none tracking-tighter text-black uppercase font-syne">
                CampusEats
              </h1>
              <p className="text-[#FF6B6B] font-black text-xs mt-1 tracking-wider uppercase">
                EASTERN MEDITERRANEAN UNIVERSITY
              </p>
              
              <div className="flex flex-row items-center justify-center w-full gap-3 mt-4 lg:justify-center font-syne">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#FF6B6B] text-white font-black text-[11px] tracking-wider uppercase px-4 py-2.5 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer"
                >
                  TABLE OF CONTENTS
                </button>

                <button 
                  onClick={scrollToPresentation}
                  className="bg-white text-black font-black text-[11px] tracking-wider uppercase px-4 py-2.5 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer"
                >
                  SHOW DETAILS ↓
                </button>
              </div>
            </div>
          </div>

          {/* SAĞ KOLON: Microsoft Store Açıklama Paneli */}
          <div className="w-full lg:w-[58%] bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div>
              <span className="bg-[#4D96FF] text-white border-2 border-black text-[9px] font-black px-2 py-0.5 uppercase tracking-wider inline-block font-syne">
                System Overview
              </span>
              <h2 className="pb-0.5 mt-1.5 mb-1.5 text-lg font-black tracking-tight text-black uppercase border-b-2 border-black border-dashed font-syne">
                Product Description & Systemic Scope
              </h2>
              <p className="text-xs font-bold leading-normal tracking-wide text-gray-700 uppercase">
                CampusEats is the ultimate smart dining companion for EMU! Designed to eliminate long restaurant queues and overcrowding, the platform seamlessly connects students, kitchen staff, and campus restaurants in real-time. Scan your table QR, order with friends, split the bill instantly, and track your meal from the kitchen to your table—all without waiting in line.
              </p>
            </div>
            
            {/* Sistem İndikatörleri */}
            <div className="grid grid-cols-3 gap-3 pt-3 mt-3 border-t-2 border-black border-dashed font-syne">
              <div className="bg-[#FDFBEB] border-2 border-black p-1.5 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-[8px] font-black text-gray-500">FRONTEND</p>
                <p className="text-xs font-black text-[#4D96FF]">REACT NATIVE</p>
              </div>
              <div className="bg-[#FDFBEB] border-2 border-black p-1.5 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-[8px] font-black text-gray-500">BACKEND</div>
                <div className="text-xs font-black text-[#02ad96]">NODE.JS</div>
              </div>
              <div className="bg-[#FDFBEB] border-2 border-black p-1.5 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-[8px] font-black text-gray-500">DATABASE</p>
                <p className="text-xs font-black text-[#FF6B6B]">POSTGRESQL</p>
              </div>
            </div>
          </div>

        </div>

        {/* 👥 TEAM DEVELOPERS SECTION */}
        <section className="mt-12 mb-4">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-xl font-black tracking-tight uppercase bg-[#4D96FF] text-white px-4 py-1 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-syne">
              DEVELOPED BY
            </h2>
            <div className="flex-1 h-1 bg-black rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="border-4 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-row lg:flex-col items-center text-left lg:text-center transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white gap-3"
              >
                <div className="w-14 h-14 bg-[#FDFBEB] border-3 border-black p-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] overflow-hidden shrink-0">
                  <img src={member.avatar} alt={member.name} className="object-contain w-full h-full" />
                </div>
                <div>
                  <h3 className="text-base font-black leading-none tracking-tight text-black uppercase font-syne">{member.name}</h3>
                  <div className="bg-[#4D96FF] text-white border border-black text-[8px] font-black px-1.5 py-0.5 mt-1.5 inline-block uppercase tracking-wider font-syne">
                    {member.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 📑 DYNAMIC TARGET AREA: SLIDES LIVE HERE */}
      <div id="presentation-start" className="w-full pt-15 mt-2 max-w-[1240px] mx-auto px-6 flex flex-col gap-32">
        <Slide1_Problem />
        <Slide2_Features />
        <Slide3_Showcase />
        <Slide4_Architecture />
        <Slide5_LiveTesting />
        <Slide6_Conclusion />
      </div>

      {/* 📦 TOWER DEFENSE MAP MODAL WINDOW */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-[#FDFBEB] w-full max-w-6xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden animate-in fade-in duration-200">
            <div className="flex items-center justify-between px-6 py-5 bg-black border-b-4 border-black font-syne">
              <h3 className="text-2xl font-black tracking-wider text-white uppercase">MISSION MAP / TABLE OF CONTENTS</h3>
              <button onClick={() => setIsModalOpen(false)} className="bg-white p-2 border-2 border-black font-black text-sm shadow-[2px_2px_0px_0px_rgba(255,107,107,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"><XButtonIcon /></button>
            </div>
            <div className="p-8 bg-[#FDFBEB] flex flex-col items-center">
              <div className="relative w-full h-[500px] bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern bg-[size:20px_20px] opacity-40 pointer-events-none" />
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1100 500" preserveAspectRatio="none">
                  <path d="M 140 90 L 960 90 L 960 250 L 140 250 L 140 410 L 960 410" fill="none" stroke="black" strokeWidth="56" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 140 90 L 960 90 L 960 250 L 140 250 L 140 410 L 960 410" fill="none" stroke="#FDFBEB" strokeWidth="5" strokeDasharray="14,16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {mapNodes.map((node, idx) => (
                  <div key={idx} className={`absolute ${node.pos} z-10 w-64 bg-white border-3 border-black p-3.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group`}>
                    <div className="flex flex-col gap-1.5"><div className="flex items-start gap-3"><div className={`${node.color} text-black text-sm font-mono font-black w-7 h-7 border-2 border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]`}>{node.id}</div><div className="flex-1"><h4 className="text-xs font-black tracking-tight text-black group-hover:text-[#FF6B6B] transition-colors uppercase leading-tight font-syne">{node.title}</h4><p className="text-[10px] font-bold text-gray-500 uppercase tracking-tight leading-tight mt-1">{node.sub}</p></div></div></div>
                  </div>
                ))}
                <span className="absolute text-xs font-mono font-black px-3 py-1 bg-[#4D96FF] text-white border-2 border-black top-3 left-36 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">START</span>
                <span className="absolute text-xs font-mono font-black px-3 py-1 bg-[#FF6B6B] text-white border-2 border-black bottom-19 right-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">FINISH</span>
              </div>
            </div>
            <div className="flex items-center justify-between px-8 py-5 bg-white border-t-4 border-black font-syne">
              <button onClick={() => setIsModalOpen(false)} className="ml-auto bg-[#4D96FF] text-white font-black text-xs tracking-widest uppercase px-8 py-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer dynamic-btn">START SIMULATION DEPLOYMENT ➔</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

function XButtonIcon() {
  return (
    <svg className="w-5 h-5 stroke-black stroke-[3.5]" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );
}