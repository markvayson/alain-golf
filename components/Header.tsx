"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn, getInitials } from "@/lib/utils";
import { Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { handleSignOut } from "@/lib/actions/auth";
import { Logo } from "./Svg";
import Logout from "./Logout";
import Image from "next/image";
import logo from "@/public/logo.png";
import { menuItems } from "@/app/constants";

export const Header = ({ session }: { session: Session | null }) => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 min-w-[100vw]"
      >
        <div
          className={cn(
            "md:mx-auto  mt-2 mx-2 md:max-w-[100vw] max-w-2xl px-6 transition-all border-black/10 duration-300 lg:px-12 ",
            isScrolled &&
              "bg-white/70  md:max-w-4xl! rounded-2xl border-b   border-black/10! backdrop-blur-sm   lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6   lg:gap-0 ">
            <div className="flex w-full justify-between lg:w-auto">
              <div className="flex flex-row justify-center gap-5 items-center">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center justify-center order-2"
                >
                  <Image
                    src={logo}
                    alt="logo"
                    width={40}
                    height={40}
                    priority
                    className="w-auto h-auto"
                  />
                </Link>

                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden order-1"
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>
              <Link
                href={session ? "/admin" : "/sign-in"}
                className="text-sm gradient-btn md:hidden px-5 py-3 rounded-lg"
              >
                {session ? "Member Zone" : "Log In"}
              </Link>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-base">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground rounded-md hover:bg-black/5 px-5 py-3 hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-black/20 in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl  md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuState(!menuState)}
                        className=" text-black  hover:text-accent-foreground  block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden md:flex w-full text-sm items-center md:flex-row md:w-fit gap-5">
                <Link
                  href={session ? "/admin" : "/sign-in"}
                  className="text-sm gradient-btn md:hidden px-5 py-2 rounded-lg"
                >
                  {session ? "Member Zone" : "Log In"}
                </Link>
                <Link
                  href={session ? "/admin" : "/sign-in"}
                  className=" gradient-btn py-4 px-4 rounded-lg"
                >
                  {session
                    ? "Member Zone"
                    : isScrolled
                      ? "Get Started"
                      : "Log in"}
                </Link>
                {!isScrolled && !session ? (
                  <Link href="/sign-up" className="py-4 px-4 ">
                    Sign up
                  </Link>
                ) : session ? (
                  <Logout />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav
        className={`fixed bottom-0 min-w-[100vw] z-20 transition-all duration-300 ease-in-out 
          ${isScrolled ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
        `}
      >
        <div className="flex justify-around bg-white px-2 py-4  items-center ">
          <h1>Tee times are limited.</h1>
          <Link
            href="/sign-in"
            className="gradient-btn px-4 md:px-5 py-3 md:py-4 rounded-lg text-sm md:text-base"
          >
            Book Now!
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
