"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function IvanPage() {
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
            The Good Sir
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 font-serif text-5xl sm:text-6xl"
          >
            Ivan Andrei Radovan
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
              src="https://res.cloudinary.com/dbav6z7re/image/upload/v1794501677/550080366_2746615572212111_3069558525561545671_n_vxvq9p.jpg"
              alt="Ivan"
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

          <h2 className="mt-4 text-center font-serif text-3xl">Hi, Van!</h2>

          <div className="mx-auto my-6 h-px w-12 bg-[#cdbba8]" />

          <div className="space-y-6 text-center text-base leading-8 text-[#6f655d] sm:text-lg">
            <p>
              Thank you, bro, sa oras na inilaan mo para maging groomsman ko, at
              lalo na sa pagsama sa wedding surprise para sa amin ni Karen.
            </p>

            <p>
              Sobrang na-appreciate ko na nakita kita roon habang nagsasalita
              sila. Kahit medyo na-OOP ka at pagod galing sa work, nagpakita ka
              pa rin para sa aming dalawa.
            </p>

            <p>
              Malaki ang naging impact mo sa buhay ko, lalo na sa career at
              mindset ko. Alam mo ba, isa ka sa mga dahilan kung bakit pinursue
              ko ang career na aligned sa natapos ko. Na-inspire ako sa
              pagpupursigi mong i-level up ang buhay mo sa sarili mong paraan.
            </p>

            <p>
              Nakikita ko kung gaano ka mag-isip nang mas ahead sa edad mo. Alam
              kong dahan-dahan, magiging milyonaryo ka. Hahaha!
            </p>

            <p>
              Salamat, Van. Hindi mo siguro alam, pero lodi kita pagdating sa
              mga life lesson. Salute!
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
            Salamat sa lahat, Van.
          </p>

          <p className="mt-4 text-sm text-[#8c7663]">Salute to the Good Sir!</p>
        </motion.section>
      </div>
    </main>
  );
}

export default IvanPage;
