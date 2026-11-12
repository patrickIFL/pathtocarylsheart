"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function SethPage() {
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
            The Music Master
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 font-serif text-5xl sm:text-6xl"
          >
            Seth Agustin
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
              src="https://res.cloudinary.com/dbav6z7re/image/upload/v1794501141/seth_gupn23.jpg"
              alt="Seth"
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

          <h2 className="mt-4 text-center font-serif text-3xl">Hi, Seth!</h2>

          <div className="mx-auto my-6 h-px w-12 bg-[#cdbba8]" />

          <div className="space-y-6 text-center text-base leading-8 text-[#6f655d] sm:text-lg">
            <p>
              Salamat sa suporta mo sa wedding ko at sa pagpayag na maging
              groomsman ko kahit last minute na. Salamat din sa pagpapagamit ng
              place ninyo para sa wedding surprise na ginawa para sa amin.
            </p>

            <p>
              Isa kayo ni Pastor Leo sa mga tinitingala ko. Noong bago pa lang
              ako sa church, tuwing naririnig ko ang tugtog mo sa piano at ang
              preaching ni Pastor tuwing pastoral, sobrang nabibless ang spirit
              at tenga ko. Kaya salamat din sa pagpayag na tumugtog sa kasal
              namin ni Karen.
            </p>

            <p>
              Isa pa sa mga dahilan kung bakit kayo tinitingala ko ni Pastor Leo
              ay ang pagiging humble ninyo. Medyo fan ako ng mga engineer dahil
              matagal din ako sa College of Engineering, kaya sobrang hanga ako
              sa inyong dalawa bilang mga humble na engineer.
            </p>

            <p>
              Sobrang excited din ako na interesado ka sa 3D printing, 3D
              modeling, at CAD. Paborito ko ang mga subject na iyon, kaya masaya
              akong may makakausap na tungkol doon sa church. Hahaha!
            </p>

            <p>
              Congratulations din sa engagement ninyo ni Belle! Promise,
              susuportahan ko rin ang kasal ninyo gaya ng pagsuporta mo sa kasal
              namin ni Karen.
            </p>

            <p>Salute, Seth!</p>
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
            Salamat sa lahat, Seth.
          </p>

          <p className="mt-4 text-sm text-[#8c7663]">
            Salute to the Music Master!
          </p>
        </motion.section>
      </div>
    </main>
  );
}

export default SethPage;
