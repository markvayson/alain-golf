"use client";
import { ScrollArea } from "../ui/scroll-area";
import events from "@/app/constants/data/events";
import { Separator } from "../ui/separator";
import { cn, eventCalendar, formatEventDate } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { Session } from "next-auth";
import Link from "next/link";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import { format, parseISO } from "date-fns";

import background from "@/public/background.jpg";
import Image from "next/image";
import { Clock, Gamepad, Gamepad2, LandPlot, MapPin } from "lucide-react";

export const EventsSection = ({
  data,
  session,
}: {
  data?: EventType[];
  session: Session | null;
}) => {
  data = events;

  const [month, setMonth] = useState(new Date());

  return (
    <section id="events" className="md:pt-16">
      <div className="w-full pb-5  flex px-4 flex-col gap-5 md:gap-0 md:grid grid-cols-3 max-w-5xl mx-auto">
        <ScrollArea className="col-span-2 md:pr-6 h-86 w-full relative">
          {/* event tab - see all upcoming events*/}
          <div className="z-20 bg-white shadow-xs border-b-1 sticky top-0 flex justify-between ">
            <h1 className="text-2xl font-bold mb-1">Upcoming Events</h1>
            <Link
              href="/"
              className="hover:underline text-sm whitespace-nowrap md:text-base place-self-center"
            >
              view completed events
            </Link>
          </div>
          {data.map((event, i) => (
            <div key={i} className="flex flex-col w-full">
              <div className="flex gap-4 py-4 pr-4 hover:bg-gray-50 ">
                <div className="flex flex-col items-center">
                  <h2 className="font-medium text-red-500">
                    {formatEventDate(event.date).month}
                  </h2>
                  <h3 className="text-2xl -mt-2">
                    {formatEventDate(event.date).day}
                  </h3>
                </div>
                <div className="flex-1 flex flex-row">
                <div className='flex flex-col w-24 items-start text-sm justify-around'>
                  {/* time */}
                  <div className='flex flex-row items-center justify-center gap-2 pr-2'>
                  <Clock size='16'/> 
                  {event.method === 'shotgun' ? formatEventDate(event.date).time : 'All Day'}
                 
                  </div> 
                   {/* type / method  */}
                   <div className='flex flex-row items-center justify-center gap-2 pr-2'>
                    <Gamepad2 size='16' />
                    {event.method}
                     </div>
                  {/* course */} 
                  <div className='flex flex-row items-center justify-center gap-2 pr-2'>
                  <LandPlot size='16'/> 
                  {event.holes}  
                  </div> 
                  
                </div>
                <Separator orientation='vertical' />
                  <div className="flex-1 pl-4">
                    <h2 className="text-md font-semibold">{event.name}</h2>
                    <div className="flex flex-col text-sm text-gray-500">
                      <span>{event.format}</span>
                      <span>{event.course}</span>
                      <div>{/* the event prices */}</div>
                    </div>
                  </div>
                  <div>
                    {/* icons for share, download */}
                    <Button
                      className="text-xs cursor-pointer"
                      disabled={!event.visitorsCanJoin && !session}
                    >
                      {event.visitorsCanJoin ? "Join Now" : "Members Only"}
                    </Button>
                  </div>
                </div>
              </div>
              <Separator />
            </div>
          ))}
        </ScrollArea>


        {/* calendar */}
        <div className="relative mx-auto max-w-5xl h-full  w-full  shadow-lg border rounded-xl p-2">
          <Image
            src={background}
            alt="background"
            fill
            className="-z-10 object-cover opacity-20"
          />
          <Calendar
            mode="single"
            month={month}
            onMonthChange={setMonth}
            toMonth={new Date()}
            disabled={(date: Date) => {
              const dateKey = format(date, "yyyy-MM-dd");
              return !eventCalendar(events, month).has(dateKey);
            }}
            modifiers={{
              eventDay: Array.from(eventCalendar(events, month).keys()).map(
                (dateStr) => parseISO(dateStr)
              ),
            }}
            modifiersClassNames={{
              eventDay:
                "bg-gradient-to-br  from-green-300 to-green-400 font-medium!  shadow-md hover:bg-green-500",
            }}
            className="md:p-0 p-5"
            classNames={{
              head_row: "grid grid-flow-col auto-cols-auto gap-2",
              head_cell: "w-auto ",
              row: "grid grid-cols-7 mt-2",

              //   months: "flex flex-col sm:flex-row gap-2",
              month: "flex flex-col gap-4 w-full h-full",
              //   caption: "flex justify-center pt-1 relative items-center w-full",
              caption_label: "text-lg font-medium",
              nav: "flex items-center gap-1 cursor-pointer",
              nav_button: cn(
                buttonVariants({ variant: "outline" }),
                "size-7 bg-transparent p-0 cursor-pointer opacity-50 hover:opacity-100"
              ),

              day: cn(
                buttonVariants({ variant: "ghost" }),
                "size-10 md:size-12 p-0 font-normal text-lg md:text-base text-shadow-lg cursor-pointer aria-selected:opacity-100"
              ),
              day_today: "",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
