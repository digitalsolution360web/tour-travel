import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, Clock, Users, CheckCircle2, MapPin } from "lucide-react";

const packages = [
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
    description: "Explore the residence of Dalai Lama, trek to Triund, and visit Bhagsu Waterfall and Naddi View Point."
  },
  {
    id: "haridwar",
    title: "Haridwar Spiritual Journey",
    image: "/haridwar.png",
    duration: "4N/5D",
    rating: 4.7,
    reviews: "85+",
    description: "Witness the magical Evening Ganga Aarti, visit Mansa Devi, Chandi Devi, and Bharat Mata Mandir."
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
    description: "Experience the wonder of Taj Mahal, Agra Fort, Fatehpur Sikri, and the beautiful Mehtab Bagh."
  },
  {
    id: "delhi",
    title: "Delhi Capital City Highlights",
    image: "/delhi.png",
    duration: "3N/4D",
    rating: 4.6,
    reviews: "140+",
    description: "Visit India Gate, Red Fort, Qutub Minar, Lotus Temple, and the magnificent Akshardham."
  },
  {
    id: "nainital",
    title: "Nainital Lakes & Hills",
    image: "/nainital.png",
    duration: "3N/4D",
    rating: 4.8,
    reviews: "180+",
    description: "Boat in the serene Naini Lake, see Snow View Point, Naina Devi Temple, and Eco Cave Gardens."
  },
  {
    id: "chopta",
    title: "Chopta Mini Switzerland Trek",
    image: "/mountain.webp",
    duration: "3N/4D",
    rating: 5.0,
    reviews: "75+",
    description: "Trek to Tungnath and Chandrashila, visit Deoria Tal and explore Kedarnath Wildlife Sanctuary."
  }
];

export default function PackagesPage() {
  return (
    <main className="pt-[72px] min-h-screen bg-slate-50">
      <section className="bg-primary py-20 text-white relative overflow-hidden rounded-b-[50px] md:rounded-b-[80px]">
        <div className="absolute inset-0 bg-[url('/rishi1.jpeg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="section-container relative z-10 text-center">
          <h4 className="text-accent mb-4">Our Collection</h4>
          <h1 className="text-white mb-6 animate-fade-in tracking-tight">Premium <span className="text-accent">Tour</span> Packages</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
            Handpicked destinations and meticulously planned itineraries for your North India tour.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="group bg-white rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(4,72,78,0.06)] border border-gray-50 transition-all hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-72 overflow-hidden">
                  <Image src={pkg.image} alt={pkg.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-6 left-6 bg-accent text-primary px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-xl">
                    Premium Experience
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-8">
                    <span className="flex items-center gap-2 text-accent font-black text-xs uppercase tracking-[0.3em]">
                      <Clock size={16} /> {pkg.duration}
                    </span>
                    <div className="flex items-center gap-1 bg-gray-50 px-4 py-1.5 rounded-full">
                      <Star size={14} className="text-accent fill-accent" />
                      <span className="text-primary font-black text-xs">{pkg.rating} | {pkg.reviews} Reviews</span>
                    </div>
                  </div>
                  <h3 className="mb-4 text-primary leading-[1.2] group-hover:text-accent transition-colors">{pkg.title}</h3>
                  <p className="text-primary/60 font-bold text-base mb-8 line-clamp-2 leading-relaxed">{pkg.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">Premium Package</span>
                    <Link href={`/packages/${pkg.id}`} className="flex items-center gap-3 bg-primary text-white px-6 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider hover:bg-accent hover:text-primary transition-all shadow-xl group/btn active:scale-95">
                      View Tour <ArrowRight size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Packages? */}
      <section className="py-20 bg-slate-100 rounded-[50px] md:rounded-[80px] mx-4 mb-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-accent mb-4">Service Standards</h4>
              <h2 className="mb-10 text-primary">What's Included in <br />Every Package?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Luxury Vehicle Transfers",
                  "Verified 3-Star+ Hotels",
                  "Daily Breakfast & Meals",
                  "Professional Driver cum Guide",
                  "All Fuel & Toll Tax",
                  "24/7 On-Call Support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                    <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-primary shrink-0 shadow-lg shadow-accent/20">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-bold text-primary text-[10px] uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[450px] rounded-[40px] overflow-hidden shadow-xl">
              <Image src="/rishi2.jpg" alt="Benefits" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-xl p-6 rounded-3xl border border-white/20 text-white max-w-xs">
                <p className="font-bold text-2xl mb-1">100%</p>
                <p className="font-bold text-[10px] tracking-widest uppercase opacity-80">Satisfaction Guaranteed across every tour</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

