"use client";
import { useState } from "react";

export const PricingSection = ({ rates }: { rates: Rate[] }) => {
  const [courseType, setCourseType] = useState(rates[0].courseType);
  const courseTypes = Array.from(new Set(rates.map((item) => item.courseType)));
  console.log(courseTypes);
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6  h-screen w-full">
        <div>
          <h1>Green Fees</h1>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th className="text-left whitespace-nowrap">{courseType}</th>
                <th colSpan={2} className="text-center">
                  Weekdays
                </th>
              </tr>
              <tr>
                <th className="w-full text-left text-sm ">Player Type</th>
                <th className="text-center text-sm">9H</th>
                <th className="text-center text-sm">18H</th>
              </tr>
            </thead>
            <tbody className="space-y-5">
              {rates.map((rate, i) => (
                <tr key={i} className="border border-gray-200 my-5">
                  <td className="whitespace-nowrap text-sm">{rate.category}</td>
                  <td className="text-left text-sm px-2 whitespace-nowrap">
                    AED {rate.weekday9h.toFixed(2)}
                  </td>
                  <td className="text-left text-sm px-2 whitespace-nowrap">
                    AED {rate.weekday18h.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="w-full overflow-auto lg:overflow-visible">
          <table className="w-[200vw] border-separate border-spacing-x-3 md:w-full dark:[--color-muted:var(--color-zinc-900)]">
            <thead className="bg-background sticky top-0">
              <tr className="*:py-4  *:text-left *:font-medium">
                <th rowSpan={2} className="text-lg font-semibold "></th>
                <th colSpan={2} className="">
                  Weekdays (Mon - Fri)
                </th>
                <th
                  colSpan={2}
                  className="bg-muted rounded-t-(--radius) space-y-3 px-4"
                >
                  Weekend (Sat - Sun)
                </th>
              </tr>
              <tr>
                <th className="">9 Holes</th>
                <th className="">18 Holes</th>
                <th className="bg-muted rounded-t-(--radius) space-y-3 px-4">
                  9 Holes
                </th>
                <th className="bg-muted rounded-t-(--radius) space-y-3 px-4">
                  18 Holes
                </th>
              </tr>
            </thead>
            <tbody className="text-caption text-sm">
              {latestRates.map((rate) => (
                <tr key={rate.id} className="*:py-3">
                  <td className="flex items-center gap-2 font-medium">
                    {rate.category}
                  </td>
                  <td className="bg-muted border-none px-4">
                    AED {rate.weekday9h}
                  </td>
                  <td>AED {rate.weekday18h}</td>
                  <td>AED {rate.weekend9h}</td>
                  <td>AED {rate.weekend18h}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </section>
  );
};

export default PricingSection;
