"use client";
import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  UserCheck,
  Award,
  CreditCard,
} from "lucide-react";

type Feature = {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  highlights: string[];
  gradient: string;
  bgGradient: string;
};

export default function FeaturesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const features: Feature[] = [
    {
      id: 1,
      icon: Sparkles,
      title: "AI Generator Materi & Tugas",
      description:
        "Hemat waktu guru hingga 70% dengan teknologi AI yang dapat menghasilkan materi pembelajaran dan soal tugas berkualitas dalam hitungan detik.",
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
      id: 2,
      icon: UserCheck,
      title: "Presensi Digital & Rekap Otomatis",
      description:
        "Sistem absensi modern dengan berbagai metode input yang fleksibel. Guru dapat melakukan presensi dengan cepat, dan sistem otomatis menghasilkan rekap kehadiran.",
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
      id: 3,
      icon: Award,
      title: "Penilaian & Raport Otomatis",
      description:
        "Sistem penilaian komprehensif yang otomatis menghitung nilai akhir berdasarkan bobot yang ditentukan. Raport digital langsung ter-generate dengan format profesional.",
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
      id: 4,
      icon: CreditCard,
      title: "Payment Gateway Lengkap",
      description:
        "Permudah pembayaran SPP dan tagihan lainnya dengan integrasi payment gateway terlengkap. Orang tua dapat membayar dari mana saja, kapan saja.",
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

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  }, [features.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay, nextSlide]);

  const currentFeature = features[currentSlide];
  const Icon = currentFeature.icon;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide]);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4">
            ✨ Fitur Unggulan
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-2">
            Teknologi Terdepan untuk
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Pendidikan Modern
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Dilengkapi fitur-fitur canggih yang dirancang untuk meningkatkan
            efisiensi dan kualitas pendidikan.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Main Card */}
          <div
            className={`relative rounded-3xl shadow-xl overflow-hidden transition-all duration-500 ${currentFeature.bgGradient}`}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            role="region"
            aria-label={`Fitur ${currentFeature.title}`}
          >
            <div className="grid lg:grid-cols-2 gap-8 p-6 sm:p-8 md:p-10">
              {/* Content */}
              <div className="flex flex-col justify-center space-y-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${currentFeature.gradient} shadow-lg`}
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {currentFeature.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {currentFeature.description}
                </p>

                <ul className="space-y-3">
                  {currentFeature.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${currentFeature.gradient} flex items-center justify-center flex-shrink-0`}
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base font-medium">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* <button
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${currentFeature.gradient} text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold shadow-md hover:shadow-lg transition-all duration-300 w-fit`}
                  aria-label={`Pelajari lebih lanjut tentang ${currentFeature.title}`}
                >
                  Pelajari Lebih Lanjut
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button> */}
              </div>

              {/* Visual (Hidden on small screens) */}
              <div className="hidden lg:flex items-center justify-center relative min-h-[350px]">
                <div
                  className={`absolute inset-0 rounded-3xl opacity-10 ${currentFeature.gradient}`}
                ></div>
                <div
                  className={`relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br ${currentFeature.gradient} flex items-center justify-center shadow-xl animate-float`}
                >
                  <Icon className="w-20 h-20 sm:w-24 sm:h-24 text-white" />
                </div>
                {/* Decorative floating elements */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-xl shadow-md animate-float-delay-1"></div>
                <div className="absolute bottom-6 left-6 w-10 h-10 bg-white rounded-lg shadow-md animate-float-delay-2"></div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows (only on medium+ screens) */}
          <div className="hidden md:flex absolute inset-y-0 left-0 items-center pl-4">
            <button
              onClick={prevSlide}
              className="bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Fitur sebelumnya"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          <div className="hidden md:flex absolute inset-y-0 right-0 items-center pr-4">
            <button
              onClick={nextSlide}
              className="bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Fitur berikutnya"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Pindah ke fitur ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? `w-8 bg-gradient-to-r ${features[idx].gradient}`
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Preview Cards (Mobile-friendly quick nav) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 sm:mt-12">
          {features.map((feature, idx) => {
            const FIcon = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => setCurrentSlide(idx)}
                className={`p-4 rounded-xl transition-all duration-300 text-center ${
                  currentSlide === idx
                    ? `bg-gradient-to-br ${feature.bgGradient} shadow-md scale-[1.02]`
                    : "bg-white hover:bg-gray-50 shadow-sm"
                }`}
                aria-label={`Lihat fitur: ${feature.title}`}
              >
                <div
                  className={`mx-auto w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-2`}
                >
                  <FIcon className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-700 line-clamp-2">
                  {feature.title}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes float-delay-1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes float-delay-2 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delay-1 {
          animation: float-delay-1 5s ease-in-out infinite 0.5s;
        }
        .animate-float-delay-2 {
          animation: float-delay-2 6s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
}
