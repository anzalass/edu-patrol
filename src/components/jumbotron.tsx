"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  GraduationCap,
  BookOpen,
  Users,
  BarChart,
} from "lucide-react";

export default function Jumbotron() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Beranda", href: "#beranda" },
    { name: "Produk & Fitur", href: "#produk" },
    { name: "Tentang Kami", href: "#tentang" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}

      {/* Jumbotron */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-[zoomIn_20s_ease-in-out_infinite_alternate]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-indigo-900/90"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-[float_6s_ease-in-out_infinite]">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-[float_8s_ease-in-out_infinite_1s]">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
            <Users className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-[float_7s_ease-in-out_infinite_2s]">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
            <BarChart className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div
            className={`max-w-3xl transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-[fadeIn_1s_ease-out]">
              <span className="text-white font-medium">
                🎓 Sistem Manajemen Sekolah Terpercaya
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transformasi Digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                Pendidikan Indonesia
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Kelola sekolah Anda dengan mudah dan efisien. Edu-patrol
              menghadirkan solusi lengkap untuk administrasi, pembelajaran, dan
              manajemen sekolah modern.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Mulai Sekarang
              </button>
              <button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300">
                Lihat Demo
              </button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-200">Sekolah</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50K+</div>
                <div className="text-blue-200">Siswa</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">99%</div>
                <div className="text-blue-200">Kepuasan</div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes zoomIn {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
