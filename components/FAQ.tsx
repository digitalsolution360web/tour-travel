"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, PhoneCall } from "lucide-react";

const faqs = [
  {
    question: "How do I book a tour package with Travotours?",
    answer:
      "Booking is simple! Browse our carefully curated packages, choose your preferred destination, and click 'Book Now'. You can also connect with our travel specialists directly via WhatsApp or Phone for immediate assistance and customized planning.",
  },
  {
    question: "What exactly is included in the package price?",
    answer:
      "Our premium packages are all-inclusive of high-standard transportation, verified 3-star/4-star hotel accommodations, daily breakfast, professional driver assistance, fuel charges, all state tolls, and parking fees. We ensure there are no hidden costs.",
  },
  {
    question: "Can I customize my tour itinerary after booking?",
    answer:
      "Absolutely! We believe in 'Your Trip, Your Way'. You can easily modify sightseeing destinations, upgrade your hotel categories, or extend your trip duration. Just let our support team know, and we'll handle the rest.",
  },
  {
    question: "Are your tours safe for solo female travelers and families?",
    answer:
      "Safety is our top priority. We employ only verified, professional drivers and partner with highly-rated, safe hotels. For families, we ensure child-friendly amenities and a pace that's comfortable for both kids and seniors.",
  },
  {
    question: "What is your cancellation and refund policy?",
    answer:
      "We offer a flexible and transparent cancellation policy. Cancellations made well in advance (15+ days) are eligible for significant refunds. Terms may vary slightly depending on peak season and specific hotel policies.",
  },
  {
    question: "Do you provide pick-up and drop-off services?",
    answer:
      "Yes, we provide seamless door-to-door service. This includes pick-up and drop-off from airports, railway stations, and your residence or hotel within city limits, ensuring a stress-free start and end to your journey.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <span className="text-accent font-black uppercase tracking-[0.3em] text-[11px] mb-4 block">
            Got Questions?
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>

          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-8"></div>

          <p className="text-primary/60 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our premium tours and services. 
            Can't find what you're looking for? Our team is available 24/7.
          </p>
        </div>

        {/* FAQ Grid/List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`group bg-white rounded-[2rem] border-2 transition-all duration-500 overflow-hidden
                ${isOpen
                    ? "border-accent shadow-[0_30px_60px_rgba(4,72,78,0.08)]"
                    : "border-gray-50 hover:border-accent/40 hover:shadow-xl"
                  }`}
              >
                {/* Question Area */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-8 md:px-10 py-8 text-left transition-all"
                >
                  <div className="flex items-center gap-6">
                    {/* Number/Icon */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                      isOpen ? "bg-accent text-primary rotate-[15deg] shadow-lg shadow-accent/20" : "bg-primary/5 text-primary"
                    }`}>
                      <span className="font-black text-lg">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Question Title */}
                    <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                      isOpen ? "text-primary" : "text-primary/80 group-hover:text-primary"
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  {/* Icon Indicator */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 shrink-0 transition-all duration-500 ${
                    isOpen ? "rotate-180 bg-primary border-primary text-white" : "border-gray-100 text-primary/30"
                  }`}>
                    <ChevronDown size={22} strokeWidth={3} />
                  </div>
                </button>

                {/* Answer Area */}
                <div
                  className={`transition-all duration-500 ease-in-out ${isOpen
                    ? "max-h-[400px] opacity-100"
                    : "max-h-0 opacity-0"
                    } overflow-hidden`}
                >
                  <div className="px-8 md:px-10 pb-10">
                    <div className="flex gap-6">
                      <div className="hidden md:block w-px h-auto bg-gray-100 mt-2 mb-2 ml-7"></div>
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-6">
                           <HelpCircle size={18} className="text-accent mt-1 shrink-0" />
                           <p className="text-primary/70 text-lg font-medium leading-relaxed">
                            {faq.answer}
                           </p>
                        </div>
                        
                        <div className="flex items-center gap-4 py-4 px-6 bg-accent/5 rounded-2xl border border-accent/10 w-fit">
                          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">
                            Professional Support Guaranteed
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in [animation-delay:400ms]">
          <div className="inline-block p-1 bg-gray-50 rounded-full mb-8">
            <div className="flex items-center gap-3 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[8px] text-white border-2 border-white">{String.fromCharCode(64 + i)}</div>
                ))}
              </div>
              <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">3500+ Travelers Helped This Month</span>
            </div>
          </div>

          <h4 className="text-2xl font-bold text-primary mb-10">Still have a specific query?</h4>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="tel:+919876543210"
              className="group flex items-center gap-4 bg-primary hover:bg-primary/95 text-white px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all shadow-2xl active:scale-95"
            >
              <PhoneCall size={18} className="transition-transform group-hover:rotate-12" />
              Call Specialist
            </a>

            <a
              href="/contact"
              className="group flex items-center gap-4 bg-white border-2 border-primary/10 hover:border-accent text-primary px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95"
            >
              <MessageCircle size={18} className="transition-transform group-hover:scale-110" />
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}