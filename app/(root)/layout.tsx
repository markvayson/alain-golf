import { auth } from "@/auth";
import Header from "@/components/headerold";
import React, { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  return <main className="">{children}</main>;
};

export default Layout;
