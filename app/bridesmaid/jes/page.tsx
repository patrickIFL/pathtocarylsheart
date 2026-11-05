"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Jespage() {
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
            Jes – Cousin by Blood, Bestie by Heart
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
              src="https://res.cloudinary.com/dbav6z7re/image/upload/v1793907387/515939771_1444217253279210_7198019976146984776_n_jbchn0.jpg"
              alt="Jes"
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
            A birthday message for you
          </h2>

          <div className="mx-auto my-6 h-px w-12 bg-[#cdbba8]" />

          <div className="space-y-6 text-center text-base leading-8 text-[#6f655d] sm:text-lg">
            <p>
              First of all, advance happy birthday for tomorrow, Kiki! ❤️ Family
              brought us together, but friendship made us inseparable.
            </p>

            <p>
              Thank you for being part of my life. Paano na lang kami ni Jaja
              kung wala ka? HAHAHA!
            </p>

            <p>
              I&apos;ll never forget our crazy memories, especially that time na
              nagsasabunutan tayo sa kalsada at sinisigaw mo pa sa buong street
              na may &quot;PEKPEK&quot; ka. HAHAHAHA!
            </p>

            <p>Those are memories I&apos;ll forever treasure. 😂</p>

            <p>
              But seriously, I will always be proud of you. I admire how caring
              and maaalalahanin you are, literally the nanay of the group! I
              also admire your strength and all the sacrifices you&apos;ve made
              throughout the years.
            </p>

            <p>
              Seeing how much you&apos;ve grown makes me so proud. Keep striving
              for greater things because you deserve all the good things life
              has to offer. Love you always, Jes! ❤️
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

export default Jespage;
