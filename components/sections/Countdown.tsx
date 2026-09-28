"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const weddingDate = new Date("2026-11-14T00:00:00+08:00").getTime();

function AnimatedDigit({ digit }: { digit: string }) {
  return (
    <div className="relative h-[42px] w-[20px] overflow-hidden sm:h-[60px] sm:w-[32px]">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={digit}
          initial={{
            y: 25,
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          exit={{
            y: -25,
            opacity: 0,
            scale: 1.05,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {digit}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = weddingDate - Date.now();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    calculateTimeLeft();

    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="bg-[#f3eee8] px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.35em] text-[#a58b72]"
        >
          Counting down to our special day
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 font-serif text-3xl text-[#3f3a35] sm:text-4xl"
        >
          November 14, 2026
        </motion.h2>

        <div className="mx-auto mt-8 h-px w-16 bg-[#cdbba8]" />

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15 + index * 0.08,
              }}
              className="
                rounded-2xl
                border
                border-[#e8e1d8]
                bg-[#fffdf9]
                px-3
                py-5
                shadow-xl
                shadow-black/5
                sm:px-6
                sm:py-7
              "
            >
              <div className="flex h-[42px] items-center justify-center font-serif text-3xl text-[#3f3a35] sm:h-[60px] sm:text-5xl">
                {String(item.value)
                  .padStart(2, "0")
                  .split("")
                  .map((digit, digitIndex) => (
                    <AnimatedDigit key={digitIndex} digit={digit} />
                  ))}
              </div>

              <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[#a58b72] sm:text-xs">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Countdown;
