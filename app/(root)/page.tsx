import { auth } from "@/auth";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import PricingComparator from "@/components/pricing-comparator";
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
      <PricingComparator rates={latestRates} />
      <Footer />
    </div>
  );
};

export default Page;
