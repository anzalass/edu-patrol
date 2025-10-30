"use client";
import { useState, useEffect } from "react";
import {
  GraduationCap,
  Target,
  Eye,
  Award,
  Users,
  TrendingUp,
  Heart,
  Zap,
  Shield,
  CheckCircle,
  Rocket,
  Star,
} from "lucide-react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "500+", label: "Sekolah Mitra", icon: Award },
    { number: "50K+", label: "Pengguna Aktif", icon: Users },
    { number: "99%", label: "Kepuasan Pelanggan", icon: Star },
    { number: "5+", label: "Tahun Pengalaman", icon: TrendingUp },
  ];

  const values = [
    {
      icon: Heart,
      title: "Berfokus pada Pengguna",
      description:
        "Kami mendengarkan kebutuhan sekolah dan mengembangkan solusi yang benar-benar membantu meningkatkan kualitas pendidikan di Indonesia.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Inovasi Berkelanjutan",
      description:
        "Terus berinovasi dengan teknologi terkini seperti AI dan machine learning untuk memberikan pengalaman terbaik bagi seluruh pengguna.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Keamanan & Privasi",
      description:
        "Data sekolah dan siswa adalah prioritas utama. Kami menggunakan enkripsi tingkat enterprise dan kepatuhan penuh terhadap regulasi.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: CheckCircle,
      title: "Komitmen Kualitas",
      description:
        "Setiap fitur dirancang dengan standar tertinggi. Tim support kami siap 24/7 memastikan sistem berjalan optimal tanpa gangguan.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Awal Perjalanan",
      description:
        "Edu-patrol didirikan dengan visi transformasi digital pendidikan",
    },
    {
      year: "2020",
      title: "Ekspansi Nasional",
      description: "Melayani 100+ sekolah di berbagai kota di Indonesia",
    },
    {
      year: "2021",
      title: "Inovasi AI",
      description:
        "Meluncurkan fitur AI Generator untuk materi dan soal pembelajaran",
    },
    {
      year: "2022",
      title: "Sertifikasi ISO",
      description: "Mendapat sertifikasi ISO 27001 untuk keamanan informasi",
    },
    {
      year: "2023",
      title: "500+ Sekolah",
      description: "Dipercaya lebih dari 500 sekolah dan 50,000 pengguna aktif",
    },
    {
      year: "2024",
      title: "Masa Depan",
      description:
        "Terus berinovasi untuk pendidikan Indonesia yang lebih baik",
    },
  ];

  const team = [
    {
      name: "Dr. Ahmad Rizki",
      position: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      description: "Ex-Google Engineer dengan passion dalam edukasi",
    },
    {
      name: "Sarah Wijaya",
      position: "CTO",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      description: "Tech Leader dengan 15+ tahun pengalaman",
    },
    {
      name: "Budi Santoso",
      position: "Head of Product",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      description: "Product expert dari startup unicorn",
    },
    {
      name: "Lisa Permata",
      position: "Head of Education",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
      description: "Mantan guru dengan passion teknologi",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[float_15s_ease-in-out_infinite]"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[float_20s_ease-in-out_infinite_5s]"></div>
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[float_18s_ease-in-out_infinite_10s]"></div>
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div
            className={`w-full transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 animate-pulse">
                <span className="text-white font-semibold">
                  🎓 Tentang Edu-patrol
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Membangun Masa Depan
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  Pendidikan Indonesia
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
                Kami percaya bahwa teknologi dapat mengubah cara sekolah
                beroperasi dan meningkatkan kualitas pembelajaran.
              </p>

              {/* Stats Grid */}
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                      <div className="text-4xl font-bold text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-blue-200 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
                Misi Kami
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Memberikan solusi teknologi pendidikan terbaik yang mudah
                digunakan, terjangkau, dan dapat meningkatkan efisiensi
                operasional sekolah hingga 70%.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Kami berkomitmen untuk terus berinovasi dan mendukung sekolah
                dalam menghadapi tantangan era digital dengan tools yang
                powerful namun user-friendly.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
                Visi Kami
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Menjadi platform manajemen sekolah #1 di Indonesia yang
                dipercaya oleh 10,000+ sekolah pada tahun 2030.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Kami ingin setiap sekolah di Indonesia, dari kota besar hingga
                daerah terpencil, dapat mengakses teknologi pendidikan
                berkualitas tinggi untuk menciptakan generasi unggul.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nilai-Nilai{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                yang Kami Junjung
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Prinsip-prinsip yang memandu setiap keputusan dan tindakan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
                  onMouseEnter={() => setActiveValue(index)}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-2xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h4>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline Section */}

      {/* <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Perjalanan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Kami
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Milestone penting dalam membangun Edu-patrol
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-500"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0
                        ? "md:text-right md:pr-12"
                        : "md:text-left md:pl-12"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div
                        className={`inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-3`}
                      >
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 border-4 border-white shadow-lg z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* Team Section */}
      {/* <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tim{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Kami
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dibangun oleh para ahli dengan pengalaman dari perusahaan
              teknologi terkemuka
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-blue-600 font-semibold mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      {/* <div className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-[float_25s_ease-in-out_infinite_5s]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Siap Bergabung dengan Kami?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Mari bersama-sama wujudkan pendidikan Indonesia yang lebih baik
            dengan teknologi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Hubungi Kami
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
              Lihat Demo
            </button>
          </div>
        </div>
      </div> */}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(20px);
          }
        }
      `}</style>
    </div>
  );
}
