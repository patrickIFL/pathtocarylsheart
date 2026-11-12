"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function VincentPage() {
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
            The Black Belter
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
            A note for you
          </p>

          <h2 className="mt-4 text-center font-serif text-3xl">Hi, men!</h2>

          <div className="mx-auto my-6 h-px w-12 bg-[#cdbba8]" />

          <div className="space-y-6 text-center text-base leading-8 text-[#6f655d] sm:text-lg">
            <p>
              Salamat sa pag-support sa akin hanggang sa special day ko. Grabe,
              ang dami mong nasaksihan sa buhay ko. Naalala ko noong kinder pa
              tayo, sinapak mo ako. Hahaha! Pero ikaw talaga ang laging
              nakakaalala sa akin.
            </p>

            <p>
              Sobrang memorable sa akin ang mga araw na magkasama tayo, tulad
              noong sinamahan mo akong maglakad mula Purok 6 hanggang Purok 3
              Habana habang nakasaklay ako.
            </p>

            <p>
              Bakit nga ba ako naka-saklay? Nag-parkour ako sa bangin, bumagsak
              sa bubog, at duguan akong napunta sa CR. Kayo ni Sir Wax pa ang
              naglalagay ng kape sa paa ko para huminto ang pagdurugo. Hahaha!
            </p>

            <p>
              Naalala ko rin noong nagda-drive tayo ng van at nag-drive-thru sa
              McDonald&apos;s. Nahuli tayo ng pulis sa SBMA dahil sa pedestrian,
              tapos inalok pa natin siya ng burger. Hahaha!
            </p>

            <p>
              Ikaw rin ang source ko ng mga malulupit na mobile game dahil IT
              ang kuya mo. At ikaw rin ang number one support AP
              Blitzcrank—kahit medyo KS ka. Hahaha!
            </p>

            <p>
              Sinamahan mo rin ako sa college graduation ko, at kasama kita
              noong nag-check ako sa PRMSU. Iyon ang una kong long ride gamit
              ang Aerox ko.
            </p>

            <p>
              Sobrang memorable sa akin ang lahat ng iyon. Hanggang ngayon,
              kapag kasama ko kayo ni Ivan, parang nabubuhay ulit ang mga alaala
              ng pagkabata ko.
            </p>

            <p>Habambuhay kitang iche-cherish bilang best friend ko. Salute!</p>
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
            Salamat sa lahat, Vincent.
          </p>

          <p className="mt-4 text-sm text-[#8c7663]">
            Salute to the Black belter Pussy Lover!
          </p>
        </motion.section>
      </div>
    </main>
  );
}

export default VincentPage;
