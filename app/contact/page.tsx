"use client";

import { Phone, Mail, MapPin, MessageSquare, Send } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="pt-[72px] min-h-screen bg-white">
      {/* Banner */}
      <section className="bg-primary py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/shi2.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="max-w-[1400px] mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-black text-white mb-6 animate-fade-in tracking-tighter">Get In Touch</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Plan your dream vacation with our travel specialists. Reach out for custom itineraries and group bookings.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Contact Form */}
            <div className="bg-white p-12 rounded-[50px] shadow-[0_20px_80px_rgba(4,72,78,0.1)] border border-gray-50 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-3xl -rotate-12 flex items-center justify-center shadow-xl">
                 <Send size={40} className="text-primary" />
              </div>
              <h2 className="text-2xl font-serif font-black text-primary mb-10 tracking-tight leading-none">Send us a Message</h2>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/40 ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-3xl bg-gray-50 border-none focus:ring-2 focus:ring-accent outline-none transition-all font-bold text-primary" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/40 ml-1">Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" className="w-full px-6 py-4 rounded-3xl bg-gray-50 border-none focus:ring-2 focus:ring-accent outline-none transition-all font-bold text-primary" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/40 ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-3xl bg-gray-50 border-none focus:ring-2 focus:ring-accent outline-none transition-all font-bold text-primary" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/40 ml-1">Select Package</label>
                  <select className="w-full px-6 py-4 rounded-3xl bg-gray-50 border-none focus:ring-2 focus:ring-accent outline-none transition-all font-bold text-primary appearance-none">
                    <option>Shimla Deluxe Package</option>
                    <option>Rishikesh Adventure Special</option>
                    <option>Manali & Rohtang Pass</option>
                    <option>Other / Custom Inquiry</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/40 ml-1">Your Message</label>
                  <textarea rows={4} placeholder="Describe your travel needs..." className="w-full px-6 py-4 rounded-3xl bg-gray-50 border-none focus:ring-2 focus:ring-accent outline-none transition-all font-bold text-primary" />
                </div>
                <button type="submit" className="w-full py-5 bg-primary text-white font-black rounded-full text-xl hover:bg-accent hover:text-primary transition-all shadow-2xl flex items-center justify-center gap-3 uppercase tracking-tighter">
                   Submit Request
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-12 lg:pt-10">
              <div className="space-y-12">
                <h2 className="text-2xl font-serif font-black text-primary tracking-tight leading-none mb-4">Contact Information</h2>
                <p className="text-primary/60 font-medium text-lg max-w-md">Our team is available 24/7 to help you plan your Himalayan adventure.</p>
                
                <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform shadow-xl">
                    <Phone size={30} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-2">Call Specialist</h4>
                    <p className="text-2xl font-black text-primary tracking-tight">+91 98765 43210</p>
                    <p className="text-2xl font-black text-primary tracking-tight">+91 09876 54321</p>
                  </div>
                </div>

                <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 bg-[#25D366] rounded-3xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform shadow-xl">
                    <MessageSquare size={30} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#25D366] mb-2">WhatsApp Hub</h4>
                    <p className="text-primary/70 font-medium text-lg mb-4 max-w-xs">Chat with us for instant package quotes and availability.</p>
                    <Link href="https://wa.me/919876543210" className="inline-block bg-[#25D366] text-white px-8 py-3 rounded-full font-black uppercase tracking-widest text-sm shadow-lg hover:opacity-90 transition-opacity">
                      Open WhatsApp
                    </Link>
                  </div>
                </div>

                <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform shadow-xl">
                    <MapPin size={30} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-2">Base Camp</h4>
                    <p className="text-xl font-bold text-primary leading-relaxed">
                      Main Square, Shimla Mall Road,<br />
                      Himachal Pradesh, 171001, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - NEW SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h4 className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-4">Common Regularies</h4>
            <h2 className="text-2xl md:text-4xl font-serif font-black text-primary leading-none tracking-tighter mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { q: "What documents are required for booking?", a: "Only a valid Govt. ID (Aadhar/Voter ID) is required for hotel check-ins and travel permits." },
              { q: "Do you provide custom itineraries?", a: "Yes! We specialize in tailor-made packages based on your group size, budget, and travel dates." },
              { q: "Is pickup from Airport/Railway Station included?", a: "Absolutely. We offer door-to-door pickup and drop facilities and can pick you up from any major transit point." },
              { q: "Are the vehicles child-friendly?", a: "Yes, all our luxury vehicles are family and child-friendly with comfortable seating and cold environment." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-black text-primary mb-3 flex items-center gap-4">
                  <span className="w-8 h-8 bg-accent text-primary rounded-full flex items-center justify-center text-xs shrink-0 font-black">Q</span> {faq.q}
                </h3>
                <p className="text-primary/60 font-medium pl-12"> {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Follow - NEW SECTION */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="bg-primary rounded-[60px] p-16 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50"></div>
             <h2 className="text-3xl md:text-5xl font-serif font-black text-accent mb-8 relative z-10 tracking-tighter">Follow Our Journey</h2>
             <p className="text-white/60 mb-12 max-w-xl mx-auto font-medium relative z-10">Join our community of travelers and get live updates from the mountains.</p>
             <div className="flex flex-wrap justify-center gap-8 relative z-10">
                {[
                  { name: "Instagram", icon: "📸" },
                  { name: "Facebook", icon: "👥" },
                  { name: "YouTube", icon: "🎥" },
                  { name: "Twitter", icon: "🐦" }
                ].map((social, i) => (
                  <Link key={i} href="#" className="flex items-center gap-3 bg-white/10 px-8 py-4 rounded-3xl hover:bg-white/20 transition-all border border-white/10 group">
                    <span className="text-2xl group-hover:scale-125 transition-transform">{social.icon}</span>
                    <span className="font-black uppercase tracking-widest text-xs">{social.name}</span>
                  </Link>
                ))}
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
