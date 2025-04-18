import { clsx, type ClassValue } from "clsx";
import { format, isSameMonth, parseISO } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string): string =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

export const useRateStyle = (
  selectedDay: string,
  rate: Rate,
  holes: number
) => {
  if (!rate) return;
  let r;
  if (selectedDay === "Weekdays") {
    r = holes === 9 ? rate.weekday9h : rate.weekday18h;
  } else r = holes === 9 ? rate.weekend9h : rate.weekend18h;

  if (r === 0) return "Free";

  return `AED ${r.toFixed(2)}`;
};

export const setMembership = (
  memberships: MembershipCategory[],
  category: string,
  isCouple: boolean
) => {
  const membership = memberships.find(
    (membership) => membership.category === category
  );

  const price = membership?.options
    .filter((option) =>
      isCouple
        ? option.title.includes("Couple")
        : option.title.includes("Single")
    )
    .map((option) => option.pricing?.full_year);

  const benefits = membership?.options
    .filter((option) =>
      isCouple
        ? option.title.includes("Couple")
        : option.title.includes("Single")
    )
    .map((option) => option.pricing?.full_year);

  return {
    category: membership?.category,
    benefits: membership?.benefits,
    price: price,
  };
};

export const getCurrentDate = () => {
  const currentDate = new Date();
  return currentDate
    .toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "");
};

export const formatEventDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = format(date, "dd");
  const month = format(date, "MMM");
  const time = format(date, "HH:mm");

  return { day, month, time };
};

export const eventCalendar = (
  events: EventType[],
  month: Date
): Map<string, { color: string; name: string; time: string }[]> => {
  const filteredEvents: EventType[] = events.filter((event) =>
    isSameMonth(parseISO(event.date), month)
  );

  const eventMap = new Map<string, { color: string; name: string; time: string }[]>();

  filteredEvents.forEach((event) => {
    const eventDate = parseISO(event.date);
    const date = format(eventDate, "yyyy-MMdd");
    const time = format(eventDate, "HH:mm");
    if (!eventMap.has(date)) {
      eventMap.set(date, []);
    }
    eventMap.get(date)?.push({ color: event.color, name: event.name, time: time });
  });

  return eventMap;
};
