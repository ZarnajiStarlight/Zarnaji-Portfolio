export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "web" | "ai" | "data" | "system";
  categoryLabel: string;
  role: string;
  duration: string;
  year: string;
  tech: string[];
  description: string;
  achievement: string;
  coverColor: string;
  overview: string;
  problem: string;
  research: string;
  solution: string;
  architecture: string;
  databaseDesign: string;
  features: { title: string; description: string }[];
  challenges: { title: string; description: string; solution: string }[];
  lessons: string[];
  results: string[];
  futureImprovements: string[];
  screenshots: { url: string; caption: string }[];
}

export const projects: Project[] = [
  {
    slug: "smart-waste-bank",
    title: "Smart Waste Bank",
    subtitle: "Klasifikasi sampah otomatis menggunakan Computer Vision",
    category: "ai",
    categoryLabel: "AI / Computer Vision",
    role: "Full Stack Developer & AI Engineer",
    duration: "3 months",
    year: "2024",
    tech: ["Python", "YOLO11", "Laravel", "MySQL", "JavaScript"],
    description:
      "Sistem manajemen bank sampah cerdas yang menggunakan computer vision YOLO11 untuk mengklasifikasikan jenis sampah (organik, anorganik, plastik, kertas) secara otomatis dan real-time melalui kamera, mengurangi tenaga penyortiran manual hingga 80%.",
    achievement: "Pengurangan waktu penyortiran manual sebesar 80% · Klasifikasi AI real-time pada 30 FPS",
    coverColor: "#0F172A",
    overview:
      "Smart Waste Bank adalah sistem manajemen pengelolaan sampah terintegrasi yang menggabungkan teknologi computer vision dengan platform manajemen berbasis web. Sistem ini mengotomatisasi klasifikasi sampah menggunakan YOLO11, model deteksi objek mutakhir, sehingga menghilangkan kebutuhan inspeksi visual manual oleh staf bank sampah.",
    problem:
      "Bank sampah tradisional bergantung sepenuhnya pada penyortiran manual oleh manusia, yang lambat, tidak konsisten, dan rentan terhadap kesalahan. Kelelahan staf menyebabkan kesalahan klasifikasi, mencemari material yang dapat didaur ulang, dan menurunkan nilai keseluruhan dari sampah yang terkumpul. Selain itu, tidak ada pelacakan digital mengenai jumlah sampah, riwayat pelanggan, atau pendapatan yang dihasilkan dari setiap jenis sampah.",
    research:
      "Saya melakukan riset lapangan di 3 bank sampah lokal, mewawancarai 12 anggota staf, dan menganalisis lebih dari 500 gambar sampah untuk memahami pola klasifikasi. Saya mengevaluasi YOLOv8, YOLO11, dan EfficientDet sebagai kandidat model. YOLO11 dipilih karena keseimbangan kecepatan dan akurasi yang lebih unggul (30+ FPS pada 94% mAP50) serta ukuran model yang ringkas untuk penerapan edge.",
    solution:
      "Solusi dua komponen: (1) Modul computer vision berbasis Python menggunakan YOLO11 yang memproses umpan kamera langsung dan menampilkan kategori sampah beserta skor kepercayaan secara real-time. (2) Aplikasi web Laravel bagi staf untuk mengelola akun pelanggan, melihat hasil deteksi, menghitung pembayaran, dan menghasilkan laporan.",
    architecture:
      "Sistem ini mengikuti arsitektur yang terinspirasi dari layanan mikro. Modul CV Python berjalan sebagai layanan terpisah yang berkomunikasi dengan backend Laravel melalui REST API. Frontend web menggunakan template Blade dengan JavaScript untuk tampilan kamera langsung. MySQL menyimpan data pelanggan, log deteksi, dan transaksi keuangan.",
    databaseDesign:
      "Entitas utama: customers (id, name, contact, address), waste_sessions (id, customer_id, date, total_weight, total_value), waste_items (id, session_id, category, weight, unit_price, confidence_score), detections (id, image_path, category, confidence, timestamp). Log deteksi disimpan terpisah untuk analitik dan pelatihan ulang model.",
    features: [
      { title: "Deteksi Sampah Real-time", description: "YOLO11 memproses umpan kamera langsung pada 30 FPS, menampilkan bounding box dengan label kategori dan skor kepercayaan yang dioverlay pada aliran video." },
      { title: "Penghitungan Berat Otomatis", description: "Integrasi dengan perangkat keras timbangan digital untuk secara otomatis merekam berat sampah per kategori, tertaut dengan sesi deteksi saat ini." },
      { title: "Manajemen Pelanggan", description: "CRUD lengkap untuk akun pelanggan, riwayat setoran sampah, dan pelacakan akumulasi saldo." },
      { title: "Laporan Keuangan", description: "Pembuatan laporan keuangan harian, bulanan, dan per pelanggan secara otomatis dalam format PDF." },
      { title: "Ambang Batas Kepercayaan Model", description: "Ambang batas kepercayaan yang dapat dikonfigurasi (default 70%) untuk menyeimbangkan presisi vs recall berdasarkan jenis sampah." },
    ],
    challenges: [
      {
        title: "Keterbatasan Dataset",
        description: "Hanya 800 gambar awal yang tersedia untuk pelatihan, yang menyebabkan model mengalami overfitting.",
        solution: "Menerapkan augmentasi data agresif (rotasi, pembalikan, pergeseran kecerahan, mosaik) untuk memperluas dataset menjadi 4.800 sampel pelatihan efektif, meningkatkan mAP50 dari 76% menjadi 94%.",
      },
      {
        title: "Performa Real-time pada Perangkat Keras Terbatas",
        description: "Perangkat keras target penerapan adalah laptop kelas menengah tanpa GPU khusus.",
        solution: "Mengoptimalkan inferensi menggunakan ekspor YOLO11 ke format ONNX dan runtime OpenVINO, mencapai 28 FPS pada perangkat keras khusus CPU.",
      },
      {
        title: "Integrasi Laravel-Python",
        description: "Menghubungkan aplikasi PHP Laravel dengan layanan CV Python memerlukan desain API yang cermat.",
        solution: "Mengimplementasikan wrapper FastAPI ringan di sekitar model YOLO11, mengekspos endpoint REST yang dipanggil Laravel untuk setiap peristiwa deteksi.",
      },
    ],
    lessons: [
      "Kualitas dan kuantitas data lebih berdampak daripada pilihan arsitektur model. Dataset kecil yang diaugmentasi dengan baik mengungguli dataset besar yang banyak noise.",
      "Runtime ONNX adalah strategi optimasi lintas platform yang sangat baik untuk skenario inferensi CPU.",
      "Overhead komunikasi layanan mikro harus dirancang sejak awal — keterikatan erat antara PHP dan Python akan menjadi beban pemeliharaan.",
      "Wawancara pengguna mengungkapkan batasan alur kerja yang tidak terduga (misalnya, staf lebih suka melihat kepercayaan sebagai kode warna, bukan angka persentase).",
    ],
    results: [
      "Pengurangan 80% waktu klasifikasi manual per sesi sampah",
      "Akurasi deteksi mAP50 sebesar 94% pada 6 kategori sampah",
      "Waktu pemrosesan sesi rata-rata berkurang dari 12 menit menjadi 2,5 menit",
      "Nol kesalahan klasifikasi untuk botol plastik (kategori nilai komersial tertinggi)",
      "Sistem diterapkan dan aktif digunakan di 1 lokasi percontohan bank sampah",
    ],
    futureImprovements: [
      "Aplikasi seluler bagi pelanggan untuk melacak riwayat setoran dan akumulasi saldo mereka sendiri",
      "Transfer learning untuk mengadaptasi model pada kategori sampah baru (sampah elektronik, bahan berbahaya)",
      "Integrasi IoT untuk pemantauan tingkat kepenuhan tempat sampah secara otomatis",
      "Dukungan multi-bahasa",
    ],
    screenshots: [
      { url: "/images/projects-1/DashboardLogin.png", caption: "Landing Page" },
      { url: "/images/projects-1/Login.png", caption: "Halaman Login" },
      { url: "/images/projects-1/DashboardUser.png", caption: "Dashboard Pengguna (Nasabah)" },
      { url: "/images/projects-1/SetorSampah.png", caption: "Fitur Setor Sampah & AI Camera" },
      { url: "/images/projects-1/JenisSampah.png", caption: "Katalog Jenis & Harga Sampah" },
      { url: "/images/projects-1/DashboardAdmin.png", caption: "Dashboard Admin Utama" },
      { url: "/images/projects-1/AcceptAdmin.png", caption: "Verifikasi Setoran Sampah oleh Admin" },
    ],
  },
  {
    slug: "decision-support-system",
    title: "Decision Support System for Poverty Ranking",
    subtitle: "Analisis multikriteria menggunakan metodologi AHP + TOPSIS",
    category: "data",
    categoryLabel: "Data Analysis / DSS",
    role: "Full Stack Developer & Data Analyst",
    duration: "2 months",
    year: "2024",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    description:
      "Sistem Pendukung Keputusan berbasis web yang mengimplementasikan AHP (Analytic Hierarchy Process) dikombinasikan dengan TOPSIS untuk memberi peringkat dan mengidentifikasi rumah tangga yang paling membutuhkan bantuan sosial, menggantikan evaluasi manual yang subjektif dengan metodologi penilaian yang objektif dan transparan.",
    achievement: "Menggantikan 100% proses manual · Penilaian konsisten untuk 500+ rumah tangga",
    coverColor: "#1E3A5F",
    overview:
      "SPK (Sistem Pendukung Keputusan) ini membantu pejabat pemerintah desa secara objektif menilai peringkat rumah tangga berdasarkan indikator kemiskinan. AHP digunakan untuk menentukan bobot setiap kriteria (pendapatan, kondisi rumah, tingkat pendidikan, tanggungan, kepemilikan aset), dan TOPSIS memeringkatkan rumah tangga berdasarkan kedekatannya dengan solusi ideal.",
    problem:
      "Administrator desa sebelumnya mengevaluasi tingkat kemiskinan rumah tangga secara manual menggunakan kriteria subjektif, yang menyebabkan peringkat tidak konsisten, keluhan masyarakat tentang keadilan, dan potensi salah alokasi dana bantuan sosial. Tidak ada proses yang dapat diaudit mengenai bagaimana keputusan peringkat dibuat.",
    research:
      "Saya mempelajari indikator kemiskinan standar pemerintah Indonesia (kriteria BPS) dan mewawancarai 5 pejabat desa untuk memahami proses evaluasi mereka saat ini. Setelah meninjau metodologi SPK (SAW, AHP, TOPSIS, VIKOR), saya memilih AHP+TOPSIS karena perbandingan berpasangan AHP selaras dengan cara berpikir alami para pejabat tentang pentingnya kriteria, dan TOPSIS memberikan peringkat terbaik ke ideal yang intuitif.",
    solution:
      "Aplikasi web Laravel di mana administrator mengonfigurasi bobot kriteria melalui matriks perbandingan berpasangan AHP, memasukkan data rumah tangga, dan sistem secara otomatis menghitung peringkat TOPSIS. Proses ini sepenuhnya dicatat dan dapat diaudit — setiap keputusan peringkat dapat dilacak kembali ke data input dan bobot.",
    architecture:
      "Arsitektur MVC menggunakan Laravel. Komputasi AHP (pengecekan rasio konsistensi, perhitungan vektor eigen) dan komputasi TOPSIS (normalisasi, matriks berbobot, solusi ideal, koefisien kedekatan) dirangkum dalam kelas layanan khusus. Hasil disimpan dalam database untuk perbandingan historis.",
    databaseDesign:
      "Entitas utama: criteria (id, name, type: benefit/cost, weight), households (id, address, family_size, ...indicators), evaluations (id, period, criteria_weights_snapshot), rankings (id, evaluation_id, household_id, topsis_score, rank). Menyimpan weights_snapshot memastikan peringkat historis tetap dapat direproduksi bahkan jika bobot kriteria berubah.",
    features: [
      { title: "Konfigurasi Bobot AHP", description: "Administrator memasukkan matriks perbandingan berpasangan melalui antarmuka yang dipandu. Sistem secara otomatis memvalidasi rasio konsistensi (CR < 0,1) dan menampilkan peringatan jika tidak konsisten." },
      { title: "Peringkat TOPSIS Otomatis", description: "Komputasi peringkat sekali klik untuk semua rumah tangga yang terdaftar, dengan tampilan komputasi langkah demi langkah untuk transparansi." },
      { title: "Manajemen Data Rumah Tangga", description: "Operasi CRUD untuk catatan rumah tangga dengan semua indikator kemiskinan yang relevan." },
      { title: "Riwayat Peringkat", description: "Semua periode evaluasi disimpan dengan reproduktibilitas penuh — administrator dapat membandingkan peringkat di berbagai periode waktu." },
      { title: "Ekspor ke PDF/Excel", description: "Peringkat dapat diekspor sebagai dokumen resmi pemerintah dengan kop surat institusi." },
    ],
    challenges: [
      {
        title: "Validasi Konsistensi AHP",
        description: "Pejabat sering kali membuat matriks perbandingan berpasangan yang tidak konsisten (CR > 0,1), sehingga membatalkan hasil.",
        solution: "Menerapkan pengecekan konsistensi real-time dengan indikator visual CR dan menyoroti perbandingan mana yang menyebabkan inkonsistensi, membimbing pengguna untuk melakukan koreksi.",
      },
      {
        title: "Menangani Data Kosong",
        description: "Beberapa catatan rumah tangga memiliki data indikator yang tidak lengkap, merusak langkah normalisasi TOPSIS.",
        solution: "Menerapkan langkah validasi data sebelum komputasi, dengan penandaan otomatis untuk catatan tidak lengkap dan kebijakan nilai default yang dapat dikonfigurasi.",
      },
    ],
    lessons: [
      "Transparansi sama pentingnya dengan akurasi dalam perangkat keputusan pemerintah — menampilkan langkah-langkah komputasi meningkatkan kepercayaan dari para pejabat.",
      "Edukasi pengguna sangat penting: Saya harus menyederhanakan antarmuka AHP secara signifikan setelah pengujian awal menunjukkan pejabat tidak memahami skala perbandingan berpasangan.",
      "Menyimpan snapshot komputasi (bukan hanya hasil) sangat penting untuk kemampuan audit dalam konteks pemerintahan.",
    ],
    results: [
      "Menggantikan 100% proses manual subjektif dengan metodologi yang objektif dan dapat diaudit",
      "Berhasil memeringkatkan 500+ rumah tangga dalam waktu kurang dari 2 menit (vs. 3 hari proses manual)",
      "Validasi rasio konsistensi mencegah 23% percobaan evaluasi yang akan menghasilkan peringkat tidak valid",
      "Diadopsi oleh administrasi desa untuk siklus distribusi bantuan sosial tahun 2024",
    ],
    futureImprovements: [
      "Integrasi dengan database DTKS (Data Terpadu Kesejahteraan Sosial) pemerintah pusat",
      "Antarmuka ramah seluler untuk pengumpulan data di lapangan",
      "Modul analisis sensitivitas untuk menunjukkan bagaimana peringkat berubah dengan konfigurasi bobot yang berbeda",
      "Dasbor analisis tren multi-periode",
    ],
    screenshots: [
      { url: "/images/projects-2/Login.png", caption: "Halaman Login" },
      { url: "/images/projects-2/Dashboard.png", caption: "Dashboard Utama" },
      { url: "/images/projects-2/PerhitunganAHP1.png", caption: "Perhitungan Metode AHP (Part 1)" },
      { url: "/images/projects-2/Perhitungan-AHP2.png", caption: "Perhitungan Metode AHP (Part 2)" },
      { url: "/images/projects-2/PerhitunganTOPSIS.png", caption: "Perhitungan Metode TOPSIS" },
      { url: "/images/projects-2/HistoryAHP.png", caption: "Riwayat Perhitungan AHP" },
      { url: "/images/projects-2/HistoryTOPSIS1.png", caption: "Riwayat Perhitungan TOPSIS (Part 1)" },
      { url: "/images/projects-2/HistoryTOPSIS2.png", caption: "Riwayat Perhitungan TOPSIS (Part 2)" },
      { url: "/images/projects-2/PerbandinganAHPTOPSIS.png", caption: "Hasil Perbandingan AHP dan TOPSIS" },
    ],
  },
  {
    slug: "travel-management-system",
    title: "Travel Management System",
    subtitle: "Platform pemesanan dan operasional perjalanan end-to-end",
    category: "web",
    categoryLabel: "Web Application",
    role: "Full Stack Developer",
    duration: "2 months",
    year: "2024",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    description:
      "Sistem manajemen perjalanan komprehensif yang menangani pembuatan paket, pemesanan pelanggan, pemrosesan pembayaran, dan manajemen rencana perjalanan untuk agen perjalanan. Dilengkapi dengan portal terpisah untuk admin, agen, dan pelanggan.",
    achievement: "Manajemen siklus pemesanan penuh · 3 peran pengguna · Pembuatan rencana perjalanan PDF",
    coverColor: "#0C4A6E",
    overview:
      "Sistem ini mendigitalkan operasi end-to-end dari agen perjalanan — mulai dari pembuatan paket dan penetapan harga hingga pemesanan pelanggan, pelacakan pembayaran, dan pengiriman rencana perjalanan (itinerary). Ini menghilangkan pelacakan spreadsheet manual dan koordinasi pemesanan berbasis WhatsApp.",
    problem:
      "Agen perjalanan mengelola pemesanan melalui pesan WhatsApp dan spreadsheet Excel, yang menyebabkan pemesanan ganda, hilangnya data pelanggan, dan pembuatan PDF manual untuk setiap itinerary. Tidak ada pandangan terpadu tentang kapasitas yang tersedia, pendapatan, atau status pemesanan.",
    research:
      "Saya memetakan alur kerja agen saat ini dengan mendampingi staf selama 2 hari, mengidentifikasi 7 hambatan proses utama. Kemudian saya merancang wireframe untuk 3 peran pengguna (admin, agen, pelanggan) dan memvalidasinya dengan pemangku kepentingan sebelum menulis satu baris kode pun.",
    solution:
      "Aplikasi Laravel berbasis peran dengan tiga portal terpisah. Admin mengontrol inventaris paket, penetapan harga, dan akun staf. Agen membuat pemesanan dan melacak pembayaran pelanggan. Pelanggan melihat pemesanan mereka, mengunduh itinerary, dan membuat konfirmasi pembayaran online.",
    architecture:
      "Arsitektur monolitik Laravel MVC dengan middleware kontrol akses berbasis peran (RBAC) kustom. Semua logika bisnis berada dalam service classes, controller dipertahankan ramping. Template Blade dengan Alpine.js untuk komponen interaktif. Pembuatan PDF melalui DomPDF.",
    databaseDesign:
      "Entitas utama: packages (id, name, destination, price, capacity, inclusions), customers, bookings (id, package_id, customer_id, date, pax, status, total_price), payments (id, booking_id, amount, proof_image, verified_at), itineraries (id, package_id, day, activity, accommodation).",
    features: [
      { title: "Manajemen Paket", description: "Admin membuat dan mengelola paket perjalanan dengan tingkatan harga, batas kapasitas, tanggal tersedia, inklusi/eksklusi, dan galeri foto." },
      { title: "Alur Pemesanan Online", description: "Wizard pemesanan multi-langkah: pilih paket → masukkan detail pelancong → pilih tanggal → tinjau → kirim dengan unggahan bukti pembayaran." },
      { title: "Verifikasi Pembayaran", description: "Agen meninjau bukti pembayaran yang diunggah dan menandai pemesanan sebagai lunas/tertunda/dibatalkan dengan catatan." },
      { title: "Pembuatan Itinerary PDF", description: "Sistem membuat itinerary PDF berlabel secara otomatis per pemesanan menggunakan DomPDF, termasuk jadwal harian dan detail akomodasi." },
      { title: "Dasbor Pemesanan", description: "Dasbor real-time yang menunjukkan alur pemesanan, pendapatan per paket, pemanfaatan kapasitas, dan keberangkatan mendatang." },
    ],
    challenges: [
      {
        title: "Race Condition pada Manajemen Kapasitas",
        description: "Upaya pemesanan yang dilakukan secara bersamaan dapat melebihi kapasitas paket jika tidak ditangani dengan hati-hati.",
        solution: "Menerapkan penguncian tingkat database (SELECT FOR UPDATE) pada pengecekan kapasitas dan pembuatan pemesanan sebagai transaksi atomik.",
      },
      {
        title: "Penanganan Gambar Bukti Pembayaran",
        description: "Pelanggan yang mengunggah gambar besar memperlambat server dan menghabiskan ruang penyimpanan dengan cepat.",
        solution: "Menerapkan kompresi gambar sisi klien sebelum pengunggahan dan pemrosesan Intervention/Image sisi server untuk menstandarkan dimensi dan kualitas.",
      },
    ],
    lessons: [
      "Pemetaan alur kerja sebelum pengkodean menghemat pekerjaan ulang yang signifikan — sesi pendampingan 2 hari mencegah setidaknya 2 minggu perubahan kebutuhan selama pengembangan.",
      "Akses berbasis peran harus dirancang sebagai prioritas utama sejak hari pertama, bukan ditambahkan belakangan.",
      "Transaksi database sangat penting kapan pun dua catatan terkait harus dibuat atau diperbarui bersamaan.",
    ],
    results: [
      "Menghilangkan insiden pemesanan ganda (0 kejadian pasca-penerapan vs 3-4 per bulan sebelumnya)",
      "Waktu pembuatan itinerary berkurang dari 45 menit menjadi instan (PDF otomatis)",
      "Riwayat pemesanan lengkap dapat diakses dalam hitungan detik vs. mencari melalui percakapan WhatsApp",
      "100% pemesanan agen kini diproses melalui sistem",
    ],
    futureImprovements: [
      "Integrasi gateway pembayaran online (Midtrans/Xendit)",
      "Sistem ulasan dan penilaian yang menghadap pelanggan",
      "Notifikasi WhatsApp/email otomatis melalui perubahan status pemesanan",
      "Aplikasi seluler bagi agen untuk memproses pemesanan saat bepergian",
    ],
    screenshots: [
      { url: "/images/projects-3/login.png", caption: "Halaman Login" },
      { url: "/images/projects-3/Dashboard.png", caption: "Dashboard Admin" },
      { url: "/images/projects-3/datajamaah.png", caption: "Data Jamaah" },
      { url: "/images/projects-3/jadwal.png", caption: "Manajemen Jadwal/Paket" },
      { url: "/images/projects-3/riwayat.png", caption: "Riwayat Jamaah" },
    ],
  },
  {
    slug: "inventory-stock-opname",
    title: "Inventory Stock Opname System",
    subtitle: "Platform pelacakan inventaris real-time dan rekonsiliasi stok",
    category: "system",
    categoryLabel: "Inventory / ERP",
    role: "Full Stack Developer",
    duration: "2 months",
    year: "2023",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    description:
      "Sistem manajemen inventaris komprehensif dengan alur kerja stock opname (penghitungan fisik), deteksi ketidaksesuaian, dan pelaporan otomatis. Dirancang untuk gudang berskala kecil hingga menengah yang mengelola ribuan SKU.",
    achievement: "Akurasi stok meningkat dari 91% menjadi 99,2% · Deteksi ketidaksesuaian otomatis",
    coverColor: "#14532D",
    overview:
      "Sistem ini menangani siklus hidup inventaris end-to-end: penerimaan barang, transfer stok, pengurangan penjualan, dan rekonsiliasi perhitungan stok fisik berkala (opname). Modul stock opname membandingkan perhitungan fisik dengan catatan sistem dan secara otomatis menandai ketidaksesuaian.",
    problem:
      "Gudang melakukan penghitungan stok manual triwulanan menggunakan formulir kertas, yang memakan waktu 3 hari penuh dan masih menghasilkan tingkat ketidaksesuaian 9% antara fisik dan stok buku. Ketidaksesuaian baru ditemukan saat penghitungan — tidak ada visibilitas real-time ke dalam pergerakan stok.",
    research:
      "Saya menganalisis data penghitungan stok historis selama 6 bulan dan mengidentifikasi bahwa 70% ketidaksesuaian berasal dari 4 akar penyebab: transfer antar gudang yang tidak tercatat, pengiriman kurang dari pemasok yang tidak ditandai saat penerimaan, kerusakan yang tidak tercatat saat ditemukan, dan kesalahan penghitungan manual saat opname.",
    solution:
      "Sistem Laravel dengan empat modul inti: (1) Penerimaan Barang dengan verifikasi kuantitas wajib, (2) Pergerakan Stok dengan alur kerja persetujuan transfer, (3) Pencatatan Kerusakan/Kehilangan dengan bukti foto, (4) Stock Opname dengan penghitungan berbantuan pemindai barcode dan pembuatan laporan ketidaksesuaian otomatis.",
    architecture:
      "Laravel MVC dengan pencatatan pergerakan stok berbasis peristiwa (event-driven). Setiap perubahan kuantitas dicatat dalam tabel buku besar stock_movements (jejak audit yang tidak dapat diubah), memungkinkan perhitungan stok real-time dengan menjumlahkan pergerakan. Ini menghilangkan anomali pembaruan dari pembaruan kuantitas stok langsung.",
    databaseDesign:
      "Entitas utama: products (id, sku, name, category, unit), warehouses, stock_movements (id, product_id, warehouse_id, type: receipt/transfer/sale/damage/adjustment, quantity, reference_id, created_by, created_at), opname_sessions (id, warehouse_id, period, status), opname_counts (id, session_id, product_id, system_qty, physical_qty, difference).",
    features: [
      { title: "Pelacakan Stok Berbasis Buku Besar", description: "Tingkat stok dihitung dari buku besar pergerakan yang tidak dapat diubah, memberikan jejak audit lengkap dari setiap perubahan kuantitas dengan atribusi pengguna." },
      { title: "Verifikasi Penerimaan Barang", description: "Alur kerja penerimaan berbasis PO dengan pemeriksaan kuantitas dan kualitas wajib sebelum stok ditambahkan ke sistem." },
      { title: "Modul Stock Opname", description: "Alur kerja penghitungan fisik yang dipandu dengan dukungan pemindaian barcode. Sistem hanya mengungkapkan kuantitas yang diharapkan setelah penghitungan dikirimkan untuk mencegah bias." },
      { title: "Laporan Ketidaksesuaian", description: "Pembuatan otomatis laporan ketidaksesuaian dengan jumlah varians, persentase, estimasi dampak keuangan, dan analisis tren vs periode opname sebelumnya." },
      { title: "Peringatan Stok Rendah", description: "Ambang batas stok minimum yang dapat dikonfigurasi per produk per gudang, dengan peringatan email ringkasan harian untuk item di bawah ambang batas." },
    ],
    challenges: [
      {
        title: "Pencegahan Bias Penghitungan",
        description: "Penghitung akan mencari stok sistem sebelum menghitung, yang menggagalkan tujuan verifikasi fisik.",
        solution: "Merancang ulang alur opname untuk memerlukan penghitungan buta (kuantitas sistem disembunyikan) hingga penyerahan, lalu mengungkapkan ketidaksesuaian setelahnya.",
      },
      {
        title: "Pembaruan Penghitungan Secara Bersamaan",
        description: "Banyak staf yang menghitung secara bersamaan dapat menciptakan race condition pada pembaruan catatan opname.",
        solution: "Menetapkan rentang produk ke anggota staf tertentu, dengan sistem menegakkan batasan tugas untuk mencegah pembaruan bersamaan pada produk yang sama.",
      },
    ],
    lessons: [
      "Pola buku besar (transaksi append-only) lebih unggul daripada bidang kuantitas stok yang dapat diubah — pola ini memungkinkan kemampuan audit, debugging, dan rekonstruksi historis.",
      "Penghitungan buta (menyembunyikan kuantitas sistem) adalah keputusan desain yang paling berdampak untuk meningkatkan akurasi.",
      "Desain perilaku pengguna sama pentingnya dengan kebenaran teknis — sistem harus menghilangkan peluang jalan pintas yang merusak kualitas data.",
    ],
    results: [
      "Akurasi stok meningkat dari 91% menjadi 99,2% pada siklus opname pertama pasca-penerapan",
      "Durasi penghitungan fisik berkurang dari 3 hari menjadi 1 hari",
      "100% pergerakan stok kini memiliki jejak audit lengkap dengan atribusi pengguna",
      "Nilai finansial ketidaksesuaian bulanan berkurang sebesar 87%",
      "Nol ketidaksesuaian yang belum terselesaikan > 5 unit sejak penerapan",
    ],
    futureImprovements: [
      "Aplikasi seluler dengan pemindaian barcode berbasis kamera untuk staf gudang",
      "Integrasi dengan sistem akuntansi (misalnya, Accurate Online) untuk posting HPP otomatis",
      "Perhitungan titik pemesanan ulang prediktif berdasarkan pola konsumsi historis",
      "Integrasi pembaca RFID untuk penghitungan massal otomatis",
    ],
    screenshots: [],
  },
];
