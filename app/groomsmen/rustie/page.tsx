"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function RustiePage() {
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
            The Amazing Spiderman
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 font-serif text-5xl sm:text-6xl"
          >
            Rustie Ramos
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
              src="https://res.cloudinary.com/dbav6z7re/image/upload/v1794501164/rustie_nybsam.jpg"
              alt="Rustie"
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
            A note for you
          </p>

          <h2 className="mt-4 text-center font-serif text-3xl">
            Hi, Kuya Rustie!
          </h2>

          <div className="mx-auto my-6 h-px w-12 bg-[#cdbba8]" />

          <div className="space-y-6 text-center text-base leading-8 text-[#6f655d] sm:text-lg">
            <p>
              Salamat sa suporta mo sa wedding namin ni Karen. Napaka-supportive
              mo rin sa amin pagdating sa mga advice at sa mga naging gala natin
              kasama ang pamilya ko.
            </p>

            <p>
              Sobrang naiinspire kami ni Karen sa wedding ninyo at sa samahan
              ninyo ni Ate Yen. Alam kong marami pa tayong magiging bonding at
              makakapunta ulit tayo sa HisLife. O baka hindi lang HisLife
              this time, kundi mas malalayong galaan pa. Hahaha!
            </p>

            <p>
              Looking forward, Kuya, na matuto sa iyo ng mga advice tungkol sa
              married life. Pangako ko na sa kabila ng mga bagong
              responsibilidad na haharapin ko, sabay pa rin naming
              paglilingkuran ang Panginoon.
            </p>

            <p>
              Congratulations sa baby ninyo! Nasa iyo ang buong suporta ko,
              Kuya. Looking forward ako sa mga major life events natin, lalo na
              sa mga darating sa iyo dahil magiging father ka na.
            </p>

            <p>Salamat sa lahat, Kuya! Salute!</p>
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
            Salamat sa lahat, Kuya Rustie.
          </p>

          <p className="mt-4 text-sm text-[#8c7663]">
            Excited na ako sa mga susunod nating bonding at milestones!
          </p>
        </motion.section>
      </div>
    </main>
  );
}

export default RustiePage;
