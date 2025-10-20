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
  Users,
  UserCheck,
  CreditCard,
  Wallet,
  PieChart,
  CalendarDays,
  FileChartColumn,
  BrainCircuit,
  MessageSquare,
  Cpu,
  Boxes,
  Package,
  ClipboardCheck,
  Megaphone,
  Bell,
} from "lucide-react";

export default function HeadSchoolFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 1,
      icon: Users,
      title: "Manajemen Guru & Siswa",
      subtitle: "Satu Portal Untuk Semua Data Sekolah",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
      description:
        "Kelola seluruh data guru dan siswa dalam satu sistem terpusat. Pantau aktivitas mengajar, presensi, hingga kinerja akademik secara real-time.",
      points: [
        {
          icon: UserCheck,
          title: "Data Terpadu",
          desc: "Seluruh data siswa dan guru tersinkronisasi otomatis antara kelas, jadwal, dan kehadiran.",
        },
        {
          icon: BarChart3,
          title: "Monitoring Kinerja",
          desc: "Lihat laporan performa guru dan perkembangan akademik siswa dari dashboard kepala sekolah.",
        },
        {
          icon: Calendar,
          title: "Manajemen Jadwal",
          desc: "Atur dan pantau jadwal mengajar, kegiatan sekolah, serta pembagian kelas secara efisien.",
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
          desc: "Siswa dapat melakukan pembayaran melalui sistem online dengan bukti otomatis tercatat.",
        },
        {
          icon: FileText,
          title: "Rekap Transaksi",
          desc: "Laporan keuangan lengkap dengan filter tanggal, kategori, dan status pembayaran.",
        },
        {
          icon: PieChart,
          title: "Analisis Keuangan",
          desc: "Pantau arus kas dan proporsi pengeluaran sekolah dalam tampilan grafik interaktif.",
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
          desc: "Absensi guru menggunakan GPS atau QR Code untuk validasi kehadiran yang akurat.",
        },
        {
          icon: Clock,
          title: "Rekap Kehadiran",
          desc: "Lihat riwayat keterlambatan, izin, dan absensi langsung dari dashboard kepala sekolah.",
        },
        {
          icon: Calendar,
          title: "Manajemen Jadwal",
          desc: "Buat, ubah, dan distribusikan jadwal mengajar guru hanya dengan beberapa klik.",
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
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=600&fit=crop",
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
          desc: "Lihat status terkini dari setiap aset — apakah sedang digunakan, rusak, atau butuh perawatan.",
        },
        {
          icon: FileText,
          title: "Laporan Inventaris",
          desc: "Generate laporan aset sekolah dalam format PDF atau Excel untuk kebutuhan audit dan administrasi.",
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
        "Atur jadwal kegiatan sekolah dan sampaikan pengumuman penting dengan cepat kepada guru, siswa, dan orang tua melalui sistem terintegrasi.",
      points: [
        {
          icon: CalendarDays,
          title: "Jadwal Kegiatan Sekolah",
          desc: "Rancang dan publikasikan kegiatan seperti rapat, upacara, atau lomba agar semua pihak tetap terinformasi.",
        },
        {
          icon: Megaphone,
          title: "Pengumuman Digital",
          desc: "Sampaikan informasi penting langsung ke portal guru, siswa, dan orang tua secara serentak.",
        },
        {
          icon: Bell,
          title: "Notifikasi Otomatis",
          desc: "Setiap pengumuman dan kegiatan baru akan mengirimkan notifikasi otomatis ke pengguna terkait.",
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
              🏫 Portal Manajemen Sekolah
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Kelola Inventaris, Kegiatan, & Pengumuman
            <span className="block text-yellow-400">
              Dalam Satu Sistem Sekolah Terpadu
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pantau aset sekolah, atur agenda kegiatan, dan sampaikan informasi
            penting ke seluruh warga sekolah secara mudah, cepat, dan terpusat.
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
