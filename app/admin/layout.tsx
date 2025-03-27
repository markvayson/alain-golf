import { auth } from "@/auth";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const Layout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ date: string }>;
}) => {
  const session = await auth();
  if (!session?.user?.id) redirect("/sign-in");
  return (
    <SidebarProvider>
      <AppSidebar session={session} />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
