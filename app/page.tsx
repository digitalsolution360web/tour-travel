import HeroSlider from "@/components/HeroSlider";
import Link from "next/link";
import Image from "next/image";
import { Star, MapPin, Car, Hotel, CheckCircle, ArrowRight, Phone, MessageSquare } from "lucide-react";

const featuredPackages = [
  {
    id: "jaipur",
    title: "Jaipur Heritage Tour",
    image: "/jaipur.png",
    price: "₹12,499",
    spots: ["Amber Fort", "Hawa Mahal", "City Palace"],
    rating: 4.8,
    reviews: "210+"
  },
  {
    id: "agra",
    title: "Agra Mughal Wonder",
    image: "/agra.png",
    price: "₹10,999",
    spots: ["Taj Mahal", "Agra Fort", "Mehtab Bagh"],
    rating: 4.9,
    reviews: "320+"
  },
  {
    id: "nainital",
    title: "Nainital Lake Special",
    image: "/nainital.png",
    price: "₹7,999",
    spots: ["Naini Lake", "Snow View", "Naina Devi"],
    rating: 4.8,
    reviews: "180+"
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
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">Exquisite Escapes</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Popular <span className="text-accent">Tour</span> <br className="hidden md:block" /> Packages
              </h2>
            </div>
            <p className="text-primary/80 max-w-md font-medium text-lg leading-relaxed">
              Explore our handpicked destinations designed to give you the ultimate travel experience with comfort and class.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPackages.map((pkg) => (
              <div key={pkg.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 rounded-full text-[9px] font-bold shadow-lg uppercase tracking-wider">
                    Best Seller
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 text-accent mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={i < Math.floor(pkg.rating) ? "currentColor" : "none"} className={i < Math.floor(pkg.rating) ? "" : "text-gray-200"} />)}
                    <span className="text-primary/60 text-[10px] font-bold ml-2 uppercase tracking-widest">{pkg.rating} ({pkg.reviews})</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-tight">{pkg.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {pkg.spots.slice(0, 2).map((spot) => (
                      <span key={spot} className="bg-gray-100 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-gray-200">{spot}</span>
                    ))}
                    {pkg.spots.length > 2 && <span className="bg-gray-100 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-gray-200">+{pkg.spots.length - 2} More</span>}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div>
                      <p className="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-0.5">Starting from</p>
                      <span className="text-xl font-bold text-primary">{pkg.price}</span>
                    </div>
                    <Link href={`/packages/${pkg.id}`} className="w-10 h-10 bg-primary/5 text-primary rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all group/btn shadow-sm">
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* World-Class Comfort & Standards Section */}
      <section className="py-20 bg-primary text-white overflow-hidden relative rounded-t-[40px] md:rounded-t-[60px]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="section-container relative z-10 text-center mb-12">
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">Unmatched Hospitality</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">World-Class Comfort</h2>
          <p className="text-white/90 text-lg max-w-xl mx-auto font-medium leading-relaxed">
            We don't just provide tours; we provide memories wrapped in luxury and local wisdom. Every detail is crafted for your perfection.
          </p>
        </div>

        <div className="section-container grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {[
            { title: "Our Luxury Fleet", icon: Car, items: ["Aura", "Ertiga", "Dzire", "Traveller", "Urbania", "Buses"] },
            { title: "Premium Stays", icon: Hotel, items: ["3-Star+ Hotels", "Top Locations", "Breakfast Inc.", "Safety First", "WiFi", "Family Friendly"] },
            { title: "Tour Perks", icon: Star, items: ["Doorstep Pickup", "Local Guide", "Sightseeing", "24/7 Support", "Environment", "Experiences"] }
          ].map((box, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-accent text-primary rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform shadow-md">
                <box.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-4 tracking-tight">{box.title}</h3>
              <ul className="grid grid-cols-2 gap-2">
                {box.items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-white/80 font-bold text-[12px] group-hover:text-white transition-colors">
                    <div className="w-1 h-1 bg-accent rounded-full"></div> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Activities Section - Restored and Refined */}
      <section className="py-20 bg-white relative">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">Adventure Awaits</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Popular Activities</h2>
            </div>
            <p className="text-primary/70 max-w-sm font-bold text-base leading-relaxed">
              From the thrills of white water rafting to the peace of ancient temple walks, discover true Himalayan spirit.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
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
              <div key={i} className="group relative pb-6 rounded-2xl text-center border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-2 cursor-default bg-white overflow-hidden">
                <div className="relative h-40 w-full mb-5 overflow-hidden bg-gray-50">
                  <Image
                    src={act.image}
                    alt={act.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h5 className="font-bold text-primary text-[12px] uppercase tracking-widest group-hover:text-accent transition-colors duration-300 px-4">{act.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 rounded-[40px] mx-4 my-8">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">Guest Feedback</span>
            <h2 className="text-3xl font-bold text-primary">Traveler Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Anjali Gupta", city: "Mumbai", text: "The Shimla tour was magical. The Force Urbania was very comfortable." },
              { name: "Vikram Singh", city: "Bangalore", text: "Best rafting experience in Rishikesh! The guides were very professional." },
              { name: "Suresh Mehra", city: "Delhi", text: "Premium stays indeed! Every hotel we stayed in was top category." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group">
                <div className="flex gap-1 text-accent mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="text-primary/90 font-bold text-lg mb-6 leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/5 text-primary rounded-xl flex items-center justify-center font-bold text-base">{t.name[0]}</div>
                  <div>
                    <h6 className="font-bold text-primary text-sm">{t.name}</h6>
                    <span className="text-accent text-[11px] font-bold uppercase tracking-widest">{t.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Banner Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="bg-accent rounded-3xl p-10 md:p-12 text-center relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4 relative z-10">Ready for Your Dream Getaway?</h2>
            <p className="text-primary/90 font-bold text-lg mb-8 max-w-lg mx-auto relative z-10">
              Call us now or get a free custom quote. Our travel experts are waiting to plan your holiday.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 uppercase tracking-wider">
                Book Tour Now
              </Link>
              <Link href="tel:+919876543210" className="bg-white text-primary px-8 py-3 rounded-xl font-bold text-sm shadow-sm transition-all hover:bg-gray-50 flex items-center justify-center gap-2 uppercase tracking-wider">
                <Phone size={16} className="text-accent" /> Call Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


