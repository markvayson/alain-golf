import { auth } from "@/auth";
import HeroSection from "@/components/landingpage/HeroSection";
import RatesSection from "@/components/landingpage/RatesSection";
import EventsSection from "@/components/landingpage/EventsSection";
import MembershipSection from "@/components/landingpage/MembershipSection";
import { db } from "@/database/drizzle";
import { rates } from "@/database/schema";
import TeamSection from "@/components/landingpage/TeamSection";
import LocationSection from "@/components/landingpage/LocationSection";

const Page = async () => {
  const session = await auth();
  const latestRates = await db.select().from(rates);

  return (
    <>
      <HeroSection session={session} />
      {/* <EventsSection /> */}
      <RatesSection rates={latestRates} />
      <MembershipSection />
      <TeamSection />
      <LocationSection />
    </>
  );
};

export default Page;
