export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  image?: string; // nama file di public/sertifikat
  link?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Maganghub Kemnaker",
    issuer: "Kementerian Ketenagakerjaan Republik Indonesia",
    year: "2025-2026",
    image: "maganghub.jpg",
  },
];
