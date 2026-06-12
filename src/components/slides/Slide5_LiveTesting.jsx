import React from 'react';
import { getAssetPath } from '../../utils';

export default function Slide5_LiveTesting() {
  return (
    // 🚀 h-[620px] projektör perdesine tam sabitleme, dikey taşma riski sıfır!
    <div className="w-full h-[620px] bg-white border-[6px] border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] bg-grid-pattern bg-[size:30px_30px] flex flex-col justify-between select-none overflow-hidden">
      
      {/* 🔝 ÜST BAŞLIK ALANI */}
      <div className="flex flex-row items-end justify-between border-b-[6px] border-black pb-3 mb-4 gap-4">
        <div>
          <span className="bg-[#00F5D4] text-black border-4 border-black text-sm font-black px-4 py-0.5 uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] inline-block font-syne">
            05 // SYSTEM RUNTIME DEMONSTRATION
          </span>
          <h2 className="mt-1 text-4xl font-black leading-none tracking-tighter text-black uppercase lg:text-5xl font-syne">
            ADMIN WORKFLOW VIDEO
          </h2>
        </div>
        
      </div>

      {/* 📊 ORTA ALAN: BİLGİ KARTLARI VE KUSURSUZ iPHONE KASASI */}
      <div className="grid items-stretch flex-1 min-h-0 grid-cols-1 gap-6 lg:grid-cols-2">
        
        {/* SOL KOLON: YÖNETİCİ AKIŞ DETAYLARI */}
        <div className="flex flex-col justify-center h-full gap-4 p-2">
          <h3 className="text-2xl font-black text-[#02ad96] uppercase tracking-widest border-l-8 border-[#00F5D4] pl-4 font-syne">
            Captured Admin Flows:
          </h3>
          
          <div className="space-y-4">
            {/* Akış Özet Kartı 1 */}
            <div className="bg-[#FDFBEB] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-lg font-black text-black uppercase font-syne underline decoration-4 decoration-[#4D96FF]">
                • Branch & Inventory Node
              </h4>
              <p className="mt-1 text-xs font-bold leading-normal text-gray-700 uppercase">
                Demonstrating real-time database modifications, structural menu changes, recipe configuration multipliers, and automated low-stock warnings.
              </p>
            </div>

            {/* Akış Özet Kartı 2 */}
            <div className="bg-[#FDFBEB] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-lg font-black text-black uppercase font-syne underline decoration-4 decoration-[#FF6B6B]">
                • Live Analytics & Logistics
              </h4>
              <p className="mt-1 text-xs font-bold leading-normal text-gray-700 uppercase">
                Showcasing the core real-time occupancy monitoring panels, closed session transactional logs auditing, and the campaign coupon hub deployment pipelines.
              </p>
            </div>
          </div>
        </div>

        {/* SAĞ KOLON: KONTROLLERİ SIKIŞMAYAN GERÇEK iPHONE MOCKUP ALANI */}
        <div className="bg-[#FDFBEB]/40 border-1 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-full relative overflow-hidden flex items-center justify-center p-1">
          
          <div className="absolute top-2 left-2 bg-red-500 text-white font-mono text-[9px] font-black px-2 py-0.5 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] animate-pulse z-30">
            VIDEO PLAYER MODE
          </div>

          {/* 📱 iPHONE MOCKUP KASASI (Genişlik ve Yükseklik Oranları Dengelendi) */}
          <div className="w-[200px] h-[410px] border-[1px] border-black rounded-[32px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative bg-black shrink-0 flex flex-col justify-between py-5">
            
            {/* Üst Dynamic Island / Notch Alanı */}
            <div className="absolute top-2.5 z-30 w-20 h-4 -translate-x-1/2 bg-black left-1/2 rounded-full border border-gray-900"></div>

            {/* 📽️ VIDEO LAYER (object-contain ile artık alt ve üst kontrol barları asla kırpılmaz!) */}
            <div className="relative flex items-center justify-center w-full h-full overflow-hidden bg-black">
              <video 
                src={getAssetPath('adminflow.mp4')}
                controls 
                preload="auto"
                className="object-contain object-center w-full h-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = `
                    <div class="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gray-950 text-white select-none">
                      <span class="text-2xl mb-1">🎬</span>
                      <span class="text-[9px] font-black text-[#00F5D4] uppercase font-syne">[ ADMINFLOW.MP4 ]</span>
                      <span class="text-[7px] font-bold text-gray-500 mt-1 uppercase">Missing Video</span>
                    </div>
                  `;
                }}
              />
            </div>

          </div>

          {/* Arka Plan Büyük Filigranı */}
          <div className="absolute bottom-2 right-4 text-[40px] font-black text-black/5 pointer-events-none uppercase font-syne">
            LIVE FEED
          </div>
        </div>

      </div>

      {/* 📋 ALT GÖSTERGE SATIRI */}
      <div className="bg-black text-white text-xs font-mono font-black px-4 py-2 mt-4 border-2 border-black tracking-widest uppercase flex items-center justify-between shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
        <span>[ HARDWARE SOURCE: LOCAL PRODUCTION DEPLOYMENT // SYSTEM: MP4_NATIVE_EMU ]</span>
        <span className="text-[#00F5D4] animate-pulse">● PLAYBACK RECEPTACLE ONLINE</span>
      </div>

    </div>
  );
}