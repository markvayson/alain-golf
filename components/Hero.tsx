"use client";
import config from "@/lib/config";
import { IKImage } from "imagekitio-next";
import { Session } from "next-auth";
import { BookingCTA } from "./BookingCTA";

const menuItems = [
  { name: "Features", href: "#" },
  { name: "Solution", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
];

export const HeroSection = ({ session }: { session: Session | null }) => {
  return (
    <main>
      <section className="overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-20 ">
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
          <div className="absolute inset-0 -mx-4 rounded-3xl md:p-3 lg:col-span-3 ">
            <div className="relative">
              <div className="bg-radial-[at_65%_25%] md:bg-radial-[at_60%_45%] to-background z-1 -inset-32 absolute from-transparent to-40% "></div>
              <IKImage
                urlEndpoint={config.env.imagekit.urlEndpoint}
                path="Hero"
                alt="Landing Page Background"
                width={2796}
                height={2080}
                lqip={{ active: true, quality: 20 }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
