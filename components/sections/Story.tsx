"use client";

import React from "react";
import { motion } from "framer-motion";

function Story() {
  return (
    <section
      id="story"
      className="scroll-mt-20 bg-[#171412] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-sm uppercase tracking-[0.35em] text-white/50"
        >
          Our Story
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl"
        >
          A little story about us
        </motion.h2>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 64, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto my-8 h-px bg-white/30"
        />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          <p className="text-lg leading-9 text-white/65">
            Some stories begin with a chance encounter, and ours became a
            collection of moments that we will always treasure. Through
            laughter, adventures, and the quiet days in between, we found
            something worth choosing every day.
          </p>

          <p className="text-lg leading-9 text-white/65">
            Now, we are excited to begin our next chapter together, surrounded
            by the people who have made our journey special.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Story;
