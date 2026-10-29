export type SkillGroup = {
  group: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    group: "Administrasi",
    items: ["Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint"],
  },
  {
    group: "Web Development",
    items: [
      "HTML 5",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "PHP",
      "Laravel",
    ],
  },
  {
    group: "Tools",
    items: ["Git & GitHub", "Figma", "VS Code", "MySQL Workbench", "XAMPP"],
  },
  {
    group: "Pendukung",
    items: [
      "Pengarsipan dokumen",
      "Pemantauan dan pelaporan",
      "Perbaikan fasilitas ringan",
    ],
  },
];
