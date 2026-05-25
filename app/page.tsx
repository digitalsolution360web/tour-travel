import HeroSlider from "@/components/HeroSlider";
import Link from "next/link";
import Image from "next/image";
import { Star, MapPin, Car, Hotel, CheckCircle, ArrowRight, Phone } from "lucide-react";

const featuredPackages = [
  {
    id: "shimla",
    title: "Shimla Hill Station Special",
    image: "/shi3.jpg",
    price: "Starting ₹7,999",
    spots: ["The Ridge", "Kufri", "Mall Road"],
  },
  {
    id: "rishikesh",
    title: "Rishikesh Adventure Tour",
    image: "/rishi4.jpg",
    price: "Starting ₹5,499",
    spots: ["River Rafting", "Triveni Ghat", "Ram Jhula"],
  },
  {
    id: "manali",
    title: "Manali & Solang Valley",
    image: "/shi.jpg",
    price: "Starting ₹9,999",
    spots: ["Atal Tunnel", "Solang Valley", "Hadimba Temple"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSlider />

      {/* Featured Packages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Popular Tour Packages</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Explore our handpicked destinations designed to give you the ultimate travel experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredPackages.map((pkg) => (
              <div key={pkg.id} className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 transition-all hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Best Seller
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-1 text-accent mb-3">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <span className="text-primary text-sm font-medium ml-2">4.9 (120+ Reviews)</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{pkg.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pkg.spots.map((spot) => (
                      <span key={spot} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{spot}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <span className="text-xl font-bold text-primary">{pkg.price}</span>
                    <Link href={`/packages/${pkg.id}`} className="text-accent font-bold flex items-center gap-1 hover:gap-2 transition-all">
                      Details <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* World-Class Comfort & Standards Section - Matching Screenshot */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 border-4 border-white/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-[1400px] mx-auto px-4 relative z-10 text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-accent mb-4">World-Class Comfort & Standards</h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto font-medium">
            We don't just provide tours; we provide memories wrapped in luxury and local wisdom.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Box 1: Fleet */}
          <div className="bg-secondary/40 backdrop-blur-sm p-10 rounded-[40px] border border-white/10 hover:border-accent/30 transition-all group">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Car className="text-accent" size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Our Luxury Fleet</h3>
            <ul className="space-y-3">
              {["Maruti Suzuki Aura", "Maruti Ertiga", "Maruti Dzire", "Force Traveller", "Urbania Minibus", "Full-Size Bus"].map(item => (
                <li key={item} className="flex items-center gap-3 text-white/90 font-medium">
                  <CheckCircle className="text-accent" size={18} /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Box 2: Premium Stays */}
          <div className="bg-secondary/40 backdrop-blur-sm p-10 rounded-[40px] border border-white/10 hover:border-accent/30 transition-all group">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Hotel className="text-accent" size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Premium Stays</h3>
            <ul className="space-y-3">
              {["3-Star Rated Hotels", "Clean & Comfortable Rooms", "Breakfast Included", "Prime Locations", "Hot Water & WiFi", "Family & Couple Friendly"].map(item => (
                <li key={item} className="flex items-center gap-3 text-white/90 font-medium">
                  <CheckCircle className="text-accent" size={18} /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Box 3: Perks */}
          <div className="bg-secondary/40 backdrop-blur-sm p-10 rounded-[40px] border border-white/10 hover:border-accent/30 transition-all group">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Star className="text-accent" size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Tour Package Perks</h3>
            <ul className="space-y-3">
              {["Doorstep Pickup", "Drop Facility", "Hotel Stay", "Guided Sightseeing", "Friendly Environment", "24/7 Support"].map(item => (
                <li key={item} className="flex items-center gap-3 text-white/90 font-medium">
                  <CheckCircle className="text-accent" size={18} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Popular Activities Section - NEW SECTION */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <h4 className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-4">Adventure Awaits</h4>
              <h2 className="text-2xl md:text-4xl font-serif font-black text-primary leading-none tracking-tighter">Popular Activities</h2>
            </div>
            <p className="text-primary/60 max-w-md font-medium">
              From the thrills of white water rafting to the peace of ancient temple walks, discover what makes the Himalayas unique.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { name: "River Rafting", icon: "🌊" },
              { name: "Mountain Trek", icon: "🏔️" },
              { name: "Temple Tours", icon: "🛕" },
              { name: "Local Food", icon: "🍲" },
              { name: "Photography", icon: "📸" },
              { name: "Hot Springs", icon: "🔥" },
              { name: "Jungle Safari", icon: "🦁" },
              { name: "Yoga Session", icon: "🧘" },
              { name: "Paragliding", icon: "🪂" },
              { name: "Camping", icon: "⛺" },
            ].map((act, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-[30px] text-center hover:bg-accent group transition-all cursor-default border border-gray-100">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform inline-block">{act.icon}</div>
                <h5 className="font-black text-primary text-sm uppercase tracking-tighter">{act.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - NEW SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-serif font-black text-primary leading-none tracking-tighter mb-6">Traveler Stories</h2>
            <div className="w-24 h-2 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Anjali Gupta", city: "Mumbai", text: "The Shimla tour was magical. The Force Urbania was very comfortable for our family of 12. Highly recommended!" },
              { name: "Vikram Singh", city: "Bangalore", text: "Best rafting experience in Rishikesh! The guides were very professional and the safety standards were top-notch." },
              { name: "Suresh Mehra", city: "Delhi", text: "Premium stays indeed! Every hotel we stayed in was 4-star category. Fantastic value for money." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-100 relative">
                <div className="text-accent text-5xl font-serif absolute top-6 right-10 opacity-30">“</div>
                <div className="flex gap-1 text-accent mb-6">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-primary font-medium text-lg mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black">{t.name[0]}</div>
                  <div>
                    <h6 className="font-black text-primary leading-tight">{t.name}</h6>
                    <span className="text-accent text-xs font-black uppercase tracking-widest">{t.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Banner Section - Reduced Padding and Gaps */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10">
          <div className="bg-accent rounded-[50px] p-10 md:p-14 text-center relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 "></div>
             <div className="relative z-10 font-serif mb-4">
                <h2 className="text-3xl md:text-5xl font-black text-primary leading-[0.8] mb-0">Ready for Your</h2>
                <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.2] mt-0">Dream Getaway?</h2>
             </div>
             <p className="text-primary font-bold text-lg mb-8 max-w-2xl mx-auto leading-tight relative z-10">
                Call us now or get a free custom quote. Our travel experts are waiting to plan your perfect Shimla & Rishikesh holiday.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Link href="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-black text-lg shadow-xl hover:scale-105 transition-transform uppercase tracking-tighter">
                   Book Your Tour Now
                </Link>
                <Link href="tel:+911234567890" className="bg-white text-primary px-10 py-4 rounded-full font-black text-lg shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-3">
                   <Phone size={24} className="text-accent" /> Call Specialist
                </Link>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
