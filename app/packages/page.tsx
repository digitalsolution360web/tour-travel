import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, Clock, Users, CheckCircle2 } from "lucide-react";

const packages = [
  {
    id: "shimla",
    title: "Shimla Hill Station Special",
    image: "/shi.jpg",
    price: "₹7,999",
    duration: "3N/4D",
    rating: 4.9,
    description: "The classic Queen of Hills experience with visits to Ridge, Kufri and Mall Road."
  },
  {
    id: "rishikesh",
    title: "Rishikesh Adventure & Spirituality",
    image: "/rishi1.jpeg",
    price: "₹5,499",
    duration: "2N/3D",
    rating: 4.8,
    description: "Spiritual connection at Triveni Ghat and adrenaline-pumping Ganga Rafting."
  },
  {
    id: "manali",
    title: "Manali & Solang Valley Adventure",
    image: "/shi2.jpg",
    price: "₹9,999",
    duration: "4N/5D",
    rating: 4.9,
    description: "Snow adventures at Solang Valley, Atal Tunnel and the serenity of Parvati Valley."
  }
];

export default function PackagesPage() {
  return (
    <main className="pt-[72px] min-h-screen bg-white">
      <section className="bg-primary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Exclusive Packages</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Handpicked destinations and meticulously planned itineraries for your North India tour.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {packages.map((pkg) => (
              <div key={pkg.id} className="group bg-white rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <Image src={pkg.image} alt={pkg.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 left-6 bg-accent text-primary px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-xl">
                    Premium Tour
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <span className="flex items-center gap-2 text-accent font-black text-xs uppercase tracking-[0.2em]">
                      <Clock size={16} /> {pkg.duration}
                    </span>
                    <div className="flex items-center gap-1">
                       <Star size={14} className="text-accent fill-accent" />
                       <span className="text-primary font-black text-sm">{pkg.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-serif font-black mb-4 text-primary leading-tight group-hover:text-accent transition-colors tracking-tighter">{pkg.title}</h3>
                  <p className="text-primary/60 font-medium mb-10 line-clamp-2">{pkg.description}</p>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                    <div>
                      <p className="text-[10px] text-primary font-black uppercase tracking-widest mb-1 opacity-40">Price / Person</p>
                      <p className="text-3xl font-black text-primary tracking-tighter"> {pkg.price}</p>
                    </div>
                    <Link href={`/packages/${pkg.id}`} className="bg-primary text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-tighter hover:bg-accent hover:text-primary transition-all">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Packages? - NEW SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-serif font-black text-primary leading-none tracking-tighter mb-10">What's Included in Every Package?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Luxury Vehicle Transfers",
                  "Verified 3-Star+ Hotels",
                  "Daily Breakfast & Meals",
                  "Professional Driver cum Guide",
                  "All Fuel & Toll Tax",
                  "24/7 On-Call Support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                    <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-primary shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-bold text-primary text-sm uppercase tracking-tighter">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[450px] rounded-[50px] overflow-hidden shadow-2xl">
              <Image src="/rishi2.jpg" alt="Benefits" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
