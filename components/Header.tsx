"use client";

import { Activity } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-8 h-8 bg-brand-primary/20 rounded-lg flex items-center justify-center">
            <Activity className="w-5 h-5 text-brand-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight text-zinc-900">
            OnSite<span className="text-brand-primary">Fit</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["Problem", "Solution", "Pricing"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`hidden md:block px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
            scrolled
              ? "bg-zinc-900 text-white hover:bg-zinc-800"
              : "bg-white text-zinc-900 hover:bg-zinc-50 shadow-sm"
          }`}
        >
          Join Waitlist
        </button>
      </div>
    </header>
  );
}
