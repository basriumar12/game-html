/**
 * BPMP Farm Quest: Gorontalo Edition
 * Bank 20 Soal Pilihan Ganda (A, B, C, D)
 * Topik: BPMP Gorontalo, Mutu Pendidikan, Merdeka Belajar, Pertanian Berkelanjutan & Kearifan Lokal
 */

const DEFAULT_QUESTIONS = [
  {
    id: 1,
    category: "BPMP & Mutu Pendidikan",
    question: "Apa fungsi dan peran utama BPMP (Balai Penjaminan Mutu Pendidikan) Provinsi Gorontalo dalam ekosistem pendidikan?",
    options: [
      { key: "A", text: "Melaksanakan penjaminan dan peningkatan mutu pendidikan anak usia dini, pendidikan dasar, dan menengah di Gorontalo" },
      { key: "B", text: "Mengelola anggaran belanja sekolah swasta secara langsung" },
      { key: "C", text: "Menyelenggarakan ujian kelulusan serentak skala nasional" },
      { key: "D", text: "Mencetak dan menjual buku pelajaran kurikulum sekolah" }
    ],
    answer: "A",
    explanation: "BPMP merupakan unit pelaksana teknis Kemendikbudristek yang bertugas melaksanakan penjaminan dan pemulihan mutu pendidikan usia dini, dasar, dan menengah di tingkat provinsi."
  },
  {
    id: 2,
    category: "Kearifan Lokal Gorontalo",
    question: "Gedung BPMP Provinsi Gorontalo memiliki ornamen atap dan pilar khas kebudayaan Gorontalo yang terinspirasi dari arsitektur rumah adat apa?",
    options: [
      { key: "A", text: "Rumah Gadang" },
      { key: "B", text: "Rumah Adat Dulohupa dan Bele Liyadu" },
      { key: "C", text: "Rumah Tongkonan" },
      { key: "D", text: "Rumah Joglo Jawa" },
    ],
    answer: "B",
    explanation: "Arsitektur khas daerah Gorontalo mengadaptasi rumah adat Dulohupa dengan ornamen atap pelana segitiga berundak melambangkan musyawarah mufakat dan pilar kehormatan."
  },
  {
    id: 3,
    category: "Pertanian Berkelanjutan",
    question: "Provinsi Gorontalo dikenal luas dengan julukan 'Provinsi Jagung'. Makanan tradisional berbahan dasar jagung manis berkuah rempah khas Gorontalo adalah...",
    options: [
      { key: "A", text: "Binthe Biluhuta (Milu Siram)" },
      { key: "B", text: "Coto Makassar" },
      { key: "C", text: "Tinutuan (Bubur Manado)" },
      { key: "D", text: "Kaledo Donggala" }
    ],
    answer: "A",
    explanation: "Binthe Biluhuta (Milu Siram) adalah sup jagung khas Gorontalo yang kaya nutrisi, dipadukan dengan kelapa parut segar, ikan cakalang/tuna, dan jeruk nipis."
  },
  {
    id: 4,
    category: "Mutu Pendidikan",
    question: "Instrumen nasional yang dijadikan dasar bagi satuan pendidikan dan BPMP untuk melakukan Perencanaan Berbasis Data (PBD) adalah...",
    options: [
      { key: "A", text: "Buku Rapor Sekolah manual" },
      { key: "B", text: "Platform Rapor Pendidikan" },
      { key: "C", text: "Absensi digital harian" },
      { key: "D", text: "Daftar hadir komite sekolah" }
    ],
    answer: "B",
    explanation: "Platform Rapor Pendidikan menampilkan indikator mutu hasil Asesmen Nasional sebagai landasan refleksi, identifikasi, dan benahi (PBD)."
  },
  {
    id: 5,
    category: "Merdeka Belajar",
    question: "Berikut ini yang BUKAN merupakan salah satu dari 6 dimensi Profil Pelajar Pancasila adalah...",
    options: [
      { key: "A", text: "Beriman, Bertakwa kepada Tuhan YME, dan Berakhlak Mulia" },
      { key: "B", text: "Bernalar Kritis dan Kreatif" },
      { key: "C", text: "Berkompetisi Individualistis" },
      { key: "D", text: "Berkebinekaan Global dan Mandiri" }
    ],
    answer: "C",
    explanation: "6 Dimensi Pelajar Pancasila: Beriman-Bertakwa, Berkebinekaan Global, Bergotong Royong, Mandiri, Bernalar Kritis, dan Kreatif. Individualisme bukan bagian darinya."
  },
  {
    id: 6,
    category: "Pertanian Berkelanjutan",
    question: "Praktik pertanian ramah lingkungan (eco-farming) yang menjaga kesuburan tanah perkebunan jagung di Gorontalo tanpa mencemari tanah dilakukan melalui...",
    options: [
      { key: "A", text: "Pembakaran jerami dan penggunaan pestisida kimia berlebih" },
      { key: "B", text: "Pemanfaatan pupuk kompos organik dan rotasi tanaman legum" },
      { key: "C", text: "Eksploitasi air tanah tanpa kontrol sumur bor" },
      { key: "D", text: "Monokultur terus-menerus sepanjang tahun tanpa jeda" }
    ],
    answer: "B",
    explanation: "Pupuk kompos organik dan rotasi tanaman legum mengikat nitrogen alami di tanah, meningkatkan mikroorganisme baik, dan mencegah degradasi lahan."
  },
  {
    id: 7,
    category: "Budaya Gorontalo",
    question: "Kain tenun/sulam tangan tradisional warisan budaya Gorontalo yang sangat halus dan bernilai seni tinggi disebut...",
    options: [
      { key: "A", text: "Kain Songket Palembang" },
      { key: "B", text: "Kain Sulam Karawo (Kerawang)" },
      { key: "C", text: "Kain Ulos Batak" },
      { key: "D", text: "Kain Sasirangan Banjar" }
    ],
    answer: "B",
    explanation: "Karawo adalah seni sulam tradisional Gorontalo yang dibuat dengan ketelitian tinggi mencabut dan mengikat benang kain sesuai motif."
  },
  {
    id: 8,
    category: "BPMP & Mutu Pendidikan",
    question: "Standar Pelayanan Minimal (SPM) Pendidikan di daerah menjadi fokus pendampingan BPMP. Indikator prioritas literasi dan numerasi dinilai dari...",
    options: [
      { key: "A", text: "Asesmen Nasional (AKM)" },
      { key: "B", text: "Lomba Cerdas Cermat tahunan" },
      { key: "C", text: "Ujian praktek olahraga" },
      { key: "D", text: "Penilaian kehadiran guru di kelas" }
    ],
    answer: "A",
    explanation: "Asesmen Kompetensi Minimum (AKM) dalam Asesmen Nasional mengukur kecakapan literasi membaca dan numerasi murid secara representatif."
  },
  {
    id: 9,
    category: "Pertanian & Lingkungan",
    question: "Danau purba di Gorontalo yang menjadi sumber mata air, irigasi sawah, serta habitat ikan endemik Manggabai yang wajib dijaga kelestariannya adalah...",
    options: [
      { key: "A", text: "Danau Toba" },
      { key: "B", text: "Danau Limboto" },
      { key: "C", text: "Danau Tempe" },
      { key: "D", text: "Danau Poso" }
    ],
    answer: "B",
    explanation: "Danau Limboto adalah danau kritis prioritas nasional di Gorontalo yang menjadi pusat tata air pertanian dan habitat ikan endemik payangka dan manggabai."
  },
  {
    id: 10,
    category: "Merdeka Belajar",
    question: "Konsep pembelajaran berdiferensiasi (differentiated learning) dalam Kurikulum Merdeka bertujuan untuk...",
    options: [
      { key: "A", text: "Memisahkan siswa pintar dan kurang pintar ke ruangan berbeda" },
      { key: "B", text: "Menyesuaikan proses belajar dengan kesiapan, minat, dan profil belajar murid" },
      { key: "C", text: "Memberikan nilai ujian yang seragam tanpa evaluasi tugas" },
      { key: "D", text: "Menyerahkan seluruh kurikulum kepada kemauan murid tanpa panduan guru" }
    ],
    answer: "B",
    explanation: "Pembelajaran berdiferensiasi mengakomodasi keunikan setiap murid melalui diferensiasi konten, proses, maupun produk belajar."
  },
  {
    id: 11,
    category: "Budaya Gorontalo",
    question: "Falsafah adat Gorontalo yang menjadi landasan nilai kehidupan masyarakat berbunyi 'Aadati hula-hulaa to saraa, saraa hula-hulaa to...', kelanjutannya adalah?",
    options: [
      { key: "A", text: "Kuru'ani (Al-Qur'an)" },
      { key: "B", text: "Lipu (Negeri)" },
      { key: "C", text: "Hulonthalo (Gorontalo)" },
      { key: "D", text: "Batanga (Diri Sendiri)" }
    ],
    answer: "A",
    explanation: "Falsafah luhur Gorontalo berbunyi: 'Aadati hula-hulaa to saraa, saraa hula-hulaa to Kuru'ani' (Adat bersendi syara', syara' bersendi Kitabullah/Al-Qur'an)."
  },
  {
    id: 12,
    category: "Pertanian Berkelanjutan",
    question: "Dalam peternakan ramah lingkungan (integrated farming), limbah kotoran sapi atau kambing diolah kembali menjadi...",
    options: [
      { key: "A", text: "Biogas untuk energi dan pupuk bokashi cair/padat" },
      { key: "B", text: "Bahan campuran semen bangunan jalan" },
      { key: "C", text: "Dibuang langsung ke aliran sungai irigasi" },
      { key: "D", text: "Bahan pengawet hasil panen jagung" }
    ],
    answer: "A",
    explanation: "Integrated farming memanfaatkan kotoran ternak melalui biodigester menghasilkan energi terbarukan biogas serta pupuk organik kaya hara."
  },
  {
    id: 13,
    category: "BPMP & Mutu Pendidikan",
    question: "Zona Integritas (ZI) yang dibangun oleh BPMP Provinsi Gorontalo ditujukan untuk mewujudkan predikat...",
    options: [
      { key: "A", text: "WBK (Wilayah Bebas dari Korupsi) dan WBBM (Wilayah Birokrasi Bersih dan Melayani)" },
      { key: "B", text: "Wilayah Bebas Pajak dan Bea Masuk Sekolah" },
      { key: "C", text: "Kawasan Industri Khusus Pendidikan Terbuka" },
      { key: "D", text: "Zona Sertifikasi Guru Tanpa Evaluasi Kinerja" }
    ],
    answer: "A",
    explanation: "Pembangunan Zona Integritas pada UPT Kemendikbudristek berfokus pada reformasi birokrasi, pencegahan korupsi, dan pelayanan prima kepada insan pendidikan."
  },
  {
    id: 14,
    category: "Merdeka Belajar",
    question: "Tiga instrumen utama yang dinilai dalam Asesmen Nasional (AN) adalah...",
    options: [
      { key: "A", text: "Asesmen Kompetensi Minimum (AKM), Survei Karakter, dan Survei Lingkungan Belajar" },
      { key: "B", text: "Ujian Tulis, Ujian Lisan, dan Ujian Praktik Fisik" },
      { key: "C", text: "Tes IQ, Tes Kepribadian, dan Tes Minat Bakat" },
      { key: "D", text: "Portofolio Siswa, Piagam Juara, dan Ijazah Terakhir" }
    ],
    answer: "A",
    explanation: "Asesmen Nasional memotret mutu komprehensif melalui AKM (literasi/numerasi), Survei Karakter (sikap & nilai), dan Sulingjar (iklim lingkungan sekolah)."
  },
  {
    id: 15,
    category: "Pertanian & Lingkungan",
    question: "Teknik konservasi tanah di lereng perbukitan Gorontalo guna mencegah erosi dan longsor saat menanam komoditas jagung adalah...",
    options: [
      { key: "A", text: "Pembuatan Terasering (Sengkedan) dan Penanaman Rumput Vetiver" },
      { key: "B", text: "Penebangan seluruh pohon peneduh hutan lindung" },
      { key: "C", text: "Pembajakan tanah searah dengan lereng curam" },
      { key: "D", text: "Penyiraman tanah dengan zat asam kimia" }
    ],
    answer: "A",
    explanation: "Terasering dan penanaman tanaman penguat tebing seperti rumput akar wangi (vetiver) menahan laju aliran air permukaan dan mencegah erosi tanah."
  },
  {
    id: 16,
    category: "Budaya Gorontalo",
    question: "Alat musik perkusi bambu tradisional khas masyarakat Gorontalo yang dimainkan dengan cara dipukulkan ke lutut atau telapak tangan adalah...",
    options: [
      { key: "A", text: "Polopalo" },
      { key: "B", text: "Angklung" },
      { key: "C", text: "Kolintang" },
      { key: "D", text: "Sasando" }
    ],
    answer: "A",
    explanation: "Polopalo adalah alat musik idiofon khas Gorontalo yang terbuat dari seruas bambu pilihan yang dipotong dan dihaluskan bentuk garpunya."
  },
  {
    id: 17,
    category: "BPMP & Mutu Pendidikan",
    question: "Siklus peningkatan mutu yang direkomendasikan BPMP melalui Perencanaan Berbasis Data (PBD) terdiri atas 3 tahapan utama yaitu...",
    options: [
      { key: "A", text: "Identifikasi, Refleksi, dan Benahi (IRB)" },
      { key: "B", text: "Catat, Hapus, dan Ulangi (CHU)" },
      { key: "C", text: "Daftar, Seleksi, dan Luluskan (DSL)" },
      { key: "D", text: "Beli, Pasang, dan Pakai (BPP)" }
    ],
    answer: "A",
    explanation: "Tahapan IRB (Identifikasi masalah mutu dari indikator, Refleksi akar penyebab masalah, dan Benahi dengan program nyata) adalah prinsip inti PBD."
  },
  {
    id: 18,
    category: "Pertanian Berkelanjutan",
    question: "Sistem irigasi pertanian modern yang paling efisien menghemat air di lahan perkebunan kering adalah...",
    options: [
      { key: "A", text: "Irigasi Tetes (Drip Irrigation)" },
      { key: "B", text: "Penggenangan air banjir total" },
      { key: "C", text: "Menunggu hujan musiman semata" },
      { key: "D", text: "Penyemprotan selang bertekanan tinggi setiap jam" }
    ],
    answer: "A",
    explanation: "Irigasi tetes mengalirkan air dan nutrisi langsung ke zona perakaran tanaman secara presisi, meminimalkan penguapan hingga lebih dari 60%."
  },
  {
    id: 19,
    category: "Kearifan Lokal Gorontalo",
    question: "Tradisi masyarakat Gorontalo menyalakan lampu minyak tanah (pelita) serentak di malam ke-27 Ramadhan (Lailatul Qadar) disebut...",
    options: [
      { key: "A", text: "Tumbilotohe" },
      { key: "B", text: "Sekaten" },
      { key: "C", text: "Bau Nyale" },
      { key: "D", text: "Rambu Solo" }
    ],
    answer: "A",
    explanation: "Tumbilotohe adalah warisan budaya takbenda khas Gorontalo, di mana ribuan lampu minyak dinyalakan menghiasi halaman dan jalan menjelang Idul Fitri."
  },
  {
    id: 20,
    category: "Merdeka Belajar",
    question: "Projek Penguatan Profil Pelajar Pancasila (P5) memberikan kesempatan kepada siswa untuk...",
    options: [
      { key: "A", text: "Mengeksplorasi isu nyata seperti lingkungan, kearifan lokal, dan kewirausahaan melalui proyek kolaboratif" },
      { key: "B", text: "Menghafal rumus matematika tingkat universitas tanpa praktik" },
      { key: "C", text: "Menghabiskan jam pelajaran untuk bermain game tanpa tujuan pembelajaran" },
      { key: "D", text: "Mengerjakan tugas rumah tangga guru" }
    ],
    answer: "A",
    explanation: "P5 adalah pembelajaran lintas disiplin ilmu kontekstual untuk mengamati dan memikirkan solusi atas masalah di lingkungan sekitar."
  }
];

window.DEFAULT_QUESTIONS = DEFAULT_QUESTIONS;
