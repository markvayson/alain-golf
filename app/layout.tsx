import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { after } from "next/server";

export const metadata: Metadata = {
  title: "AESGC Golf Club",
  description:
    "18-hole course, top-notch facilities, and a welcoming atmosphere for golfers of all skill levels.",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  after(async () => {
    if (!session?.user?.id) return;

    const user = await db
      .select()
      .from(users)
      .where(eq(users.id, session?.user?.id))
      .limit(1);
    if (user[0].lastActivityDate === new Date().toISOString().slice(0, 10))
      return;

    await db
      .update(users)
      .set({ lastActivityDate: new Date().toISOString().slice(0, 10) })
      .where(eq(users.id, session?.user?.id));
  });
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body>
          <Header session={session} />
          {children}
          <Footer />
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
