import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import ThemeButton from "./ThemeButton";

export const Hero = async () => {
  return (
    <>
      <main className="overflow-hidden bg-linear-to-b from-green-200 via-emerald-400 to-teal-600">
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
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0 bg-linear-to-b rounded-xl via-black/30  py-2">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-4 font-extrabold text-balance  text-6xl md:text-7xl lg:mt-8 xl:text-[5.25rem] text-white"
                >
                  Welcome to Al Ain Golf Club
                </TextEffect>

                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-6 max-w-2xl text-balance text-lg  grad rounded-xl font-medium  text-white"
                >
                  A scenic 18-hole course set against the stunning backdrop of
                  Jebel Hafeet. Known for its welcoming atmosphere and
                  well-maintained greens, it’s a great spot for golfers of all
                  levels to enjoy a round, practice, or join tournaments.
                </TextEffect>

                <ThemeButton
                  className="mt-12"
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
