"use client";
import { Session } from "next-auth";
import { BookingCTA } from "../BookingCTA";
import hero from "@/public/Hero.jpeg";
import Image from "next/image";

export const HeroSection = ({ session }: { session: Session | null }) => {
  return (
    <section className="overflow-hidden select-none relative ">
      <div className="absolute inset-0  lg:col-span-3 rounded-3xl  ">
        <div className="relative w-screen h-screen">
          <div className="bg-radial-[at_65%_25%] md:bg-radial-[at_60%_45%] to-background z-1 -inset-32 absolute from-transparent to-40% " />

          <Image
            src={hero}
            priority
            alt="hero background"
            fill
            placeholder="blur"
          />
        </div>
      </div>
      <div className=" mx-auto max-w-5xl px-6 py-28 lg:py-20 ">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="relative z-10 mx-auto max-w-xl lg:ml-0 lg:w-1/2 ">
            <div className="mt-10 flex flex-col">
              <span className="text-2xl font-medium">
                You Golf Journey Begins at
              </span>

              <span className="text-balance text-4xl font-bold md:text-5xl xl:text-5xl">
                Al Ain Golf Club
              </span>
            </div>
            <p className="mt-8">
              Ready to hit the greens? Book your tee time today and experience
              exceptional golf!
            </p>
            <BookingCTA />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
