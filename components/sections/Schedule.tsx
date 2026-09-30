"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const receptionProgram = [
  {
    number: "I",
    title: "Registration / Receiving of Guests",
  },
  {
    number: "II",
    title: "Introduction of Parents & Principal Sponsors",
  },
  {
    number: "III",
    title: "Entrance of the Entourage / Team Groom and Team Bride",
  },
  {
    number: "IV",
    title: "Prenup Photo Slideshow",
  },
  {
    number: "V",
    title: "Grand Entrance of the Couple",
  },
  {
    number: "VI",
    title: "Traditional Dance – Mother and Groom Dance",
  },
  {
    number: "VII",
    title: "Traditional Dance – Father and Bride Dance",
  },
  {
    number: "VIII",
    title: "First Dance as Husband & Wife",
  },
  {
    number: "IX",
    title: "Traditional Prosperity Dance / Money Dance",
  },
  {
    number: "X",
    title: "Wedding Traditions",
    items: ["Cake Cutting", "Wine Toast and Short Message for the Couple"],
    people: [
      {
        role: "Maid of Honor",
        name: "Angela Marie Lumbre",
      },
      {
        role: "Best Man",
        name: "Raphael Vincent Lim",
      },
    ],
  },
  {
    number: "XI",
    title: "Prayer Before Meal",
  },
  {
    number: "XII",
    title: "Dinner & Guests Photo Ops",
  },
  {
    number: "XIII",
    title: "Intermission Numbers",
  },
  {
    number: "XIV",
    title: "Garter Retrieval – Groom’s Performance",
  },
  {
    number: "XV",
    title: "Bouquet & Garter Toss / Game",
  },
  {
    number: "XVI",
    title: "Same Day Edit Photos / Video",
  },
  {
    number: "XVII",
    title: "Messages",
    people: [
      {
        role: "Parents of the Groom",
        name: "Niel Perez / Rochelle Perez",
      },
      {
        role: "Parents of the Bride",
        name: "Allan Brodeth / Gina Brodeth",
      },
      {
        role: "Groom and Bride",
        name: "",
      },
    ],
  },
  {
    number: "XVIII",
    title: "Closing",
  },
];

function Schedule() {
  return (
    <section id="schedule" className="scroll-mt-20 bg-[#f3eee8] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#a58b72]">
            The Celebration
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#3f3a35] sm:text-5xl">
            Our Schedule
          </h2>

          <div className="mx-auto mt-8 h-px w-16 bg-[#cdbba8]" />
        </div>

        {/* Event Parts */}
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="reception"
        >
          {/* Ceremony */}
          <AccordionItem value="ceremony" className="border-[#e0d6cc]">
            <AccordionTrigger
              className="
      relative
      justify-center
      py-7
      text-center
      hover:no-underline
      [&>svg]:absolute
      [&>svg]:right-0
    "
            >
              <div className="w-full text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-[#a58b72]">
                  Part I
                </p>

                <h3 className="mt-2 font-serif text-2xl text-[#3f3a35] sm:text-3xl">
                  Ceremony
                </h3>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-8 text-center">
              <p className="text-sm leading-7 text-[#7c7168]">
                Ceremony details will be shared here.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Pikapika */}
          <AccordionItem value="pikapika" className="border-[#e0d6cc]">
            <AccordionTrigger
              className="
      relative
      justify-center
      py-7
      text-center
      hover:no-underline
      [&>svg]:absolute
      [&>svg]:right-0
    "
            >
              <div className="w-full text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-[#a58b72]">
                  Part II
                </p>

                <h3 className="mt-2 font-serif text-2xl text-[#3f3a35] sm:text-3xl">
                  Pikapika
                </h3>

                <p className="mt-1 text-sm font-normal text-[#7c7168]">
                  Snacks &amp; refreshments
                </p>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-8 text-center">
              <p className="text-sm leading-7 text-[#7c7168]">
                Pikapika details will be shared here.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Reception */}
          <AccordionItem value="reception" className="border-[#e0d6cc]">
            <AccordionTrigger
              className="
    relative
    justify-center
    py-7
    text-center
    hover:no-underline
    [&>svg]:absolute
    [&>svg]:right-0
  "
            >
              <div className="w-full text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-[#a58b72]">
                  Part III
                </p>

                <h3 className="mt-2 font-serif text-2xl text-[#3f3a35] sm:text-3xl">
                  Reception
                </h3>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-8">
              <div className="mx-auto max-w-xl divide-y divide-[#e0d6cc] ">
                {receptionProgram.map((program) => (
                  <div key={program.number} className="py-3 text-center ">
                    {/* Content */}
                    <div className="text-left mx-auto mt-2 flex gap-15">
                      <div className=" w-[50px]">
                        <span className="font-serif text-lg text-[#a58b72]">
                          {program.number}
                        </span>
                      </div>
                      <div className=" flex-1">
                        <h4 className="font-serif text-lg text-[#3f3a35] sm:text-xl">
                          {program.title}
                        </h4>

                        <div>
                          {/* Sub-items */}
                          {program.items && (
                            <div className="mt-3 flex flex-col">
                              {program.items.map((item) => (
                                <span
                                  key={item}
                                  className="m-0 text-sm leading-5 text-[#7c7168]"
                                >
                                  • {item}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* People */}
                          {program.people && (
                            <div className="mt-1">
                              {program.people.map((person) => (
                                <div
                                  key={person.role}
                                  className="ml-3 mt-1 flex items-center"
                                >
                                  <span className="flex-1 text-xs uppercase tracking-[0.18em] text-[#a58b72]">
                                    {person.role}
                                  </span>

                                  {person.name && (
                                    <span className="flex-1 text-sm text-[#6f655d]">
                                      {person.name}
                                    </span>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Special Requests */}
        <div className="mt-20 border-t border-[#e0d6cc] pt-12">
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#a58b72]">
              🤍 Special Requests
            </p>
          </div>

          <div className="space-y-6 text-center">
            <div>
              <h3 className="font-serif text-lg text-[#3f3a35]">
                No Plus-Ones
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#7c7168]">
                We kindly ask that you attend as named on your invitation. Thank
                you for understanding.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg text-[#3f3a35]">Adults Only</h3>

              <p className="mt-2 text-sm leading-6 text-[#7c7168]">
                We kindly request an adults-only celebration so everyone can
                fully enjoy this special occasion with us.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg text-[#3f3a35]">No Phones</h3>

              <p className="mt-2 text-sm leading-6 text-[#7c7168]">
                We kindly ask that phones be kept away during the celebration so
                we can all be fully present and enjoy these precious moments
                together.
              </p>
            </div>
          </div>

          <p className="mt-8 text-center font-serif text-lg text-[#6f655d]">
            Thank you for respecting our wishes and helping us make our
            celebration truly special!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
