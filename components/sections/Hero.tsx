"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

function Hero() {
  const heroImageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!heroImageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroImageRef.current,
        {
          scale: 1,
        },
        {
          scale: 1.08,
          duration: 15,
          ease: "none",
          repeat: -1,
          yoyo: true,
        },
      );
    }, heroImageRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={heroImageRef}
        className="absolute inset-0 scale-100 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbav6z7re/image/upload/v1789970137/PATRICK_AND_CARYL_PRENUP_EDITED-144_jlwigb.jpg')",
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-32 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="mb-6 text-xs uppercase tracking-[0.4em] text-white/80 sm:text-sm"
        >
          Together with their families
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="font-serif text-6xl leading-none tracking-tight sm:text-8xl md:text-9xl"
        >
          Patrick &amp; Caryl
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: "easeOut",
          }}
          className="mx-auto my-8 h-px w-20 bg-white/70 sm:my-10 sm:w-28"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.1,
            ease: "easeOut",
          }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl"
        >
          November 14, 2026
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
            ease: "easeOut",
          }}
          className="mt-4 text-xs uppercase tracking-[0.3em] text-white/85 sm:text-sm"
        >
          Subic Park Hotel · SBFZ
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: "easeOut",
          }}
          className="mx-auto mt-8 max-w-md text-sm leading-7 text-white/80 sm:text-base"
        >
          We invite you to celebrate the beginning of our forever.
        </motion.p>

        <motion.a
          href="#rsvp"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.7,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="mt-10 inline-flex rounded-full border border-white/40 bg-white/15 px-8 py-3 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/25"
        >
          Confirm Your Attendance
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 2.2,
        }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-white/70"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>

          <span className="h-8 w-px bg-white/50" />
        </motion.div>
      </motion.a>
    </section>
  );
}

export default Hero;
