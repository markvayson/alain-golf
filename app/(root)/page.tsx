import { auth } from "@/auth";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import PricingComparator, { RatesSection } from "@/components/Rates";
import { db } from "@/database/drizzle";
import { rates } from "@/database/schema";
import React from "react";

const Page = async () => {
  const session = await auth();
  const latestRates = await db.select().from(rates);

  return (
    <div>
      <Header session={session} />
      <HeroSection session={session} />
      <RatesSection rates={latestRates} />
      <Footer />
    </div>
  );
};

export default Page;
