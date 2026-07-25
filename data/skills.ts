export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "JavaScript", level: 4 },
      { name: "Bootstrap", level: 4 },
      { name: "HTML & CSS", level: 4 },
      { name: "Blade Templates", level: 4 },
      { name: "Alpine.js", level: 3 },
    ],
  },
  {
    name: "Backend",
    icon: "Server",
    skills: [
      { name: "Laravel", level: 4 },
      { name: "PHP", level: 4 },
      { name: "Python", level: 3 },
      { name: "REST API Design", level: 4 },
      { name: "FastAPI", level: 3 },
    ],
  },
  {
    name: "Database",
    icon: "Database",
    skills: [
      { name: "MySQL", level: 4 },
      { name: "SQL", level: 4 },
      { name: "Desain Database (ERD)", level: 4 },
      { name: "Optimisasi Query", level: 3 },
    ],
  },
  {
    name: "Kecerdasan Buatan",
    icon: "Brain",
    skills: [
      { name: "YOLO11 (Deteksi Objek)", level: 4 },
      { name: "Computer Vision", level: 3 },
      { name: "Pelatihan & Evaluasi Model", level: 3 },
      { name: "ONNX / OpenVINO", level: 3 },
      { name: "Augmentasi Data", level: 3 },
    ],
  },
  {
    name: "Analisis Data",
    icon: "BarChart2",
    skills: [
      { name: "SPSS", level: 4 },
      { name: "Excel (Advanced)", level: 5 },
      { name: "Google Sheets", level: 4 },
      { name: "Analisis Regresi", level: 4 },
      { name: "Uji Statistik", level: 4 },
      { name: "AHP + TOPSIS", level: 4 },
    ],
  },
  {
    name: "Alat & Alur Kerja",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 4 },
      { name: "Postman", level: 4 },
      { name: "VS Code", level: 5 },
      { name: "Figma", level: 3 },
      { name: "Linux CLI", level: 3 },
    ],
  },
];
