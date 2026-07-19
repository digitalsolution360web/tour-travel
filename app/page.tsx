import HeroSlider from "@/components/HeroSlider";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import Image from "next/image";
import { Star, MapPin, Car, Hotel, CheckCircle, ArrowRight, Phone, MessageSquare } from "lucide-react";

const allPackages = [
  {
    id: "shimla",
    title: "Shimla Hill Station Special",
    image: "/shi.jpg",
    duration: "3N/4D",
    rating: 4.9,
    reviews: "120+",
    description: "The classic Queen of Hills experience with visits to Ridge, Kufri and Mall Road."
  },
  {
    id: "rishikesh",
    title: "Rishikesh Adventure & Spirituality",
    image: "/rishi1.jpeg",
    duration: "2N/3D",
    rating: 4.8,
    reviews: "95+",
    description: "Spiritual connection at Triveni Ghat and adrenaline-pumping Ganga Rafting."
  },
  {
    id: "manali",
    title: "Manali & Solang Valley Adventure",
    image: "/shi2.jpg",
    duration: "4N/5D",
    rating: 5.0,
    reviews: "150+",
    description: "Snow adventures at Solang Valley, Atal Tunnel and the serenity of Parvati Valley."
  },
  {
    id: "mcleodganj",
    title: "McLeod Ganj & Triund Trekking",
    image: "/mcleod.png",
    duration: "4N/5D",
    rating: 4.9,
    reviews: "110+",
    description: "Explore the residence of Dalai Lama, trek to Triund, and visit Bhagsu Waterfall."
  },
  {
    id: "haridwar",
    title: "Haridwar Spiritual Journey",
    image: "/haridwar.png",
    duration: "4N/5D",
    rating: 4.7,
    reviews: "85+",
    description: "Witness the magical Evening Ganga Aarti, visit Mansa Devi and Bharat Mata Mandir."
  },
  {
    id: "jaipur",
    title: "Jaipur Pink City Heritage",
    image: "/jaipur.png",
    duration: "6N/7D",
    rating: 4.8,
    reviews: "210+",
    description: "Discover the royal heritage at Hawa Mahal, Amber Fort, City Palace, and Jal Mahal."
  },
  {
    id: "agra",
    title: "Agra Mughal Heritage Tour",
    image: "/agra.png",
    duration: "6N/7D",
    rating: 4.9,
    reviews: "320+",
    description: "Experience the wonder of Taj Mahal, Agra Fort, and the beautiful Mehtab Bagh."
  },
  {
    id: "delhi",
    title: "Delhi Capital City Highlights",
    image: "/delhi.png",
    duration: "3N/4D",
    rating: 4.6,
    reviews: "140+",
    description: "Visit India Gate, Red Fort, Qutub Minar, Lotus Temple, and Akshardham."
  },
  {
    id: "nainital",
    title: "Nainital Lakes & Hills",
    image: "/nainital.png",
    duration: "3N/4D",
    rating: 4.8,
    reviews: "180+",
    description: "Boat in the serene Naini Lake, see Snow View Point and Naina Devi Temple."
  },
  {
    id: "chopta",
    title: "Chopta Mini Switzerland Trek",
    image: "/mountain.webp",
    duration: "3N/4D",
    rating: 5.0,
    reviews: "75+",
    description: "Trek to Tungnath and Chandrashila, visit Deoria Tal and explore Wildlife Sanctuary."
  }
];



export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSlider />

      {/* Featured Packages */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-[11px] mb-3 block">Premium Destinations</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Our Top <span className="text-accent">Tour</span> <br className="hidden md:block" /> Packages
              </h2>
            </div>
            <p className="text-primary/70 max-w-md font-bold text-lg leading-relaxed">
              Handpicked world-class destinations crafted for your ultimate travel pleasure. Comfort meets heritage in every mile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPackages.map((pkg) => (
              <div key={pkg.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-2">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 bg-accent text-primary px-5 py-2 rounded-full text-[10px] font-black shadow-xl uppercase tracking-widest">
                    Best Seller
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
                      <Star size={14} className="text-accent fill-accent" />
                      <span className="text-primary font-bold text-[11px]">{pkg.rating} | {pkg.reviews}</span>
                    </div>
                    <span className="text-accent font-bold text-[11px] uppercase tracking-widest">{pkg.duration || "4N/5D"}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors leading-tight">{pkg.title}</h3>
                  <p className="text-primary/60 font-medium text-sm mb-8 line-clamp-2 leading-relaxed">{pkg.description}</p>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                    <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">Premium Package</span>
                    <Link href={`/packages/${pkg.id}`} className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-2xl font-semibold text-xs uppercase tracking-wider hover:bg-accent hover:text-primary transition-all shadow-md group/btn active:scale-95">
                      View Tour <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/packages" className="inline-flex items-center gap-2 bg-primary/5 hover:bg-primary text-primary hover:text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border border-primary/10">
              View All Packages <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* World-Class Comfort & Standards Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

        <div className="section-container relative z-10 text-center mb-16">
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-[11px] mb-3 block">Unmatched Quality</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Premium Travel Standard</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            We prioritize your comfort and safety above all else. Every aspect of our tour is designed to provide a seamless and luxury experience.
          </p>
        </div>

        <div className="section-container grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            { title: "Luxury Fleet", icon: Car, items: ["Aura & Dzire", "Ertiga & Crysta", "Force Urbania", "Luxury Buses", "Pickup Service"] },
            { title: "Elite Stays", icon: Hotel, items: ["3-Star+ Properties", "Prime Locations", "All Meals Options", "Safety Protocols", "High-Speed WiFi"] },
            { title: "Expert Care", icon: CheckCircle, items: ["Certified Guides", "Personalized Care", "24/7 Help Desk", "Toll & Tax Paid", "Hassle Free"] }
          ].map((box, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all group hover:-translate-y-2">
              <div className="w-14 h-14 bg-accent text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-2xl shadow-accent/20">
                <box.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">{box.title}</h3>
              <ul className="space-y-3">
                {box.items.map(item => (
                  <li key={item} className="flex items-center gap-3 text-white/80 font-bold text-[13px] group-hover:text-white transition-colors">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)]"></div> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Activities Section */}
      <section className="py-24 bg-white relative">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-[11px] mb-3 block">Adventure & Peace</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">Trending Activities</h2>
            </div>
            <p className="text-primary/70 max-w-sm font-bold text-base leading-relaxed">
              From adrenaline-pumping treks to peaceful spiritual walks, experience the best of Northern India.
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
              <div key={i} className="group relative pb-8 rounded-3xl text-center border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer bg-white overflow-hidden">
                <div className="relative h-44 w-full mb-6 overflow-hidden bg-gray-50">
                  <Image
                    src={act.image}
                    alt={act.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h5 className="font-bold text-primary text-[13px] uppercase tracking-widest group-hover:text-accent transition-colors duration-300 px-4">{act.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[11px] mb-3 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">What Our Travelers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Anjali Gupta", city: "Mumbai", text: "The Shimla tour was absolutely magical. Everything from transport to stay was perfect." },
              { name: "Vikram Singh", city: "Bangalore", text: "Professional staff and great value for money. Highly recommended for family tours." },
              { name: "Suresh Mehra", city: "Delhi", text: "Loved the Rishikesh experience. The rafting and hotel stay were top-notch!" }
            ].map((t, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] relative group border border-transparent hover:border-accent/20 transition-all hover:bg-white hover:shadow-2xl">
                <div className="absolute top-8 right-10 text-accent/20 group-hover:text-accent/40 transition-colors">
                  <MessageSquare size={40} />
                </div>
                <div className="flex gap-1.5 text-accent mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-primary/80 font-bold text-lg mb-8 italic leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg">{t.name[0]}</div>
                  <div>
                    <h6 className="font-bold text-primary text-base">{t.name}</h6>
                    <span className="text-accent text-xs font-black uppercase tracking-widest">{t.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Banner Section */}
      <section className="pb-24 pt-8 bg-white">
        <div className="section-container">
          <div className="bg-accent rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 relative z-10 tracking-tight">Ready for Your <br className="hidden md:block" /> Dream Adventure?</h2>
            <p className="text-primary/80 font-bold text-xl mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
              Plan your next holiday with the experts. We offer customized packages and 24/7 support to ensure your trip is perfect.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl transition-all active:scale-95">
                Book My Tour
              </Link>
              <Link href="tel:+918860668844" className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl transition-all hover:bg-gray-50 flex items-center justify-center gap-3">
                <Phone size={18} className="text-accent" /> Call Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



