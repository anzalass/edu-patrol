"use client";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  UserCheck,
  Award,
  CreditCard,
} from "lucide-react";

export default function FeaturesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const features = [
    {
      icon: Sparkles,
      title: "AI Generator Materi & Tugas",
      description:
        "Hemat waktu guru hingga 70% dengan teknologi AI yang dapat menghasilkan materi pembelajaran dan soal tugas berkualitas dalam hitungan detik. Cukup masukkan topik dan tingkat kesulitan, AI kami akan membuat konten yang sesuai kurikulum.",
      highlights: [
        "Generate soal pilihan ganda & essay",
        "Buat materi pembelajaran interaktif",
        "Sesuaikan dengan kurikulum nasional",
        "Tersedia 10+ template materi",
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: UserCheck,
      title: "Presensi Digital & Rekap Otomatis",
      description:
        "Sistem absensi modern dengan berbagai metode input yang fleksibel. Guru dapat melakukan presensi dengan cepat, dan sistem otomatis menghasilkan rekap kehadiran lengkap dengan grafik dan analisis untuk setiap siswa.",
      highlights: [
        "Absen via QR Code atau manual",
        "Rekap real-time per siswa/kelas",
        "Notifikasi otomatis ke orang tua",
        "Grafik kehadiran bulanan",
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Award,
      title: "Penilaian & Raport Otomatis",
      description:
        "Sistem penilaian komprehensif yang otomatis menghitung nilai akhir berdasarkan bobot yang ditentukan. Raport digital langsung ter-generate dengan format profesional, lengkap dengan grafik perkembangan dan catatan guru.",
      highlights: [
        "Hitung nilai otomatis per KD",
        "Raport digital format PDF",
        "Grafik perkembangan siswa",
        "Kirim raport via email/WhatsApp",
      ],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      icon: CreditCard,
      title: "Payment Gateway Lengkap",
      description:
        "Permudah pembayaran SPP dan tagihan lainnya dengan integrasi payment gateway terlengkap. Orang tua dapat membayar dari mana saja, kapan saja melalui berbagai metode pembayaran. Sistem otomatis mencatat dan mengirim notifikasi pembayaran.",
      highlights: [
        "Bayar via QRIS, Virtual Account",
        "Indomaret, Alfamart, & E-Wallet",
        "Notifikasi pembayaran real-time",
        "Laporan keuangan otomatis",
      ],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, currentSlide]);

  const Feature = features[currentSlide];
  const IconComponent = Feature.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse">
            ✨ Fitur Unggulan
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Teknologi Terdepan untuk
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Pendidikan Modern
            </span>
          </h2>
          <p className="text-xl  text-gray-600 max-w-3xl mx-auto">
            Dilengkapi fitur-fitur canggih yang dirancang untuk meningkatkan
            efisiensi dan kualitas pendidikan
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Slide */}
          <div
            className={`bg-gradient-to-br ${Feature.bgGradient} rounded-3xl shadow-2xl overflow-hidden transition-all duration-500`}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Left Content */}
              <div className="flex flex-col justify-center space-y-6 animate-[fadeInLeft_0.6s_ease-out]">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${Feature.gradient} shadow-lg`}
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {Feature.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {Feature.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {Feature.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 animate-[fadeIn_0.6s_ease-out]"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div
                        className={`mt-1 w-6 h-6 rounded-full bg-gradient-to-br ${Feature.gradient} flex items-center justify-center flex-shrink-0`}
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${Feature.gradient} text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-fit`}
                >
                  Pelajari Lebih Lanjut
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Right Visual */}
              <div className="flex items-center justify-center animate-[fadeInRight_0.6s_ease-out]">
                <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${Feature.gradient} opacity-10 rounded-3xl animate-pulse`}
                  ></div>
                  <div
                    className={`relative w-48 h-48 rounded-full bg-gradient-to-br ${Feature.gradient} flex items-center justify-center shadow-2xl animate-[float_3s_ease-in-out_infinite]`}
                  >
                    <IconComponent className="w-24 h-24 text-white" />
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute top-10 right-10 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-[float_4s_ease-in-out_infinite_1s]">
                    <IconComponent
                      className={`w-10 h-10 bg-gradient-to-br ${Feature.gradient} bg-clip-text text-transparent`}
                    />
                  </div>
                  <div className="absolute bottom-10 left-10 w-16 h-16 bg-white rounded-xl shadow-xl flex items-center justify-center animate-[float_5s_ease-in-out_infinite_2s]">
                    <div
                      className={`w-8 h-8 rounded-lg bg-gradient-to-br ${Feature.gradient}`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? `w-12 h-3 bg-gradient-to-r ${features[index].gradient}`
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Feature Cards Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  currentSlide === index
                    ? `bg-gradient-to-br ${feature.bgGradient} shadow-lg scale-105`
                    : "bg-white hover:bg-gray-50 shadow hover:shadow-md"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-3 mx-auto`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-700 text-center">
                  {feature.title.split(" ").slice(0, 2).join(" ")}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
