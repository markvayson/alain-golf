import { coaches } from "@/app/constants";
import Link from "next/link";
import placeholder from "@/public/person-placeholder.png";
import Image from "next/image";
import { BottomDivider, TopDivider } from "../Svg";
import { getCurrentDate } from "@/lib/utils";

export const TeamSection = () => {
  return (
    <section
      className="bg-gradient-to-br from-green-300 to-green-500 relative py-16 md:py-32 dark:bg-transparent"
      id="team"
    >
      <TopDivider />
      <BottomDivider />
      <div className="mx-auto max-w-5xl px-6">
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Meet Our Professionals
            </h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p>
              Our skilled golf professionals are dedicated to helping players of
              all levels improve their game. With expert coaching, personalized
              guidance, and a passion for the sport, they ensure every golfer
              reaches their full potential.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-24 ">
          <div className="grid gap-x-6 items-center  justify-center gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {coaches.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <Image
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                  src={member.avatar || placeholder}
                  alt="team member"
                  width="826"
                  height="1239"
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                    <span className="text-xs">_0{index + 1}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                    <Link
                      href={member.link}
                      className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      Linktree
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link
          href={`/booking?date=${getCurrentDate()}&t=lesson`}
          className="mx-auto block bg-black text-white w-fit px-4 py-2 rounded-md mt-8 md:mt-12 hover:bg-black/80"
        >
          Book for a lesson
        </Link>
      </div>
    </section>
  );
};

export default TeamSection;
