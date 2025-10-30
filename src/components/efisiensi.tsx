"use client";
import { useState, useEffect } from "react";
import {
  DollarSign,
  Clock,
  Zap,
  Leaf,
  TrendingDown,
  Users,
  FileCheck,
  BarChart2,
} from "lucide-react";
import Link from "next/link";

export default function EfficiencySection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const efficiencies = [
    {
      icon: DollarSign,
      title: "Hemat Biaya",
      subtitle: "Kurangi Pengeluaran Operasional Hingga 60%",
      color: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-500/20 to-green-600/20",
      items: [
        {
          icon: TrendingDown,
          title: "Eliminasi Biaya Printing",
          description:
            "Tidak perlu lagi mencetak ribuan lembar soal, raport, dan dokumen administrasi. Semua serba digital dan tersimpan dengan aman di cloud.",
        },
        {
          icon: Leaf,
          title: "Zero Paper, Zero Waste",
          description:
            "Hemat biaya pembelian kertas hingga jutaan rupiah per tahun. Sekaligus berkontribusi untuk lingkungan yang lebih hijau dan berkelanjutan.",
        },
        {
          icon: FileCheck,
          title: "Ramah Lingkungan",
          description:
            "Setiap sekolah menyelamatkan rata-rata 50+ pohon per tahun dengan beralih ke sistem digital. Mari jaga bumi untuk generasi mendatang.",
        },
      ],
    },
    {
      icon: Clock,
      title: "Hemat Waktu",
      subtitle: "Efisiensi Waktu Hingga 70% untuk Hal Produktif",
      color: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-500/20 to-cyan-600/20",
      items: [
        {
          icon: BarChart2,
          title: "Penilaian & Analisis Otomatis",
          description:
            "Sistem otomatis menilai soal pilihan ganda dan menganalisis butir soal dalam hitungan detik. Guru fokus pada pembelajaran, bukan mengoreksi.",
        },
        {
          icon: Users,
          title: "Monitoring Real-Time Orang Tua",
          description:
            "Orang tua dapat memantau perkembangan akademik anak kapan saja, di mana saja. Tidak perlu menunggu rapat atau panggilan dari sekolah.",
        },
        {
          icon: Clock,
          title: "Proses Administrasi Instan",
          description:
            "Laporan, rekapitulasi, dan dokumen penting ter-generate otomatis. Tidak ada lagi lembur untuk menyelesaikan administrasi bulanan.",
        },
      ],
    },
    {
      icon: Zap,
      title: "Hemat Energi",
      subtitle: "Otomatisasi Tugas Repetitif, Tingkatkan Produktivitas",
      color: "from-orange-500 to-red-600",
      bgGradient: "from-orange-500/20 to-red-600/20",
      items: [
        {
          icon: Users,
          title: "Automasi Multi-Level",
          description:
            "Membantu guru, admin, kepala sekolah hingga dinas pendidikan dalam mengelola administrasi tanpa repot. Satu sistem untuk semua kebutuhan.",
        },
        {
          icon: FileCheck,
          title: "Absensi Digital Otomatis",
          description:
            "Guru cukup scan QR code atau tap sekali, absensi langsung tercatat. Rekap kehadiran otomatis ter-update di sistem tanpa input manual.",
        },
        {
          icon: Zap,
          title: "Workflow Terotomatisasi",
          description:
            "Dari input nilai hingga pembuatan raport, semuanya mengalir otomatis. Tim sekolah bisa fokus pada inovasi pembelajaran, bukan paperwork.",
        },
      ],
    },
  ];

  const current = efficiencies[activeTab];
  const Icon = current.icon;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[float_10s_ease-in-out_infinite_2s]"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[float_12s_ease-in-out_infinite_4s]"></div>
      </div>

      {/* Dots Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse shadow-lg">
            ⚡ Efisiensi 3H - Hemat Biaya, Waktu & Energi
          </div> */}
          <h2 className="text-xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
            Investasi Cerdas untuk
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              Masa Depan Pendidikan
            </span>
          </h2>
          <p className="text-base md:text-xl text-blue-200 max-w-3xl mx-auto">
            Tingkatkan efisiensi operasional sekolah dan fokus pada hal yang
            benar-benar penting: kualitas pendidikan
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {efficiencies.map((item, index) => {
            const TabIcon = item.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 ${
                  activeTab === index
                    ? "bg-white text-gray-900 shadow-2xl scale-105"
                    : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      activeTab === index
                        ? `bg-gradient-to-br ${item.color}`
                        : "bg-white/20"
                    }`}
                  >
                    <TabIcon
                      className={`w-5 h-5 ${
                        activeTab === index ? "text-white" : "text-white"
                      }`}
                    />
                  </div>
                  <span>{item.title}</span>
                </div>
                {activeTab === index && (
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-10 animate-pulse`}
                  ></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="relative">
          <div
            className={`bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 transition-all duration-500 transform ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Header */}
            <div className="flex items-center gap-6 mb-12 pb-8 border-b border-white/20">
              <div>
                <h3 className="text-lg sm:text-2xl md:text-4xl font-bold text-white mb-2">
                  {current.title}
                </h3>
                <p className="text-base sm:text-xl text-blue-200">
                  {current.subtitle}
                </p>
              </div>
            </div>

            {/* Items Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {current.items.map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-white/30 hover:-translate-y-2 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${current.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    <div className="relative">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${current.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                      >
                        <ItemIcon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <h4 className="text-base sm:text-xl font-bold text-white mb-3">
                        {item.title}
                      </h4>
                      <p className="text-blue-200 sm:text-base text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Animated Border Bottom */}
                      <div
                        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${current.color} w-0 group-hover:w-full transition-all duration-500 rounded-full`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div
                  className={`text-xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${current.color} mb-2`}
                >
                  60%
                </div>
                <div className="text-blue-200 font-medium">Hemat Biaya</div>
              </div>
              <div className="text-center">
                <div
                  className={`text-xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${current.color} mb-2`}
                >
                  70%
                </div>
                <div className="text-blue-200 font-medium">Hemat Waktu</div>
              </div>
              <div className="text-center">
                <div
                  className={`text-xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${current.color} mb-2`}
                >
                  80%
                </div>
                <div className="text-blue-200 font-medium">Hemat Energi</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href={"https://api.whatsapp.com/send?phone=62859102604165"}
            className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-3">
              Mulai Hemat Sekarang
              <svg
                className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
