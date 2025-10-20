"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      name: "Dr. Budi Santoso, S.Pd., M.Pd",
      role: "Kepala Sekolah",
      school: "SMA Negeri 5 Jakarta",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      rating: 5,
      text: "Edu-patrol benar-benar mengubah cara kami mengelola sekolah. Dashboard analitiknya memberikan insight yang sangat berharga untuk pengambilan keputusan strategis. Dalam 6 bulan, efisiensi administrasi kami meningkat drastis dan kami bisa lebih fokus pada peningkatan kualitas pembelajaran.",
      highlight: "Efisiensi meningkat 75%",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Siti Nurhaliza, S.Pd",
      role: "Guru Matematika",
      school: "SMP Harapan Bangsa",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      rating: 5,
      text: "Sebagai guru, waktu saya sangat berharga. Dengan Edu-patrol, saya tidak lagi menghabiskan waktu berjam-jam untuk mengoreksi tugas dan membuat raport. Fitur AI untuk generate soal juga luar biasa membantu! Sekarang saya punya lebih banyak waktu untuk interaksi langsung dengan siswa.",
      highlight: "Hemat 15 jam per minggu",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Ahmad Fauzi",
      role: "Siswa Kelas 11",
      school: "SMA Nusantara",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
      rating: 5,
      text: "Aplikasinya user-friendly banget! Saya bisa akses materi kapan aja, kumpulin tugas dari rumah, dan langsung tau nilai saya. Fitur notifikasinya juga helpful, jadi gak pernah ketinggalan deadline tugas lagi. Belajar jadi lebih terstruktur dan menyenangkan!",
      highlight: "Nilai meningkat 20%",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Rina Wijaya",
      role: "Orang Tua Siswa",
      school: "SD Cendekia",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      rating: 5,
      text: "Sebagai orang tua yang sibuk bekerja, Edu-patrol sangat membantu saya tetap terlibat dalam pendidikan anak. Saya bisa pantau kehadiran, nilai, dan perkembangan anak secara real-time. Bayar SPP juga praktis, bisa dari smartphone. Komunikasi dengan guru jadi lebih mudah dan transparan.",
      highlight: "100% transparan",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Prof. Dr. Hendra Wijaya",
      role: "Kepala Dinas Pendidikan",
      school: "Kabupaten Bandung",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      rating: 5,
      text: "Dengan Edu-patrol, kami bisa memonitor 150+ sekolah binaan dari satu dashboard terpusat. Data yang akurat dan real-time membantu kami mengambil kebijakan yang tepat sasaran. Standarisasi sistem pendidikan di wilayah kami meningkat signifikan sejak menggunakan platform ini.",
      highlight: "150+ sekolah terintegrasi",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay, currentIndex]);

  const getCardStyle = (index: any) => {
    const diff =
      (index - currentIndex + testimonials.length) % testimonials.length;

    if (diff === 0) {
      return {
        transform: "translateX(0%) scale(1)",
        opacity: 1,
        zIndex: 30,
      };
    } else if (diff === 1) {
      return {
        transform: "translateX(60%) scale(0.85)",
        opacity: 0.6,
        zIndex: 20,
      };
    } else if (diff === testimonials.length - 1) {
      return {
        transform: "translateX(-60%) scale(0.85)",
        opacity: 0.6,
        zIndex: 20,
      };
    } else {
      return {
        transform: "translateX(0%) scale(0.7)",
        opacity: 0,
        zIndex: 10,
      };
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-4 overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-[float_15s_ease-in-out_infinite]"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-[float_20s_ease-in-out_infinite_5s]"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-[float_18s_ease-in-out_infinite_10s]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
            <Star className="w-4 h-4 fill-current" />
            Testimoni Pengguna
            <Star className="w-4 h-4 fill-current" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dipercaya oleh
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Ribuan Pengguna di Indonesia
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengar langsung dari mereka yang telah merasakan transformasi
            digital dengan Edu-patrol
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative h-[600px] mb-12"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <div className="relative h-full flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="absolute w-full max-w-2xl transition-all duration-700 ease-out"
                style={getCardStyle(index)}
              >
                <div
                  className={`relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gray-100 overflow-hidden group hover:shadow-3xl transition-shadow duration-500`}
                >
                  {/* Quote Icon Background */}
                  <div className="absolute top-8 right-8 opacity-5">
                    <Quote className="w-32 h-32 text-gray-900" />
                  </div>

                  {/* Gradient Top Border */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${testimonial.color}`}
                  ></div>

                  {/* Content */}
                  <div className="relative">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 fill-yellow-400 text-yellow-400 animate-[sparkle_1s_ease-in-out_infinite]`}
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Highlight Badge */}
                    <div
                      className={`inline-block bg-gradient-to-r ${testimonial.color} text-white px-6 py-2 rounded-full font-bold text-sm mb-8 shadow-lg animate-pulse`}
                    >
                      {testimonial.highlight}
                    </div>

                    {/* User Info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                      <div className="relative">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} rounded-full blur-md opacity-50`}
                        ></div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="relative w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p
                          className={`font-semibold text-transparent bg-clip-text bg-gradient-to-r ${testimonial.color}`}
                        >
                          {testimonial.role}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {testimonial.school}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div
                    className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${testimonial.color} opacity-5 rounded-tl-full`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-500 rounded-full ${
                currentIndex === index
                  ? `w-12 h-3 bg-gradient-to-r ${testimonial.color}`
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
              500+
            </div>
            <div className="text-gray-600 font-medium">Sekolah Aktif</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
              50K+
            </div>
            <div className="text-gray-600 font-medium">Pengguna Aktif</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-2">
              4.9/5
            </div>
            <div className="text-gray-600 font-medium">Rating Pengguna</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2">
              99%
            </div>
            <div className="text-gray-600 font-medium">Kepuasan</div>
          </div>
        </div> */}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(20px);
          }
        }
        @keyframes sparkle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}
