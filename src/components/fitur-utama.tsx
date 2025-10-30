"use client";
import { useState, useEffect } from "react";
import { BookOpen, BarChart, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

// Definisi tipe untuk fitur
type Feature = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  href: string;
};

export default function FiturUtama() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features: Feature[] = [
    {
      id: 1,
      title: "Patrol Guru",
      description:
        "Learning Management System lengkap untuk memudahkan proses belajar mengajar.",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      gradientFrom: "from-blue-500",
      gradientTo: "to-blue-600",
      href: "/guru",
    },
    {
      id: 2,
      title: "Patrol Kepala Sekolah",
      description:
        "Dashboard manajemen sekolah yang powerful untuk pengambilan keputusan strategis.",
      icon: <BarChart className="w-8 h-8 text-white" />,
      gradientFrom: "from-indigo-500",
      gradientTo: "to-purple-600",
      href: "/kepala-sekolah",
    },
    {
      id: 3,
      title: "Patrol Siswa & Orang Tua",
      description:
        "Platform pembelajaran interaktif yang user-friendly untuk siswa modern.",
      icon: <Users className="w-8 h-8 text-white" />,
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-600",
      href: "/siswa-orang-tua",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solusi Lengkap untuk{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Semua Pihak
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Satu platform, tiga perspektif berbeda yang saling terintegrasi
            untuk ekosistem pendidikan yang efisien.
          </p>
        </div>

        {/* Grid Fitur */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative bg-white rounded-2xl p-7 sm:p-8 shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo}`}
              >
                {feature.icon}
              </div>

              {/* Konten */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-14 text-sm sm:text-base">
                {feature.description}
              </p>

              {/* Tombol */}
              <Link
                href={feature.href}
                className="absolute bottom-5 inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold 
    bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg hover:from-blue-600 hover:to-indigo-700 
    hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Lihat Fitur Selengkapnya
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Animasi Fade-in Global */}
      <style jsx>{`
        .opacity-0 {
          opacity: 0;
          transform: translateY(20px);
        }
        .opacity-100 {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
      `}</style>
    </section>
  );
}
