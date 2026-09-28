"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Story() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
      alt: "Wedding couple",
      top: "4%",
      left: "-8%",
      width: 190,
      rotate: -8,
    },
    {
      src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85",
      alt: "Wedding moment",
      top: "18%",
      right: "-8%",
      width: 210,
      rotate: 7,
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
      alt: "Wedding celebration",
      top: "34%",
      left: "-5%",
      width: 165,
      rotate: 5,
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85",
      alt: "Wedding details",
      top: "46%",
      right: "-5%",
      width: 180,
      rotate: -6,
    },
    {
      src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=900&q=85",
      alt: "Wedding couple outdoors",
      top: "66%",
      left: "-9%",
      width: 200,
      rotate: -5,
    },
    {
      src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=85",
      alt: "Wedding portrait",
      top: "74%",
      right: "-9%",
      width: 170,
      rotate: 8,
    },
  ];
  return (
    <section
      id="story"
      className="scroll-mt-20 overflow-hidden bg-[#f3eee8] px-6 py-20 text-[#3f3a35] sm:py-24"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Scattered Photos */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {photos.map((photo, index) => {
            const positionStyle = {
              top: photo.top,
              left: photo.left,
              right: photo.right,
              width: `${photo.width}px`,
              transform: `rotate(${photo.rotate}deg)`,
            };

            return (
              <motion.div
                key={photo.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  rotate: photo.rotate - 4,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: photo.rotate,
                }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  overflow-hidden
                  rounded-sm
                  bg-[#fffdf9]
                  p-2
                  shadow-[0_12px_35px_rgba(63,58,53,0.15)]
                "
                style={positionStyle}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={`${photo.width}px`}
                    className="object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Story Content */}
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-xs uppercase tracking-[0.35em] text-[#a58b72]"
          >
            Our Story
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="
    mt-4
    font-serif
    text-4xl
    leading-tight
    text-[#3f3a35]
    drop-shadow-[0_0_8px_rgba(255,255,255,0.95)]
    sm:text-5xl
  "
          >
            A little story about us
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 64, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto my-6 h-px bg-[#cdbba8]"
          />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <p
              className="
  text-base
  leading-8
  text-[#6f655d]
  drop-shadow-[0_0_7px_rgba(255,255,255,0.95)]
  sm:text-lg
"
            >
              Some love stories take years to unfold. Ours happened in the
              simplest, most unexpected way. Our story is only beginning.
            </p>

            <p
              className="
  text-base
  leading-8
  text-[#6f655d]
  drop-shadow-[0_0_7px_rgba(255,255,255,0.95)]
  sm:text-lg
"
            >
              We may not have had years to write our story, but we’ve already
              created so many memories worth keeping.
            </p>

            <p
              className="
  text-base
  leading-8
  text-[#6f655d]
  drop-shadow-[0_0_7px_rgba(255,255,255,0.95)]
  sm:text-lg
"
            >
              And now, one beautiful chapter is coming to an end… as we begin
              our greatest one yet.
            </p>

            <p
              className="
  text-base
  leading-8
  text-[#6f655d]
  drop-shadow-[0_0_7px_rgba(255,255,255,0.95)]
  sm:text-lg
"
            >
              From two churchmates who barely knew each other, to motorcycle
              conversations, coffee dates, music, adventures, and countless
              little moments… From finding each other… to finding our way home
              to each other.
            </p>

            <p
              className="
  text-base
  leading-8
  text-[#6f655d]
  drop-shadow-[0_0_7px_rgba(255,255,255,0.95)]
  sm:text-lg
"
            >
              In just one year, we found laughter, comfort, support, and a love
              worth choosing every day.
            </p>

            <p
              className="
  text-base
  leading-8
  text-[#6f655d]
  drop-shadow-[0_0_7px_rgba(255,255,255,0.95)]
  sm:text-lg
"
            >
              Now, we are excited to begin our next chapter together, surrounded
              by the people who have made our journey special.
            </p>
          </motion.div>
        </div>

        {/* Mobile Photo Strip */}
        <div className="mt-12 grid grid-cols-3 gap-3 md:hidden">
          {photos.slice(0, 6).map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{
                opacity: 0,
                y: 20,
                rotate: photo.rotate,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: photo.rotate,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="bg-[#fffdf9] p-1.5 shadow-md"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="30vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Story;
