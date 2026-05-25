import Image from "next/image";
import { Users, ShieldCheck, Heart, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-[72px] min-h-screen bg-white">
      {/* Banner */}
      <section className="bg-primary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Tour<span className="text-accent">Tra</span></h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            We are dedicated to providing unforgettable travel experiences across the majestic landscapes of Northern India.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[500px] rounded-[50px] overflow-hidden shadow-2xl skew-y-1">
              <Image src="/shi4.jpg" alt="About us" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-serif font-black text-primary leading-none tracking-tighter mb-10">Redefining Your Travel Experience</h2>
              <p className="text-primary/70 text-xl mb-8 font-medium leading-relaxed">
                Founded with a passion for exploration and hospitality, Wanderlust has become a leading name in Himalayan tourism. We believe that travel is not just about visiting places, but about creating memories that last a lifetime.
              </p>
              <p className="text-primary/70 text-xl mb-10 font-medium leading-relaxed">
                Whether you're seeking a spiritual getaway in Rishikesh or a snowy adventure in Shimla, we provide personalized attention, premium vehicles, and the most comfortable stays.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-col p-8 bg-gray-50 rounded-[40px] border border-gray-100">
                  <span className="text-5xl font-black text-accent mb-2">10k+</span>
                  <span className="text-primary font-black uppercase tracking-widest text-xs">Happy Travelers</span>
                </div>
                <div className="flex flex-col p-8 bg-gray-50 rounded-[40px] border border-gray-100">
                  <span className="text-5xl font-black text-accent mb-2">15+</span>
                  <span className="text-primary font-black uppercase tracking-widest text-xs">Expert Guides</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey - NEW SECTION */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="section-container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-4xl font-serif font-black text-accent leading-none tracking-tighter mb-6">Our Journey</h2>
            <p className="text-white/60 font-medium text-lg">How we became your favorite travel partner</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
            {[
              { year: "2015", title: "The Beginning", desc: "Started with a single taxi in the heart of Shimla." },
              { year: "2018", title: "Fleet Expansion", desc: "Added our first luxury Force Urbania to the fleet." },
              { year: "2021", title: "Digital Era", desc: "Launched our first online booking platform." },
              { year: "2026", title: "The Best Today", desc: "Serving thousands of tourists with 3-star+ standards." }
            ].map((step, i) => (
              <div key={i} className="flex-1 bg-white/5 p-10 rounded-[40px] border border-white/10 hover:bg-accent hover:text-primary transition-all group">
                <span className="text-4xl font-black mb-6 block text-accent group-hover:text-primary">{step.year}</span>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{step.title}</h3>
                <p className="text-white/60 group-hover:text-primary font-medium"> {step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-serif font-black text-primary leading-none tracking-tighter mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Friendly Environment", desc: "We treat every customer like family, ensuring a warm and hospitable environment." },
              { icon: ShieldCheck, title: "Safety First", desc: "Your safety is our priority. Professional drivers and well-maintained vehicles." },
              { icon: Users, title: "Expert Staff", desc: "Highly trained professionals who know the mountains better than anyone." },
              { icon: Award, title: "Best Value", desc: "Premium 3-star+ experiences at the most competitive market rates." },
            ].map((v, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[40px] hover:shadow-2xl transition-all text-center border border-gray-100">
                <div className="w-20 h-20 bg-primary text-accent rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <v.icon size={36} />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-primary">{v.title}</h3>
                <p className="text-primary/60 font-medium"> {v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
