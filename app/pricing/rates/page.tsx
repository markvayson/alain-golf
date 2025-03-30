import RatesSection from "@/components/membership/Rates";
import { db } from "@/database/drizzle";
import { rates } from "@/database/schema";
import React from "react";

const RatesPage = async () => {
  const latestRates = await db.select().from(rates);
  return (
    <main className="relative">
      <RatesSection rates={latestRates} />
    </main>
  );
};

export default RatesPage;
