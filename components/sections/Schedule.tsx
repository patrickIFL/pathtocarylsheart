import React from "react";

function Schedule() {
  return (
    <>
      <section id="schedule" className="scroll-mt-20 bg-[#f3eee8] px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#a58b72]">
              The Celebration
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Our Schedule
            </h2>
          </div>

          <div className="space-y-0">
            <div className="flex gap-6 border-b border-[#e0d6cc] py-6">
              <div className="w-24 shrink-0 text-sm font-medium text-[#8c7663]">
                3:00 PM
              </div>
              <div>
                <h3 className="font-serif text-xl">Ceremony</h3>
                <p className="mt-1 text-sm text-[#7c7168]">
                  Witness us exchange our vows.
                </p>
              </div>
            </div>

            <div className="flex gap-6 border-b border-[#e0d6cc] py-6">
              <div className="w-24 shrink-0 text-sm font-medium text-[#8c7663]">
                4:00 PM
              </div>
              <div>
                <h3 className="font-serif text-xl">Cocktail Hour</h3>
                <p className="mt-1 text-sm text-[#7c7168]">
                  Enjoy refreshments and celebrate with us.
                </p>
              </div>
            </div>

            <div className="flex gap-6 border-b border-[#e0d6cc] py-6">
              <div className="w-24 shrink-0 text-sm font-medium text-[#8c7663]">
                5:00 PM
              </div>
              <div>
                <h3 className="font-serif text-xl">Reception</h3>
                <p className="mt-1 text-sm text-[#7c7168]">
                  Dinner, dancing, and a night to remember.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Schedule;
