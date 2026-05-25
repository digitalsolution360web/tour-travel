import Link from "next/link";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/5">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-10 group">
              <div className="relative w-12 h-12 bg-white rounded-2xl flex items-center justify-center overflow-hidden group-hover:rotate-6 transition-transform">
                 <div className="absolute inset-0 bg-accent transform -translate-x-1/2 -translate-y-1/2 rotate-45 scale-75 transition-transform group-hover:scale-90"></div>
                 <span className="relative text-primary font-black text-2xl z-10">W</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-white leading-tight">WANDERLUST</span>
                <span className="text-[10px] font-black tracking-[0.3em] text-accent mt-[-4px]">TOURS & TRAVELS</span>
              </div>
            </Link>
            <p className="text-white/50 text-base leading-relaxed mb-10 max-w-xs">
              Your trusted travel partner for unforgettable premium journeys across the Himalayas. We redefine luxury travel with local soul.
            </p>
            <div className="flex gap-6">
              {[Globe, Globe, Globe].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all hover:-translate-y-1">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-black tracking-[0.4em] uppercase text-accent mb-10 border-l-4 border-accent pl-4">Navigation</h3>
            <ul className="space-y-5">
              <li><Link href="/" className="text-white/60 hover:text-white transition-colors text-base font-bold flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Home</Link></li>
              <li><Link href="/about" className="text-white/60 hover:text-white transition-colors text-base font-bold flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> About Us</Link></li>
              <li><Link href="/packages" className="text-white/60 hover:text-white transition-colors text-base font-bold flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Packages</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors text-base font-bold flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Contact Us</Link></li>
              <li><Link href="/gallery" className="text-white/60 hover:text-white transition-colors text-base font-bold flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Travel Gallery</Link></li>
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h3 className="text-xs font-black tracking-[0.4em] uppercase text-accent mb-10 border-l-4 border-accent pl-4">Packages</h3>
            <ul className="space-y-5">
              <li><Link href="/packages/shimla" className="text-white/60 hover:text-white transition-colors text-base font-bold flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Shimla Special</Link></li>
              <li><Link href="/packages/rishikesh" className="text-white/60 hover:text-white transition-colors text-base font-bold flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Rishikesh Adventure</Link></li>
              <li><Link href="/packages/manali" className="text-white/60 hover:text-white transition-colors text-base font-bold flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Manali & Rohtang</Link></li>
              <li><Link href="/packages/mussoorie" className="text-white/60 hover:text-white transition-colors text-base font-bold flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Mussoorie Hills</Link></li>
              <li><Link href="/packages/kasol" className="text-white/60 hover:text-white transition-colors text-base font-bold flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Kasol & Manikaran</Link></li>
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h3 className="text-xs font-black tracking-[0.4em] uppercase text-accent mb-10 border-l-4 border-accent pl-4">Reach Us</h3>
            <div className="space-y-8">
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-accent transition-colors">
                  <MapPin className="text-accent" size={18} />
                </div>
                <span className="text-white/70 text-base font-bold leading-tight">Main Square, Shimla Mall Road,<br />Himachal Pradesh, India</span>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-accent transition-colors">
                  <Phone className="text-accent" size={18} />
                </div>
                <span className="text-white/70 text-base font-black tracking-tight">+91 98765 43210</span>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-accent transition-colors">
                  <Mail className="text-accent" size={18} />
                </div>
                <span className="text-white/70 text-base font-bold">info@wanderlust.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[10px] font-black tracking-widest uppercase truncate">
            © 2026 WANDERLUST TOURS & TRAVELS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-white/40 text-[10px] font-black tracking-widest uppercase hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/40 text-[10px] font-black tracking-widest uppercase hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
