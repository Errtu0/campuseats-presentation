import React from 'react';

export default function Slide6_Conclusion() {
  return (
    // 🚀 h-[620px] projektör perdesine tam sabitleme, dikey taşma riski sıfır!
    <div className="w-full h-[620px] bg-white border-[6px] border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] bg-grid-pattern bg-[size:30px_30px] flex flex-col justify-between select-none overflow-hidden">
      
      {/* 🔝 ÜST BAŞLIK ALANI (Fontlar devleştirildi ve Syne Fontu kilitlendi) */}
      <div className="flex flex-row items-end justify-between border-b-[6px] border-black pb-3 mb-4 gap-4">
        <div>
          <span className="bg-black text-white border-4 border-black text-sm font-black px-4 py-0.5 uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(255,107,107,1)] inline-block font-syne">
          06 // MISSION ACCOMPLISHED
          </span>
          <h2 className="mt-1 text-5xl font-black leading-none tracking-tighter text-black uppercase lg:text-6xl font-syne">
            CONCLUSION
          </h2>
        </div>
        
      </div>

      {/* 📊 ORTA ALAN: SOL SADE METİN & SAĞ PENGUEN GÖRSELİ */}
      <div className="grid items-stretch flex-1 min-h-0 grid-cols-1 gap-8 lg:grid-cols-2">
        
        {/* SOL KOLON: DEVASA VE SADE CONCLUSION METNİ (Kullanıcı ve Jüri Odaklı) */}
        <div className="flex flex-col justify-center h-full gap-4 p-2">
          <h3 className="pl-4 text-3xl font-black tracking-widest text-black uppercase border-l-8 border-black font-syne">
            Final Wrap-Up:
          </h3>
          <p className="font-sans text-xl font-bold leading-relaxed tracking-wide text-gray-800 uppercase">
            CampusEats successfully transforms the traditional, fragmented campus dining experience into a fast, transparent, and completely automated real-time ecosystem. By solving the core problems of peak-hour lines and bill splitting, we have delivered a high-quality production build that sets a brand new standard for digital campus life at Eastern Mediterranean University.
          </p>
        </div>

        {/* SAĞ KOLON: KUSURSUZ PENGUEN GÖRSELİ KASASI */}
        <div className=" border-[6px] border-black p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-full relative overflow-hidden group flex items-center justify-center bg-gray-50">
          <div className="absolute inset-0 bg-grid-pattern bg-[size:24px_24px] opacity-10 pointer-events-none" />
          
          {/* 🐧 Penguen İllüstrasyonu Buraya Enjekte Edildi */}
          <img 
            src="/penguen.png" 
            alt="EMU IT Capstone Project Penguins Finish Line" 
            className="relative z-10 object-contain w-full h-full"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = `
                <div class="w-full h-full border-4 border-dashed border-black flex flex-col items-center justify-center p-6 text-center bg-[#FDFBEB]/60 relative z-10">
                  <div class="text-7xl mb-2">🐧🏁</div>
                  <h4 class="text-2xl font-black tracking-tighter text-black uppercase font-syne">[ PENGUEN.PNG IMAGE HERE ]</h4>
                  <p class="max-w-xs mt-2 text-xs font-bold text-gray-500 uppercase">5 Penguins graduation finish line scene simulation</p>
                </div>
              `;
            }}
          />
        </div>

      </div>

      {/* 📋 ALT GÖSTERGE SATIRI */}
      <div className="bg-black text-white text-xs font-mono font-black px-4 py-2 mt-4 border-2 border-black tracking-widest uppercase flex items-center justify-between shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
        <span>[ EASTERN MEDITERRANEAN UNIVERSITY // IT CAPSTONE PROJECT 2026 ]</span>
        <span className="text-red-500 animate-pulse">● END OF TRANSMISSION</span>
      </div>

    </div>
  );
}