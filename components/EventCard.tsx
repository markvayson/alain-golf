import Link from "next/link";
import React from "react";
import Cover from "./Cover";
import Image from "next/image";
import { cn } from "@/lib/utils";

const EventCard = ({
  id,
  name,
  type,
  mode,
  description,
  status,
  date,
  holes,
  image,
  hasJoined,
}: EventType) => (
  <li className={cn(hasJoined && "sm:w-44 w-full")}>
    <Link
      href={`/events/${id}`}
      className={cn(hasJoined && "w-full flex flex-col items-center")}
    >
      <Cover className="left-2" />
      <div className={cn(!hasJoined && "sm:max-w-40 max-w-28")}>
        <p className="event-name">{name}</p>
        <p
          className={
            status === "ongoing"
              ? "text-primary"
              : status === "completed"
                ? "text-red-600"
                : "text-blue-600"
          }
        >
          {status}
        </p>
      </div>

      {hasJoined && (
        <div className="mt-3 w-full">
          <div className="event-joined">
            <Image
              src="/icons/calendar.svg"
              alt="calendar"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-light-100">11 days to go</p>
          </div>
        </div>
      )}
    </Link>
  </li>
);

export default EventCard;
