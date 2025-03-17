import { Check } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { AnimatedGroup } from "./motion-primitives/animated-group";
import ThemeButton from "./ThemeButton";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export const Content = () => {
  const facilities = [
    "18 hole Championship Course",
    "9 hole Academy Course",
    "Driving Range",
    "Golf lessons from our team of PGA Professionals",
    "Golf Pro Shop",
    "FootGolf",
    "Locker rooms",
    "Palm Greens Restaurant",
  ];
  return (
    <section id="services" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12 flex flex-col md:flex-row ">
        <div className="relative z-10 max-w-xl space-y-6 ">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Golf Sports Clubhouse at AESGC
          </h2>
          <p>
            a vibrant social hub for the local community. Beyond golf, visitors
            can unwind at the Palm Greens Restaurant, host birthday parties,
            team-building events, or corporate outings. Whatever the occasion,
            we’re here to help create a memorable experience.
          </p>
          <div>
            <p>We are Open Daily at</p>
            <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  6:00am to 9:00pm
                </div>
                <p>Weekdays (Mon-Fri)</p>
              </div>
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  6:00am until Sunset
                </div>
                <p>Weekends (Sat & Sun)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid  ">
          <blockquote className="border-l-4 pl-4 ">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">What we offer:</h1>
              <ul className="list-outside space-y-3 text-sm">
                {facilities.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-row gap-5  items-start justify-around">
                <ThemeButton text="Scorecard" link="#scorecard" />
                <ThemeButton text="Green Fee Rate" link="#scorecard" />
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Content;
