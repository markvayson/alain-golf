"use client";
import config from "@/lib/config";
import { IKImage } from "imagekitio-next";
import { Session } from "next-auth";
import { BookingCTA } from "./BookingCTA";

export const HeroSection = ({ session }: { session: Session | null }) => {
  return (
    <section className="overflow-hidden select-none relative ">
      <div className=" mx-auto max-w-5xl px-6 py-28 lg:py-20 ">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="relative z-10 mx-auto max-w-xl lg:ml-0 lg:w-1/2 ">
            <div className="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl">
              {session ? (
                `Welcome back ${session.user?.name}!`
              ) : (
                <>
                  <p>You Golf Journey Begins at</p>

                  <p>Al Ain Golf Club</p>
                </>
              )}
            </div>
            <p className="mt-8">
              Ready to hit the greens? Book your tee time today and experience
              exceptional golf!
            </p>
            <BookingCTA />
          </div>
        </div>
        <div className="absolute inset-0 ro lg:col-span-3unded-3xl  ">
          <div className="relative">
            <div className="bg-radial-[at_65%_25%] md:bg-radial-[at_60%_45%] to-background z-1 -inset-32 absolute from-transparent to-40% "></div>
            <IKImage
              urlEndpoint={config.env.imagekit.urlEndpoint}
              path="Hero"
              alt="Landing Page Background"
              priority
              quality={80}
              width={1920}
              height={920}
              lqip={{ active: true, quality: 20 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
