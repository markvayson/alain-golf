"use client";
import { useState } from "react";
import { useRateStyle } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { CloudDownload } from "lucide-react";

export const RatesSection = ({ rates }: { rates: Rate[] }) => {
  const [courseType, setCourseType] = useState<string>(rates[0].courseType);
  const [selectedDay, setSelectedDay] = useState<string>("Weekdays");
  const courseTypes = Array.from(new Set(rates.map((item) => item.courseType)));
  const rateDays = ["Weekdays", "Weekends", "Public Holidays"];

  return (
    <section className="py-16 md:py-32 from-lime-300 to-green-400 bg-gradient-to-br select-none relative">
      <div className="mx-auto max-w-5xl px-6 relative">
        <div className="md:grid md:grid-cols-2">
          <div className="flex md:flex-col justify-between md:justify-start items-start gap-5">
            <div className="">
              <h1 className="text-balance text-4xl font-bold md:text-5xl xl:text-5xl">
                Green Fee Rates
              </h1>
              <p className="mt-4">
                Affordable green fees for golfers of all levels. See our rates
                and book your next round today!
              </p>
            </div>
            <button className="items-center border bg-white whitespace-nowrap ml-2 px-3 py-2 cursor-pointer rounded-lg text-sm flex gap-2 hover:bg-dark">
              <CloudDownload className="w-6 h-6 md:w-4 md:h-4" />
              <p className="hidden md:block">Download Image</p>
            </button>
          </div>
          <div className="relative mt-5">
            <div className="grid grid-cols-2 w-full place-content-around">
              <Select onValueChange={setCourseType}>
                <SelectTrigger className=" text-left focus-visible:ring-0  border-none cursor-pointer *:text-black font-bold p-0 shadow-none text-md">
                  <SelectValue placeholder={courseType} />
                </SelectTrigger>
                <SelectContent>
                  {courseTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={setSelectedDay}>
                <SelectTrigger className="text-left *:text-black  cursor-pointer place-self-end font-bold border-none p-0 shadow-none  text-md focus-visible:ring-0 ">
                  <SelectValue placeholder="Weekdays" />
                </SelectTrigger>
                <SelectContent>
                  {rateDays.map((day, i) => (
                    <SelectItem key={i} value={day}>
                      {day}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <table className="table-fixed w-full relative">
              <caption className="caption-bottom text-sm mt-2">
                *All Championship course green fees are applicable for an
                AED10.50 EGF development fee if golfer is not an Emirates Golf
                Federation member
              </caption>
              <thead>
                <tr className="border-b-4 border border-double  border-gray-200 bg-gray-100 text-sm  ">
                  <th className=" pl-4 py-2 text-left whitespace-nowrap w-2/5  ">
                    Player Type
                  </th>
                  <th className="px-4 py-2 text-center text-sm w-1/6">
                    9 Holes
                  </th>
                  <th className="px-4 py-2 text-center text-sm w-1/6  ">
                    18 Holes
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {rates
                  .filter((f) => f.courseType === courseType)
                  .map((rate, i) => (
                    <tr key={i} className="border border-gray-200 my-5">
                      <th className="bg-gray-50 pl-4 py-4 font-medium text-gray-900 text-left  text-sm w-1/2 whitespace-nowrap">
                        {rate.category}
                      </th>
                      <td className="px-4 text-center text-sm  bg-white">
                        {useRateStyle(
                          selectedDay === "Weekdays"
                            ? rate.weekday9h
                            : rate.weekend9h
                        )}
                      </td>
                      <td className="bg-gray-50 px-4 py-4 text-center text-sm ">
                        {useRateStyle(
                          selectedDay === "Weekdays"
                            ? rate.weekday18h
                            : rate.weekend18h
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatesSection;
