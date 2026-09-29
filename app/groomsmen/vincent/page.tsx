"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

function VincentPage() {
  return (
    <main className="min-h-screen bg-[#f3eee8] px-6 py-20 text-[#3f3a35]">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mt-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs uppercase tracking-[0.35em] text-[#a58b72]"
          >
            One of my Groomsmen
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 font-serif text-5xl sm:text-6xl"
          >
            Vincent
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
              src="https://res.cloudinary.com/dbav6z7re/image/upload/v1790708838/vincent_rjzw7g.jpg"
              alt="Vincent"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Story */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 rounded-sm bg-[#fffdf9] px-7 py-10 shadow-[0_15px_40px_rgba(63,58,53,0.08)] sm:px-12 sm:py-14"
        >
          <p className="text-center text-xs uppercase tracking-[0.3em] text-[#a58b72]">
            How I Know Him
          </p>

          <h2 className="mt-4 text-center font-serif text-3xl">
            A friendship worth keeping
          </h2>

          <div className="mx-auto my-6 h-px w-12 bg-[#cdbba8]" />

          <div className="space-y-6 text-center text-base leading-8 text-[#6f655d] sm:text-lg">
            <p>
              This is where you tell the story of how you and Vincent first met.
            </p>

            <p>
              You can talk about the early days of your friendship, the
              experiences you shared, the stupid things you laughed about, and
              the moments that made you realize he was someone you could always
              count on.
            </p>

            <p>
              Over the years, friendships change and life gets busier, but some
              people remain an important part of your story. Vincent is one of
              those people.
            </p>

            <p>
              And now, as I begin this new chapter of my life, I can't imagine
              having my wedding day without having you there beside me.
            </p>
          </div>
        </motion.section>

        {/* Personal Note */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="font-serif text-2xl text-[#4b433d]">
            Thank you for being part of my story, Vincent.
          </p>

          <p className="mt-4 text-sm text-[#8c7663]">
            I’m glad you’ll be part of this next chapter too.
          </p>
        </motion.section>
      </div>
    </main>
  );
}

export default VincentPage;
