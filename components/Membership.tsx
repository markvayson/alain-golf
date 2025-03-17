import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import ThemeButton from "./ThemeButton";

export const Membership = () => {
  const membership = {
    academy: {
      description: [
        "Free green fees on Academy Course Membership",
        "Access to club practice facilities",
        "Gym & pool access at Rugby Club",
        "Discounts on Golf Shop & F&B",
        "Special golf lesson rates",
        "Discounted fees for Championship Course",
        "AED 400 voucher for Individual Academy",
        "AED 600 voucher for Couple Academy",
        "Guest green fee passes (pro-rata)",
      ],
    },
    silver: {
      description: [
        "Everything in Academy Membership",
        "Free off-peak green fees & discounts",
        "Free peak green fees at Academy (after 12pm)",
        "Free driving range balls & cart use",
        "7-day advance booking privileges",
        "Competition entrance fee (event rules)",
        "EGF fee (AED 400, non pro-rata per person)",
        "AED 600 voucher for Individual Silver",
        "AED 900 voucher for Couple Silver",
        "Guest green fee passes (off-peak, pro-rata)",
      ],
    },
    gold: {
      description: [
        "Everything in Silver Membership",
        "Free green fees on Championship Course",
        "10-day advance booking privileges",
        "Gold competition entrance fee (event rules)",
        "AED 800 voucher for Individual Gold",
        "AED 10200 voucher for Couple Gold",
      ],
    },
  };

  return (
    <section id="membership" className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 md:text-center ">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Membership Tiers that Evolve with Your Game
          </h1>
          <p>
            Golf Club Membership offers more than just course access, with
            benefits like exclusive discounts and advanced booking privileges to
            enhance your experience and elevate your game.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          {Object.keys(membership).map((level) => (
            <Card key={level}>
              <CardHeader>
                <CardTitle className="font-medium">
                  {level.charAt(0).toUpperCase() + level.slice(1)} Membership
                </CardTitle>

                <CardDescription className="text-sm">
                  Individual or Couple
                </CardDescription>
                <ThemeButton
                  text="Join Now"
                  link="/sign-up"
                  className="w-full bg-transparent"
                />
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed" />

                <ul className="list-outside space-y-3 text-sm">
                  {membership[level].description.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
