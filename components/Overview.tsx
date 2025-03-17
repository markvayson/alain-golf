import React from "react";
import { Button } from "./ui/button";
import Cover from "./Cover";
import Link from "next/link";
import { auth } from "@/auth";

const Overview = async () => {
  const session = await auth();
  return (
    <section className="flex bg-red-300 flex-col items-center">
      <div className="relative flex flex-1 justify-center mt-10">
        <div className="relative ">
          <Cover variant="medium" className="z-10" />
          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <Cover variant="wide" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 px-5 flex-col gap-2 p-5 ">
        <h1 className="text-7xl font-black md:text-7xl">Al Ain Golf Club</h1>
        <p className="mt-2  text-xl whitespace-pre-wrap">
          A scenic 18-hole course set against the stunning backdrop of Jebel
          Hafeet. Known for its welcoming atmosphere and well-maintained greens,
          it’s a great spot for golfers of all levels to enjoy a round,
          practice, or join tournaments.
        </p>
        <Link
          href={session ? "/booking" : "/sign-in"}
          className="mt-2 bg-primary transition-colors duration-300 hover:bg-primary/80 min-h-14 w-fit px-4 rounded-full items-center flex justify-center  text-md font-semibold text-center"
        >
          Make a booking
        </Link>
      </div>
    </section>
  );
};

export default Overview;
