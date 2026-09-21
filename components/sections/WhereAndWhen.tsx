"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Shirt } from "lucide-react";

function WhereAndWhen() {
  const details = [
    {
      label: "When",
      title: "November 14, 2026",
      description: "Saturday",
      icon: CalendarDays,
    },
    {
      label: "Where",
      title: "Subic Park Hotel",
      description: "Subic Bay Freeport Zone",
      icon: MapPin,
    },
    {
      label: "Dress Code",
      title: "Semi-Formal",
      description: "Elegant and comfortable",
      icon: Shirt,
    },
  ];

  return (
    <section
      id="details"
      className="scroll-mt-20 bg-[#171412] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">
            The Details
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl">
            Where &amp; When
          </h2>

          <div className="mx-auto mt-8 h-px w-16 bg-white/30" />
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {details.map((detail, index) => {
            const Icon = detail.icon;

            return (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
                className="h-full"
              >
                <div
                  className="
                    flex h-full min-h-[280px] flex-col items-center justify-center
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.04]
                    p-8
                    text-center
                    shadow-xl shadow-black/20
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:border-white/20
                    hover:bg-white/[0.07]
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      mb-6 flex h-12 w-12 items-center justify-center
                      rounded-full
                      border border-white/10
                      bg-white/[0.05]
                      backdrop-blur-md
                    "
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-white/70"
                    />
                  </div>

                  {/* Label */}
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    {detail.label}
                  </p>

                  {/* Title */}
                  <h3 className="mt-4 font-serif text-2xl text-white">
                    {detail.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {detail.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhereAndWhen;
