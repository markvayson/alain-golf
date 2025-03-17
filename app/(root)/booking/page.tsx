import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  if (!session) redirect("/sign-in");
  return <div className="bg-red-300">Booking</div>;
};

export default page;
