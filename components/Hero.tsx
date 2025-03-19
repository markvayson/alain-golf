import React from "react";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import ThemeButton from "./ThemeButton";
import HeroDivider from "./dividers/HeroDivider";

export const Hero = async () => {
  return (
    <>
      <main className="overflow-hidden bg-linear-to-b px-2  from-teal-300 via-green-300 to-green-300 relative">
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
              <div className="max-sm:pl-5 md:text-center sm:mx-auto lg:mr-auto lg:mt-0  rounded-xl  py-2">
                <div className="relative">
                  <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.1}
                    as="h1"
                    className="absolute -left-2 md:left-0 right-0 -top-10 md:-top-18  font-black md:font-extrabold  tracking-tighter text-black/20 text-8xl md:text-9xl thread "
                  >
                    AESGC
                  </TextEffect>
                  <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    as="h1"
                    className=" mt-4 font-black md:font-extrabold text-7xl/16 thread lg:mt-8 xl:text-[5.25rem] "
                  >
                    Al Ain Golf Club
                  </TextEffect>
                </div>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-12 max-w-2xl text-balance md:text-lg grad rounded-xl   "
                >
                  A scenic 18-hole course set against the stunning backdrop of
                  Jebel Hafeet. Known for its welcoming atmosphere and
                  well-maintained greens, it’s a great spot for golfers of all
                  levels to enjoy a round, practice, or join tournaments.
                </TextEffect>
                <ThemeButton
                  className="mt-12 rounded-full "
                  label="Book Tee Time"
                  link="/sign-up"
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
