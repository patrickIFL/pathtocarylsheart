import React from "react";
import { MagicCard } from "../ui/magic-card";

function WhereAndWhen() {
  return (
    <>
      <section id="details" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#a58b72]">
              The Details
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Where &amp; When
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <MagicCard
              className="rounded-2xl border-[#e8e1d8] bg-[#fffdf9]"
              gradientColor="#f3e8dc"
            >
              <div className="p-8 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-[#a58b72]">
                  When
                </p>
                <h3 className="mt-4 font-serif text-2xl">November 14, 2026</h3>
                <p className="mt-3 text-sm text-[#7c7168]">Saturday</p>
              </div>
            </MagicCard>

            <MagicCard
              className="rounded-2xl border-[#e8e1d8] bg-[#fffdf9]"
              gradientColor="#f3e8dc"
            >
              <div className="p-8 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-[#a58b72]">
                  Where
                </p>
                <h3 className="mt-4 font-serif text-2xl">Subic Park Hotel</h3>
                <p className="mt-3 text-sm text-[#7c7168]">
                  Subic Bay Freeport Zone
                </p>
              </div>
            </MagicCard>

            <MagicCard
              className="rounded-2xl border-[#e8e1d8] bg-[#fffdf9]"
              gradientColor="#f3e8dc"
            >
              <div className="p-8 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-[#a58b72]">
                  Dress Code
                </p>
                <h3 className="mt-4 font-serif text-2xl">Semi-Formal</h3>
                <p className="mt-3 text-sm text-[#7c7168]">
                  Elegant and comfortable
                </p>
              </div>
            </MagicCard>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhereAndWhen;
