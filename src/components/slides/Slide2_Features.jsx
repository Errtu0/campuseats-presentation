import React from 'react';

export default function Slide2_Features() {
  // 🗼 Çişel'in Sunacağı Güncellenmiş 6 Temel Sistem Özelliği (Tamamen İngilizce & Genişletilmiş)
  const features = [
    {
      id: "01",
      title: "QUICK COUNTER ORDERING",
      desc: "Staff utilizes temporary Guest Accounts via physical counter QR codes to instantly route grab-and-go orders without standard registration delays.",
      badge: "GUEST WORKFLOW",
      color: "border-[#FF6B6B] hover:bg-[#FF6B6B]/10"
    },
    {
      id: "02",
      title: "GROUP ORDER & BILL SPLITTING",
      desc: "Multi-user sync array allows student peer groups to build a unified table session cart and seamlessly split the total payment routing in real-time.",
      badge: "SOCKET LOOPS",
      color: "border-[#4D96FF] hover:bg-[#4D96FF]/10"
    },
    {
      id: "03",
      title: "ICON-BASED ALLERGEN SIGNS",
      desc: "Advanced visual dietary indicators and high-visibility micro-icon warning layouts mapped directly on menu items to protect student health.",
      badge: "DIETARY UX",
      color: "border-[#00F5D4] hover:bg-[#00F5D4]/10"
    },
    {
      id: "04",
      title: "ADMIN COUPON HUB & ADS",
      desc: "Centralized interface allowing managers to instantly deploy targeted promo codes linked directly to live customer app home screen ad-banners.",
      badge: "PROMO LOGISTICS",
      color: "border-[#FFD166] hover:bg-[#FFD166]/10"
    },
    {
      id: "05",
      title: "REAL-TIME NOTIFICATIONS",
      desc: "Dual-channel responsive alerts via WebSockets. Fires instant order traffic spikes to kitchen staff and preparation status logs to waiting customers.",
      badge: "SOCKET.IO CORE",
      color: "border-[#6C5CE7] hover:bg-[#6C5CE7]/10"
    },
    {
      id: "06",
      title: "MULTI-BRANCH PROVISIONING",
      desc: "Enterprise management panel allowing system administrators to seamlessly initialize new campus branches and override distinct restaurant menus.",
      badge: "ADMIN CLUSTER",
      color: "border-black hover:bg-black/5"
    }
  ];

  return (
    // 🚀 h-[620px] ile projektör perdesine kusursuz dikey kilitlenme. p-6 ile optimize iç alan.
    <div className="w-full h-[620px] bg-white border-[6px] border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] bg-grid-pattern bg-[size:30px_30px] flex flex-col justify-between select-none">
      
      {/* 🔝 SLAYT ÜST BAR (Yazı Boyutları Büyütüldü & Syne Fontu Aktif) */}
      <div className="flex flex-row items-end justify-between border-b-[6px] border-black pb-3 mb-3 gap-4">
        <div>
          <span className="bg-[#4D96FF] text-white border-4 border-black text-sm font-black px-4 py-0.5 uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] inline-block font-syne">
            02 // CORE ECOSYSTEM ARCHITECTURE
          </span>
          <h2 className="mt-1 text-5xl font-black leading-none tracking-tighter text-black uppercase lg:text-6xl font-syne">
            CURRENT SYSTEM FEATURES
          </h2>
        </div>
        
      </div>

      {/* 📊 SİBER KARTLAR GRİD YAPISI (Görünürlük için fontlar devleştirildi, gapler dikey taşma için dengelendi) */}
      <div className="grid flex-1 min-h-0 grid-cols-1 gap-4 pt-1 pb-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feat, index) => (
          <div 
            key={index}
            className={`border-4 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white ${feat.color}`}
          >
            <div>
              {/* Üst Kimlik Alanı + Canlı Pulse Animasyonu (text-lg yapıldı!) */}
              <div className="flex items-center justify-between border-b-2 border-black border-dashed pb-1.5 mb-2">
                <div className="flex items-center gap-2">
                  <span className="bg-black text-[#FDFBEB] font-mono font-black text-xs px-2 py-0.5 border border-black">
                    {feat.id}
                  </span>
                  <h4 className="text-base font-black leading-tight tracking-tight text-black uppercase font-syne">
                    {feat.title}
                  </h4>
                </div>
                {/* Arka Planda Çalışan Canlı Yeşil Sistem Işığı */}
                <span className="relative flex w-2.5 h-2.5 shrink-0">
                  <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
                  <span className="relative inline-flex w-2.5 h-2.5 bg-green-500 rounded-full border border-black"></span>
                </span>
              </div>

              {/* Açıklama Metni (text-sm yapılarak okunaklılık tavan yaptırıldı) */}
              <p className="text-xs font-bold leading-normal tracking-wide text-gray-700 uppercase">
                {feat.desc}
              </p>
            </div>

            {/* Teknik Alt Durum Şeridi */}
            <div className="flex items-center justify-between pt-2 mt-2 font-mono border-t border-black border-dotted">
              <span className="text-[10px] font-black text-gray-500 tracking-wider">
                SYS_STATUS: CORE_ACTIVE
              </span>
              <span className="bg-black text-[#FDFBEB] text-[9px] font-black px-2 py-0.5 uppercase tracking-tight">
                {feat.badge}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 📋 ALT BİLGİLENDİRME SATIRI */}
      <div className="flex items-center justify-between px-4 py-2 mt-3 font-mono text-xs font-black tracking-widest text-white uppercase bg-black border-2 border-black">
        <span>[ SYSTEM SUBSYSTEM INTEGRITY: 100% SECURE & FUNCTIONAL ]</span>
        <span className="text-[#00F5D4] animate-pulse">● CORE_ENGINE ONLINE</span>
      </div>

    </div>
  );
}