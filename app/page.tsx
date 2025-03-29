import { auth } from "@/auth";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import RatesSection from "@/components/Rates";
import VisitorComparison from "@/components/VisitorComparison";
import { db } from "@/database/drizzle";
import { rates } from "@/database/schema";
import React, { Suspense } from "react";

const Page = async () => {
  const session = await auth();
  const latestRates = await db.select().from(rates);

  return (
    <>
      <HeroSection session={session} />
      <RatesSection rates={latestRates} />
      <VisitorComparison />
    </>
  );
};

export default Page;
