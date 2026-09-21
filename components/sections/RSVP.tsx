"use client";

import React, { FormEvent, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

gsap.registerPlugin(ScrollTrigger);

function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const envelopeRef = useRef<HTMLDivElement>(null);
  const flapRef = useRef<HTMLDivElement>(null);
  const invitationRef = useRef<HTMLDivElement>(null);
  const rsvpContentRef = useRef<HTMLDivElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const envelope = envelopeRef.current;
    const flap = flapRef.current;
    const invitation = invitationRef.current;
    const rsvpContent = rsvpContentRef.current;

    if (!section || !envelope || !flap || !invitation || !rsvpContent) {
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 639px)",
          isDesktop: "(min-width: 640px)",
        },
        (context) => {
          const { isMobile } = context.conditions as {
            isMobile: boolean;
            isDesktop: boolean;
          };

          // Initial states
          gsap.set(envelope, {
            opacity: 0,
            y: 30,
          });

          gsap.set(invitation, {
            y: 40,
            height: 300,
            width: "90%",
            left: "5%",
            xPercent: 0,
            zIndex: 20,
          });

          gsap.set(flap, {
            rotateX: 0,
            zIndex: 40,
            transformOrigin: "top center",
          });

          gsap.set(rsvpContent, {
            opacity: 0,
            y: 20,
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=1800",
              scrub: 1,
              pin: true,
              pinSpacing: true,
              anticipatePin: 1,
            },
          });

          // 1. Envelope enters
          tl.to(envelope, {
            opacity: 1,
            y: 0,
            duration: 0.1,
            ease: "power2.out",
          });

          // 2. Open the flap
          tl.to(flap, {
            rotateX: 180,
            duration: 0.2,
            ease: "power2.inOut",
          });

          // 3. Put opened flap behind the envelope
          tl.set(flap, {
            zIndex: 10,
          });

          // 4. RSVP paper begins emerging
          tl.to(invitation, {
            y: -550,
            height: 550,
            duration: 0.1,
            ease: "power2.out",
          });

          // 5. Once it clears the envelope
          tl.set(invitation, {
            zIndex: 40,
          });

          // 6. Finish the movement
          tl.to(invitation, {
            y: -220,
            height: 790,

            // Mobile
            width: isMobile ? "98vw" : "97vw",

            // Center on screen
            left: "50%",
            xPercent: -50,

            duration: 0.1,
            ease: "power3.out",
          });

          // 7. Reveal RSVP content
          tl.to(rsvpContent, {
            opacity: 1,
            y: 0,
            duration: 0.001,
            ease: "power2.out",
          });

          tl.to(rsvpContent, {
            duration: 0.05,
          });

          return () => {
            tl.kill();
          };
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="rsvp"
      className="relative min-h-screen bg-[#171412] px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-white/40">
            Kindly Respond
          </p>

          <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
            Will you join us?
          </h2>

          <div className="mx-auto mt-8 h-px w-16 bg-white/25" />
        </div>

        {/* Envelope */}
        <div
          ref={envelopeRef}
          className="mx-auto w-full"
          style={{
            perspective: "1200px",
          }}
        >
          <div className="relative mx-auto h-[360px] w-full max-w-[600px] rounded-md bg-[#bca894] shadow-[0_25px_50px_rgba(0,0,0,0.30)]">
            {/* RSVP paper */}
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
                bg-[#f2e6d8]
                px-6
                py-10
                text-[#171412]
                shadow-[0_20px_40px_rgba(0,0,0,0.35)]
                sm:px-12
                sm:py-12
              "
            >
              {/* RSVP Contents */}
              <div ref={rsvpContentRef} className="h-full overflow-y-auto">
                <div className="mb-8 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#a58b72]">
                    Kindly Respond
                  </p>

                  <h3 className="mt-4 font-serif text-3xl sm:text-4xl">
                    Will you join us?
                  </h3>

                  <div className="mx-auto my-6 h-px w-12 bg-[#cbbcaf]" />

                  <p className="text-sm leading-6 text-[#7c7168]">
                    Please let us know if you can celebrate with us.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#5f5147]">
                      Full Name
                    </Label>

                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      className="
                        h-11
                        border-[#d6c5b3]
                        bg-[#f7eee4]/70
                        text-[#171412]
                        placeholder:text-[#9b8b7e]
                        focus-visible:ring-[#8c7663]
                      "
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#5f5147]">
                      Email Address
                    </Label>

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="
                        h-11
                        border-[#d6c5b3]
                        bg-[#f7eee4]/70
                        text-[#171412]
                        placeholder:text-[#9b8b7e]
                        focus-visible:ring-[#8c7663]
                      "
                    />
                  </div>

                  {/* Attendance */}
                  <div className="space-y-2">
                    <Label htmlFor="attendance" className="text-[#5f5147]">
                      Will you be attending?
                    </Label>

                    <select
                      id="attendance"
                      name="attendance"
                      required
                      className="
                        flex
                        h-11
                        w-full
                        rounded-md
                        border
                        border-[#d6c5b3]
                        bg-[#f7eee4]/70
                        px-3
                        py-2
                        text-sm
                        text-[#171412]
                        outline-none
                        focus:ring-2
                        focus:ring-[#8c7663]
                      "
                    >
                      <option value="">Please select</option>

                      <option value="yes">Yes, I will be there</option>

                      <option value="no">Sorry, I can't make it</option>
                    </select>
                  </div>

                  {/* Number of Guests */}
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-[#5f5147]">
                      Number of Guests
                    </Label>

                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="5"
                      defaultValue="1"
                      required
                      className="
                        h-11
                        border-[#d6c5b3]
                        bg-[#f7eee4]/70
                        text-[#171412]
                        focus-visible:ring-[#8c7663]
                      "
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#5f5147]">
                      Message
                    </Label>

                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Any message for the couple?"
                      rows={4}
                      className="
                        resize-none
                        border-[#d6c5b3]
                        bg-[#f7eee4]/70
                        text-[#171412]
                        placeholder:text-[#9b8b7e]
                        focus-visible:ring-[#8c7663]
                      "
                    />
                  </div>

                  {submitted && (
                    <div className="rounded-md border border-[#dccdbd] bg-[#eee2d5]/80 p-4 text-center text-sm text-[#6f655d]">
                      Thank you! Your RSVP has been received.
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="
                      h-11
                      w-full
                      rounded-full
                      bg-[#8c7663]
                      text-white
                      shadow-[0_8px_20px_rgba(70,50,35,0.20)]
                      hover:bg-[#756252]
                    "
                  >
                    Submit RSVP
                  </Button>
                </form>
              </div>
            </div>

            {/* Envelope inside body */}
            <div
              className="
                absolute
                bottom-0
                left-0
                z-20
                h-[360px]
                w-full
                overflow-hidden
                rounded-md
                
               
              "
            >
              {/* Left diagonal */}
              <div
                className="
                  absolute
                  bottom-5
                  left-0
                  h-full
                  w-1/2
                  bg-[#d9c5ad]
                  shadow-[8px_8px_20px_rgba(0,0,0,0.18)]
                  after:absolute
                  after:inset-0
                  after:bg-[url('/paper-noise.jpg')]
                  after:bg-repeat
                  after:bg-[length:300px_300px]
                  after:opacity-[0.12]
                  after:mix-blend-multiply
                  after:pointer-events-none
                "
                style={{
                  clipPath: "polygon(0 0, 100% 75%, 0 75%)",
                }}
              />

              {/* Right diagonal */}
              <div
                className="
                  absolute
                  bottom-5
                  right-0
                  h-full
                  w-1/2
                  bg-[#d9c5ad]
                  shadow-[-8px_8px_20px_rgba(0,0,0,0.18)]
                  after:absolute
                  after:inset-0
                  after:bg-[url('/paper-noise.jpg')]
                  after:bg-repeat
                  after:bg-[length:300px_300px]
                  after:opacity-[0.12]
                  after:mix-blend-multiply
                  after:pointer-events-none
                "
                style={{
                  clipPath: "polygon(100% 0, 100% 75%, 0 75%)",
                }}
              />

              {/* Bottom envelope */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[90%]
                  md:h-[50%]
                  w-full
                  bg-[#d2bca2]
                  shadow-[0_-6px_15px_rgba(0,0,0,0.12)]
                  after:absolute
                  after:inset-0
                  after:bg-[url('/paper-noise.jpg')]
                  after:bg-repeat
                  after:bg-[length:300px_300px]
                  after:opacity-[0.12]
                  after:mix-blend-multiply
                  after:pointer-events-none
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
              {/* Front of flap */}
              <div
                className="
    absolute
    inset-0
    overflow-hidden
    rounded-t-md

    [clip-path:polygon(0_0,100%_0,83%_30%,17%_30%)]

    md:[clip-path:polygon(0_0,100%_0,53%_100%,47%_100%)]
  "
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="absolute inset-0 bg-[#cdb496] after:absolute after:inset-0 after:bg-[url('/paper-noise.jpg')] after:bg-repeat after:bg-[length:300px_300px] after:opacity-[0.12] after:mix-blend-multiply after:pointer-events-none" />
              </div>

              {/* Back of flap */}
              <div
                className="
    absolute
    inset-0
    overflow-hidden
    rounded-b-md

    [clip-path:polygon(17%_70%,83%_70%,100%_100%,0_100%)]

    md:[clip-path:polygon(47%_0,53%_0,100%_100%,0_100%)]
  "
                style={{
                  transform: "rotateX(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="absolute inset-0 bg-[#c8b8a8]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RSVP;
