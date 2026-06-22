const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://be-ksc-278881327745.asia-southeast1.run.app';
// const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000';

export interface HomeData {
  id: number;
  file_hero_image: string;
  signed_file_hero_image_url: string | null;
}

export interface LayananData {
  id: string;
  file_icon: string;
  signed_file_icon_url: string | null;
  title: string;
  deskripsi: string;
}

export interface ProyekImageData {
  id: string;
  file_images: string;
  signed_file_images_url: string | null;
}

export interface ProyekData {
  id: string;
  nama_proyek: string;
  slug: string;
  file_image_cover: string;
  signed_file_image_cover_url: string | null;
  deskripsi: string;
  klien: string;
  lokasi: string;
  tahun_pelaksanaan: string;
  durasi: string;
  koordinat_lat: number | null;
  koordinat_lng: number | null;
  kategori: string;
  kategori_display: string;
  images: ProyekImageData[];
}

export interface AboutData {
  id: number;
  header: string;
  deskripsi: string;
  visi: string;
  misi: string;
  standard: string;
}

export interface KontakData {
  id: number;
  nama_perusahaan: string;
  alamat: string;
  telepon: string;
  email: string;
  jam_operasional: string;
  koordinat_lat: number | null;
  koordinat_lng: number | null;
}

async function fetchJson<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_URL}${path}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json() as Promise<T>;
  } catch {
    return null;
  }
}

export async function getHome(): Promise<HomeData | null> {
  const data = await fetchJson<HomeData[]>('/api/landing-page/home/');
  return Array.isArray(data) ? (data[0] ?? null) : data;
}

export async function getLayanan(): Promise<LayananData[]> {
  const data = await fetchJson<{ results?: LayananData[] } | LayananData[]>('/api/landing-page/layanan/');
  if (!data) return [];
  if (Array.isArray(data)) return data;
  return data.results ?? [];
}

export async function getProyek(): Promise<ProyekData[]> {
  const data = await fetchJson<{ results?: ProyekData[] } | ProyekData[]>('/api/landing-page/proyek/');
  if (!data) return [];
  if (Array.isArray(data)) return data;
  return data.results ?? [];
}

export async function getProyekBySlug(slug: string): Promise<ProyekData | null> {
  try {
    const res = await fetch(`${API_URL}/api/landing-page/proyek/${slug}/`, { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json() as Promise<ProyekData>;
  } catch {
    return null;
  }
}

export async function getAbout(): Promise<AboutData | null> {
  const data = await fetchJson<AboutData[]>('/api/landing-page/about/');
  return Array.isArray(data) ? (data[0] ?? null) : data;
}

export async function getKontak(): Promise<KontakData | null> {
  const data = await fetchJson<KontakData[]>('/api/landing-page/kontak/');
  return Array.isArray(data) ? (data[0] ?? null) : data;
}
