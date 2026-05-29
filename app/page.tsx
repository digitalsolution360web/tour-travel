import HeroSlider from "@/components/HeroSlider";
import Link from "next/link";
import Image from "next/image";
import { Star, MapPin, Car, Hotel, CheckCircle, ArrowRight, Phone, MessageSquare } from "lucide-react";

const featuredPackages = [
  {
    id: "shimla",
    title: "Shimla Hill Station Special",
    image: "/shi3.jpg",
    price: "₹7,999",
    spots: ["The Ridge", "Kufri", "Mall Road"],
    rating: 4.9,
    reviews: "120+"
  },
  {
    id: "rishikesh",
    title: "Rishikesh Adventure Tour",
    image: "/rishi4.jpg",
    price: "₹5,499",
    spots: ["River Rafting", "Triveni Ghat", "Ram Jhula"],
    rating: 4.8,
    reviews: "95+"
  },
  {
    id: "manali",
    title: "Manali & Solang Valley",
    image: "/shi.jpg",
    price: "₹9,999",
    spots: ["Atal Tunnel", "Solang Valley", "Hadimba Temple"],
    rating: 5.0,
    reviews: "150+"
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSlider />

      {/* Featured Packages */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="text-left">
              <h4 className="text-accent mb-4">Exquisite Escapes</h4>
              <h2 className="leading-[0.9]">
                Popular <span className="text-accent">Tour</span> <br />Packages
              </h2>
            </div>
            <p className="text-primary/60 max-w-md font-bold text-lg leading-relaxed">
              Explore our handpicked destinations designed to give you the ultimate travel experience with comfort and class.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredPackages.map((pkg) => (
              <div key={pkg.id} className="group bg-white rounded-[50px] overflow-hidden shadow-[0_40px_100px_rgba(4,72,78,0.1)] border border-gray-50 transition-all hover:-translate-y-4">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 bg-accent text-primary px-5 py-2 rounded-full text-xs font-black shadow-2xl uppercase tracking-widest">
                    Best Seller
                  </div>
                </div>
                <div className="p-10">
                   <div className="flex items-center gap-1 text-accent mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < Math.floor(pkg.rating) ? "currentColor" : "none"} className={i < Math.floor(pkg.rating) ? "" : "text-gray-200"} />)}
                    <span className="text-primary/40 text-[10px] font-black ml-2 uppercase tracking-[0.2em]">{pkg.rating} • {pkg.reviews} REVIEWS</span>
                  </div>
                  <h3 className="mb-4 group-hover:text-accent transition-colors leading-tight">{pkg.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {pkg.spots.map((spot) => (
                      <span key={spot} className="bg-gray-50 text-primary/60 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-gray-100">{spot}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-8 border-t border-gray-50">
                    <div>
                        <p className="text-[10px] font-black text-primary/40 uppercase tracking-widest mb-1">Starting from</p>
                        <span className="text-3xl font-black text-primary">{pkg.price}</span>
                    </div>
                    <Link href={`/packages/${pkg.id}`} className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center hover:bg-accent hover:text-primary transition-all group/btn shadow-xl">
                      <ArrowRight size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* World-Class Comfort & Standards Section - Reduced Padding & Professional Scale */}
      <section className="py-20 bg-primary text-white overflow-hidden relative rounded-t-[60px] md:rounded-t-[100px]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 border-[40px] border-white/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="section-container relative z-10 text-center mb-16">
          <h4 className="text-accent mb-4">Unmatched Hospitality</h4>
          <h2 className="text-white mb-6">World-Class Comfort</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            We don't just provide tours; we provide memories wrapped in luxury and local wisdom. Every detail is crafted for your perfection.
          </p>
        </div>

        <div className="section-container grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Box 1: Fleet */}
          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all group">
            <div className="w-14 h-14 bg-accent text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform shadow-lg">
              <Car size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Our Luxury Fleet</h3>
            <ul className="space-y-3">
              {["Maruti Suzuki Aura", "Maruti Ertiga", "Maruti Dzire", "Force Traveller", "Urbania Minibus", "Luxury Coaches"].map(item => (
                <li key={item} className="flex items-center gap-3 text-white/50 font-bold text-[13px] group-hover:text-white/80 transition-colors">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Box 2: Premium Stays */}
          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all group">
            <div className="w-14 h-14 bg-accent text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform shadow-lg">
              <Hotel size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Premium Stays</h3>
            <ul className="space-y-3">
              {["3-Star+ Rated Hotels", "Breakfast Included", "Prime City Locations", "Hot Water & WiFi", "Family & Couple Friendly", "Highest Safety"].map(item => (
                <li key={item} className="flex items-center gap-3 text-white/50 font-bold text-[13px] group-hover:text-white/80 transition-colors">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Box 3: Perks */}
          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all group">
            <div className="w-14 h-14 bg-accent text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform shadow-lg">
              <Star size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Tour Package Perks</h3>
            <ul className="space-y-3">
              {["Doorstep Pickup & Drop", "Professional Local Guide", "Curated Sightseeing", "24/7 Support", "Friendly Environment", "Local Experiences"].map(item => (
                <li key={item} className="flex items-center gap-3 text-white/50 font-bold text-[13px] group-hover:text-white/80 transition-colors">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Popular Activities Section - Reduced Padding */}
      <section className="py-20 bg-white relative">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="text-left">
              <h4 className="text-accent mb-4">Adventure Awaits</h4>
              <h2 className="leading-none">Popular Activities</h2>
            </div>
            <p className="text-primary/40 max-w-sm font-bold text-[15px] leading-relaxed">
              From the thrills of white water rafting to the peace of ancient temple walks, discover true Himalayan spirit.
            </p>
          </div>
                   <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { name: "River Rafting", image: "/river.webp" },
              { name: "Mountain Trek", image: "/mountain.webp" },
              { name: "Temple Tours", image: "/temple.webp" },
              { name: "Local Food", image: "/localfood.webp" },
              { name: "Photography", image: "/photography.webp" },
              { name: "Hot Springs", image: "/hot.webp" },
              { name: "Jungle Safari", image: "/jungle.webp" },
              { name: "Yoga Session", image: "/yoga.webp" },
              { name: "Paragliding", image: "/para.webp" },
              { name: "Camping", image: "/camping.webp" },
            ].map((act, i) => (
              <div key={i} className="group relative bg-white p-2 pb-8 rounded-[40px] text-center border border-gray-100 shadow-[0_20px_50px_rgba(4,72,78,0.05)] hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-3 cursor-default">
                <div className="relative h-44 w-full mb-6 rounded-[32px] overflow-hidden bg-gray-50">
                  <Image
                    src={act.image}
                    alt={act.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h5 className="font-black text-primary text-[11px] uppercase tracking-[0.2em] group-hover:text-accent transition-colors duration-300 px-4">{act.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Reduced Padding */}
      <section className="py-20 bg-gray-50 rounded-[60px] md:rounded-[100px] mx-4 my-4">
        <div className="section-container">
          <div className="text-center mb-16">
            <h4 className="text-accent mb-4">Guest Feedback</h4>
            <h2>Traveler Stories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Anjali Gupta", city: "Mumbai", text: "The Shimla tour was magical. The Force Urbania was very comfortable for our family of 12." },
              { name: "Vikram Singh", city: "Bangalore", text: "Best rafting experience in Rishikesh! The guides were very professional and safe." },
              { name: "Suresh Mehra", city: "Delhi", text: "Premium stays indeed! Every hotel we stayed in was 4-star category. Fantastic value." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-xl shadow-primary/5 border border-white relative overflow-hidden group">
                <div className="text-accent text-6xl font-serif absolute -top-2 -right-2 opacity-10">“</div>
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-primary/70 font-bold text-[16px] mb-10 leading-relaxed relative z-10 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/5 text-accent rounded-2xl flex items-center justify-center font-black text-lg border border-accent/10">{t.name[0]}</div>
                  <div>
                    <h6 className="font-black text-primary text-base leading-tight">{t.name}</h6>
                    <span className="text-accent text-[9px] font-black uppercase tracking-[0.2em]">{t.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Banner Section - Reduced Padding & professional touch */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="bg-accent rounded-[50px] p-12 md:p-16 text-center relative overflow-hidden shadow-[0_40px_80px_rgba(255,179,3,0.25)]">
             <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
             
              <div className="relative z-10 mb-8 flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-0">
                <h2 className="text-primary">Ready for Your</h2>
                <h2 className="text-white">Dream Getaway?</h2>
              </div>
             <p className="text-primary/80 font-bold text-lg mb-10 max-w-xl mx-auto leading-relaxed relative z-10">
                Call us now or get a free custom quote. Our travel experts are waiting to plan your holiday.
             </p>
             <div className="flex flex-col sm:flex-row gap-5 justify-center relative z-10">
                <Link href="/contact" className="bg-primary hover:bg-secondary text-white px-10 py-4 rounded-full font-black text-sm shadow-xl transition-all hover:scale-105 uppercase tracking-[0.1em]">
                   Book Tour Now
                </Link>
                <Link href="tel:+919876543210" className="bg-white text-primary px-10 py-4 rounded-full font-black text-sm shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-3 uppercase tracking-[0.1em]">
                   <Phone size={20} className="text-accent" /> Call Specialist
                </Link>
             </div>
          </div>
        </div>
      </section>

    </main>
  );
}

