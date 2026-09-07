"use client";

import { FormEvent, useState } from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#3f3a35]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-[#e8e1d8]/80 bg-[#faf9f6]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-serif text-xl tracking-wide">
            P & C
          </a>

          <div className="hidden items-center gap-6 text-sm text-[#6f655d] md:flex">
            <a href="#story" className="transition-colors hover:text-[#8c7663]">
              Our Story
            </a>
            <a
              href="#details"
              className="transition-colors hover:text-[#8c7663]"
            >
              Details
            </a>
            <a
              href="#schedule"
              className="transition-colors hover:text-[#8c7663]"
            >
              Schedule
            </a>
            <a href="#rsvp" className="transition-colors hover:text-[#8c7663]">
              RSVP
            </a>
          </div>

          <a
            href="#rsvp"
            className="rounded-full bg-[#8c7663] px-5 py-2 text-sm text-white transition-colors hover:bg-[#756252]"
          >
            RSVP
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex min-h-[calc(100vh-73px)] scroll-mt-20 items-center justify-center px-6 py-20"
      >
        <div className="mx-auto w-full max-w-4xl text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#a58b72]">
            Together with their families
          </p>

          <h1 className="font-serif text-6xl leading-tight tracking-tight text-[#3f3a35] sm:text-8xl">
            Patrick &amp; Caryl
          </h1>

          <div className="mx-auto my-10 h-px w-24 bg-[#cdbba8]" />

          <p className="font-serif text-3xl text-[#6f655d] sm:text-4xl">
            November 14, 2026
          </p>

          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#a58b72]">
            Subic Park Hotel · SBFZ
          </p>

          <p className="mx-auto mt-10 max-w-md text-base leading-8 text-[#7c7168]">
            We invite you to celebrate the beginning of our forever.
          </p>

          <a
            href="#rsvp"
            className="mt-10 inline-flex rounded-full bg-[#8c7663] px-8 py-3 text-sm text-white transition-colors hover:bg-[#756252]"
          >
            Confirm Your Attendance
          </a>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="scroll-mt-20 bg-[#f3eee8] px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#a58b72]">
            Our Story
          </p>

          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            A little story about us
          </h2>

          <div className="mx-auto my-8 h-px w-16 bg-[#cdbba8]" />

          <p className="text-lg leading-9 text-[#6f655d]">
            Some stories begin with a chance encounter, and ours became a
            collection of moments that we will always treasure. Through
            laughter, adventures, and the quiet days in between, we found
            something worth choosing every day.
          </p>

          <p className="mt-6 text-lg leading-9 text-[#6f655d]">
            Now, we are excited to begin our next chapter together, surrounded
            by the people who have made our journey special.
          </p>
        </div>
      </section>

      {/* Where & When & Dress Code */}
      <section id="details" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#a58b72]">
              The Details
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Where &amp; When
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <MagicCard
              className="rounded-2xl border-[#e8e1d8] bg-[#fffdf9]"
              gradientColor="#f3e8dc"
            >
              <div className="p-8 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-[#a58b72]">
                  When
                </p>
                <h3 className="mt-4 font-serif text-2xl">November 14, 2026</h3>
                <p className="mt-3 text-sm text-[#7c7168]">Saturday</p>
              </div>
            </MagicCard>

            <MagicCard
              className="rounded-2xl border-[#e8e1d8] bg-[#fffdf9]"
              gradientColor="#f3e8dc"
            >
              <div className="p-8 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-[#a58b72]">
                  Where
                </p>
                <h3 className="mt-4 font-serif text-2xl">Subic Park Hotel</h3>
                <p className="mt-3 text-sm text-[#7c7168]">
                  Subic Bay Freeport Zone
                </p>
              </div>
            </MagicCard>

            <MagicCard
              className="rounded-2xl border-[#e8e1d8] bg-[#fffdf9]"
              gradientColor="#f3e8dc"
            >
              <div className="p-8 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-[#a58b72]">
                  Dress Code
                </p>
                <h3 className="mt-4 font-serif text-2xl">Semi-Formal</h3>
                <p className="mt-3 text-sm text-[#7c7168]">
                  Elegant and comfortable
                </p>
              </div>
            </MagicCard>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="scroll-mt-20 bg-[#f3eee8] px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#a58b72]">
              The Celebration
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Our Schedule
            </h2>
          </div>

          <div className="space-y-0">
            <div className="flex gap-6 border-b border-[#e0d6cc] py-6">
              <div className="w-24 shrink-0 text-sm font-medium text-[#8c7663]">
                3:00 PM
              </div>
              <div>
                <h3 className="font-serif text-xl">Ceremony</h3>
                <p className="mt-1 text-sm text-[#7c7168]">
                  Witness us exchange our vows.
                </p>
              </div>
            </div>

            <div className="flex gap-6 border-b border-[#e0d6cc] py-6">
              <div className="w-24 shrink-0 text-sm font-medium text-[#8c7663]">
                4:00 PM
              </div>
              <div>
                <h3 className="font-serif text-xl">Cocktail Hour</h3>
                <p className="mt-1 text-sm text-[#7c7168]">
                  Enjoy refreshments and celebrate with us.
                </p>
              </div>
            </div>

            <div className="flex gap-6 border-b border-[#e0d6cc] py-6">
              <div className="w-24 shrink-0 text-sm font-medium text-[#8c7663]">
                5:00 PM
              </div>
              <div>
                <h3 className="font-serif text-xl">Reception</h3>
                <p className="mt-1 text-sm text-[#7c7168]">
                  Dinner, dancing, and a night to remember.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#a58b72]">
              Kindly Respond
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Will you join us?
            </h2>
            <p className="mt-4 text-[#7c7168]">
              Please let us know if you can celebrate with us.
            </p>
          </div>

          <MagicCard
            className="rounded-3xl border-[#e8e1d8] bg-[#fffdf9]"
            gradientColor="#f3e8dc"
          >
            <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-10">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="attendance">Will you be attending?</Label>
                <select
                  id="attendance"
                  name="attendance"
                  required
                  className="flex h-10 w-full rounded-md border border-[#e0d6cc] bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#cdbba8]"
                >
                  <option value="">Please select</option>
                  <option value="yes">Yes, I will be there</option>
                  <option value="no">Sorry, I can't make it</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="5"
                  defaultValue="1"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Any message for the couple?"
                  rows={4}
                />
              </div>

              {submitted && (
                <div className="rounded-lg bg-[#f3eee8] p-4 text-center text-sm text-[#6f655d]">
                  Thank you! Your RSVP has been received.
                </div>
              )}

              <Button
                type="submit"
                className="w-full rounded-full bg-[#8c7663] text-white hover:bg-[#756252]"
              >
                Submit RSVP
              </Button>
            </form>
          </MagicCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8e1d8] bg-[#f3eee8] px-6 py-12 text-center">
        <p className="font-serif text-3xl">Patrick &amp; Caryl</p>
        <p className="mt-3 text-sm text-[#7c7168]">
          November 14, 2026 · Subic Park Hotel, SBFZ
        </p>
        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[#a58b72]">
          With love, always.
        </p>
      </footer>
    </main>
  );
}
