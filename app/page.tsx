"use client";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import WhereAndWhen from "@/components/sections/WhereAndWhen";
import Schedule from "@/components/sections/Schedule";
import RSVP from "@/components/sections/RSVP";
import Footer from "@/components/sections/Footer";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
  // -- todo: add smooth

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    let animationFrame: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#3f3a35]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Story Section */}
      <Story />

      {/* Where & When & Dress Code */}
      <WhereAndWhen />

      {/* Schedule Section */}
      <Schedule />

      {/* RSVP Section */}
      <RSVP />

      {/* Footer */}
      <Footer />
    </main>
  );
}
