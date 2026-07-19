import Link from "next/link";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/5">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="relative w-10 h-10 bg-white rounded-2xl flex items-center justify-center overflow-hidden group-hover:rotate-6 transition-transform">
                 <div className="absolute inset-0 bg-accent transform -translate-x-1/2 -translate-y-1/2 rotate-45 scale-75 transition-transform group-hover:scale-90"></div>
                 <span className="relative text-primary font-black text-xl z-10">T</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-tight">TRAVOTOURS</span>
                <span className="text-[9px] font-bold tracking-[0.3em] text-accent mt-[-3px]">PREMIUM ESCAPES</span>
              </div>
            </Link>
            <p className="text-white/70 text-[13px] leading-relaxed mb-8 max-w-xs font-medium">
              Your trusted travel partner for unforgettable premium journeys across the Himalayas. We redefine luxury travel with local soul.
            </p>
            <div className="flex gap-4">
              {[Globe, Globe, Globe].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all hover:-translate-y-1 border border-white/20">
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-8 border-l-2 border-accent pl-4">Navigation</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/80 hover:text-accent transition-colors text-sm font-bold flex items-center gap-2 group"><span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Home</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-accent transition-colors text-sm font-bold flex items-center gap-2 group"><span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> About Us</Link></li>
              <li><Link href="/packages" className="text-white/80 hover:text-accent transition-colors text-sm font-bold flex items-center gap-2 group"><span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Packages</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-accent transition-colors text-sm font-bold flex items-center gap-2 group"><span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Contact Us</Link></li>
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-8 border-l-2 border-accent pl-4">Destinations</h3>
            <ul className="space-y-4">
              <li><Link href="/packages/shimla" className="text-white/80 hover:text-accent transition-colors text-sm font-bold flex items-center gap-2 group"><span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Shimla Special</Link></li>
              <li><Link href="/packages/rishikesh" className="text-white/80 hover:text-accent transition-colors text-sm font-bold flex items-center gap-2 group"><span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Rishikesh Adventure</Link></li>
              <li><Link href="/packages/manali" className="text-white/80 hover:text-accent transition-colors text-sm font-bold flex items-center gap-2 group"><span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Manali & Rohtang</Link></li>
              <li><Link href="/packages/mussoorie" className="text-white/80 hover:text-accent transition-colors text-sm font-bold flex items-center gap-2 group"><span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Mussoorie Hills</Link></li>
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-8 border-l-2 border-accent pl-4">Reach Us</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/20">
                  <MapPin className="text-accent" size={16} />
                </div>
                <span className="text-white/90 text-[13px] font-bold leading-tight">Shimla Mall Road,<br />Himachal Pradesh, India</span>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/20">
                  <Phone className="text-accent" size={16} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <a href="tel:+918860668844" className="text-white/90 text-[13px] font-bold tracking-tight hover:text-accent">+91 88606 68844</a>
                  <a href="tel:+918800411163" className="text-white/90 text-[13px] font-bold tracking-tight hover:text-accent">+91 88004 11163</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/20">
                  <Mail className="text-accent" size={16} />
                </div>
                <a href="mailto:info@travotours.in" className="text-white/90 text-[13px] font-bold tracking-tight hover:text-accent truncate">info@travotours.in</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col items-center gap-8">
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-6">
            <p className="text-white/50 text-[9px] font-bold tracking-[0.15em] uppercase">
              © 2026 TRAVOTOURS & TRAVELS. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8">
              <Link href="#" className="text-white/50 text-[9px] font-bold tracking-[0.15em] uppercase hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="text-white/50 text-[9px] font-bold tracking-[0.15em] uppercase hover:text-white transition-colors">Terms</Link>
            </div>
          </div>

          {/* Designed & Developed By Section - Extra Large Premium Pill */}
          <Link 
            href="https://www.digitalsolution360.in/" 
            target="_blank"
            className="group flex items-center gap-5 px-12 py-4 rounded-full border-2 border-white/30 hover:border-accent transition-all bg-white/10 hover:bg-white/20 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="text-[12px] font-bold tracking-[0.3em] text-white group-hover:text-accent transition-colors uppercase">
              Designed & Developed By
            </span>
            <div className="h-6 w-[1px] bg-white/30"></div>
            <span className="text-sm font-black tracking-wider bg-gradient-to-r from-[#00E5FF] via-[#00ffff] to-[#1DE9B6] bg-clip-text text-transparent group-hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-all flex items-center gap-3">
              Digital Solution 360
              <Globe size={18} className="text-accent animate-spin-slow" />
            </span>
          </Link>
        </div>

      </div>
    </footer>
  );
}

