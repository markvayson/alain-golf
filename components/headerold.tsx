"use client";
import { cn, getInitials } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Session } from "next-auth";

const Header = ({ session }: { session: Session | null }) => {
  const pathname = usePathname();

  return (
    <header className="flex items-center w-full max-w-sm  justify-between p-2 gap-5  bg-white shadow-xs z-50 ">
      <h1>Hello, {session?.user?.name?.split(" ")[0]}</h1>
      <Link href="/">
        <Image src="/icons/logo.png" alt="logo" width={50} height={50} />
      </Link>
    </header>
  );
};

export default Header;
