import React from "react";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import ThemeButton from "./ThemeButton";
import HeroDivider from "./dividers/HeroDivider";
import { TextShimmer } from "./motion-primitives/text-shimmer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Dialog } from "./ui/dialog";
import SignButton from "./SignButton";

export const Hero = async () => {
  return (
    <>
      <main className="overflow-hidden bg-linear-to-b px-2  relative">
        <HeroDivider />
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section className="h-[100vh] relative">
          <div className="relative pt-32 md:pt-36 ">
            <div className="mx-auto ">
              <div className="text-center sm:mx-auto   lg:mr-auto lg:mt-0  rounded-xl  p-2">
                <div className="relative flex gap-2 items-center justify-center">
                  <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.1}
                    as="h1"
                    className="absolute -left-2 -z-10 md:left-0 right-0 -top-0   font-black md:font-extrabold  tracking-tighter text-black/5 md:text-black/10 text-8xl md:text-9xl thread "
                  >
                    AESGC
                  </TextEffect>
                  <h1 className=" mt-4 font-medium md:font-normal tracking-tighter text-5xl/16 md:text-[5.5rem]/16 lg:mt-8 ">
                    <span className="text-transparent bg-clip-text  whitespace-nowrap gradient-primary ">
                      Al Ain
                    </span>{" "}
                    Golf Club
                  </h1>
                </div>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-6 md:mt-12 text-center text-base text-balance text-black/80 md:text-xl grad rounded-xl   "
                >
                  A hidden gem in the UAE, set against Jebel Hafeet, with
                  something for golfers and non-golfers alike.
                </TextEffect>
                <SignButton
                  type="SIGN_IN"
                  label="Book Tee Time"
                  className="mt-12"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
