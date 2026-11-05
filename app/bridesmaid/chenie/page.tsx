"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Cheniepage() {
  return (
    <main className="min-h-screen bg-[#f3eee8] px-6 py-20 text-[#3f3a35]">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs uppercase tracking-[0.35em] text-[#a58b72]"
          >
            One of my Bridesmaids
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 font-serif text-5xl sm:text-6xl"
          >
            Chenie – The Party Starter
          </motion.h1>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 64, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto my-6 h-px bg-[#cdbba8]"
          />
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-10 max-w-md bg-[#fffdf9] p-3 shadow-[0_20px_50px_rgba(63,58,53,0.15)]"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dbav6z7re/image/upload/v1793907122/3bc7f710-d2eb-494c-a1a8-f9893f6cdb13_l0fl2y.jpg"
              alt="Chenie"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Personal message */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 rounded-sm bg-[#fffdf9] px-7 py-10 shadow-[0_15px_40px_rgba(63,58,53,0.08)] sm:px-12 sm:py-14"
        >
          <p className="text-center text-xs uppercase tracking-[0.3em] text-[#a58b72]">
            A note for you
          </p>

          <h2 className="mt-4 text-center font-serif text-3xl">
            Life is never boring with you around, Chenie!
          </h2>

          <div className="mx-auto my-6 h-px w-12 bg-[#cdbba8]" />

          <div className="space-y-6 text-center text-base leading-8 text-[#6f655d] sm:text-lg">
            <p>
              Thank you for always bringing laughter, fun, and good vibes
              wherever you go.
            </p>

            <p>
              Thank you for always including me in every gala and ganap natin,
              kahit alam mong tatanggi ako most of the time. HAHAHA!
            </p>

            <p>
              Please, wag ka na mapikon sa akin beh! 😂 I hope you know how much
              I appreciate you and your efforts.
            </p>

            <p>
              You&apos;re such a loving, thoughtful, and mabooty na friend.
              Never lose that beautiful energy of yours.
            </p>

            <p>Love you, Chenieleigh! ❤️</p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

export default Cheniepage;
