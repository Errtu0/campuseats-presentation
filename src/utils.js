// GitHub Pages alt dizin kaymasını kökten çözen bağımsız yardımcı fonksiyon
export const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
};