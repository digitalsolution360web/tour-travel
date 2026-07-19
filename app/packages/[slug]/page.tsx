"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, Car, Hotel, Calendar, ArrowRight, MessageSquare, Phone, Star, ShieldCheck, Mail } from "lucide-react";

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
  },
  mcleodganj: {
    title: "McLeod Ganj & Triund Trekking",
    image: "/mcleod.png",
    description: "Explore the residence of His Holiness the Dalai Lama and the spiritual heart of the Tibetan community in India. This package includes the famous Triund Trek and visits to serene waterfalls and colonial landmarks.",
    duration: "4 Nights / 5 Days",
    itinerary: [
      { day: "Day 1: Arrival & Local Exploration", spots: ["Tsuglagkhang Complex", "Dalai Lama Temple", "Tibetan Museum"] },
      { day: "Day 2: Nature & Views", spots: ["Bhagsu Waterfall", "Bhagsunath Temple", "Dharamkot Village"] },
      { day: "Day 3: Triund Trek", spots: ["Triund Top", "Camping", "Star Gazing"] },
      { day: "Day 4: Heritage & Sunsets", spots: ["St. John in the Wilderness", "Naddi View Point", "Sunset View"] },
      { day: "Day 5: Departure", spots: ["Local Shopping", "Return Journey"] },
    ],
    vehicles: ["Maruti Aura", "Maruti Ertiga", "Maruti Dezire", "Force Urbania"],
    highlights: ["Camping at Triund", "Spiritual Connection", "Tibetan Culture", "Luxury Vehicle Transfers"],
    rating: 4.9,
  },
  haridwar: {
    title: "Haridwar Spiritual Journey",
    image: "/haridwar.png",
    description: "Dive into the spiritual vibes of one of the holiest cities in India. Experience the divine Ganga Aarti and visit ancient temples perched on hills offering panoramic views of the Ganges.",
    duration: "4 Nights / 5 Days",
    itinerary: [
      { day: "Day 1: Arrival & Aarti", spots: ["Har Ki Pauri", "Evening Ganga Aarti", "Local Market"] },
      { day: "Day 2: Temple Trails", spots: ["Mansa Devi Temple", "Cable Car Ride", "Chandi Devi Temple"] },
      { day: "Day 3: Cultural Heritage", spots: ["Bharat Mata Mandir", "Pawan Dham", "Shanti Kunj"] },
      { day: "Day 4: Nearby Exploration", spots: ["Daksheswar Mahadev Temple", "Sapt Rishi Ashram"] },
      { day: "Day 5: Departure", spots: ["Morning Holy Dip", "Return Journey"] },
    ],
    vehicles: ["Maruti Aura", "Maruti Ertiga", "Maruti Dezire", "Force Urbania"],
    highlights: ["Ganga Aarti VIP View", "Knowledgeable Guides", "Comfortable Stays", "24/7 Support"],
    rating: 4.7,
  },
  jaipur: {
    title: "Jaipur Pink City Heritage",
    image: "/jaipur.png",
    description: "Experience the royal grandeur of Rajasthan. From the intricate facade of Hawa Mahal to the massive Amber Fort, every corner of Jaipur tells a story of valor and luxury.",
    duration: "6 Nights / 7 Days",
    itinerary: [
      { day: "Day 1: Pink City Welcome", spots: ["Albert Hall Museum", "Birla Mandir"] },
      { day: "Day 2: Royal Landmarks", spots: ["City Palace", "Jantar Mantar", "Hawa Mahal"] },
      { day: "Day 3: Fort Day", spots: ["Amber Fort", "Nahargarh Fort", "Jaigarh Fort"] },
      { day: "Day 4: Lake & Luxury", spots: ["Jal Mahal", "Shopping at Johari Bazaar"] },
      { day: "Day 5: Rural Experience", spots: ["Chokhi Dhani Ethnic Village"] },
      { day: "Day 6: Local Flavors", spots: ["Masala Chowk", "Panna Meena ka Kund"] },
      { day: "Day 7: Departure", spots: ["World Trade Park", "Return Journey"] },
    ],
    vehicles: ["Maruti Aura", "Maruti Ertiga", "Innova Hycross", "Luxury Bus"],
    highlights: ["Elephant/Jeep Ride at Amber", "Heritage Hotel Stays", "Rajputana Hospitality", "Expert Historian Guide"],
    rating: 4.8,
  },
  agra: {
    title: "Agra Mughal Heritage Tour",
    image: "/agra.png",
    description: "Behold the eternal monument of love, the Taj Mahal. Explore the magnificent Agra Fort and the abandoned city of Fatehpur Sikri in this comprehensive heritage tour.",
    duration: "6 Nights / 7 Days",
    itinerary: [
      { day: "Day 1: Arrival in Agra", spots: ["Sadarm Bazaar Visit", "Local Cuisines"] },
      { day: "Day 2: The Seventh Wonder", spots: ["Taj Mahal at Sunrise", "Agra Fort"] },
      { day: "Day 3: Mughal Wonders", spots: ["Itimad-ud-Daulah (Baby Taj)", "Mehtab Bagh"] },
      { day: "Day 4: The Ghost City", spots: ["Fatehpur Sikri", "Buland Darwaza", "Salim Chishti Dargah"] },
      { day: "Day 5: Nearby Heritage", spots: ["Akbar's Tomb - Sikandra"] },
      { day: "Day 6: Art & Crafts", spots: ["Marble Inlay Workshops", "Leather Market"] },
      { day: "Day 7: Departure", spots: ["Sunrise View of Taj (optional)", "Return Journey"] },
    ],
    vehicles: ["Maruti Aura", "Maruti Ertiga", "Maruti Dezire", "Force Urbania"],
    highlights: ["Taj Mahal Sunrise Entry", "Local Food Tasting", "Luxury Transfers", "Professional Guides"],
    rating: 4.9,
  },
  delhi: {
    title: "Delhi Capital City Highlights",
    image: "/delhi.png",
    description: "Discover the vibrant contrast of Old and New Delhi. From the narrow lanes of Chandni Chowk to the wide boulevards of Lutyens' Delhi, experience the heart of India.",
    duration: "3 Nights / 4 Days",
    itinerary: [
      { day: "Day 1: Old Delhi Charm", spots: ["Red Fort", "Jama Masjid", "Chandni Chowk"] },
      { day: "Day 2: Modern Landmarks", spots: ["India Gate", "Rashtrapati Bhavan", "Lotus Temple"] },
      { day: "Day 3: Spiritual & Historical", spots: ["Akshardham Temple", "Qutub Minar", "Humayun's Tomb"] },
      { day: "Day 4: Departure", spots: ["Dilli Haat Shopping", "Return to Airport/Railway"] },
    ],
    vehicles: ["Maruti Aura", "Maruti Ertiga", "Innova Hycross"],
    highlights: ["Cycle Rickshaw Ride", "Temple Tours", "Premium City Stays", "Verified Drivers"],
    rating: 4.6,
  },
  nainital: {
    title: "Nainital Lakes & Hills",
    image: "/nainital.png",
    description: "Breathe in the fresh mountain air in the 'Lake District of India'. Enjoy boat rides on Emerald Lake and witness breathtaking snow peaks from the highest corners of the town.",
    duration: "3 Nights / 4 Days",
    itinerary: [
      { day: "Day 1: Arrival & Lake Life", spots: ["Naini Lake", "Mall Road", "Naina Devi Temple"] },
      { day: "Day 2: Peaks & Views", spots: ["Snow View Point", "Tiffin Top", "Eco Cave Gardens"] },
      { day: "Day 3: Lake Tour", spots: ["Bhimtal", "Sattal", "Naukuchiatal"] },
      { day: "Day 4: Departure", spots: ["Himalayan View Point", "Return Journey"] },
    ],
    vehicles: ["Maruti Aura", "Maruti Ertiga", "Maruti Dezire", "Innova"],
    highlights: ["Lake Boating included", "High Altitude Views", "Eco-friendly Tourism", "Safe Hill Driving"],
    rating: 4.8,
  },
  chopta: {
    title: "Chopta Mini Switzerland Trek",
    image: "/mountain.webp",
    description: "Experience the untouched beauty of Chopta, known as the Mini Switzerland of India. This package is perfect for nature lovers and pilgrims wanting to visit the highest Shiva temple in the world.",
    duration: "3 Nights / 4 Days",
    itinerary: [
      { day: "Day 1: Arrival in Chopta", spots: ["Chopta Valley", "Meadows Walk"] },
      { day: "Day 2: Spiritual Trek", spots: ["Tungnath Temple", "Chandrashila Summit"] },
      { day: "Day 3: Lake & Wildlife", spots: ["Deoria Tal", "Kedarnath Wildlife Sanctuary"] },
      { day: "Day 4: Departure", spots: ["Morning Sunrise View", "Return Journey"] },
    ],
    vehicles: ["Maruti Ertiga", "Mahindra Innova", "Force Urbania"],
    highlights: ["Summit Trek", "Rare Wildlife Spotting", "Pristine Environment", "Local Himalayan Meals"],
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
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image src={pkg.image} alt={pkg.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
          <h4 className="text-accent mb-3 animate-fade-in font-medium tracking-[0.3em] uppercase text-sm">Himalayan Expedition</h4>
          <h1 className="text-white mb-8 animate-fade-in text-4xl md:text-6xl font-bold max-w-4xl tracking-tight leading-tight">{pkg.title}</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-white font-semibold text-xs uppercase tracking-widest bg-white/10 backdrop-blur-md px-8 py-3.5 rounded-full border border-white/20 animate-fade-in [animation-delay:200ms]">
            <span className="flex items-center gap-2"><Calendar size={18} className="text-accent" /> {pkg.duration}</span>
            <div className="w-px h-4 bg-white/20 hidden sm:block"></div>
            <span className="flex items-center gap-2"><MapPin size={18} className="text-accent" /> North India</span>
            <div className="w-px h-4 bg-white/20 hidden sm:block"></div>
            <span className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> {pkg.rating} Rating</span>
          </div>
        </div>
      </div>

      <div className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-16">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-[12px] mb-2 block">Journey Details</span>
              <h2 className="mb-6 text-3xl md:text-4xl font-bold text-primary">Tour Overview</h2>
              <p className="text-primary/90 text-xl font-bold leading-relaxed mb-8">{pkg.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: ShieldCheck, label: "Verified" },
                  { icon: Car, label: "Elite Fleet" },
                  { icon: Hotel, label: "3-Star+" },
                  { icon: Calendar, label: "Carefree" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-md">
                    <item.icon size={28} className="text-accent mb-2" />
                    <span className="font-bold text-[11px] uppercase tracking-widest text-primary">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-[12px] mb-2 block">Day-by-Day</span>
              <h2 className="mb-10 text-3xl md:text-4xl font-bold text-primary">Detailed Itinerary</h2>
              <div className="space-y-4">
                {pkg.itinerary.map((item, i) => (
                  <div key={i} className="group bg-white rounded-3xl p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-all cursor-default">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center font-bold text-xl shrink-0 group-hover:bg-primary group-hover:text-accent transition-colors">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="mb-4 text-xl font-bold text-primary group-hover:text-accent transition-colors">{item.day}</h3>
                        <div className="flex flex-wrap gap-2">
                          {item.spots.map(spot => (
                            <span key={spot} className="bg-gray-100 text-primary px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider border border-gray-200">{spot}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary p-8 rounded-[32px] text-white shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform"></div>
                <h2 className="text-xl font-bold text-accent mb-8 flex items-center gap-3">
                  <Car size={24} /> Luxury Fleet
                </h2>
                <div className="space-y-3">
                  {pkg.vehicles.map(v => (
                    <div key={v} className="flex items-center gap-3 text-base font-medium text-white/90">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-[32px] border border-gray-200 shadow-xl group">
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                  <Hotel size={24} className="text-accent" /> Premium Stay
                </h2>
                <ul className="space-y-4">
                  {pkg.highlights.map(h => (
                    <li key={h} className="flex items-start gap-3 text-primary font-bold text-base md:text-lg leading-snug">
                      <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar Booking & Enquiry */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Book Your Tour Card */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-200 shadow-xl">
                <h3 className="mb-2 text-2xl font-bold text-primary">Book Your Tour</h3>
                <p className="text-primary font-bold mb-8 uppercase tracking-widest text-[10px]">Get the best price & custom quote.</p>

                <div className="space-y-3 mb-8">
                  <a href="tel:+918860668844" className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors shadow-lg active:scale-[0.98]">
                    <Phone size={20} className="text-accent" /> Call Now
                  </a>
                  <a href="https://wa.me/918860668844" target="_blank" className="w-full py-4 bg-[#25D366] text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-colors shadow-lg active:scale-[0.98]">
                    <MessageSquare size={20} fill="currentColor" /> Chat on WhatsApp
                  </a>
                </div>

                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 font-medium text-center text-primary/60 text-xs leading-relaxed">
                  Prices depend on group size and seasonality. We guarantee the highest hospitality standards.
                </div>
              </div>

              {/* Quick Enquiry Form Card - Highly Professional & Visible */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-200 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent via-[#FFD700] to-accent"></div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-primary shadow-lg shadow-accent/20">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary leading-tight">Quick Enquiry</h4>
                    <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">Expert Assistance</p>
                  </div>
                </div>

                <form className="space-y-5 mt-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-extrabold text-primary/70 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all font-bold text-sm text-primary placeholder:text-primary/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-extrabold text-primary/70 uppercase tracking-widest ml-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all font-bold text-sm text-primary placeholder:text-primary/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-extrabold text-primary/70 uppercase tracking-widest ml-1">Travel Requirements</label>
                    <textarea
                      placeholder="Tell us about your travel plan..."
                      rows={3}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all font-bold text-sm text-primary placeholder:text-primary/30 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-5 bg-primary text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-accent cursor-pointer hover:text-primary transition-all shadow-xl hover:shadow-accent/40 active:scale-[0.98] mt-2 group/btn"
                  >
                    Send Enquiry <span className="inline-block transition-transform group-hover/btn:translate-x-1 ml-2">→</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

