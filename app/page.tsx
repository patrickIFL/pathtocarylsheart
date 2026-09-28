"use client";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import WhereAndWhen from "@/components/sections/WhereAndWhen";
import Schedule from "@/components/sections/Schedule";
import RSVP from "@/components/sections/RSVP";
import Footer from "@/components/sections/Footer";
import StoryCarousel from "@/components/StoryCarousel";
import Countdown from "@/components/sections/Countdown";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#3f3a35]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      <Countdown />

      {/* Story Section */}
      <Story />
      <StoryCarousel />

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
