"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar becomes glass after scrolling 80px
      setScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      label: "Our Story",
      href: "#story",
    },
    {
      label: "Details",
      href: "#details",
    },
    {
      label: "Schedule",
      href: "#schedule",
    },
    {
      label: "RSVP",
      href: "#rsvp",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-500 ${
        scrolled
          ? "border-b border-white/15 bg-black/30 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ opacity: 0.75 }}
          className="font-serif text-xl tracking-wide text-white"
        >
          P & C
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ y: -1 }}
              className="text-sm text-white/85 transition-colors hover:text-white"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="#rsvp"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className={`inline-flex overflow-hidden rounded-full border px-5 py-2 text-sm font-medium text-white transition-all duration-500 ${
            scrolled
              ? "border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20"
              : "border-white/40 bg-white/15 backdrop-blur-md hover:bg-white/25"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={scrolled ? "confirm" : "rsvp"}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="whitespace-nowrap"
            >
              {"RSVP"}
            </motion.span>
          </AnimatePresence>
        </motion.a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
