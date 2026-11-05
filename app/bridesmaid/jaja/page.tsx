"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Jajapage() {
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
            Jaja – Best Friend Since Forever
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
              src="https://res.cloudinary.com/dbav6z7re/image/upload/v1793907463/22d5de87-b937-4da7-b06b-99caefaec223_umpycz.jpg"
              alt="Jaja"
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
            Hi, Ganda! ❤️
          </h2>

          <div className="mx-auto my-6 h-px w-12 bg-[#cdbba8]" />

          <div className="space-y-6 text-center text-base leading-8 text-[#6f655d] sm:text-lg">
            <p>
              Thank you for being part of my life and for this forever
              friendship. I will always treasure all the memories we&apos;ve
              made together, kahit sa subconscious ko na lang minsan maalala.
              HAHAHAHA! 😂
            </p>

            <p>
              Seriously, I&apos;m so proud of you, and you know that. I admire
              how strong you are and how you handle life&apos;s challenges
              despite everything. Pero sana magpa-valid ID ka na rin, teh!
              HAHAHAHA! 😭
            </p>

            <p>
              I know you still have so much ahead of you, and I know you&apos;ll
              go far because I see how hard you work for everything you want to
              achieve. Never stop believing in yourself. I&apos;ll always be one
              of the people cheering for you and celebrating your wins.
            </p>

            <p>
              Super proud of you, palagi! Here&apos;s to more crazy memories,
              milestones, and years of friendship. I love youuuu! 💗
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

export default Jajapage;
