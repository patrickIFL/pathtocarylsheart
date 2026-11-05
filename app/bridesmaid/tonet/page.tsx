"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Tonetpage() {
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
            Tonet – The Glam Queen
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
              src="https://res.cloudinary.com/dbav6z7re/image/upload/v1793907522/cf287597-ec9c-4bad-84e2-5161a126b67d_u2m7vc.jpg"
              alt="Tonet"
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
            To our Glam Queen, Tonet! ❤️
          </h2>

          <div className="mx-auto my-6 h-px w-12 bg-[#cdbba8]" />

          <div className="space-y-6 text-center text-base leading-8 text-[#6f655d] sm:text-lg">
            <p>
              Thank you for the beautiful friendship and for always bringing the
              glam, confidence, and extra sparkle wherever you go!
            </p>

            <p>
              As we enter this next chapter of our lives, dahil papasakal na
              tayo and preparing for a new journey, I couldn&apos;t be happier
              that we&apos;re experiencing this milestone together.
            </p>

            <p>
              Sobrang proud ako sa&apos;yo, and I will always be here cheering
              for you and celebrating all your wins. Here&apos;s to more
              memories, milestones, and beautiful moments ahead.
            </p>

            <p>Mahal na mahal kita, Tonet! Keep slaying, queen! 👑💕</p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

export default Tonetpage;
