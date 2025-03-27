"use client";
import { useState } from "react";
import { useRateStyle} from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { CloudDownload, Download } from "lucide-react";

export const PricingSection = ({ rates }: { rates: Rate[] }) => {
  const [courseType, setCourseType] = useState<string>(rates[0].courseType);
  const [selectedDay, setSelectedDay] = useState<string>('Weekdays');
  const courseTypes = Array.from(new Set(rates.map((item) => item.courseType)));
  const rateDays = ['Weekdays', 'Weekends', 'Public Holidays']



  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className='flex flex-row justify-between items-start'>
        <div className=''><h1 className="text-balance text-4xl font-bold md:text-5xl xl:text-5xl">
                
                Green Fee Rates
               
           </h1>   <p className="mt-4">
           Affordable green fees for golfers of all levels. See our rates and book your next round today!
              </p></div>
          <button className='border ml-2 px-5 py-4 cursor-pointer rounded-lg flex gap-2 hover:bg-dark'><CloudDownload /> PDF</button>
        </div>
        <div className='relative mt-5'>
          <table className=' table-fixed'>
            <caption className="grid grid-cols-2 gap-2 w-full font-bold">
            <Select onValueChange={setCourseType} >
  <SelectTrigger className="text-left border-none placeholder:text-black w-full shadow-none hover:bg-background/50 outline-none" >
    <SelectValue placeholder={courseType}  />
  </SelectTrigger>
  <SelectContent >
    {courseTypes.map((type ) => <SelectItem key={type} value={type}>{type}</SelectItem>)}
  </SelectContent>
</Select>
<Select onValueChange={setSelectedDay}>
  <SelectTrigger className="text-center border-none w-full shadow-none hover:bg-background/50 outline-none" >
    <SelectValue placeholder='Weekdays'  />
  </SelectTrigger>
  <SelectContent >
    {rateDays.map((day,i) => <SelectItem key={i} value={day}>{day}</SelectItem>)}
   </SelectContent>
</Select>
            </caption>
           
            <caption className="caption-bottom text-sm mt-2">*All Championship course green fees are applicable for an AED10.50 EGF development fee if golfer is not an Emirates Golf Federation member</caption>
            <thead>
              <tr className="border border-gray-200 bg-gray-200">
                <th className="  px-4 py-3 text-left whitespace-nowrap">Player Types</th>
                <th className="px-4 py-3 text-center text-sm">9 Holes</th>
                <th className="px-4 py-3  text-center text-sm ">18 Holes</th>
              </tr>
            </thead>
            <tbody className="space-y-5 w-full">
              {rates.filter((f) => f.courseType === courseType).map((rate, i) => (
                <tr key={i} className="border border-gray-200 my-5">
                  <td className="bg-gray-100 px-4 py-4 font-medium text-gray-900  text-sm w-full">{rate.category}</td>
                  <td className="px-4 text-left text-sm whitespace-nowrap">
                 { useRateStyle(selectedDay === 'Weekdays' ? rate.weekday9h : rate.weekend9h)}
                  </td>
                  <td className="bg-gray-100 px-4 py-4 text-left text-sm whitespace-nowrap">
                  { useRateStyle(selectedDay === 'Weekdays' ? rate.weekday18h : rate.weekend18h)}
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
