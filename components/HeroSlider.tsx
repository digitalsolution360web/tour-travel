"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/rishi1.jpeg",
    title: "Spiritual Rishikesh",
    subtitle: "Experience the divinity of Triveni Ghat & Lakshman Jhula with our premium guided tours.",
    link: "/packages/rishikesh",
  },
  {
    image: "/shi.jpg",
    title: "Majestic Shimla",
    subtitle: "Walk through the Mall Road & Kufri's snow-capped peaks in ultimate comfort.",
    link: "/packages/shimla",
  },
  {
    image: "/jaipur.png",
    title: "Royal Jaipur",
    subtitle: "Discover the heritage of the Pink City with our exclusive Mughal-style tours.",
    link: "/packages/jaipur",
  },
  {
    image: "/mountain.webp",
    title: "Chopta Trekking",
    subtitle: "Trek to the highest Shiva temple and witness the Mini Switzerland of India.",
    link: "/packages/chopta",
  },
  {
    image: "/agra.png",
    title: "Agra Heritage",
    subtitle: "Witness the eternal beauty of the Taj Mahal with our premium day-to-day packages.",
    link: "/packages/agra",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden pt-[72px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-4">
            <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10 flex flex-col items-start text-left">
              <h1 className="text-white mb-4 animate-fade-in text-4xl md:text-6xl font-bold tracking-tight">
                {slide.title}
              </h1>
              <p className="text-base md:text-xl text-white/80 mb-8 max-w-xl animate-fade-in [animation-delay:200ms] font-medium leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:400ms]">
                <Link
                  href={slide.link}
                  className="bg-accent hover:bg-white text-primary px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-lg uppercase tracking-wider text-center active:scale-95"
                >
                  Explore Package
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-xl font-bold text-sm transition-all uppercase tracking-wider text-center active:scale-95"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors hidden md:flex items-center justify-center border border-white/20"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors hidden md:flex items-center justify-center border border-white/20"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-accent w-6" : "bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
