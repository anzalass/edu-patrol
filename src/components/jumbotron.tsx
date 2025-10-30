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

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navItems = [
    { name: "Beranda", href: "#beranda" },
    { name: "Produk & Fitur", href: "#produk" },
    { name: "Tentang Kami", href: "#tentang" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Navbar */}

      {/* Jumbotron */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('bg_jumbotron.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-indigo-900/80"></div>
          {/* Subtle animated overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
        </div>

        {/* Floating Icons */}
        <FloatingIcon
          icon={<BookOpen className="w-6 h-6 text-white" />}
          top="20%"
          left="5%"
          delay={0}
        />
        <FloatingIcon
          icon={<Users className="w-6 h-6 text-white" />}
          top="30%"
          right="8%"
          delay={1}
        />
        <FloatingIcon
          icon={<BarChart className="w-6 h-6 text-white" />}
          bottom="25%"
          left="6%"
          delay={2}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className={`max-w-3xl transition-all duration-1000 ease-out transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
              <GraduationCap className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium text-white">
                Sistem Manajemen Sekolah Terpercaya
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Transformasi Digital
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400">
                Pendidikan Indonesia
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-blue-100/90 mb-8 max-w-2xl leading-relaxed">
              Kelola sekolah Anda dengan mudah dan efisien. EduPatrol
              menghadirkan solusi lengkap untuk administrasi, pembelajaran, dan
              manajemen sekolah modern — dirancang khusus untuk kebutuhan
              pendidikan Indonesia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Mulai Sekarang
              </button>
              <button className="bg-white/10 backdrop-blur-lg border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300">
                Lihat Demo
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-16px);
          }
        }
        @keyframes zoomBg {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }
      `}</style>

      <style>{`
        .bg-animate {
          animation: zoomBg 30s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}

// Reusable Floating Icon Component
function FloatingIcon({
  icon,
  top,
  bottom,
  left,
  right,
  delay = 0,
}: {
  icon: React.ReactNode;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  delay?: number;
}) {
  const style: React.CSSProperties = {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    animationDelay: `${delay}s`,
  };

  return (
    <div
      className="absolute animate-[float_6s_ease-in-out_infinite] opacity-80"
      style={style}
    >
      <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10">
        {icon}
      </div>
    </div>
  );
}
