import React, { FormEvent, useState } from "react";
import { MagicCard } from "../ui/magic-card";
import { Label } from "../ui/label";
import { Button, Input } from "@base-ui/react";
import { Textarea } from "../ui/textarea";

function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }
  return (
    <>
      <section id="rsvp" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#a58b72]">
              Kindly Respond
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Will you join us?
            </h2>
            <p className="mt-4 text-[#7c7168]">
              Please let us know if you can celebrate with us.
            </p>
          </div>

          <MagicCard
            className="rounded-3xl border-[#e8e1d8] bg-[#fffdf9]"
            gradientColor="#f3e8dc"
          >
            <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-10">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="attendance">Will you be attending?</Label>
                <select
                  id="attendance"
                  name="attendance"
                  required
                  className="flex h-10 w-full rounded-md border border-[#e0d6cc] bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#cdbba8]"
                >
                  <option value="">Please select</option>
                  <option value="yes">Yes, I will be there</option>
                  <option value="no">Sorry, I can&#39;t make it</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="5"
                  defaultValue="1"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Any message for the couple?"
                  rows={4}
                />
              </div>

              {submitted && (
                <div className="rounded-lg bg-[#f3eee8] p-4 text-center text-sm text-[#6f655d]">
                  Thank you! Your RSVP has been received.
                </div>
              )}

              <Button
                type="submit"
                className="w-full rounded-full bg-[#8c7663] text-white hover:bg-[#756252]"
              >
                Submit RSVP
              </Button>
            </form>
          </MagicCard>
        </div>
      </section>
    </>
  );
}

export default RSVP;
