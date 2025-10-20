"use client";
import { useState } from "react";
import {
  BookOpen,
  TrendingUp,
  Calendar,
  FileText,
  BarChart3,
  ChevronRight,
  Check,
  Play,
  Award,
  Clock,
  Target,
  CheckCircle,
} from "lucide-react";

export default function ParentStudentFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
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
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description:
        "Sistem yang membantu guru merekap nilai tugas, ujian, dan aktivitas siswa secara otomatis, lengkap dengan grafik analisis performa.",
      points: [
        {
          icon: BarChart3,
          title: "Input Nilai Otomatis",
          desc: "Nilai dari tugas dan ujian langsung tersinkronisasi tanpa perlu input manual, menghemat waktu guru.",
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
          desc: "Nilai akhir setiap siswa langsung dihitung otomatis dengan formula yang disesuaikan oleh sekolah.",
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
          desc: "Siswa dapat melakukan presensi digital menggunakan QR Code atau lokasi GPS untuk verifikasi kehadiran.",
        },
        {
          icon: Calendar,
          title: "Rekap Kehadiran",
          desc: "Guru dan admin sekolah bisa memantau daftar hadir setiap kelas lengkap dengan status izin dan sakit.",
        },
        {
          icon: BarChart3,
          title: "Laporan Statistik",
          desc: "Visualisasi kehadiran dalam bentuk grafik dan persentase untuk memudahkan pemantauan kedisiplinan.",
        },
        {
          icon: Clock,
          title: "Riwayat Keterlambatan",
          desc: "Pantau waktu keterlambatan setiap siswa dengan alasan dan frekuensi yang tercatat otomatis di sistem.",
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
          desc: "Gunakan template profesional yang langsung terisi data siswa tanpa perlu pengolahan manual.",
        },
        {
          icon: TrendingUp,
          title: "Grafik Performa",
          desc: "Tampilkan progres akademik siswa dalam bentuk grafik agar mudah dipahami oleh guru dan orang tua.",
        },
        {
          icon: Award,
          title: "Rekap Prestasi",
          desc: "Sertakan daftar penghargaan dan pencapaian siswa selama semester untuk apresiasi lebih personal.",
        },
        {
          icon: Target,
          title: "Komentar Guru",
          desc: "Tambahkan catatan personal dari guru untuk mendukung perkembangan karakter dan akademik siswa.",
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
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description:
        "Buat materi pembelajaran dan soal ujian hanya dalam hitungan detik menggunakan kecerdasan buatan yang disesuaikan dengan kurikulum.",
      points: [
        {
          icon: FileText,
          title: "Generate Materi Otomatis",
          desc: "Masukkan topik, dan sistem AI akan menghasilkan materi pembelajaran lengkap dengan penjelasan dan contoh soal.",
        },
        {
          icon: BookOpen,
          title: "Soal Ujian Instan",
          desc: "AI membuat soal pilihan ganda, essay, atau kuis interaktif berdasarkan tingkat kesulitan yang kamu tentukan.",
        },
        {
          icon: CheckCircle,
          title: "Asisten Penilaian Cerdas",
          desc: "AI mendukung guru dalam menilai jawaban siswa secara cepat, akurat, dan transparan.",
        },

        {
          icon: TrendingUp,
          title: "Rangkuman AI",
          desc: "AI merangkum materi panjang menjadi poin-poin penting untuk memudahkan siswa memahami inti pelajaran.",
        },
      ],
    },
  ];

  const currentFeature = features[activeFeature];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-[float_15s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite_5s]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <span className="text-white font-semibold">
              👨‍👩‍👧‍👦 Portal Guru Pengajar
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Manajemen Kelas Digital
            <span className="block text-yellow-400">
              Untuk Guru Cerdas Masa Kini
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Akses semua fitur pengajaran — nilai, absensi, dan laporan siswa —
            dalam satu portal terpadu yang cepat dan aman.
          </p>
        </div>
      </div>

      {/* Features Navigation */}
      <div className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar py-4 gap-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeFeature === index
                      ? `bg-gradient-to-r ${feature.color} text-white shadow-lg scale-105`
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{feature.title}</span>
                  <span className="sm:hidden">{index + 1}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Feature Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Screenshot */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                {/* Main Screenshot */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${currentFeature.color} opacity-10`}
                  ></div>
                  <img
                    src={currentFeature.image}
                    alt={currentFeature.title}
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${currentFeature.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl cursor-pointer`}
                    >
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div
                  className={`absolute -top-4 -right-4 bg-gradient-to-r ${currentFeature.color} text-white px-6 py-3 rounded-full font-bold shadow-xl animate-bounce`}
                >
                  Fitur #{currentFeature.id}
                </div>

                {/* Decorative Elements */}
                <div
                  className={`absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r ${currentFeature.color} opacity-20 rounded-full blur-2xl`}
                ></div>
                <div
                  className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r ${currentFeature.color} opacity-20 rounded-full blur-2xl`}
                ></div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 space-y-6">
              {/* Header */}
              <div>
                <div
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${currentFeature.bgColor} px-4 py-2 rounded-full mb-4`}
                >
                  {(() => {
                    const Icon = currentFeature.icon;
                    return (
                      <Icon
                        className={`w-5 h-5 bg-gradient-to-r ${currentFeature.color} bg-clip-text text-transparent`}
                      />
                    );
                  })()}
                  <span
                    className={`font-semibold bg-gradient-to-r ${currentFeature.color} bg-clip-text text-transparent`}
                  >
                    {currentFeature.subtitle}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {currentFeature.title}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {currentFeature.description}
                </p>
              </div>

              {/* Feature Points */}
              <div className="space-y-4">
                {currentFeature.points.map((point, index) => {
                  const PointIcon = point.icon;
                  return (
                    <div
                      key={index}
                      className="group flex gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-x-2 border border-gray-100"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentFeature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <PointIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {point.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{point.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <button
                className={`group flex items-center gap-3 bg-gradient-to-r ${currentFeature.color} text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
              >
                Coba Fitur Ini
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ingin Melihat Langsung?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Jadwalkan demo gratis dan rasakan pengalaman Portal Orang Tua &
            Siswa yang luar biasa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Jadwalkan Demo
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
              Hubungi Sales
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
