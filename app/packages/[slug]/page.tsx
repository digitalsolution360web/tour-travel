"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, Car, Hotel, Calendar, ArrowRight, MessageSquare, Phone, Star, ShieldCheck } from "lucide-react";

const packages = {
  shimla: {
    title: "Shimla Hill Station Special",
    image: "/shi.jpg",
    description: "Experience the Queen of Hills with our premium Shimla package. From the historic Ridge to the snow-covered peaks of Kufri, discover the colonial charm and natural beauty of Himachal Pradesh.",
    duration: "3 Nights / 4 Days",
    itinerary: [
      { day: "Day 1: Arrival & Local Sightseeing", spots: ["The Ridge & Mall Road", "Church Road", "Scandal Point"] },
      { day: "Day 2: Exploration", spots: ["Lakkar Bazaar", "Jhakhu Temple", "Chadwick Falls"] },
      { day: "Day 3: Kufri & Nature Visit", spots: ["Kufri", "Green Valley", "Sankat Mochan Temple"] },
      { day: "Day 4: Departure", spots: ["Local Shopping", "Return Journey to Delhi"] },
    ],
    vehicles: ["Maruti Aura", "Maruti Ertiga", "Maruti Dezire", "Force Urbania", "Luxury Bus"],
    highlights: ["3-Star+ Hotel Stay", "Friendly Environment", "Pickup & Drop Facility", "Professional Driver cum Guide"],
    rating: 4.9,
  },
  rishikesh: {
    title: "Rishikesh Adventure & Spirituality",
    image: "/rishi1.jpeg",
    description: "Find peace and thrill in the Yoga Capital of the World. Our Rishikesh package combines spiritual visits to the holy Ganges with adrenaline-pumping river rafting experiences.",
    duration: "2 Nights / 3 Days",
    itinerary: [
      { day: "Day 1: Spiritual Gateway", spots: ["Triveni Ghat", "Lakshman Jhula & Ram Jhula", "Parmarth Niketan"] },
      { day: "Day 2: Adventure & Waterfalls", spots: ["River Rafting", "Neer Garh Waterfall", "Chaurasi Kutia"] },
      { day: "Day 3: Temples & Caves", spots: ["Vashisht Gufaa", "Bhootnath Temple", "Kunjapuri Temple"] },
    ],
    vehicles: ["Maruti Aura", "Maruti Ertiga", "Maruti Dezire", "Force Urbania"],
    highlights: ["River-side Camping/Resort", "3-Star+ Hotel", "Yoga Sessions", "Expert Rafting Guide"],
    rating: 4.8,
  },
  manali: {
    title: "Manali & Solang Valley Adventure",
    image: "/shi2.jpg",
    description: "Escape to the breathtaking landscapes of Manali. Explore the iconic Rohtang Pass gateway, Atal Tunnel, and the serene Parvati Valley in this comprehensive North Indian tour.",
    duration: "4 Nights / 5 Days",
    itinerary: [
      { day: "Day 1: Manali Local", spots: ["Hadimba Temple", "Club House", "Tibetan Monastery", "Van Vihar"] },
      { day: "Day 2: Snow Point Visit", spots: ["Solang Valley", "Atal Tunnel", "Koksar"] },
      { day: "Day 3: Kasol & Manikaran", spots: ["Kasol Market", "Parvati Valley", "Manikaran Sahib Gurudwara", "Hot Springs"] },
      { day: "Day 4: Kullu Exploration", spots: ["River Rafting Point", "Kullu Shawl Factory", "Vaishno Devi Temple"] },
      { day: "Day 5: Departure", spots: ["Morning at Mall Road", "Return Journey to Delhi"] },
    ],
    vehicles: ["Maruti Ertiga", "Mahindra Innova", "Force Urbania", "Force Traveler"],
    highlights: ["Snow Activities", "Hot Spring Bath", "Professional Photography", "Luxury Stay"],
    rating: 5.0,
  }
};

export default function PackageDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const pkg = packages[slug as keyof typeof packages];

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
        <h1 className="text-4xl font-black mb-6 text-primary tracking-tighter">Package not found</h1>
        <Link href="/" className="bg-primary text-white px-10 py-4 rounded-full font-black uppercase tracking-tighter hover:bg-accent hover:text-primary transition-all">Return home</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image src={pkg.image} alt={pkg.title} fill className="object-cover scale-105" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-white z-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
          <h4 className="text-accent mb-6 animate-fade-in drop-shadow-xl">Himalayan Expedition</h4>
          <h1 className="text-white mb-10 animate-fade-in drop-shadow-2xl max-w-4xl">{pkg.title}</h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white font-black text-sm uppercase tracking-widest bg-white/10 backdrop-blur-xl px-10 py-5 rounded-[30px] border border-white/20 animate-fade-in [animation-delay:200ms]">
            <span className="flex items-center gap-3"><Calendar size={22} className="text-accent" /> {pkg.duration}</span>
            <div className="w-px h-6 bg-white/20 hidden sm:block"></div>
            <span className="flex items-center gap-3"><MapPin size={22} className="text-accent" /> North India Explore</span>
            <div className="w-px h-6 bg-white/20 hidden sm:block"></div>
            <span className="flex items-center gap-3"><Star size={22} className="text-accent fill-accent" /> {pkg.rating} Rating</span>
          </div>
        </div>
      </div>

      <div className="section-container py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-24">
               <h4 className="text-accent mb-4">Journey Details</h4>
               <h2 className="mb-10 text-primary">Tour Overview</h2>
               <p className="text-primary/70 text-xl font-bold leading-relaxed mb-12">{pkg.description}</p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 {[
                   { icon: ShieldCheck, label: "Verified" },
                   { icon: Car, label: "Elite Fleet" },
                   { icon: Hotel, label: "3-Star+" },
                   { icon: Calendar, label: "Carefree" }
                 ].map((item, i) => (
                   <div key={i} className="flex flex-col items-center p-6 bg-gray-50 rounded-[30px] border border-gray-100">
                     <item.icon size={32} className="text-accent mb-3" />
                     <span className="font-black text-xs uppercase tracking-widest text-primary/40">{item.label}</span>
                   </div>
                 ))}
               </div>
            </div>

            <div className="mb-24">
              <h4 className="text-accent mb-4">Day-by-Day</h4>
              <h2 className="mb-16 text-primary">Detailed Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((item, i) => (
                  <div key={i} className="group bg-gray-50/50 rounded-[50px] p-12 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all cursor-default">
                    <div className="flex flex-col md:flex-row gap-10">
                       <div className="w-24 h-24 bg-primary text-accent rounded-[35px] flex items-center justify-center font-black text-3xl shrink-0 group-hover:rotate-6 transition-transform shadow-2xl">
                         {i + 1}
                       </div>
                        <div>
                         <h3 className="mb-6 uppercase tracking-tighter group-hover:text-accent transition-colors font-black">{item.day}</h3>
                         <div className="flex flex-wrap gap-3">
                           {item.spots.map(spot => (
                             <span key={spot} className="bg-white border border-gray-100 text-primary/60 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.1em]">{spot}</span>
                           ))}
                         </div>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-primary p-14 rounded-[60px] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform"></div>
               <h2 className="text-2xl font-bold text-accent mb-12 flex items-center gap-5 tracking-tight">
                  <Car size={32} /> Luxury Fleet
                </h2>
                <div className="space-y-5">
                  {pkg.vehicles.map(v => (
                    <div key={v} className="flex items-center gap-5 text-xl font-bold">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-14 rounded-[60px] border border-gray-100 shadow-xl group">
                <h2 className="text-2xl font-bold text-primary mb-12 flex items-center gap-5 tracking-tight">
                  <Hotel size={32} className="text-accent" /> Premium Stay
                </h2>
                <ul className="space-y-8">
                  {pkg.highlights.map(h => (
                    <li key={h} className="flex items-center gap-5 text-primary/60 font-bold text-xl leading-snug">
                      <CheckCircle2 className="text-accent shrink-0" size={28} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white rounded-[60px] p-12 border-2 border-accent/10 shadow-[0_40px_100px_rgba(255,179,3,0.12)]">
              <h3 className="mb-6 tracking-tighter leading-tight font-bold text-2xl">Book Your <br />Experience</h3>
              <p className="text-primary/40 font-bold mb-12 uppercase tracking-[0.2em] text-[10px] italic">Get the best price & daily custom quote.</p>
              
              <div className="space-y-6 mb-12">
                <Link href="tel:+919876543210" className="w-full py-7 bg-primary text-white rounded-[30px] font-black text-2xl flex items-center justify-center gap-5 hover:scale-105 transition-transform shadow-2xl uppercase tracking-tighter">
                  <Phone size={32} className="text-accent" /> Call Now
                </Link>
                <Link href="https://wa.me/919876543210" className="w-full py-7 bg-[#25D366] text-white rounded-[30px] font-black text-2xl flex items-center justify-center gap-5 hover:scale-105 transition-transform shadow-2xl uppercase tracking-tighter">
                  <MessageSquare size={32} fill="currentColor" /> Chat Now
                </Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-[35px] border border-gray-100 font-bold text-center text-primary/50 text-sm leading-relaxed italic">
                Prices depend on group size and seasonality. We guarantee the highest hospitality standards.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

