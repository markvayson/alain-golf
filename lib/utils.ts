import { clsx, type ClassValue } from "clsx";
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
