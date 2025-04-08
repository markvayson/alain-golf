import { Logo } from "@/components/Svg";
import Link from "next/link";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen bg-zinc-50 px-4  md:py-32 dark:bg-transparent">
      <div className="max-w-92 m-auto h-fit w-full ">
        <div className="p-6">
          <Link href="/" aria-label="go home" className=" space-y-2 ">
            
            <h1 className="text-4xl font-medium">Al Ain Golf Club</h1>
          </Link>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
