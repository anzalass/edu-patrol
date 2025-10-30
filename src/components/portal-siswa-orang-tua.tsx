"use client";
import {
  BookOpen,
  TrendingUp,
  Calendar,
  FileText,
  BarChart3,
  Check,
  Play,
  Award,
  CheckCircle,
  MessageCircle,
  MessageSquare,
  UserCheck,
  HeartHandshake,
  Bell,
} from "lucide-react";
import Fiturfitur, { FeatureItem, Hero } from "./fitur-fitur";

export default function ParentStudentFeatures() {
  const hero: Hero = {
    titleJumbo: "Portal Orang Tua & Siswa",
    highlight: "Terhubung, Transparan, dan Interaktif",
    subtitleJumbo:
      "Pantau perkembangan anak, presensi, nilai, hingga kegiatan sekolah langsung dari satu platform digital yang mudah digunakan.",
  };

  const features: FeatureItem[] = [
    {
      id: 1,
      icon: BookOpen,
      title: "Akses Materi & Tugas Digital",
      subtitle: "Belajar Lebih Mudah, Kapan Saja dan Di Mana Saja",
      color: "from-sky-500 to-blue-500",
      bgColor: "from-sky-50 to-blue-50",
      image: "/lms.jpg",
      description:
        "Siswa dapat belajar fleksibel melalui platform digital yang menyediakan materi, tugas, dan ujian yang bisa diakses kapan pun — semuanya terhubung langsung dengan guru.",
      points: [
        {
          icon: BookOpen,
          title: "Materi Interaktif",
          desc: "Akses dokumen, video, dan link edukatif yang disusun langsung oleh guru.",
        },
        {
          icon: FileText,
          title: "Tugas & Ujian Online",
          desc: "Kerjakan tugas dan ujian dari perangkat apapun dengan tampilan ramah pengguna.",
        },
        {
          icon: CheckCircle,
          title: "Notifikasi Tugas",
          desc: "Dapatkan pengingat otomatis untuk tugas yang belum selesai agar tidak terlewat.",
        },
      ],
    },
    {
      id: 2,
      icon: Calendar,
      title: "Presensi & Izin Digital",
      subtitle: "Absensi Lebih Mudah, Transparansi Lebih Jelas",
      color: "from-emerald-500 to-green-500",
      bgColor: "from-emerald-50 to-green-50",
      image: "/attendence.jpg",
      description:
        "Pantau kehadiran siswa secara real-time dan ajukan izin langsung tanpa harus datang ke sekolah.",
      points: [
        {
          icon: Check,
          title: "Presensi Digital",
          desc: "Siswa cukup presensi menggunakan QR Code atau GPS sesuai lokasi sekolah.",
        },
        {
          icon: Calendar,
          title: "Izin Online",
          desc: "Orang tua dapat mengajukan izin sakit atau pribadi langsung dari aplikasi.",
        },
        {
          icon: BarChart3,
          title: "Rekap Kehadiran",
          desc: "Lihat statistik kehadiran anak lengkap dengan status hadir, izin, atau terlambat.",
        },
      ],
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Perkembangan Akademik Anak",
      subtitle: "Pantau Nilai & Progres Belajar Secara Real-Time",
      color: "from-purple-500 to-fuchsia-500",
      bgColor: "from-purple-50 to-fuchsia-50",
      image: "/perkembangan.jpg",
      description:
        "Orang tua dapat memantau nilai, hasil ujian, dan grafik perkembangan anak setiap semester tanpa menunggu rapor manual.",
      points: [
        {
          icon: BarChart3,
          title: "Nilai Tersinkron",
          desc: "Nilai otomatis muncul setelah guru menilai tugas atau ujian.",
        },
        {
          icon: TrendingUp,
          title: "Grafik Performa Belajar",
          desc: "Visualisasi progres anak di setiap mata pelajaran secara interaktif.",
        },
        {
          icon: Award,
          title: "Catatan Guru",
          desc: "Guru memberikan evaluasi dan umpan balik perkembangan siswa.",
        },
      ],
    },
    {
      id: 4,
      icon: Bell,
      title: "Informasi & Pengumuman Sekolah",
      subtitle: "Selalu Update dengan Kegiatan Sekolah",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      description:
        "Semua informasi penting seperti jadwal ujian, kegiatan sekolah, dan pengumuman resmi bisa diakses langsung dari dashboard.",
      points: [
        {
          icon: Bell,
          title: "Notifikasi Real-Time",
          desc: "Terima pemberitahuan langsung untuk pengumuman terbaru dari sekolah.",
        },
        {
          icon: Calendar,
          title: "Agenda Sekolah",
          desc: "Lihat jadwal acara dan kegiatan ekstrakurikuler langsung di kalender digital.",
        },
        {
          icon: FileText,
          title: "Surat & Informasi Resmi",
          desc: "Unduh surat resmi dan pengumuman ujian dengan mudah.",
        },
      ],
    },
    {
      id: 5,
      icon: MessageCircle,
      title: "Kolaborasi Guru, Siswa, & Orang Tua",
      subtitle: "Komunikasi Lancar, Dukungan Maksimal",
      color: "from-indigo-500 to-blue-600",
      bgColor: "from-indigo-50 to-blue-50",
      image:
        "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&h=600&fit=crop",
      description:
        "Bangun komunikasi positif antara sekolah dan rumah demi perkembangan akademik dan karakter anak.",
      points: [
        {
          icon: MessageSquare,
          title: "Forum Diskusi",
          desc: "Siswa dan Orang Tua dapat berdiskusi langsung dengan guru ",
        },

        {
          icon: HeartHandshake,
          title: "Kolaborasi Positif",
          desc: "Hubungan harmonis antara sekolah dan rumah tercipta melalui komunikasi dua arah.",
        },
      ],
    },
  ];

  return <Fiturfitur features={features} hero={hero} />;
}
