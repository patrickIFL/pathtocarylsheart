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

          {/* Schedule */}
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

          {/* Special Requests */}
          <div className="mt-16 border-t border-[#e0d6cc] pt-12">
            <div className="mb-8 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[#a58b72]">
                🤍 Special Requests
              </p>
            </div>

            <div className="space-y-6 text-center">
              <div>
                <h3 className="font-serif text-lg">No Plus-Ones</h3>

                <p className="mt-2 text-sm leading-6 text-[#7c7168]">
                  We kindly ask that you attend as named on your invitation.
                  Thank you for understanding.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg">Adults Only</h3>

                <p className="mt-2 text-sm leading-6 text-[#7c7168]">
                  We kindly request an adults-only celebration so everyone can
                  fully enjoy this special occasion with us.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg">No Phones</h3>

                <p className="mt-2 text-sm leading-6 text-[#7c7168]">
                  We kindly ask that phones be kept away during the celebration
                  so we can all be fully present and enjoy these precious
                  moments together.
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
    </>
  );
}

export default Schedule;
