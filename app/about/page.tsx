import Image from "next/image";
import { Users, ShieldCheck, Heart, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pt-[72px] min-h-screen bg-white">
      {/* Banner */}
      <section className="bg-primary py-20 text-white relative overflow-hidden rounded-b-[50px] md:rounded-b-[80px]">
        <div className="absolute inset-0 bg-[url('/shi2.jpg')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
        <div className="section-container relative z-10 text-center">
          <h4 className="text-accent mb-4">Our Legacy</h4>
          <h1 className="text-white mb-6 animate-fade-in tracking-tight">About Tour<span className="text-accent">Tra</span></h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
            We are dedicated to providing unforgettable travel experiences across the majestic landscapes of Northern India since 2015.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[450px] rounded-[40px] overflow-hidden shadow-xl">
              <Image src="/shi4.jpg" alt="About us" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl">
                <p className="text-white font-bold text-xl italic tracking-tight">"Travel isn't just about the destination, it's about the soul of the journey."</p>
              </div>
            </div>
            <div>
              <h4 className="text-accent mb-4">Our Mission</h4>
              <h2 className="mb-8 text-primary">Redefining Your <br />Travel Experience</h2>
              <p className="text-primary/70 text-xl mb-8 font-bold leading-relaxed">
                Founded with a passion for exploration and hospitality, Wanderlust has become a leading name in Himalayan tourism. We believe that travel is not just about visiting places, but about creating memories that last a lifetime.
              </p>
              <p className="text-primary/70 text-lg mb-8 font-bold leading-relaxed">
                Whether you're seeking a spiritual getaway in Rishikesh or a snowy adventure in Shimla, we provide personalized attention, premium vehicles, and the most comfortable stays.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col p-8 bg-gray-50 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                  <span className="text-4xl font-bold text-accent mb-1">10k+</span>
                  <span className="text-primary font-bold uppercase tracking-widest text-[9px]">Happy Travelers</span>
                </div>
                <div className="flex flex-col p-8 bg-gray-50 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                  <span className="text-4xl font-bold text-accent mb-1">15+</span>
                  <span className="text-primary font-bold uppercase tracking-widest text-[9px]">Expert Guides</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-primary text-white overflow-hidden relative rounded-[50px] md:rounded-[80px] mx-4 mb-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h4 className="text-accent mb-4">The Timeline</h4>
            <h2 className="text-white">Our Journey</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: "2015", title: "The Beginning", desc: "Started with a single taxi in the heart of Shimla." },
              { year: "2018", title: "Fleet Expansion", desc: "Added our first luxury Force Urbania to the fleet." },
              { year: "2021", title: "Digital Era", desc: "Launched our first online booking platform." },
              { year: "2026", title: "The Best Today", desc: "Serving thousands of tourists with 3-star+ standards." }
            ].map((step, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-[40px] border border-white/10 hover:bg-accent hover:text-primary transition-all group cursor-default">
                <span className="text-3xl font-bold mb-6 block text-accent group-hover:text-primary">{step.year}</span>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter text-white group-hover:text-primary">{step.title}</h3>
                <p className="text-white/60 group-hover:text-primary/70 font-bold text-base leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h4 className="text-accent mb-4">Why Choose Us</h4>
            <h2 className="text-primary">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: Heart, title: "Friendly Environment", desc: "We treat every customer like family, ensuring a warm and hospitable environment." },
              { icon: ShieldCheck, title: "Safety First", desc: "Your safety is our priority. Professional drivers and well-maintained vehicles." },
              { icon: Users, title: "Expert Staff", desc: "Highly trained professionals who know the mountains better than anyone." },
              { icon: Award, title: "Best Value", desc: "Premium 3-star+ experiences at the most competitive market rates." },
            ].map((v, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-[40px] hover:bg-white hover:shadow-xl transition-all text-center border border-gray-100 group">
                <div className="w-20 h-20 bg-primary text-accent rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:rotate-6 transition-transform">
                  <v.icon size={36} />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter text-primary">{v.title}</h3>
                <p className="text-primary/60 font-bold text-base leading-relaxed"> {v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="bg-accent rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-xl">
             <div className="relative z-10">
                <h2 className="text-primary mb-8">Ready to Start <br />Your Story?</h2>
                <Link href="/packages" className="inline-flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl uppercase tracking-widest">
                   View Our Packages <ArrowRight size={24} />
                </Link>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}

