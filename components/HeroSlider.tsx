"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/rishi1.jpeg",
    title: "Spiritual Rishikesh",
    subtitle: "Experience the divinity of Triveni Ghat & Lakshman Jhula",
    link: "/packages/rishikesh",
  },
  {
    image: "/shi.jpg",
    title: "Majestic Shimla",
    subtitle: "Walk through the Mall Road & Kufri's snow-capped peaks",
    link: "/packages/shimla",
  },
  {
    image: "/rishi2.jpg",
    title: "Adventure Awaits",
    subtitle: "Feel the thrill of River Rafting in the Holy Ganges",
    link: "/packages/rishikesh",
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
    <section className="relative h-[75vh] w-full overflow-hidden pt-[72px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover scale-110"
            priority={index === 0}
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-4">
            <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10 flex flex-col items-start text-left">
              <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-4 animate-fade-in drop-shadow-lg tracking-tighter leading-tight max-w-3xl">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl animate-fade-in [animation-delay:200ms] font-medium leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-5 animate-fade-in [animation-delay:400ms]">
                <Link
                  href={slide.link}
                  className="bg-accent hover:bg-white text-primary px-10 py-3.5 rounded-full font-black text-lg transition-all transform hover:scale-105 shadow-xl uppercase tracking-tighter text-center"
                >
                  Explore Package
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 px-10 py-3.5 rounded-full font-black text-lg transition-all transform hover:scale-105 uppercase tracking-tighter text-center"
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
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full glass-dark text-white hover:bg-white/20 transition-colors hidden md:block"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full glass-dark text-white hover:bg-white/20 transition-colors hidden md:block"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-accent w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
