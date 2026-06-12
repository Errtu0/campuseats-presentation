  import React, { useState } from 'react';
  import { getAssetPath } from '../../utils';

  export default function Slide3_Showcase() {
    const [activeRole, setActiveRole] = useState('customer');
    const [activeFlow, setActiveFlow] = useState('general');
    
    // 🔍 Ekranların bulanık görünmesini engellemek için seçili ekranı takip eden state
    const [selectedScreenIndex, setSelectedScreenIndex] = useState(0);

    // 📂 Klasör yapısına ve .jpeg uzantılarına tam uyumlu veri yapısı (DOKUNULMADI)
    const content = {
      customer: {
        color: "bg-[#FF6B6B]",
        textColor: "text-white",
        flows: [
          { 
            id: 'general', 
            label: '1. GENERAL FLOW', 
            screens: [
              { title: 'Restaurant Selection', img: '/campuseats/customer/general/selection.jpeg' },
              { title: 'Order History', img: '/campuseats/customer/general/history.jpeg' },
              { title: 'Density Status', img: '/campuseats/customer/general/map.jpeg' },
              { title: 'Qr Scan', img: '/campuseats/customer/general/scan.jpeg' }
            ] 
          },
          { 
            id: 'qr', 
            label: '2. CUSTOMER QR FLOW', 
            screens: [
              { title: 'Interactive Menu', img: '/campuseats/customer/qrscan/menu.jpeg' },
              { title: 'Shopping Cart', img: '/campuseats/customer/qrscan/cart.jpeg' },
              { title: 'Splitted Bill', img: '/campuseats/customer/qrscan/split.jpeg' }
            ] 
          },
          { 
            id: 'coupon', 
            label: '3. COUPON ENGINE', 
            screens: [
              { title: 'Apply Coupon Code', img: '/campuseats/customer/coupon/coupon.jpeg' },
              { title: 'Stripe Checkout', img: '/campuseats/customer/coupon/stripe.jpeg' }
            ] 
          }
        ]
      },
      staff: {
        color: "bg-[#00F5D4]",
        textColor: "text-black",
        flows: [
          { id: 'table_map', label: '1. LIVE TABLE MAP FLOW', screens: [{ title: 'Map View', img: '/campuseats/staff/table/tablemap.jpeg' }, { title: 'Table Details', img: '/campuseats/staff/table/tabledetail.jpeg' }, { title: 'Table Closing', img: '/campuseats/staff/table/closetable.jpeg' }] },
          { id: 'order', label: '2. KITCHEN ORDER FLOW', screens: [{ title: 'Kitchen Feed', img: '/campuseats/staff/order/order.jpeg' }, { title: 'Changing Status', img: '/campuseats/staff/order/ready.jpeg' }] }
        ]
      },
      admin: {
        color: "bg-[#4D96FF]",
        textColor: "text-white",
        flows: [
          { id: 'menu_inventory', label: '1. MENU MANAGEMENT', screens: [{ title: 'Menu Dashboard', img: '/campuseats/admin/menu_inventory/menu.jpeg' }, { title: 'Menu Add Item', img: '/campuseats/admin/menu_inventory/menuadd.jpeg' }, { title: 'Menu Edit Item', img: '/campuseats/admin/menu_inventory/menuedit.jpeg' }] },
          { id: 'restaurant_management', label: '2. STOCK MANAGEMENT', screens: [{ title: 'Stock Dashboard', img: '/campuseats/admin/menu_inventory/stock.jpeg' }, { title: 'Stock Add Item', img: '/campuseats/admin/menu_inventory/stockadd.jpeg' }] },
          { id: 'staff_management', label: '3. STAFF MANAGEMENT', screens: [{ title: 'Staff Dashboard', img: '/campuseats/admin/staff/staff.jpeg' }, { title: 'Staff Add User', img: '/campuseats/admin/staff/staffadd.jpeg' }] },
          { id: 'table_management', label: '4. TABLE MANAGEMENT', screens: [{ title: 'Table Dashboard', img: '/campuseats/admin/table/table.jpeg' }, { title: 'Table Details', img: '/campuseats/admin/table/tabledetail.jpeg' }, { title: 'Table Qr Code', img: '/campuseats/admin/table/tableqr.jpeg' }] },
          { id: 'density', label: '5. COUPON & ADS', screens: [{ title: 'Coupon & Ads Dashboard', img: '/campuseats/admin/coupon-ad/coupon.jpeg' }, { title: 'Coupon Add', img: '/campuseats/admin/coupon-ad/couponadd.jpeg' }, { title: 'Advertisement Details', img: '/campuseats/admin/coupon-ad/adlisting.jpeg' }, { title: 'Advertisement Adding', img: '/campuseats/admin/coupon-ad/ad.jpeg' }] },
          { id: 'analytics', label: '6. LOGS DASHBOARD', screens: [{ title: 'Logs Dashboard', img: '/campuseats/admin/log-screen/general.jpeg' }, { title: 'Log Filtering', img: '/campuseats/admin/log-screen/filter.jpeg' }, { title: 'Density Logs', img: '/campuseats/admin/log-screen/densitylog.jpeg' }] }
        ]
      }
    };

    const rawFlowData = content[activeRole].flows.find(f => f.id === activeFlow) || content[activeRole].flows[0];
    
    const currentFlowData = {
      ...rawFlowData,
      screens: rawFlowData.screens.map(screen => ({
        ...screen,
        img: getAssetPath(screen.img) // Artık tertemiz utils fonksiyonumuz dönüştürüyor
      }))
    };

    // Rol veya akış değiştiğinde otomatik olarak ilk ekranı seçili yap
    const handleRoleChange = (role) => {
      setActiveRole(role);
      setActiveFlow(content[role].flows[0].id);
      setSelectedScreenIndex(0);
    };

    const handleFlowChange = (flowId) => {
      setActiveFlow(flowId);
      setSelectedScreenIndex(0);
    };

    return (
      <div className="w-full h-[620px] bg-white border-[6px] border-black p-5 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] bg-grid-pattern bg-[size:30px_30px] flex flex-col justify-between select-none overflow-hidden">
        
        {/* 🔝 ÜST BAŞLIK ALANI */}
        <div className="flex flex-row items-end justify-between border-b-[6px] border-black pb-3 mb-3 gap-4">
          <div>
            <span className="bg-black text-white border-4 border-black text-sm font-black px-4 py-0.5 uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] inline-block font-syne">
              03 // LIVE INTERFACE FLOWS
            </span>
            <h2 className="mt-1 text-4xl font-black leading-none tracking-tighter text-black uppercase lg:text-5xl font-syne">
              UX/UI ECOSYSTEM SHOWCASE
            </h2>
          </div>
        </div>

        <div className="flex items-stretch flex-1 min-h-0 gap-4">
          
          {/* 1. SOL SÜTUN: ROLLER */}
          <div className="flex flex-col justify-center gap-2.5 pr-2 border-r-4 border-black w-40 shrink-0">
            {['customer', 'staff', 'admin'].map(role => (
              <button
                key={role}
                onClick={() => handleRoleChange(role)}
                className={`border-4 border-black p-3 text-sm font-black uppercase transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-syne
                  ${activeRole === role ? content[role].color + ' ' + content[role].textColor + ' translate-x-[2px] translate-y-[2px] shadow-none' : 'bg-white text-black hover:bg-gray-100'}`}
              >
                {role}
              </button>
            ))}
          </div>

          {/* 2. ORTA SÜTUN: AKIŞLAR */}
          <div className="flex flex-col justify-center gap-2 pr-4 border-r-4 border-black w-52 shrink-0">
            {content[activeRole].flows.map(flow => (
              <button
                key={flow.id}
                onClick={() => handleFlowChange(flow.id)}
                className={`border-4 border-black p-2 text-[10px] font-black uppercase text-left transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-sans leading-tight
                  ${activeFlow === flow.id ? 'bg-black text-white translate-x-[2px] translate-y-[2px] shadow-none' : 'bg-white text-black hover:bg-gray-100'}`}
              >
                {flow.label}
              </button>
            ))}
          </div>

          {/* 3. SAĞ ALAN: DEVASELAŞTIRILMIŞ ULTRA NET GÖRSEL KASASI */}
          <div className="flex-1 bg-[#FDFBEB]/50 p-3 relative border-4 border-black flex flex-row items-center gap-4 overflow-hidden justify-between">
            
            {/* A) BÜYÜTEÇ: AKTİF SEÇİLİ EKRAN (Jilet gibi net, büyük ana mockup) */}
            <div className="flex flex-col items-center justify-center shrink-0 w-[210px] h-full bg-white/40 border-2 border-dashed border-black/20 p-1">
              <div className="w-[185px] h-[340px] bg-black border-[5px] border-black rounded-[26px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative">
                <div className="absolute top-0 z-20 w-16 h-4 -translate-x-1/2 bg-black left-1/2 rounded-b-xl"></div>
                <div className="absolute inset-0 bg-white">
                  <img 
                    src={currentFlowData.screens[selectedScreenIndex]?.img} 
                    alt="Selected Zoomed UI" 
                    className="object-cover object-top w-full h-full transition-all duration-150"
                    style={{ imageRendering: 'high-quality' }} 
                  />
                </div>
              </div>
              <p className="text-center mt-1.5 text-[10px] font-black text-[#FF6B6B] uppercase font-mono max-w-[180px] truncate">
                ZOOMED: {currentFlowData.screens[selectedScreenIndex]?.title}
              </p>
            </div>

            {/* B) SEÇİM PANELİ: YAN TARAFTAKİ DİĞER ADIMLARIN LİSTESİ */}
            <div className="flex flex-col justify-center flex-1 h-full gap-2 overflow-y-auto no-scrollbar">
              <p className="text-[10px] font-mono font-black text-gray-400 uppercase tracking-widest border-b border-black border-dashed pb-0.5">Click to Inspect Screens:</p>
              
              {currentFlowData.screens.map((screen, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedScreenIndex(idx)}
                  className={`border-3 border-black p-2 flex items-center gap-3 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-all hover:-translate-y-0.5
                    ${selectedScreenIndex === idx ? 'bg-black/5 border-dashed border-black' : ''}`}
                >
                  {/* Küçük Önizleme Thumbnail Kutusu */}
                  <div className="relative w-10 overflow-hidden bg-gray-200 border-2 border-black h-14 shrink-0">
                    <img src={screen.img} alt="Thumbnail" className="object-cover object-top w-full h-full" />
                  </div>
                  
                  {/* Ekran Başlığı ve Adım Bilgisi */}
                  <div className="flex-1 min-w-0">
                    <span className="block text-[9px] font-mono font-black text-gray-400 leading-none">STEP 0{idx + 1}</span>
                    <h4 className="text-xs font-black text-black uppercase tracking-tight truncate mt-0.5">{screen.title}</h4>
                  </div>
                  
                  {/* Aktiflik İndikatörü */}
                  <div className={`w-3 h-3 rounded-full border-2 border-black shrink-0 ${selectedScreenIndex === idx ? content[activeRole].color : 'bg-white'}`}></div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* 📋 ALT DURUM ŞERİDİ */}
        <div className={`mt-3 border-4 border-black p-2 font-mono font-black text-[10px] uppercase flex justify-between items-center ${content[activeRole].color} ${content[activeRole].textColor}`}>
          <span>VIEWING: {activeRole.toUpperCase()} // {activeFlow.toUpperCase()} // STEP {selectedScreenIndex + 1}</span>
          <span className="flex items-center gap-2">● LIVE_CRISP_PREVIEW</span>
        </div>
      </div>
    );
  }