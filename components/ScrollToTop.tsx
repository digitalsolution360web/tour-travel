"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={`fixed bottom-44 right-6 z-[9998] md:bottom-32 md:right-10 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center w-16 h-16 bg-white text-primary rounded-2xl cursor-pointer shadow-[0_20px_50px_rgba(4,72,78,0.15)] border border-gray-100 hover:bg-accent hover:border-accent hover:text-primary transition-all group"
        aria-label="Scroll to top"
      >
        <ChevronUp size={30} className="group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </div>
  );
}
