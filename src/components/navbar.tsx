"use client";
import { useState } from "react";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Beranda", href: "/" },
    {
      name: "Produk & Fitur",
      href: "#",
      children: [
        { name: "Patrol Guru", href: "/guru" },
        { name: "Patrol Siswa & Orang Tua", href: "/siswa-orang-tua" },
        { name: "Patrol Kepala Sekolah", href: "/kepala-sekolah" },
      ],
    },
    { name: "Tentang Kami", href: "/tentang-kami" },
  ];

  return (
    <nav className="bg-white text-black shadow-lg py-5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-black text-xl font-bold tracking-tight">
              Edu Patrol
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  {/* Dropdown */}
                  <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <ul className="py-2">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <a
                            href={child.href}
                            className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 rounded-md"
                          >
                            {child.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-blue-600 transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              )
            )}
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-md">
              Demo Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-blue-100 transition-colors duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-3">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex justify-between items-center w-full px-4 py-2 rounded-lg font-medium hover:bg-blue-100"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isDropdownOpen && (
                    <div className="pl-6 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className="block text-sm px-4 py-2 rounded-lg hover:bg-blue-50"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              )
            )}
            <button className="w-full bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-md mt-2">
              Demo Gratis
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
