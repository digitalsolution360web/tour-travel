"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white py-2 shadow-md" : "bg-white/95 py-4 shadow-sm"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center">
          {/* Logo - Matching Screenshot */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 bg-primary rounded-full flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-accent transform -translate-x-1/2 -translate-y-1/2 rotate-45 scale-75"></div>
               <span className="relative text-white font-black text-xl z-10">W</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-primary leading-tight">WANDERLUST</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-accent mt-[-4px]">TOURS & TRAVELS</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-black text-base tracking-tight text-primary transition-colors hover:text-accent relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-accent transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-accent hover:bg-primary hover:text-white text-primary px-10 py-3 rounded-full font-black text-base transition-all transform hover:scale-105 shadow-[0_8px_20px_rgba(255,179,3,0.4)] uppercase tracking-tighter"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-[60] bg-primary transition-all duration-500 ease-in-out ${
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className="flex flex-col h-full p-8 pt-24 relative">
          {/* Close Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full"
          >
            <X size={32} />
          </button>

          {/* Links */}
          <div className="flex flex-col gap-8 mt-10">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-serif font-black text-white hover:text-accent transition-colors tracking-tighter transform transition-all duration-500 ${
                  isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bottom Branding */}
          <div className="mt-auto pt-10 border-t border-white/10">
             <div className="flex gap-6 mb-8">
               <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-accent">
                 <Phone size={24} />
               </div>
               <div>
                 <p className="text-[10px] font-black text-accent uppercase tracking-widest">Call us</p>
                 <p className="text-xl font-bold text-white">+91 98765 43210</p>
               </div>
             </div>
             <p className="text-white/40 text-sm font-medium italic">© 2026 Wanderlust Tours & Travels. All rights reserved.</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
