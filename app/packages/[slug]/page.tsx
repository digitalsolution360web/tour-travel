"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, Car, Hotel, Calendar, ArrowRight, MessageSquare, Phone } from "lucide-react";

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
    vehicles: ["Aura", "Ertiga", "Dezire", "Force Urbania", "Luxury Bus"],
    highlights: ["3-Star+ Hotel Stay", "Friendly Environment", "Pickup & Drop Facility", "Professional Driver cum Guide"],
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
    vehicles: ["Aura", "Ertiga", "Dezire", "Force Urbania"],
    highlights: ["River-side Camping/Resort", "3-Star+ Hotel", "Yoga Sessions", "Expert Rafting Guide"],
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
    vehicles: ["Ertiga", "Innova", "Force Urbania", "Traveler"],
    highlights: ["Snow Activities", "Hot Spring Bath", "Professional Photography", "Luxury Stay"],
  }
};

export default function PackageDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const pkg = packages[slug as keyof typeof packages];

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Package not found</h1>
        <Link href="/" className="text-accent underline">Return home</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className="relative h-[65vh] w-full">
        <Image src={pkg.image} alt={pkg.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/40 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-3xl md:text-5xl font-serif font-black text-white mb-6 animate-fade-in drop-shadow-2xl tracking-tighter leading-none">{pkg.title}</h1>
          <div className="flex items-center gap-6 text-white font-black text-sm uppercase tracking-widest bg-white/10 backdrop-blur-md px-8 py-3 rounded-full border border-white/20">
            <span className="flex items-center gap-2"><Calendar size={20} className="text-accent" /> {pkg.duration}</span>
            <span className="flex items-center gap-2"><MapPin size={20} className="text-accent" /> North India</span>
          </div>
        </div>
      </div>

      <div className="section-container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-20">
               <h2 className="text-2xl font-serif font-black text-primary mb-8 tracking-tighter leading-none">Tour Overview</h2>
               <p className="text-primary/70 text-xl font-medium leading-relaxed mb-12">{pkg.description}</p>
            </div>

            <div className="mb-20">
              <h2 className="text-2xl font-serif font-black text-primary mb-12 tracking-tighter leading-none">Detailed Itinerary</h2>
              <div className="space-y-4">
                {pkg.itinerary.map((item, i) => (
                  <div key={i} className="group bg-gray-50 rounded-[40px] p-10 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all">
                    <div className="flex flex-col md:flex-row gap-8">
                       <div className="w-20 h-20 bg-primary text-accent rounded-3xl flex items-center justify-center font-black text-2xl shrink-0 group-hover:scale-110 transition-transform">
                         {i + 1}
                       </div>
                       <div>
                         <h3 className="text-2xl font-black text-primary mb-4 uppercase tracking-tighter">{item.day}</h3>
                         <div className="flex flex-wrap gap-3">
                           {item.spots.map(spot => (
                             <span key={spot} className="bg-white border border-gray-200 text-primary/60 px-5 py-2 rounded-2xl text-sm font-black uppercase tracking-widest">{spot}</span>
                           ))}
                         </div>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-primary p-12 rounded-[50px] text-white">
                <h2 className="text-3xl font-serif font-black text-accent mb-10 flex items-center gap-4 tracking-tighter">
                  <Car size={32} /> Luxury Fleet
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {pkg.vehicles.map(v => (
                    <div key={v} className="flex items-center gap-4 text-lg font-bold">
                      <CheckCircle2 className="text-accent" size={24} />
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-12 rounded-[50px] border border-gray-100">
                <h2 className="text-3xl font-serif font-black text-primary mb-10 flex items-center gap-4 tracking-tighter">
                  <Hotel size={32} className="text-accent" /> Premium Stay
                </h2>
                <ul className="space-y-6">
                  {pkg.highlights.map(h => (
                    <li key={h} className="flex items-center gap-4 text-primary/70 font-bold text-lg">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white rounded-[50px] p-12 border-2 border-accent/20 shadow-[0_30px_100px_rgba(255,179,3,0.1)]">
              <h3 className="text-3xl font-serif font-black text-primary mb-4 tracking-tighter">Book Your Adventure</h3>
              <p className="text-primary/60 font-bold mb-12 italic">Get the best price & daily custom quote.</p>
              
              <div className="space-y-6 mb-12">
                <Link href="tel:+919876543210" className="w-full py-6 bg-primary text-white rounded-full font-black text-xl flex items-center justify-center gap-4 hover:scale-105 transition-transform shadow-2xl uppercase tracking-tighter">
                  <Phone size={24} className="text-accent" /> Call Now
                </Link>
                <Link href="https://wa.me/919876543210" className="w-full py-6 bg-[#25D366] text-white rounded-full font-black text-xl flex items-center justify-center gap-4 hover:scale-105 transition-transform shadow-2xl uppercase tracking-tighter">
                  <MessageSquare size={24} fill="currentColor" /> Chat Now
                </Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 italic font-medium text-center text-primary/50 text-sm">
                Prices depend on group size. We guarantee the highest hospitality standards.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
