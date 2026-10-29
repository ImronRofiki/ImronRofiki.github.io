export type Project = {
  title: string;
  category: "IT" | "Administrasi";
  desc: string;
  tech: string[];
  image?: string; // nama file di public/proyek
  demo?: string; // link Vercel
  repo?: string; // link GitHub
  file?: string; // nama file di public/proyek (xlsx)
  fileName?: string; // nama saat diunduh
};

export const projects: Project[] = [
  {
    title: "Website Sistem Penjualan Sofa",
    category: "IT",
    desc: "Katalog dan penjualan sofa dengan halaman produk dan keranjang.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "sofa.jpg",
    repo: "https://github.com/ImronRofiki/penjualan-sofa",
  },
  {
    title: "Website Al-Quran dan Jadwal Salat",
    category: "IT",
    desc: "Aplikasi web pendamping ibadah harian: baca Al-Qur'an lengkap dengan audio murottal, jadwal salat sesuai lokasi, arah kiblat, dan tanggal Hijriah.",
    tech: ["React", "TypeScript", "REST API", "Geolocation", "LocalStorage"],
    demo: "https://link-vercel.vercel.app",
    repo: "https://github.com/ImronRofiki/QuranApp",
  },
  // {
  //   title: "Rekap Surat Masuk dan Keluar",
  //   category: "Administrasi",
  //   desc: "Template Excel untuk mencatat surat dan membuat rekap bulanan otomatis. Data pada contoh ini fiktif.",
  //   tech: ["Excel", "SUMIF", "Pivot Table", "Validasi Data"],
  //   image: "rekap-surat.jpg",
  //   file: "rekap-surat.xlsx",
  //   fileName: "Rekap-Surat-Contoh.xlsx",
  // },
];
