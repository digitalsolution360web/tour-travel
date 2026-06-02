"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Tour Packages", href: "/packages" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white py-3 shadow-md" : "bg-white/95 py-3 md:py-5 shadow-sm border-b border-gray-100"
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative" style={{ width: "140px", height: "50px" }}>
              <Image
                src="/logoo.webp"
                alt="Travotours Logo"
                fill
                style={{ objectFit: "contain", objectPosition: "left center" }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-semibold text-[14px] tracking-tight text-primary/70 transition-all hover:text-accent relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-accent hover:bg-primary hover:text-white text-primary px-6 py-2.5 rounded-xl font-bold text-[13px] transition-all shadow-md uppercase tracking-wider ml-2"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-[60] bg-primary transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}>
        <div className="flex flex-col h-full p-8 pt-20 relative">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white bg-white/5 p-3 rounded-full"
          >
            <X size={24} />
          </button>

          {/* Links - Reduced for Professionalism */}
          <div className="flex flex-col gap-5 mt-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-bold text-white hover:text-accent transition-colors tracking-tight transform transition-all duration-500 ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                  }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bottom Branding */}
          <div className="mt-auto pt-8 border-t border-white/10">
            <div className="flex gap-5 mb-6">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-accent">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[9px] font-black text-accent uppercase tracking-[0.2em] mb-0.5">Assistance</p>
                <p className="text-lg font-bold text-white tracking-tight leading-none">+91 98765 43210</p>
              </div>
            </div>
            <p className="text-white/30 text-[10px] font-medium italic truncate">© 2026 Travotours & Travels. All rights reserved.</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

