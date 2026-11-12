"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function RyanPage() {
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
            The Endurider
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 font-serif text-5xl sm:text-6xl"
          >
            Ryan Bala
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
              src="https://res.cloudinary.com/dbav6z7re/image/upload/v1794502506/ryan_j2bzxz.jpg"
              alt="Ryan"
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
            Hello, Kuya Ban!
          </h2>

          <div className="mx-auto my-6 h-px w-12 bg-[#cdbba8]" />

          <div className="space-y-6 text-center text-base leading-8 text-[#6f655d] sm:text-lg">
            <p>
              Salamat sa pag-attend sa kasal ko at sa paglalaan ng oras para
              maging groomsman ko.
            </p>

            <p>
              Isa sa mga alaala ko sa inyo ay noong nagpa-process kayo gamit
              ang dilaw na kotse ni Mommy na may sticker ni Tweety Bird. Hindi
              ko pa alam noon kung gaano kahirap magpa-process; ang naaalala ko
              lang ay ang vending machine sa seaport.
            </p>

            <p>
              Salamat, Kuya, sa mga itinuro mo sa akin at sa palagi mong
              pag-encourage sa akin na sumama sa mga rides. Salamat din dahil
              lagi mong sinasamahan at ine-encourage si Daddy na mag-unwind
              mula sa trabaho.
            </p>

            <p>
              Sobrang naa-appreciate ko ang oras na inilaan mo para sa kasal
              ko. Ngayong mag-aasawa na ako, hindi na lang tungkol sa motor at
              anime ang mga itatanong ko sa susunod—pati family life na rin.
              Hahaha!
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
            Salamat sa lahat, Kuya Ban.
          </p>

          <p className="mt-4 text-sm text-[#8c7663]">
            Looking forward to more rides, anime, and family-life advice!
          </p>
        </motion.section>
      </div>
    </main>
  );
}

export default RyanPage;
