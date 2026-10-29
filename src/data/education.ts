export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  note?: string;
};

export const education: EducationItem[] = [
  {
    school: "Universitas Madura",
    degree: "S1 Teknik Informatika",
    period: "2021 - 2025",
  },
  {
    school: "SMAN 3 Pamekasan",
    degree: "MIPA",
    period: "2018 - 2021",
  },
];
