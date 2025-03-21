import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { auth } from "@/auth";
import LandingPage from "@/components/LandingPage";
import Header from "@/components/Header";

const Page = async () => {
  const result = await db.select().from(users);
  const session = await auth();
  return (
    <>
      <Header session={session} />
      <LandingPage />
    </>
  );
};

export default Page;
