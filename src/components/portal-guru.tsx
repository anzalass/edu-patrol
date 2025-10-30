"use client";
import {
  BookOpen,
  TrendingUp,
  Calendar,
  FileText,
  BarChart3,
  Check,
  Award,
  Clock,
  Target,
  CheckCircle,
} from "lucide-react";
import Fiturfitur, { FeatureItem, Hero } from "./fitur-fitur";

export default function TeacherFeatures() {
  const hero: Hero = {
    titleJumbo: "Manajemen Kelas Digital",
    highlight: "Untuk Guru Cerdas Masa Kini",
    subtitleJumbo:
      "Akses semua fitur pengajaran — nilai, absensi, dan laporan siswa — dalam satu portal terpadu yang cepat dan aman.",
  };

  const features: FeatureItem[] = [
    {
      id: 1,
      icon: BookOpen,
      title: "Pengelolaan Kelas",
      subtitle: "Akses Materi & Kerjakan Tugas Kapan Saja",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      description:
        "Kelola seluruh aktivitas belajar di kelas — mulai dari materi, tugas, hingga ujian — dalam satu platform digital yang mudah digunakan oleh guru dan siswa.",
      points: [
        {
          icon: BookOpen,
          title: "Manajemen Materi",
          desc: "Guru dapat mengunggah dan mengatur materi pembelajaran dalam berbagai format seperti dokumen, video, dan link interaktif.",
        },
        {
          icon: FileText,
          title: "Tugas & Penilaian",
          desc: "Buat, kumpulkan, dan nilai tugas langsung di sistem. Semua proses otomatis tercatat dan tersinkronisasi dengan kelas terkait.",
        },
        {
          icon: Award,
          title: "Kelas Interaktif",
          desc: "Gunakan fitur presentasi dan kuis langsung untuk meningkatkan keterlibatan siswa selama proses pembelajaran.",
        },
      ],
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Pengelolaan Nilai",
      subtitle: "Pantau Performa Akademik Secara Real-Time",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      image: "/pengelola_nilai.jpg",
      description:
        "Sistem yang membantu guru merekap nilai tugas, ujian, dan aktivitas siswa secara otomatis, lengkap dengan grafik analisis performa.",
      points: [
        {
          icon: BarChart3,
          title: "Input Nilai Otomatis",
          desc: "Nilai dari tugas dan ujian langsung tersinkronisasi tanpa perlu input manual.",
        },
        {
          icon: TrendingUp,
          title: "Analisis Nilai",
          desc: "Lihat perbandingan nilai antar siswa dan tren peningkatan atau penurunan performa akademik.",
        },
        {
          icon: Award,
          title: "Kategorisasi Penilaian",
          desc: "Atur bobot nilai berdasarkan kategori seperti tugas, kuis, UTS, dan UAS agar hasil akhir lebih proporsional.",
        },
        {
          icon: Target,
          title: "Rekap Otomatis",
          desc: "Nilai akhir setiap siswa langsung dihitung otomatis sesuai formula sekolah.",
        },
      ],
    },
    {
      id: 3,
      icon: Calendar,
      title: "Pengelolaan Kehadiran Siswa",
      subtitle: "Pantau Absensi Secara Akurat & Real-Time",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      description:
        "Sistem absensi digital untuk mencatat kehadiran siswa secara otomatis, lengkap dengan notifikasi dan laporan rekap bulanan.",
      points: [
        {
          icon: Check,
          title: "Absensi Otomatis",
          desc: "Presensi digital menggunakan QR Code atau lokasi GPS.",
        },
        {
          icon: Calendar,
          title: "Rekap Kehadiran",
          desc: "Pantau daftar hadir setiap kelas lengkap dengan status izin dan sakit.",
        },
        {
          icon: BarChart3,
          title: "Laporan Statistik",
          desc: "Visualisasi kehadiran dalam bentuk grafik dan persentase.",
        },
        {
          icon: Clock,
          title: "Riwayat Keterlambatan",
          desc: "Pantau waktu keterlambatan siswa dengan alasan dan frekuensi otomatis.",
        },
      ],
    },
    {
      id: 4,
      icon: FileText,
      title: "Otomasi Pembuatan Raport",
      subtitle: "Laporan Akademik Cepat, Akurat, dan Profesional",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      description:
        "Pembuatan raport menjadi lebih efisien dengan sistem otomatis yang menarik data nilai, absensi, dan catatan guru secara instan.",
      points: [
        {
          icon: FileText,
          title: "Template Raport Otomatis",
          desc: "Gunakan template profesional yang langsung terisi data siswa.",
        },
        {
          icon: TrendingUp,
          title: "Grafik Performa",
          desc: "Tampilkan progres akademik siswa dalam bentuk grafik mudah dipahami.",
        },
        {
          icon: Award,
          title: "Rekap Prestasi",
          desc: "Sertakan daftar penghargaan dan pencapaian siswa selama semester.",
        },
        {
          icon: Target,
          title: "Komentar Guru",
          desc: "Tambahkan catatan personal dari guru untuk perkembangan siswa.",
        },
      ],
    },
    {
      id: 5,
      icon: BarChart3,
      title: "Implementasi Teknologi AI",
      subtitle: "Hemat Waktu Guru Dengan Otomasi Pintar",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      image: "/ai_implement.jpg",
      description:
        "Buat materi pembelajaran dan soal ujian hanya dalam hitungan detik menggunakan kecerdasan buatan yang disesuaikan dengan kurikulum.",
      points: [
        {
          icon: FileText,
          title: "Generate Materi Otomatis",
          desc: "Masukkan topik, dan sistem AI menghasilkan materi lengkap otomatis.",
        },
        {
          icon: BookOpen,
          title: "Soal Ujian Instan",
          desc: "AI membuat soal pilihan ganda, essay, atau kuis interaktif otomatis.",
        },
        {
          icon: CheckCircle,
          title: "Asisten Penilaian Cerdas",
          desc: "AI membantu menilai jawaban siswa dengan cepat dan akurat.",
        },
        {
          icon: TrendingUp,
          title: "Rangkuman AI",
          desc: "AI merangkum materi panjang menjadi poin-poin penting.",
        },
      ],
    },
  ];

  return <Fiturfitur features={features} hero={hero} />;
}
