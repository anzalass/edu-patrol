"use client";
import { useState } from "react";
import {
  GraduationCap,
  Users,
  BarChart3,
  Heart,
  Building2,
  Check,
} from "lucide-react";

export default function BenefitsSection() {
  const [activeCard, setActiveCard] = useState<any>(null);

  const benefits = [
    {
      icon: GraduationCap,
      title: "Siswa",
      subtitle: "Belajar Lebih Mudah & Menyenangkan",
      description:
        "Akses materi pembelajaran yang lengkap, terstruktur, dan interaktif. Belajar jadi lebih efektif dengan konten yang disesuaikan dengan gaya belajar modern.",
      features: [
        "Materi pembelajaran multimedia lengkap",
        "Akses 24/7 dari mana saja",
        "Interface user-friendly untuk generasi digital",
        "Progress tracking otomatis",
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      delay: "0s",
    },
    {
      icon: Users,
      title: "Guru",
      subtitle: "Mengajar Lebih Efektif & Efisien",
      description:
        "Otomatisasi tugas administratif membebaskan waktu guru untuk fokus pada hal yang paling penting: mengajar dan membimbing siswa dengan lebih baik.",
      features: [
        "Hemat waktu hingga 70% untuk administrasi",
        "Tools lengkap untuk pembelajaran digital",
        "Penilaian otomatis dan akurat",
        "Komunikasi mudah dengan siswa & orang tua",
      ],
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      delay: "0.1s",
    },
    {
      icon: BarChart3,
      title: "Kepala Sekolah",
      subtitle: "Manajemen Sekolah yang Optimal",
      description:
        "Dashboard lengkap untuk mengoptimalkan administrasi dan manajemen sekolah. Ambil keputusan strategis berdasarkan data real-time yang akurat.",
      features: [
        "Dashboard analitik komprehensif",
        "Monitoring kinerja real-time",
        "Laporan otomatis dan detail",
        "Kontrol penuh sistem sekolah",
      ],
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      delay: "0.2s",
    },
    {
      icon: Heart,
      title: "Orang Tua",
      subtitle: "Pantau Perkembangan Anak dengan Mudah",
      description:
        "Terlibat aktif dalam pendidikan anak dengan akses informasi lengkap tentang perkembangan akademik, kehadiran, dan aktivitas sekolah secara real-time.",
      features: [
        "Notifikasi perkembangan anak real-time",
        "Lihat nilai dan raport digital",
        "Komunikasi langsung dengan guru",
        "Pembayaran SPP praktis dari rumah",
      ],
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      delay: "0.3s",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            💎 Manfaat untuk Semua
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solusi Lengkap untuk
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Setiap Stakeholder Pendidikan
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Edu-patrol dirancang untuk memberikan nilai maksimal bagi semua
            pihak dalam ekosistem pendidikan
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0`}
                style={{ animationDelay: benefit.delay }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl ${benefit.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                  >
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                    <Icon
                      className={`w-8 h-8 relative z-10 transition-colors duration-500 ${
                        activeCard === index ? "text-white" : "text-gray-700"
                      }`}
                    />
                  </div>
                  {/* Animated Ring */}
                  <div
                    className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500`}
                  ></div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3
                    className={`text-2xl font-bold mb-2 bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-900 mb-3">
                    {benefit.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {benefit.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 transform transition-all duration-300 ${
                          activeCard === index
                            ? "translate-x-0 opacity-100"
                            : "translate-x-2 opacity-70"
                        }`}
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <div
                          className={`mt-1 w-5 h-5 rounded-full bg-gradient-to-br ${benefit.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{ padding: "2px", zIndex: -1 }}
                >
                  <div className="w-full h-full bg-white rounded-2xl"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_2s]"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Siap Transformasi Digital Sekolah Anda?
              </h3>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-base md:text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Coba Demo Gratis
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </div>
  );
}
