"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Schedule() {
  const sectionRef = useRef<HTMLElement>(null);
  const envelopeRef = useRef<HTMLDivElement>(null);
  const flapRef = useRef<HTMLDivElement>(null);
  const invitationRef = useRef<HTMLDivElement>(null);
  const scheduleContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const envelope = envelopeRef.current;
    const flap = flapRef.current;
    const invitation = invitationRef.current;
    const scheduleContent = scheduleContentRef.current;

    if (!section || !envelope || !flap || !invitation || !scheduleContent) {
      return;
    }

    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(envelope, {
        opacity: 0,
        y: 80,
      });

      // Invitation starts just inside the envelope
      gsap.set(invitation, {
        y: 40,
        zIndex: 20,
      });

      // Flap starts above everything
      gsap.set(flap, {
        rotateX: 0,
        zIndex: 40,
        transformOrigin: "top center",
      });

      // Schedule content starts hidden
      gsap.set(scheduleContent, {
        opacity: 0,
        y: 20,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          end: "center center",
          scrub: 1,
        },
      });

      // 1. Envelope enters
      tl.to(envelope, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // 2. Open the flap
      tl.to(
        flap,
        {
          rotateX: 180,
          duration: 1.2,
          ease: "power2.inOut",
        },
        "-=0.1",
      );

      // 3. Put opened flap behind the envelope
      tl.set(flap, {
        zIndex: 10,
      });

      // 4. Invitation begins emerging
      // Still behind the envelope body
      tl.to(
        invitation,
        {
          y: -500,
          duration: 2.5,
          ease: "power2.out",
        },
        "+=0.1",
      );

      // 5. Once it clears the envelope,
      // bring it above the envelope body
      tl.set(invitation, {
        zIndex: 40,
      });

      // 6. Quickly finish the movement
      tl.to(invitation, {
        y: -250,
        duration: 0.5,
        ease: "power3.out",
      });

      // 7. Reveal the schedule
      tl.to(
        scheduleContent,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4",
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="schedule"
      className="scroll-mt-20 bg-[#171412] px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-white/40">
            The Celebration
          </p>

          <h2 className="mt-5 font-serif text-4xl sm:text-5xl">Our Schedule</h2>

          <div className="mx-auto mt-8 h-px w-16 bg-white/25" />
        </div>

        {/* Envelope */}
        <div
          ref={envelopeRef}
          className="mx-auto w-full max-w-2xl"
          style={{
            perspective: "1200px",
          }}
        >
          <div className="relative mx-auto h-[360px] w-full max-w-[600px]">
            {/* Invitation paper content*/}
            <div
              ref={invitationRef}
              className="
                absolute
                left-[5%]
                top-0
                z-20
                h-[520px]
                w-[90%]
                overflow-hidden
                rounded-sm
                bg-[#f3eee8]
                px-6
                py-10
                text-[#171412]
                shadow-2xl
                shadow-black/40
                sm:px-12
                sm:py-12
              "
            >
              {/* Letter Contents */}
              <div ref={scheduleContentRef} className="h-full overflow-y-auto">
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#a58b72]">
                    November 14, 2026
                  </p>

                  <h3 className="mt-4 font-serif text-3xl sm:text-4xl">
                    The Celebration
                  </h3>

                  {/* Inside envelope  */}
                  <div className="mx-auto my-6 h-px w-12 bg-[#cbbcaf]" />
                </div>

                <div className="space-y-0">
                  {/* Ceremony */}
                  <div className="flex gap-5 border-b border-[#e0d6cc] py-6">
                    <div className="w-20 shrink-0 text-sm font-medium text-[#8c7663]">
                      3:00 PM
                    </div>

                    <div>
                      <h4 className="font-serif text-xl">Ceremony</h4>

                      <p className="mt-1 text-sm leading-6 text-[#7c7168]">
                        Witness us exchange our vows.
                      </p>
                    </div>
                  </div>

                  {/* Cocktail Hour */}
                  <div className="flex gap-5 border-b border-[#e0d6cc] py-6">
                    <div className="w-20 shrink-0 text-sm font-medium text-[#8c7663]">
                      4:00 PM
                    </div>

                    <div>
                      <h4 className="font-serif text-xl">Cocktail Hour</h4>

                      <p className="mt-1 text-sm leading-6 text-[#7c7168]">
                        Enjoy refreshments and celebrate with us.
                      </p>
                    </div>
                  </div>

                  {/* Reception */}
                  <div className="flex gap-5 py-6">
                    <div className="w-20 shrink-0 text-sm font-medium text-[#8c7663]">
                      5:00 PM
                    </div>

                    <div>
                      <h4 className="font-serif text-xl">Reception</h4>

                      <p className="mt-1 text-sm leading-6 text-[#7c7168]">
                        Dinner, dancing, and a night to remember.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="font-serif text-lg text-[#8c7663]">
                    Patrick &amp; Caryl
                  </p>
                </div>
              </div>
            </div>

            {/* Envelope inside body #d8c8b9*/}
            <div
              className="
                absolute
                bottom-0
                left-0
                z-20
                h-[360px]
                w-full
                overflow-hidden
                rounded-b-2xl
                
                shadow-2xl
                shadow-black/40
              "
            >
              {/* Left diagonal #cdbbaa*/}
              {/* Left diagonal */}
              <div
                className="
    absolute
    bottom-0
    left-0
    h-full
    w-1/2
    bg-amber-400
  "
                style={{
                  clipPath: "polygon(0 0, 100% 75%, 0 75%)",
                }}
              />

              {/* Right diagonal */}
              <div
                className="
    absolute
    bottom-0
    right-0
    h-full
    w-1/2
    bg-green-500
  "
                style={{
                  clipPath: "polygon(100% 0, 100% 75%, 0 75%)",
                }}
              />

              {/* Bottom rectangle */}
              <div
                className="
    absolute
    bottom-0
    left-0
    h-[25%]
    w-full
    bg-purple-500
  "
              />
            </div>

            {/* Envelope flap */}
            <div
              ref={flapRef}
              className="
                absolute
                left-0
                top-0
                z-40
                h-[260px]
                w-full
                origin-top
              "
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Front of flap #e0d1c2 flap is closed */}
              <div
                className="absolute inset-0 bg-red-500"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  backfaceVisibility: "hidden",
                }}
              />

              {/* Back of flap cdbbaa flap is opened */}
              <div
                className="absolute inset-0 bg-blue-500"
                style={{
                  clipPath: "polygon(0 100%, 100% 100%, 50% 0)",
                  transform: "rotateX(180deg)",
                  backfaceVisibility: "hidden",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
