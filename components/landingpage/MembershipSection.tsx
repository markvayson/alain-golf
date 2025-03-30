"use client";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { memberships } from "@/app/constants/data/membership";
import Image from "next/image";
import background from "@/public/background.jpg";
import { setMembership } from "@/lib/utils";

export const MembershipSection = () => {
  const [isCouple, setIsCouple] = useState<boolean>(false);

  const academyMembership = setMembership(
    memberships,
    "Academy Membership",
    isCouple
  );

  const championshipMembership = setMembership(
    memberships,
    "Championship Membership",
    isCouple
  );

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Membership That Suits You
          </h1>
          <p>
            AESGC offers flexible membership options tailored to your
            preferences, providing you with a seamless golfing experience and
            exclusive benefits.
          </p>
          <Button
            variant={isCouple ? "ghost" : "default"}
            onClick={() => {
              setIsCouple(false);
            }}
            disabled={!isCouple}
            className="disabled:opacity-100 cursor-pointer hover:underline"
          >
            For Single
          </Button>
          <Button
            variant={!isCouple ? "ghost" : "default"}
            onClick={() => {
              setIsCouple(true);
            }}
            disabled={isCouple}
            className="disabled:opacity-100 cursor-pointer hover:underline"
          >
            For Couple
          </Button>
        </div>

        <div className="pointer-events-none  grid gap-6 md:grid-cols-4 md:gap-0">
          <div className="rounded-(--radius) flex flex-col relative justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
            <Image
              src={background}
              alt="background"
              fill
              className="-z-10 object-cover"
            />
            <div className="space-y-4">
              <div>
                <div className="flex flex-row">
                  <h2 className="font-medium">{academyMembership.category}</h2>
                </div>
                <div className="my-3 flex items-center gap-1">
                  <span className="text-sm text-center font-semibold">AED</span>
                  <span className="text-3xl font-bold ">
                    {academyMembership.price?.toLocaleString()}
                  </span>
                  <span className="text-sm place-self-end font-semibold">
                    /year
                  </span>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full pointer-events-auto"
              >
                <Link href={`/pricing/membership?type=academy&c=${isCouple}`}>
                  Become an Academy Member
                </Link>
              </Button>

              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {academyMembership.benefits?.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pointer-events-none dark:bg-muted rounded-(--radius) relative border p-6 shadow-lg shadow-gray-950/5 md:col-span-2 lg:p-10 dark:[--color-muted:var(--color-zinc-900)]">
            <Image
              src={background}
              alt="background"
              fill
              className="-z-10 object-cover"
            />
            <div className="grid gap-6 ">
              <div className="space-y-4">
                <div>
                  <h2 className="font-medium  flex justify-between items-center w-full">
                    <span>{championshipMembership.category}</span>
                    <span className=" px-4 py-1 md:py-1 bg-gradient-to-r from-yellow-500 to-amber-300 rounded-lg shadow-md  ">
                      Gold
                    </span>
                  </h2>
                  <div className="my-3 flex items-center gap-1">
                    <span className="text-sm text-center font-semibold">
                      AED
                    </span>
                    <span className="text-3xl font-bold ">
                      {championshipMembership.price?.[0].toLocaleString()}
                    </span>
                    <span className="text-sm place-self-end font-semibold">
                      /year
                    </span>
                  </div>
                </div>

                <Button asChild className="w-full pointer-events-auto">
                  <Link href={`/pricing/membership?type=gold&c=${isCouple}`}>
                    Become a Gold Member
                  </Link>
                </Button>
              </div>
              <hr className="border-dashed" />

              <div className="">
                <div className="text-sm font-medium">
                  Everything in Academy plus :
                </div>

                <ul className="mt-4 list-outside space-y-3 text-sm whitespace-nowrap">
                  {championshipMembership.benefits
                    ?.filter(
                      (benefit: string) =>
                        !academyMembership.benefits?.includes(benefit)
                    )
                    .map((item: string) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="size-3" />
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
