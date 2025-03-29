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
import { Download } from "lucide-react";
import DownloadButton from "./DownloadButton";
import { mobileCourseTypes } from "@/app/constants";
import { CircleSpinner } from "./Svg";
import Link from "next/link";

export const RatesSection = ({ rates }: { rates: Rate[] }) => {
  if (!rates) return;
  const [courseType, setCourseType] = useState<string>(rates[0].courseType);
  const [selectedDay, setselectedDay] = useState<string>("Weekdays");
  const [isLoading, setisLoading] = useState<boolean>(false);
  const courseTypes = Array.from(new Set(rates.map((item) => item.courseType)));

  const handleChange = (value: string, mobile: boolean) => {
    setisLoading(true);
    setTimeout(() => {
      if (mobile) {
        const lastSpaceIndex = value.lastIndexOf(" ");
        const newCourseType = value.substring(0, lastSpaceIndex);
        const newSelectedDay = value.substring(lastSpaceIndex + 1);

        setCourseType(newCourseType);
        setselectedDay(newSelectedDay);
      } else {
        setCourseType(value);
      }
      setisLoading(false);
    }, 150);
  };

  return (
    <section
      id="#rates"
      className="py-16 md:py-32 from-green-300 to-green-500 bg-gradient-to-br select-none relative min-h-screen"
    >
      <div className="mx-auto max-w-5xl px-6 relative">
        <div className="md:grid gap-5 flex flex-col items-center">
          <div className="flex justify-between  items-end gap-5">
            <div className="flex-1">
              <h1 className="text-balance text-4xl font-bold md:text-5xl xl:text-5xl whitespace-nowrap">
                Green Fee Rates
              </h1>
              <p className="mt-4">
                Affordable green fees for golfers of all levels. See our rates
                and book your next round today!
              </p>
            </div>

            <DownloadButton
              label="Save Rates"
              filename="Green Fee Rates"
              className="items-center border hover:bg-gray-100 md:w-30 md:h-10 justify-center bg-white whitespace-nowrap px-3 py-2 cursor-pointer rounded-lg text-sm flex gap-2 hover:bg-dark"
            >
              <Download className="w-6 h-6 md:w-4 md:h-4" />
              <p className="hidden md:block">Save Rates</p>
            </DownloadButton>
          </div>
          {/* mobile */}
          <div className="relative mt-5 md:hidden">
            <Select
              name="courseType"
              onValueChange={(value) => handleChange(value, true)}
            >
              <SelectTrigger className=" w-full  cursor-pointer  bg-gray-100  *:text-black font-bold px-4 py-0 rounded-none">
                <SelectValue placeholder={mobileCourseTypes[0]} />
              </SelectTrigger>
              <SelectContent>
                {mobileCourseTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <table className="table-fixed w-full relative">
              <caption className="caption-bottom text-sm mt-2">
                *All Championship course green fees are applicable for an
                AED10.50 EGF development fee if golfer is not an Emirates Golf
                Federation member
              </caption>
              <thead>
                <tr className="border-b-4 border-x-2 border-double  border-gray-200 bg-gray-100 text-xs ">
                  <th className=" pl-4 py-2 text-left whitespace-nowrap w-2/5  ">
                    Player Type
                  </th>
                  <th className="px-2 py-2 text-center text-xs w-1/6">
                    9 Holes
                  </th>
                  <th className="px-2 py-2 text-center text-xs w-1/6  ">
                    18 Holes
                  </th>
                </tr>
              </thead>
              {isLoading ? (
                <tbody className="bg-white ">
                  <th colSpan={3} className="">
                    <div className="flex justify-center items-center  p-4">
                      <CircleSpinner className="w-8 h-8 " />
                    </div>
                  </th>
                </tbody>
              ) : (
                <tbody className="">
                  {rates
                    .filter((f) => f.courseType === courseType)
                    .map((rate, i) => (
                      <tr
                        key={i}
                        className="border border-gray-200 my-5 bg-white even:bg-gray-100"
                      >
                        <th className=" pl-4 py-2 font-medium text-gray-900 text-left  text-sm w-1/2 whitespace-nowrap">
                          {rate.category}
                        </th>
                        <td className="px-2 text-center text-sm  ">
                          {useRateStyle(selectedDay, rate, 9)}
                        </td>
                        <td className=" px-2 py-2 text-center text-sm ">
                          {useRateStyle(selectedDay, rate, 18)}
                        </td>
                      </tr>
                    ))}
                </tbody>
              )}
            </table>
          </div>
          {/* desktop */}
          <div className="mt-5 hidden md:block">
            <table className="table-fixed w-full">
              <caption className="caption-bottom text-sm mt-2">
                *All Championship course green fees are applicable for an
                AED10.50 EGF development fee if golfer is not an Emirates Golf
                Federation member
              </caption>
              <thead>
                <tr className=" bg-gray-100 text-sm border-t-2  ">
                  <th className="w-2/5  pl-4 py-2 text-left border-x-2">
                    <Select
                      name="courseType"
                      onValueChange={(value) => handleChange(value, false)}
                    >
                      <SelectTrigger className=" text-left focus-visible:ring-0  border-none cursor-pointer *:text-black font-bold p-0 shadow-none hover:bg-gray-200 -ml-2 px-2 text-lg">
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
                  </th>
                  <th colSpan={2} className="border-x-2">
                    Weekdays
                  </th>
                  <th colSpan={2} className="border-x-2">
                    Weekends / Public Holidays
                  </th>
                </tr>
                <tr className="border-t-0 border-b-4  border-double  border-gray-200 bg-gray-100 text-sm ">
                  <th className="pl-4 text-left border-x-2">Player Types</th>
                  <th className="border-x-2">9 holes</th>
                  <th className="border-x-2">18 holes</th>
                  <th className="border-x-2">9 holes</th>
                  <th className="border-x-2">18 holes</th>
                </tr>
              </thead>

              {isLoading ? (
                <tbody className="bg-white">
                  <th colSpan={5} className="border-2 border-gray-200">
                    <div className="flex justify-center items-center  py-24">
                      <CircleSpinner className="w-8 h-8 " />
                    </div>
                  </th>
                </tbody>
              ) : (
                <tbody>
                  {rates
                    .filter((f) => f.courseType === courseType)
                    .map((rate, i) => (
                      <tr
                        key={i}
                        className="border bg-white even:bg-gray-100 border-gray-200 my-5 hover:bg-gray-200 transition-all duration-100"
                      >
                        <th className="border-x-2  pl-4 py-4 font-medium text-gray-900 text-left  text-sm w-1/2 whitespace-nowrap">
                          {rate.category}
                        </th>
                        <td className="border-x-2 px-4 text-center text-sm whitespace-nowrap  ">
                          {useRateStyle("Weekdays", rate, 9)}
                        </td>
                        <td className="border-x-2  px-4 py-4 text-center text-sm whitespace-nowrap ">
                          {useRateStyle("Weekdays", rate, 18)}
                        </td>
                        <td className="border-x-2 px-4 text-center text-sm whitespace-nowrap  ">
                          {useRateStyle("Weekends", rate, 9)}
                        </td>
                        <td className="border-x-2  px-4 py-4 text-center text-sm whitespace-nowrap ">
                          {useRateStyle("Weekends", rate, 18)}
                        </td>
                      </tr>
                    ))}
                </tbody>
              )}
            </table>
          </div>
          <Link
            href="/pricing/membership"
            className="bg-white w-fit place-self-center py-2 px-4 hover:bg-gray-50 rounded-full"
          >
            View Membership Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RatesSection;
