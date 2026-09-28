"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Shirt, Gift } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

function WhereAndWhen() {
  const [selectedDetail, setSelectedDetail] = useState<
    (typeof details)[number] | null
  >(null);

  const details = [
    {
      label: "When",
      title: "November 14, 2026",
      description: "Saturday",
      icon: CalendarDays,
      image:
        "https://res.cloudinary.com/dbav6z7re/image/upload/v1790607962/calendar_jue3fn.png",
      details:
        "Join us on Saturday, November 14, 2026 as we celebrate this special day together.",
    },
    {
      label: "Where",
      title: "Subic Park Hotel",
      description: "Subic Bay Freeport Zone",
      icon: MapPin,
      image:
        "https://res.cloudinary.com/dbav6z7re/image/upload/v1790587705/subic_park_pakf57.webp",
      mapUrl:
        "https://google.com/maps?sca_esv=080dae4805299e94&output=search&q=subic+park+hotel&source=lnms&fbs=ABfTbFUxGEP8yeZbmk97ajdTjIq-Fell6yjIojusYtuKjXhLi43HlmHdBhkjA3l1LeWMNI0xTT8K2--1CAmZ7Jf2E9Pw4F0PXja83TiBtSPiu7ilFH5YZ61MH7OYmAdY1Hwa6DIpYZZ6OPPJCdZ2sZIhor6OPgAnh_htwhsEx52EL_ZptACZcv9ncNaAX-YbNN2bj2P3i1DNmUvIwSvmsQa0Ob2Y3_s1uFXbA7dM_-kx1eC0wLlFvT0&entry=mc&ved=1t:200715&ictx=111",
      details:
        "Our celebration will take place at Subic Park Hotel in the Subic Bay Freeport Zone. More venue information and directions will be shared here.",
    },
    {
      label: "Dress Code",
      title: "Pastel Colors",
      description: "Semi-Formal",
      icon: Shirt,
      image:
        "https://res.cloudinary.com/dbav6z7re/image/upload/v1790613522/dress_code_example_xnu93s.png",
      colors: [
        {
          name: "Blush Pink",
          color: "#ECDBD4",
        },
        {
          name: "Dusty Blue",
          color: "#C0C4CD",
        },
        {
          name: "Beige",
          color: "#E5D4C4",
        },
      ],
    },
    {
      label: "Gift Guide",
      title: "Monetary",
      description: "Warm Blessings",
      icon: Gift,
      image:
        "https://res.cloudinary.com/dbav6z7re/image/upload/v1790612555/qr2_vplsk0.png",
      details:
        "Your presence is already a gift to us. For those who would like to give something, monetary gifts are warmly appreciated.",
    },
  ];

  return (
    <>
      <section
        id="details"
        className="scroll-mt-20 bg-[#f3eee8] px-6 py-28 text-[#3f3a35]"
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
            <p className="text-sm uppercase tracking-[0.35em] text-[#a58b72]">
              The Details
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#3f3a35] sm:text-5xl">
              Where &amp; When
            </h2>

            <div className="mx-auto mt-8 h-px w-16 bg-[#cdbba8]" />
          </motion.div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-4">
            {details.map((detail, index) => {
              const Icon = detail.icon;

              return (
                <motion.button
                  key={detail.label}
                  type="button"
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedDetail(detail)}
                  className="h-full w-full text-left outline-none"
                >
                  <div
                    className="
                      flex
                      h-full
                      min-h-[280px]
                      flex-col
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#e8e1d8]
                      bg-[#fffdf9]
                      p-8
                      text-center
                      shadow-xl
                      shadow-black/5
                      transition-all
                      duration-300
                      hover:border-[#d8cabb]
                      hover:bg-white
                      focus-visible:ring-2
                      focus-visible:ring-[#cdbba8]
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        mb-6
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#e8e1d8]
                        bg-[#f3eee8]
                      "
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                        className="text-[#8c7663]"
                      />
                    </div>

                    {/* Label */}
                    <p className="text-xs uppercase tracking-[0.3em] text-[#a58b72]">
                      {detail.label}
                    </p>

                    {/* Title */}
                    <h3 className="mt-4 font-serif text-2xl text-[#3f3a35]">
                      {detail.title}
                    </h3>

                    {/* Dress colors */}
                    {detail.colors && (
                      <div className="mt-5 flex items-center justify-center gap-3">
                        {detail.colors.map((color) => (
                          <span
                            key={color.name}
                            title={color.name}
                            className="
                              h-5
                              w-5
                              rounded-full
                              border
                              border-[#d8cabb]
                              shadow-sm
                            "
                            style={{
                              backgroundColor: color.color,
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Description */}
                    <p className="mt-3 text-sm leading-6 text-[#6f655d]">
                      {detail.description}
                    </p>

                    {/* Click hint */}
                    <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-[#a58b72]/60">
                      View details
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detail Dialog */}
      <Dialog
        open={!!selectedDetail}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedDetail(null);
          }
        }}
      >
        <DialogContent
          className="
            max-w-lg
            border-[#e8e1d8]
            bg-[#fffdf9]
            text-[#3f3a35]
            shadow-[0_25px_60px_rgba(63,58,53,0.20)]
          "
        >
          {selectedDetail && (
            <>
              <DialogHeader className="text-center sm:text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-[#a58b72]">
                  {selectedDetail.label}
                </p>

                <DialogTitle className="mt-2 font-serif text-3xl text-[#3f3a35]">
                  {selectedDetail.title}
                </DialogTitle>

                <DialogDescription className="text-[#7c7168]">
                  {selectedDetail.description}
                </DialogDescription>
              </DialogHeader>

              {/* Image */}
              {selectedDetail.image && (
                <div className="mt-4 overflow-hidden rounded-xl">
                  <img
                    src={selectedDetail.image}
                    alt={selectedDetail.title}
                    className="
                      h-56
                      w-full
                      object-cover
                    "
                  />
                </div>
              )}

              <div className="mt-4">
                <p className="text-center text-sm leading-7 text-[#6f655d]">
                  {selectedDetail.details}
                </p>

                {/* if the selected detail is map, show a link to map */}
                {selectedDetail.mapUrl && (
                  <div className="mt-8 flex justify-center">
                    <a
                      href={selectedDetail.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        border
        border-[#cdbba8]
        bg-[#f3eee8]
        px-6
        py-3
        text-sm
        font-medium
        text-[#6f5f52]
        transition-all
        duration-300
        hover:border-[#a58b72]
        hover:bg-[#e9dfd5]
        hover:text-[#3f3a35]
      "
                    >
                      <MapPin size={16} strokeWidth={1.5} />
                      View Location on Google Maps
                    </a>
                  </div>
                )}

                {/* Dress code colors */}
                {selectedDetail.colors && (
                  <div className="">
                    <p className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-[#a58b72]">
                      Suggested Colors
                    </p>

                    <div className="flex justify-center gap-5">
                      {selectedDetail.colors.map((color) => (
                        <div
                          key={color.name}
                          className="flex flex-col items-center gap-2"
                        >
                          <div
                            className="
                              h-14
                              w-14
                              rounded-full
                              border
                              border-[#d8cabb]
                              shadow-[0_4px_12px_rgba(63,58,53,0.10)]
                            "
                            style={{
                              backgroundColor: color.color,
                            }}
                          />

                          <span className="text-xs text-[#7c7168]">
                            {color.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default WhereAndWhen;
