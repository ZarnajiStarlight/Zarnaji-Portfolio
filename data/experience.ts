export interface Experience {
  id: string;
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  screenshots?: { url: string; caption: string }[];
}

export const experiences: Experience[] = [
  {
    id: "election-consultant",
    title: "Konsultan Otomasi Data Pemilu",
    company: "Konsultan Independen",
    type: "Freelance",
    period: "2024",
    location: "Indonesia",
    description:
      "Merancang dan mengimplementasikan alur kerja pemrosesan data otomatis untuk manajemen data pemilu, membuat solusi Excel dan Google Sheets yang andal sehingga drastis mengurangi waktu entri data manual dan pelaporan.",
    responsibilities: [
      "Mengembangkan rumus Excel dan Google Sheets otomatis yang kompleks untuk memproses data suara TPS (Tempat Pemungutan Suara) dari ratusan tempat pemungutan suara",
      "Merancang pipeline otomasi pelaporan yang mengagregasi data suara mentah menjadi laporan ringkasan terstruktur, mengurangi waktu pemrosesan sebesar 85%",
      "Membangun sistem validasi data untuk mendeteksi inkonsistensi dan anomali dalam catatan pemungutan suara yang diserahkan, memastikan integritas data di seluruh tingkat pelaporan",
      "Membuat template standar dan formulir entri data yang diadopsi di beberapa kabupaten untuk memastikan struktur data yang konsisten",
      "Memastikan konsistensi dan keterlacakan data di seluruh tingkat pelaporan hierarkis (TPS → Kelurahan → Kecamatan → Kabupaten)",
      "Menyiapkan dan menyerahkan laporan hasil pemilu yang komprehensif kepada pemangku kepentingan dalam batas waktu pasca-pemilu yang ketat",
    ],
    skills: ["Excel", "Google Sheets", "Otomasi Data", "Validasi Data", "Pelaporan"],
  },
  {
    id: "statistical-analyst",
    title: "Analisis Data Statistik",
    company: "Penelitian Akademik",
    type: "Research",
    period: "2024",
    location: "Indonesia",
    description:
      "Melakukan analisis statistik yang ketat untuk proyek penelitian akademik, menerapkan metode kuantitatif untuk menghasilkan wawasan bermakna dari dataset kompleks menggunakan alat industri standar.",
    responsibilities: [
      "Melakukan analisis regresi linier berganda dan logistik untuk memodelkan hubungan antar variabel dan menguji hipotesis penelitian",
      "Melaksanakan uji asumsi klasik (normalitas, heteroskedastisitas, multikolinearitas, autokorelasi) untuk memvalidasi validitas model regresi",
      "Melakukan analisis statistik deskriptif termasuk tendensi sentral, ukuran dispersi, dan distribusi frekuensi",
      "Menerapkan prosedur statistik berbasis SPSS dan Excel untuk menganalisis data survei dan observasi",
      "Menginterpretasikan output statistik (p-value, R², koefisien, F-statistik) dan menerjemahkan temuan menjadi kesimpulan penelitian yang actionable",
      "Menyiapkan laporan statistik terstruktur yang mendokumentasikan metodologi, hasil, dan keterbatasan mengikuti standar akademik",
    ],
    skills: ["SPSS", "Excel", "Analisis Regresi", "Uji Statistik", "Interpretasi Data", "Penulisan Laporan"],
    screenshots: [
      { url: "/images/Data/ExperienceSPSS/DIVIDEN PERTUMBUHAN PENJUALAN DAN KEPUTUSAN INVESTASI TERHADAP NILAI PERUSAHAAN PADA PT CHAROEN POKPHAND INDONESIA TBK(tabledata).png", caption: "Data Pertumbuhan & Keputusan Investasi" },
      { url: "/images/Data/ExperienceSPSS/UjiDeskriptif.png", caption: "Uji Statistik Deskriptif" },
      { url: "/images/Data/ExperienceSPSS/UjiNomalitas.png", caption: "Uji Normalitas" },
      { url: "/images/Data/ExperienceSPSS/UjiMultikolinearitas.png", caption: "Uji Multikolinearitas" },
      { url: "/images/Data/ExperienceSPSS/Run-test.png", caption: "Uji Autokorelasi (Run Test)" },
      { url: "/images/Data/ExperienceSPSS/UjiRegresi (DurbinWatson, CoefisientDeterminasi dll)).png", caption: "Uji Regresi Linier" },
      { url: "/images/Data/ExperienceSPSS/Uji-t.png", caption: "Uji Hipotesis (Uji-t)" }
    ]
  },
];
