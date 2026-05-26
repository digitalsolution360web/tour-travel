"use client";

import { Phone, Mail, MapPin, MessageSquare, Send } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="pt-[72px] min-h-screen bg-white">
      {/* Banner */}
      <section className="bg-primary py-20 text-white relative overflow-hidden rounded-b-[50px] md:rounded-b-[80px]">
        <div className="absolute inset-0 bg-[url('/shi2.jpg')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
        <div className="section-container relative z-10 text-center">
          <h4 className="text-accent mb-4">Concierge Desk</h4>
          <h1 className="text-white mb-6 animate-fade-in">Get In Touch</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
            Plan your dream vacation with our travel specialists. Reach out for custom itineraries and group bookings.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-[0_40px_120px_rgba(4,72,78,0.1)] border border-gray-50 relative">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-xl">
                 <Send size={24} className="text-primary" />
              </div>
              <h4 className="text-accent mb-4">Direct Message</h4>
              <h2 className="mb-8">Send Inquiry</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-primary/30 ml-2">Full Name</label>
                    <input type="text" placeholder="Your name" className="w-full px-8 py-5 rounded-[25px] bg-gray-50 border-2 border-transparent focus:border-accent focus:bg-white outline-none transition-all font-bold text-primary text-lg" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-primary/30 ml-2">Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" className="w-full px-8 py-5 rounded-[25px] bg-gray-50 border-2 border-transparent focus:border-accent focus:bg-white outline-none transition-all font-bold text-primary text-lg" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-[0.3em] text-primary/30 ml-2">Email Address</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-8 py-5 rounded-[25px] bg-gray-50 border-2 border-transparent focus:border-accent focus:bg-white outline-none transition-all font-bold text-primary text-lg" />
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-[0.3em] text-primary/30 ml-2">Select Destination</label>
                  <select className="w-full px-8 py-5 rounded-[25px] bg-gray-50 border-2 border-transparent focus:border-accent focus:bg-white outline-none transition-all font-bold text-primary text-lg appearance-none cursor-pointer">
                    <option>Shimla Deluxe Package</option>
                    <option>Rishikesh Adventure Special</option>
                    <option>Manali & Rohtang Pass</option>
                    <option>Other / Custom Inquiry</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-[0.3em] text-primary/30 ml-2">Special Requirements</label>
                  <textarea rows={4} placeholder="Describe your travel needs (Dates, Group Size, etc.)" className="w-full px-8 py-5 rounded-[30px] bg-gray-50 border-2 border-transparent focus:border-accent focus:bg-white outline-none transition-all font-bold text-primary text-lg" />
                </div>
                <button type="submit" className="w-full py-5 bg-primary text-white font-bold rounded-full text-lg hover:bg-accent hover:text-primary transition-all shadow-xl flex items-center justify-center gap-4 uppercase tracking-widest hover:scale-105 transform">
                   Request A Quote
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-10 lg:pt-8">
              <div className="space-y-10">
                <div>
                    <h4 className="text-accent mb-2">Availability</h4>
                    <h2 className="mb-4">Contact Information</h2>
                    <p className="text-primary/60 font-bold text-lg leading-relaxed max-w-md italic">Our team is available 24/7 to help you plan your Himalayan adventure.</p>
                </div>
                
                <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 bg-primary text-accent rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xl">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-accent mb-2">Call Specialists</h4>
                    <p className="text-2xl font-bold text-primary mb-1 tracking-tight">+91 98765 43210</p>
                    <p className="text-2xl font-bold text-primary tracking-tight">+91 09876 54321</p>
                  </div>
                </div>

                <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xl">
                    <MessageSquare size={32} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="text-[#25D366] mb-2">WhatsApp Connect</h4>
                    <p className="text-primary/70 font-bold text-base mb-4 max-w-xs leading-relaxed">Chat with us for instant package quotes and daily availability.</p>
                    <Link href="https://wa.me/919876543210" className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-lg hover:scale-105 transition-all">
                      Open WhatsApp Hub
                    </Link>
                  </div>
                </div>

                <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 bg-gray-100 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-primary/40 mb-2">Regional Office</h4>
                    <p className="text-lg font-bold text-primary leading-tight">
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 rounded-[50px] md:rounded-[80px] mx-4 mb-16">
        <div className="section-container">
          <div className="text-center mb-16">
            <h4 className="text-accent mb-4">Expert Answers</h4>
            <h2>Frequently Asked</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { q: "What documents are required for booking?", a: "Only a valid Govt. ID (Aadhar/Voter ID) is required for hotel check-ins and travel permits." },
              { q: "Do you provide custom itineraries?", a: "Yes! We specialize in tailor-made packages based on your group size, budget, and travel dates." },
              { q: "Is pickup from Airport/Railway Station included?", a: "Absolutely. We offer door-to-door pickup and drop facilities and can pick you up from any major transit point." },
              { q: "Are the vehicles child-friendly?", a: "Yes, all our luxury vehicles are family and child-friendly with comfortable seating and safety features." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-[30px] shadow-sm border border-gray-100 hover:shadow-xl transition-all group cursor-default">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-3 flex items-start gap-4">
                   <div className="w-8 h-8 bg-accent text-primary rounded-xl flex items-center justify-center text-[10px] shrink-0 font-bold shadow-md">?</div>
                   <span className="leading-tight">{faq.q}</span>
                </h3>
                <p className="text-primary/60 font-medium text-base pl-12 leading-relaxed group-hover:text-primary transition-colors"> {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Follow */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="bg-primary rounded-[50px] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 to-transparent opacity-50"></div>
             <h4 className="text-accent mb-6 relative z-10">Get Inspired</h4>
             <h2 className="text-white mb-8 relative z-10">Follow Our Journey</h2>
             <p className="text-white/50 mb-12 max-w-xl mx-auto font-bold text-lg relative z-10 leading-relaxed italic">Join our community of thousands of travelers and get live updates from the Himalayas.</p>
             <div className="flex flex-wrap justify-center gap-4 relative z-10">
                {[
                  { name: "Instagram", icon: "📸" },
                  { name: "Facebook", icon: "👥" },
                  { name: "YouTube", icon: "🎥" },
                  { name: "Twitter", icon: "🐦" }
                ].map((social, i) => (
                  <Link key={i} href="#" className="flex items-center gap-3 bg-white/5 px-8 py-4 rounded-3xl hover:bg-accent hover:text-primary transition-all border border-white/10 group">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{social.icon}</span>
                    <span className="font-bold uppercase tracking-widest text-[10px]">{social.name}</span>
                  </Link>
                ))}
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}

