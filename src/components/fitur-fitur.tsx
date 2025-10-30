"use client";
import React, { useState } from "react";
import { LucideIcon, ChevronRight } from "lucide-react";
import Link from "next/link";

export interface FeaturePoint {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Hero {
  titleJumbo: string;
  highlight: string;
  subtitleJumbo: string;
}

export interface FeatureItem {
  id: number;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color: string;
  bgColor: string;
  image: string;
  description: string;
  points: FeaturePoint[];
}

export default function Fiturfitur({
  features,
  hero,
}: {
  features: FeatureItem[];
  hero: Hero;
}) {
  const [activeFeature, setActiveFeature] = useState(0);
  const feature = features[activeFeature];
  const Icon = feature.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigasi Fitur */}

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 relative overflow-hidden">
        {/* Floating Light Effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-[float_15s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite_5s]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <span className="text-white font-semibold">
              🎓 Portal Sekolah Pintar
            </span>
          </div>
          <h1 className="text-2xl md:text-6xl font-bold text-white mb-6">
            {hero.titleJumbo}
            <span className="block text-yellow-400">{hero.highlight}</span>
          </h1>
          <p className="text-base md:text-xl text-blue-100 max-w-3xl mx-auto">
            {hero.subtitleJumbo}
          </p>
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar py-4 gap-3">
            {features.map((item, index) => {
              const NavIcon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveFeature(index)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeFeature === index
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-105`
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <NavIcon className="w-5 h-5" />
                  <span className="hidden sm:inline">{item.title}</span>
                  <span className="sm:hidden">{index + 1}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Gambar */}
          <div className="order-2 lg:order-1 relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10`}
              />
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div
              className={`absolute -top-4 -right-4 bg-gradient-to-r ${feature.color} text-white px-6 py-3 rounded-full font-bold shadow-xl animate-bounce`}
            >
              Fitur #{feature.id}
            </div>
          </div>

          {/* Deskripsi */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              {/* <div
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${feature.bgColor} px-4 py-2 rounded-full mb-4`}
              >
                <Icon
                  className={`w-5 h-5 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                />
                <span
                  className={`font-semibold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                >
                  {feature.subtitle}
                </span>
              </div> */}
              <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h2>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Poin */}
            <div className="space-y-4">
              {feature.points.map((point, index) => {
                const PointIcon = point.icon;
                return (
                  <div
                    key={index}
                    className="group flex gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-x-2 border border-gray-100"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
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

            {/* Tombol CTA */}
            {/* <button
              className={`group flex items-center gap-3 bg-gradient-to-r ${feature.color} text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
            >
              Coba Fitur Ini
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button> */}
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
          <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-white mb-6">
            Ingin Melihat Langsung?
          </h2>
          <p className="text-base md:text-xl text-blue-100 mb-8">
            Jadwalkan demo gratis dan rasakan kemudahan sistem manajemen sekolah
            digital!
          </p>
          <Link
            href={`https://api.whatsapp.com/send?phone=62859102604165`}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-base md:text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Jadwalkan Demo
            </button>
          </Link>
        </div>
      </div>

      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </div>
  );
}
