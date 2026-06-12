import React, { useState } from 'react';

export default function Slide4_Architecture() {
  const [activeSection, setActiveSection] = useState('tech'); // tech, structure, security

  return (
    // 🚀 h-[620px] projektör perdesine tam sabitleme, dikey taşma riski sıfır!
    <div className="w-full h-[620px] bg-white border-[6px] border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] bg-grid-pattern bg-[size:30px_30px] flex flex-col justify-between select-none overflow-hidden">
      
      {/* 🔝 ÜST BAŞLIK ALANI (Fontlar devleştirildi ve Syne Fontu kilitlendi) */}
      <div className="flex flex-row items-end justify-between border-b-[6px] border-black pb-3 mb-4 gap-4">
        <div>
          <span className="bg-[#6C5CE7] text-white border-4 border-black text-sm font-black px-4 py-0.5 uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] inline-block font-syne">
            04 // ENGINEERING BASEMENT
          </span>
          <h2 className="mt-1 text-4xl font-black leading-none tracking-tighter text-black uppercase lg:text-5xl font-syne">
            SYSTEM ARCHITECTURE
          </h2>
        </div>
        
      </div>

      {/* 📊 ANA MÜHENDİSLİK PANELİ */}
      <div className="flex items-stretch flex-1 min-h-0 gap-6">
        
        {/* 🛠️ SOL NAVİGASYON (Mühendislik Tabları - Okunaklılık için büyütüldü) */}
        <div className="flex flex-col justify-center gap-3 pr-2 border-r-4 border-black w-60 shrink-0">
          
          <button 
            onClick={() => setActiveSection('tech')}
            className={`border-4 border-black p-3.5 text-xs font-black uppercase text-left transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-syne
            ${activeSection === 'tech' ? 'bg-[#FFD166] translate-x-[2px] translate-y-[2px] shadow-none' : 'bg-white hover:bg-gray-50'}`}
          >
            Core Tech & Deps
          </button>
          <button 
            onClick={() => setActiveSection('structure')}
            className={`border-4 border-black p-3.5 text-xs font-black uppercase text-left transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-syne
            ${activeSection === 'structure' ? 'bg-[#00F5D4] translate-x-[2px] translate-y-[2px] shadow-none' : 'bg-white hover:bg-gray-50'}`}
          >
             Detailed Structure
          </button>
          <button 
            onClick={() => setActiveSection('security')}
            className={`border-4 border-black p-3.5 text-xs font-black uppercase text-left transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-syne
            ${activeSection === 'security' ? 'bg-[#6C5CE7] text-white translate-x-[2px] translate-y-[2px] shadow-none' : 'bg-white hover:bg-gray-50'}`}
          >
             Security & Guards
          </button>
        </div>

        {/* 🎨 ANA İÇERİK GÖRSELLEŞTİRME ALANI */}
        <div className="flex-1 bg-[#FDFBEB]/40 border-4 border-black relative overflow-hidden p-4 flex items-center justify-center min-w-0">
          
          {/* A. CORE TECH STACK & VURUCU INDIRGELI DEPENDENCIES */}
          {activeSection === 'tech' && (
            <div className="grid w-full grid-cols-2 gap-4 duration-200 animate-in fade-in zoom-in-95">
              <TechBox label="MOBILE FRONTEND" tech="React Native" deps="React Navigation, Axios, Expo QR" color="bg-[#4D96FF]" />
              <TechBox label="REST API BACKEND" tech="Node.js (Express)" deps="Bcrypt, JsonWebToken, Socket.io" color="bg-[#02ad96]" />
              <TechBox label="ORCHESTRATION" tech="Prisma ORM" deps="Prisma Client, Automated Migrations" color="bg-[#FF6B6B]" />
              <TechBox label="PERSISTENCE DATA" tech="PostgreSQL Database" deps="Connection Pooling, Transaction Isolation" color="bg-[#FFD166]" />
            </div>
          )}

          {/* B. DETAILED BLUEPRINT FILE STRUCTURE */}
          {activeSection === 'structure' && (
            <div className="flex flex-col w-full gap-3 font-mono text-xs text-black duration-200 animate-in slide-in-from-bottom-4">
              <div className="bg-black text-[#00F5D4] p-2 border-2 border-black font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                ROOT: CAMPUS-EATS-WORKSPACE /
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {/* 1. Mobile App Map */}
                <div className="bg-white border-3 border-black p-2.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-[#00F5D4] px-1.5 py-0.5 text-[10px] font-black border border-black inline-block mb-1">/MOBILE-CLIENT</div>
                  <ul className="space-y-0.5 text-[11px] font-bold text-gray-700 uppercase">
                    <li>├── /src/screens/</li>
                    <li>├── /src/src/Config.js</li>
                    <li>├── /src/components/</li>
                    <li>└── /src/assets/images</li>
                  </ul>
                </div>

                {/* 2. Backend Server Map */}
                <div className="bg-white border-3 border-black p-2.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-[#FFD166] px-1.5 py-0.5 text-[10px] font-black border border-black inline-block mb-1">/BACKEND-API</div>
                  <ul className="space-y-0.5 text-[11px] font-bold text-gray-700 uppercase">
                    <li>├── /controllers</li>
                    <li>├── /middlewares/auth</li>
                    <li>├── /routes/admin.js</li>
                    <li>└── /index.js</li>
                  </ul>
                </div>

                {/* 3. Prisma Schema Map */}
                <div className="bg-white border-3 border-black p-2.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-[#FF6B6B] text-white px-1.5 py-0.5 text-[10px] font-black border border-black inline-block mb-1">/DATABASE-LAYER</div>
                  <ul className="space-y-0.5 text-[11px] font-bold text-gray-700 uppercase">
                    <li>├── /prisma/schema.prisma</li>
                    <li>├── /prisma/migrations</li>
                    <li>├── └── seed_production.sql</li>
                    <li>└── PostgreSQL Engine</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* C. SECURITY ENGINE & ROUTE FLOW PIPELINE */}
          {activeSection === 'security' && (
            <div className="flex flex-col w-full gap-4 duration-200 animate-in slide-in-from-right-4">
              
              {/* API Route Gateway Visualizer */}
              <div className="bg-white border-4 border-black p-3.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="pb-1 mb-2 text-xs font-black tracking-widest text-gray-500 uppercase border-b-2 border-black border-dashed font-syne">
                 LIVE API SECURITY GATEWAY PIPELINE
                </h4>
                
                <div className="flex items-center justify-between text-[10px] font-black uppercase text-center gap-1">
                  <div className="p-2 leading-tight bg-gray-100 border-2 border-black rounded shrink-0">INCOMING<br/>REQUEST</div>
                  <div className="text-sm font-black text-black">→</div>
                  
                  <div className="flex-1 bg-[#6C5CE7] text-white border-2 border-black p-2 rounded leading-tight">JWT GUARD<br/><span className="text-[8px] opacity-80">Verify Secret</span></div>
                  <div className="text-sm font-black text-black">→</div>
                  
                  <div className="flex-1 bg-[#FFD166] border-2 border-black p-2 rounded leading-tight">ROLE CHECK<br/><span className="text-[8px] text-red-600">isAdmin / isStaff</span></div>
                  <div className="text-sm font-black text-black">→</div>
                  
                  <div className="bg-[#00F5D4] border-2 border-black p-2 rounded shrink-0 leading-tight">PROTECTED<br/>CONTROLLER</div>
                </div>
              </div>

              {/* Data Protection Engine Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border-3 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3">
                  <span className="text-3xl">🔑</span>
                  <div>
                    <h5 className="text-xs font-black uppercase font-syne text-[#6C5CE7]">BCRYPT & JWT ENGINE</h5>
                    <p className="text-[10px] font-bold text-gray-600 uppercase mt-0.5 leading-tight">
                      Passwords securely hashed using a work factor of 12. Auth nodes sign secure tokens for customer identification guards.
                    </p>
                  </div>
                </div>

                <div className="bg-white border-3 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3">
                  <span className="text-3xl">📱</span>
                  <div>
                    <h5 className="text-xs font-black text-red-500 uppercase font-syne">TWILIO 2FA VERIFICATION</h5>
                    <p className="text-[10px] font-bold text-gray-600 uppercase mt-0.5 leading-tight">
                      Staff and administrators are forced through a 2FA loop, requiring a real-time generated 6-digit OTP passcode.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Arka Plan Büyük Filigran Yazısı */}
          <div className="absolute top-2 right-4 text-[32px] font-black text-black/5 pointer-events-none uppercase font-syne">
             {activeSection} ENGINE
          </div>
        </div>

      </div>

      {/* 📋 ALT TEKNİK STATÜ ÇUBUĞU */}
      <div className="mt-4 border-4 border-black p-2 font-mono font-black text-xs uppercase flex justify-between items-center bg-[#6C5CE7] text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
        <span>GATEWAY: PRODUCTION_BASEMENT // LOG_INTEGRITY: COMPLIANT</span>
        <span className="flex items-center gap-2">
          <span className="animate-pulse">●</span> SSL/TLS AES-256 LAYER ACTIVE
        </span>
      </div>
    </div>
  );
}

// Yardımcı TechBox Bileşeni (Okunaklılık için fontlar ve boşluklar devleştirildi)
function TechBox({ label, tech, deps, color }) {
  return (
    <div className="bg-white border-4 border-black p-3.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between border-b border-black border-dashed pb-1 mb-1.5">
          <span className="text-[10px] font-black text-gray-500 font-mono tracking-tight">{label}</span>
          <span className={`w-2.5 h-2.5 rounded-full ${color} border border-black`}></span>
        </div>
        <h4 className="mb-1 text-base font-black leading-none text-black uppercase font-syne">{tech}</h4>
      </div>
      <div className="mt-2 pt-1.5 border-t border-black border-dotted">
        <span className="text-[9px] font-mono font-black text-gray-400 block uppercase tracking-tighter">Core Dependencies:</span>
        <p className="text-[10px] font-bold text-gray-700 uppercase tracking-tight leading-tight mt-0.5">{deps}</p>
      </div>
    </div>
  );
}