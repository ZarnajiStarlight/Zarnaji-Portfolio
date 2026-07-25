export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  category: string;
}

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    name: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "2024",
    category: "Web Development",
  },
  {
    id: "cert-2",
    name: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "2024",
    category: "Backend Development",
  },
  {
    id: "cert-3",
    name: "Python for Data Science",
    issuer: "Coursera / IBM",
    date: "2024",
    category: "Data Science",
  },
  {
    id: "cert-4",
    name: "Statistika untuk Analisis Data",
    issuer: "Coursera",
    date: "2024",
    category: "Data Analysis",
  },
];
