"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://res.cloudinary.com/dbav6z7re/image/upload/v1789970208/PATRICK_AND_CARYL_PRENUP_EDITED-194_npogel.jpg",
  "https://res.cloudinary.com/dbav6z7re/image/upload/v1789970208/PATRICK_AND_CARYL_PRENUP_EDITED-194_npogel.jpg",
  "https://res.cloudinary.com/dbav6z7re/image/upload/v1789970208/PATRICK_AND_CARYL_PRENUP_EDITED-194_npogel.jpg",
  "https://res.cloudinary.com/dbav6z7re/image/upload/v1789970208/PATRICK_AND_CARYL_PRENUP_EDITED-194_npogel.jpg",
  "https://res.cloudinary.com/dbav6z7re/image/upload/v1789970208/PATRICK_AND_CARYL_PRENUP_EDITED-194_npogel.jpg",
];

function StoryCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getDistance = () => {
        return track.scrollWidth - window.innerWidth;
      };

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#171412]"
    >
      <div ref={trackRef} className="flex h-full w-max items-center gap-6 px-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-[70vh] w-[75vw] shrink-0 overflow-hidden rounded-2xl sm:h-[75vh] sm:w-[55vw] lg:w-[42vw]"
          >
            <img
              src={image}
              alt={`Patrick and Caryl - ${index + 1}`}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default StoryCarousel;
