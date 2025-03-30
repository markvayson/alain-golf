'use client'
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const VisitorComparison = () => {
  const [isCouple, setIsCouple] = useState<boolean>(false)
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Pricing that Scales with You
          </h1>
          <p>
            Gemini is evolving to be more than just the models. It supports an
            entire to the APIs and platforms helping developers and businesses
            innovate.
          </p>
          <Button variant={isCouple ? 'ghost' : 'default'} onClick={() => {setIsCouple(false)}} disabled={!isCouple}>Single</Button>
          <Button variant={!isCouple ? 'ghost' : 'default'} onClick={() => {setIsCouple(true)}} disabled={isCouple}>Couple</Button>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
          <div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
            <div className="space-y-4">
              <div>
                <div className="flex flex-row">
                  <h2 className="font-medium">Academy Membership</h2>
               
                </div>
                <span className="my-3 block text-2xl font-semibold">
                    AED{isCouple ? '700' : '400'}/mo
                  </span>
              </div>

              <Button asChild variant="outline" className="w-full">
                <Link href="/pricing/membership">Get Started</Link>
              </Button>

              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Complimentary Green Fee (Monday to Friday)",
                  "Unlimited Range Balls",
                  "Discounted Prices",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)]">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h2 className="font-medium">Championship Membership</h2>
                  <span className="my-3 block text-2xl font-semibold">
                  AED{isCouple ? '1700' : '1400'}/mo
                  </span>
                  <p className="text-muted-foreground text-sm">Per editor</p>
                </div>

                <Button asChild className="w-full">
                  <Link href="/pricing/membership">Get Started</Link>
                </Button>
              </div>

              <div>
                <div className="text-sm font-medium">
                  Everything in Academy plus :
                </div>

                <ul className="mt-4 list-outside space-y-3 text-sm">
                  {[
                    "Complimentary Green Fee (Gold - All Day Silve)",
                    "5GB Cloud Storage",
                    "Email and Chat Support",
                    "Access to Community Forum",
                    "Single User Access",
                    "Access to Basic Templates",
                    "Mobile App Access",
                    "1 Custom Report Per Month",
                    "Monthly Product Updates",
                    "Standard Security Features",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
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

export default VisitorComparison;
