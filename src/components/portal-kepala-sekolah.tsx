"use client";
import {
  Users,
  UserCheck,
  FileText,
  Building,
  Calendar,
  CreditCard,
  Wallet,
  PieChart,
  CalendarDays,
  CheckCircle,
  Clock,
  Boxes,
  Package,
  ClipboardCheck,
  Megaphone,
  Bell,
} from "lucide-react";
import Fiturfitur, { FeatureItem, Hero } from "./fitur-fitur";

export default function HeadSchoolFeatures() {
  const hero: Hero = {
    titleJumbo: "Portal Manajemen Sekolah",
    highlight: "Dalam Satu Sistem Sekolah Terpadu",
    subtitleJumbo:
      "Pantau aset sekolah, atur agenda kegiatan, dan sampaikan informasi penting ke seluruh warga sekolah secara mudah, cepat, dan terpusat.",
  };

  const features: FeatureItem[] = [
    {
      id: 1,
      icon: Users,
      title: "Manajemen Sekolah Terpadu",
      subtitle: "Kendalikan Semua Data Dalam Satu Sistem",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
      description:
        "Kepala sekolah dapat mengelola seluruh aspek administrasi sekolah — mulai dari data guru, siswa, kelas, ruangan, arsip penting, hingga kegiatan sekolah — semuanya terintegrasi dalam satu portal digital.",
      points: [
        {
          icon: UserCheck,
          title: "Data Guru & Siswa",
          desc: "Pantau data personal, kehadiran, dan aktivitas akademik secara real-time.",
        },
        {
          icon: FileText,
          title: "Pengelolaan Arsip Digital",
          desc: "Simpan dan kelola dokumen penting sekolah secara terpusat dan mudah diakses.",
        },
        {
          icon: Building,
          title: "Kelas & Ruangan",
          desc: "Atur penggunaan ruangan, jadwal kelas, serta alokasi sumber daya dengan efisien.",
        },
        {
          icon: Calendar,
          title: "Kegiatan Sekolah",
          desc: "Rencanakan dan pantau seluruh agenda seperti rapat, lomba, dan acara penting lainnya.",
        },
      ],
    },
    {
      id: 2,
      icon: CreditCard,
      title: "Manajemen Keuangan Sekolah",
      subtitle: "Transparansi dan Akurasi Pembayaran SPP",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      image:
        "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=800&h=600&fit=crop",
      description:
        "Kelola seluruh transaksi keuangan sekolah secara otomatis, termasuk pembayaran SPP, gaji guru, dan pengeluaran operasional.",
      points: [
        {
          icon: Wallet,
          title: "Pembayaran Digital",
          desc: "Siswa dapat melakukan pembayaran online dengan bukti otomatis tercatat.",
        },
        {
          icon: FileText,
          title: "Rekap Transaksi",
          desc: "Laporan keuangan lengkap dengan filter tanggal, kategori, dan status pembayaran.",
        },
        {
          icon: PieChart,
          title: "Analisis Keuangan",
          desc: "Pantau arus kas dan proporsi pengeluaran sekolah dalam grafik interaktif.",
        },
      ],
    },
    {
      id: 3,
      icon: CalendarDays,
      title: "Presensi & Jadwal Guru",
      subtitle: "Sistem Absensi Modern & Terintegrasi",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
      description:
        "Pantau kehadiran guru dan kegiatan belajar mengajar secara real-time, lengkap dengan validasi lokasi dan laporan otomatis.",
      points: [
        {
          icon: CheckCircle,
          title: "Presensi Otomatis",
          desc: "Absensi guru menggunakan GPS atau QR Code untuk validasi kehadiran.",
        },
        {
          icon: Clock,
          title: "Rekap Kehadiran",
          desc: "Lihat riwayat keterlambatan, izin, dan absensi langsung dari dashboard kepala sekolah.",
        },
      ],
    },
    {
      id: 4,
      icon: Boxes,
      title: "Manajemen Inventaris Sekolah",
      subtitle: "Pantau Aset & Fasilitas Secara Real-Time",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      image: "/inventaris.jpg",
      description:
        "Sistem pencatatan inventaris digital untuk memantau aset sekolah seperti perlengkapan, peralatan, dan ruang kelas secara efisien dan transparan.",
      points: [
        {
          icon: Package,
          title: "Pencatatan Aset Otomatis",
          desc: "Catat dan kelola semua barang milik sekolah dengan mudah, lengkap dengan kondisi dan lokasi penyimpanan.",
        },
        {
          icon: ClipboardCheck,
          title: "Pemantauan Stok & Kondisi",
          desc: "Lihat status terkini dari setiap aset — digunakan, rusak, atau butuh perawatan.",
        },
        {
          icon: FileText,
          title: "Laporan Inventaris",
          desc: "Generate laporan aset sekolah untuk audit dan administrasi.",
        },
      ],
    },
    {
      id: 5,
      icon: Megaphone,
      title: "Manajemen Kegiatan & Pengumuman",
      subtitle: "Koordinasi Informasi Sekolah Lebih Efektif",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      description:
        "Atur jadwal kegiatan sekolah dan sampaikan pengumuman penting dengan cepat kepada guru, siswa, dan orang tua.",
      points: [
        {
          icon: CalendarDays,
          title: "Jadwal Kegiatan Sekolah",
          desc: "Rancang dan publikasikan kegiatan seperti rapat, upacara, atau lomba.",
        },
        {
          icon: Megaphone,
          title: "Pengumuman Digital",
          desc: "Sampaikan informasi langsung ke portal guru, siswa, dan orang tua.",
        },
        {
          icon: Bell,
          title: "Notifikasi Otomatis",
          desc: "Setiap pengumuman dan kegiatan baru mengirimkan notifikasi otomatis.",
        },
      ],
    },
  ];

  return <Fiturfitur features={features} hero={hero} />;
}
