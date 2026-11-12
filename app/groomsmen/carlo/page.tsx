"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function CarloPage() {
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
            The Media Director
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 font-serif text-5xl sm:text-6xl"
          >
            Jen Carlo Napoto
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
              src="https://res.cloudinary.com/dbav6z7re/image/upload/v1794501134/carlo_bdibec.jpg"
              alt="Carlo"
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
            Hi, Kuya Carlo!
          </h2>

          <div className="mx-auto my-6 h-px w-12 bg-[#cdbba8]" />

          <div className="space-y-6 text-center text-base leading-8 text-[#6f655d] sm:text-lg">
            <p>
              Salamat sa lahat ng effort na ginawa mo para maging memorable ang
              kasal ko, sa special number natin sa kasal, at especially, sa
              wedding celebration na ihinanda niyo last Sunday.
            </p>

            <p>
              Habang sinusulat ko ito, naaalala ko ang mga panahong nakasama
              kita. Naiisip ko, paano nagkasya sa iisang tao ang pagiging
              masayang kasama, professional artist, organized, calm and
              collected, Godly, pogi, at sobrang cool? Usually tig-iisang trait
              lang ang meron ang mga tao, pero nahakot mo lahat. Hahaha!
            </p>

            <p>
              Gusto ko ring magpasalamat dahil kahit hindi ako masyadong
              nakikisalamuha sa iba dahil inverter ako, ikaw at si Kuya Eric ang
              laging nangunguna sa paghikayat sa akin na makisalamuha.
            </p>

            <p>
              Nakakabilib din na mayroon kayong sariling studio at nakakakuha
              kayo ng high-paying clients. Pangarap ko rin iyon, at
              pinagsisikapan ko na ngayon.
            </p>

            <p>
              Looking forward to making more memories with you. Lagi akong
              susuporta sa iyo, lalo na sa Young Pro Circle na sinisimulan natin
              sa church.
            </p>

            <p>Salute, Kuya!</p>
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
            Salamat sa lahat, Kuya Carlo.
          </p>

          <p className="mt-4 text-sm text-[#8c7663]">
            Looking forward to making more memories together.
          </p>
        </motion.section>
      </div>
    </main>
  );
}

export default CarloPage;
