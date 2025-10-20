"use client";
import { useState } from "react";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Send,
  ChevronRight,
  Clock,
  Award,
  Shield,
  Heart,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert("Terima kasih! Anda akan menerima update terbaru dari Edu-patrol");
      setEmail("");
    }
  };

  const footerLinks = {
    produk: [
      { name: "patrol Guru", href: "#guru" },
      { name: "patrol Siswa", href: "#siswa" },
      { name: "patrol Kepala Sekolah", href: "#kepala-sekolah" },
      { name: "patrol Orang Tua", href: "#orang-tua" },
      { name: "Harga & Paket", href: "#harga" },
    ],
    fitur: [
      { name: "AI Generator Materi", href: "#ai-generator" },
      { name: "Presensi Digital", href: "#presensi" },
      { name: "Penilaian Otomatis", href: "#penilaian" },
      { name: "Payment Gateway", href: "#payment" },
      { name: "Raport Digital", href: "#raport" },
    ],
    perusahaan: [
      { name: "Tentang Kami", href: "#tentang" },
      { name: "Tim Kami", href: "#tim" },
      { name: "Karir", href: "#karir" },
      { name: "Blog", href: "#blog" },
      { name: "Press Kit", href: "#press" },
    ],
    dukungan: [
      { name: "Pusat Bantuan", href: "#bantuan" },
      { name: "Dokumentasi", href: "#docs" },
      { name: "Tutorial Video", href: "#tutorial" },
      { name: "Hubungi Kami", href: "#kontak" },
      { name: "FAQ", href: "#faq" },
    ],
    legal: [
      { name: "Kebijakan Privasi", href: "#privacy" },
      { name: "Syarat & Ketentuan", href: "#terms" },
      { name: "Keamanan Data", href: "#security" },
      { name: "Lisensi", href: "#license" },
    ],
  };

  const socialMedia = [
    { icon: Facebook, href: "#", color: "hover:bg-blue-600", name: "Facebook" },
    {
      icon: Instagram,
      href: "#",
      color: "hover:bg-pink-600",
      name: "Instagram",
    },
    { icon: Twitter, href: "#", color: "hover:bg-sky-500", name: "Twitter" },
    { icon: Linkedin, href: "#", color: "hover:bg-blue-700", name: "LinkedIn" },
    { icon: Youtube, href: "#", color: "hover:bg-red-600", name: "YouTube" },
  ];

  const features = [
    { icon: Award, text: "Terpercaya 500+ Sekolah" },
    { icon: Shield, text: "Keamanan Data Terjamin" },
    { icon: Clock, text: "Support 24/7" },
    { icon: Heart, text: "Made with ❤️ in Indonesia" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-[float_20s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-[float_25s_ease-in-out_infinite_5s]"></div>
      </div>

      {/* Dots Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-3">
                    Dapatkan Update Terbaru! 📬
                  </h3>
                  <p className="text-blue-100 text-lg">
                    Berlangganan newsletter kami untuk mendapatkan tips, update
                    fitur terbaru, dan promo eksklusif.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan email Anda"
                    className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group whitespace-nowrap"
                  >
                    Berlangganan
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-white p-3 rounded-xl">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <span className="text-2xl font-bold">Edu-patrol</span>
              </div>
              <p className="text-blue-200 mb-6 leading-relaxed">
                Platform manajemen sekolah terpadu yang menghadirkan solusi
                digital untuk transformasi pendidikan Indonesia.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a
                  href="tel:+628123456789"
                  className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+62 812-3456-7890</span>
                </a>
                <a
                  href="mailto:info@edu-patrol.id"
                  className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>info@edu-patrol.id</span>
                </a>
                <div className="flex items-start gap-3 text-blue-200">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>
                    Jl. Pendidikan No. 123, Jakarta Selatan, Indonesia
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-sm font-semibold mb-3">Ikuti Kami:</p>
                <div className="flex gap-2">
                  {socialMedia.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Links Column 1 */}
            <div>
              <h4 className="font-bold text-lg mb-4">Produk</h4>
              <ul className="space-y-3">
                {footerLinks.produk.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <h4 className="font-bold text-lg mb-4">Fitur</h4>
              <ul className="space-y-3">
                {footerLinks.fitur.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Column 3 */}
            <div>
              <h4 className="font-bold text-lg mb-4">Perusahaan</h4>
              <ul className="space-y-3">
                {footerLinks.perusahaan.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Column 4 */}
            <div>
              <h4 className="font-bold text-lg mb-4">Dukungan</h4>
              <ul className="space-y-3 mb-6">
                {footerLinks.dukungan.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8 border-y border-white/10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 text-blue-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              );
            })}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm text-center md:text-left">
              © 2025 Edu-patrol. All rights reserved. Transforming Education for
              Better Future.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Peta Situs
              </a>
              <span className="text-blue-400">•</span>
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Aksesibilitas
              </a>
              <span className="text-blue-400">•</span>
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Status Sistem
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl hover:shadow-blue-500/50 transform hover:scale-110 transition-all duration-300 group z-50"
          aria-label="Back to top"
        >
          <ChevronRight className="w-6 h-6 -rotate-90 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </footer>
  );
}
