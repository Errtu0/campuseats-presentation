import React from 'react';

export default function Slide1_Problem() {
  return (
    // 🚀 h-[620px] projektör perdesine tam sabitleme, dikey taşma riski sıfır!
    <div className="w-full h-[620px] bg-white border-[6px] border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] bg-grid-pattern bg-[size:30px_30px] flex flex-col justify-between select-none">
      
      {/* 🔝 ÜST BAŞLIK ALANI */}
      <div className="flex flex-row items-end justify-between border-b-[6px] border-black pb-3 mb-3 gap-4">
        <div>
          <span className="bg-[#FF6B6B] text-white border-4 border-black text-sm font-black px-4 py-0.5 uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] inline-block font-syne">
            01 // THE PROBLEM & SOLUTION
          </span>
          <h2 className="mt-1 text-5xl font-black leading-none tracking-tighter text-black uppercase lg:text-6xl font-syne">
            CAMPUS CONGESTION
          </h2>
        </div>
        
      </div>

      {/* 📊 ORTA ALAN: İKİ SÜTUNLU DENGELİ DÜZEN */}
      <div className="grid items-stretch flex-1 min-h-0 grid-cols-1 gap-6 lg:grid-cols-2">
        
        {/* SOL SÜTUN: WHICH PROBLEMS WE SOLVED (Dikey boşluklar taşma için daraltıldı) */}
        <div className="flex flex-col justify-start h-full gap-3">
          <h3 className="text-xl font-black text-[#FF6B6B] uppercase tracking-widest border-l-8 border-[#FF6B6B] pl-3 font-syne">
            Which Problems We Solved:
          </h3>
          
          {/* Problem 1 - Gelenekselden QR'a */}
          <div className="bg-[#FDFBEB] border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-lg font-black text-black uppercase underline decoration-4 decoration-[#FF6B6B] font-syne">1. Slow Traditional Ordering</h4>
            <p className="mt-0.5 text-xs font-bold leading-tight tracking-wide text-gray-800 uppercase">
              We replaced slow, manual counter ordering with lightning-fast table QR scans to completely eliminate peak-hour overcrowding at EMU.
            </p>
          </div>

          {/* Problem 2 - Ödeme Kolaylığı */}
          <div className="bg-[#FDFBEB] border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-lg font-black text-black uppercase underline decoration-4 decoration-[#4D96FF] font-syne">2. Frustrating Payment Friction</h4>
            <p className="mt-0.5 text-xs font-bold leading-tight tracking-wide text-gray-700 uppercase">
              No more blocked registers! Large student groups can now split the bill and pay individually right from their smartphones.
            </p>
          </div>

          {/* Problem 3 - Operasyonel Hız */}
          <div className="bg-[#FDFBEB] border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-lg font-black text-black uppercase underline decoration-4 decoration-[#00F5D4] font-syne">3. Bottlenecked Kitchen Operations</h4>
            <p className="mt-0.5 text-xs font-bold leading-tight tracking-wide text-gray-700 uppercase">
              Manual communication delayed preparation. We automated the pipeline to instantly feed paid orders to real-time kitchen screens.
            </p>
          </div>
        </div>

        {/* SAĞ SÜTUN: HOW WE SOLVED IT & ENGLISH TIMELINE MAP */}
        <div className="bg-[#FDFBEB]/40 border-[6px] border-black p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] h-full flex flex-col justify-between gap-3">
          <div className="space-y-1">
            <h3 className="pl-3 text-xl font-black tracking-widest text-black uppercase border-l-8 border-black font-syne">
              How We Solved It:
            </h3>
            <p className="text-xs font-bold leading-normal tracking-wide text-gray-700 uppercase">
              We developed a modern, student-centric application designed to meet today's campus standards. By combining real-time technology with an easy-to-use interface, we created a seamless dining loop from campus restaurants straight to the students.
            </p>
          </div>

          {/* 📊 GÜNCEL İNGİLİZCE VE OK GÖSTERGELİ GRAFİK ALANI */}
          <div className="bg-white border-4 border-black p-3 flex flex-col justify-between flex-1 min-h-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="pb-1 mb-2 text-xs font-black tracking-widest text-center text-black uppercase border-b-2 border-black border-dashed font-syne">
               FLOW TIMELINE ANALYSIS (TIME SAVING)
            </h4>
            
            <div className="flex flex-col justify-center flex-1 gap-3">
              
              {/* ❌ TRADITIONAL QUEUE SYSTEM */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-black uppercase text-red-600 font-syne">
                  <span>TRADITIONAL QUEUE SYSTEM</span>
                  <span className="bg-red-100 px-1.5 border border-red-600">TOTAL: ~25 MIN</span>
                </div>
                <div className="flex items-center justify-between text-[9px] font-black text-white text-center uppercase gap-1">
                  <div className="flex-1 bg-red-500 border-2 border-black py-1 px-0.5 leading-tight">Find<br/>Table</div>
                  <div className="text-sm font-black text-black">→</div>
                  <div className="flex-1 bg-red-500 border-2 border-black py-1 px-0.5 leading-tight">Counter<br/>Queue</div>
                  <div className="text-sm font-black text-black">→</div>
                  <div className="flex-1 bg-red-500 border-2 border-black py-1 px-0.5 leading-tight">Order<br/>& Pay</div>
                  <div className="text-sm font-black text-black">→</div>
                  <div className="flex-1 bg-red-500 border-2 border-black py-1 px-0.5 leading-tight">Wait for<br/>Meal</div>
                </div>
              </div>

              {/* MIDDLE BRIDGE */}
              <div className="text-center text-xs font-black leading-none my-0.5 text-black font-syne">
                 CAMPUSEATS CORE TRANSITION 
              </div>

              {/* CAMPUSEATS INSTANT LOOP */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-black uppercase text-emerald-600 font-syne">
                  <span>CAMPUSEATS INSTANT LOOP</span>
                  <span className="bg-emerald-100 px-1.5 border border-emerald-600">TOTAL: ~5 MIN</span>
                </div>
                <div className="flex items-center justify-between text-[9px] font-black text-black text-center uppercase gap-1">
                  <div className="flex-1 bg-[#00F5D4] border-2 border-black py-1 px-0.5 leading-tight">Take a<br/>Seat</div>
                  <div className="text-sm font-black text-black">→</div>
                  <div className="flex-1 bg-[#4D96FF] border-2 border-black py-1 px-0.5 leading-tight text-white">Scan QR<br/>& Share</div>
                  <div className="text-sm font-black text-black">→</div>
                  <div className="flex-1 bg-[#FFD166] border-2 border-black py-1 px-0.5 leading-tight">Instant<br/>Pay</div>
                  <div className="text-sm font-black text-black">→</div>
                  <div className="flex-1 bg-[#FF6B6B] border-2 border-black py-1 px-0.5 leading-tight text-white">Self<br/>Pickup</div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
}