/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 🚀 Inter fontunu projenin varsayılan sans fontu yapıyoruz (Bütün düz yazılar otomatik Inter olacak)
        sans: ['Inter', 'sans-serif'],
        
        // 🚀 Syne fontunu özel bir sınıf olarak tanımlıyoruz (Başlıklarda font-syne olarak çağıracağız)
        syne: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}