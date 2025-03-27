import { BookingCTA } from "@/components/BookingCTA";
import { redirect } from "next/navigation";
import React from "react";

const BookingPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ date?: string }>;
}) => {
  const today = new Date();
  const todayFormatted = `${String(today.getDate()).padStart(2, "0")}${String(today.getMonth() + 1).padStart(2, "0")}${today.getFullYear()}`;

  const { date } = await searchParams;
  if (!date || date < todayFormatted) {
    redirect(`/booking?date=${todayFormatted}`);
  }

  return (
    <div>
      <BookingCTA />
    </div>
  );
};

export default BookingPage;
