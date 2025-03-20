"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn, getInitials } from "@/lib/utils";
import { Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { signOut } from "@/auth";
import { handleSignOut } from "@/lib/actions/auth";
import SignButton from "./SignButton";
import { Logo } from "./Svg";

const menuItems = [
  { name: "Services", href: "#services" },
  { name: "Membership", href: "#membership" },
  { name: "Team", href: "#team" },
  { name: "Contact Us", href: "#contactus" },
];

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
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3  lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <div className="flex flex-row justify-center gap-5 items-center">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center justify-center order-2"
                >
                  <Logo />
                  <p className="font-medium ">aesgc-golf</p>
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
              <SignButton
                type="SIGN_IN"
                label="Login"
                className="md:hidden text-sm"
              />
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
              {session ? (
                <div className="flex gap-2 justify-between flex-row-reverse md:flex-row ">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>
                      {getInitials(session?.user?.name || "PP")}
                    </AvatarFallback>
                  </Avatar>

                  <form
                    className="mb-10"
                    action={async () => handleSignOut({ redirectTo: "/" })}
                  >
                    <Button
                      variant="ghost"
                      className="p-0 text-base font-normal cursor-pointer hover:underline"
                      size="sm"
                    >
                      Logout
                    </Button>
                  </form>
                </div>
              ) : (
                <div className="hidden md:flex w-full md:flex-row md:w-fit">
                  <SignButton
                    type="SIGN_IN"
                    label={isScrolled ? "Get Started" : "Login"}
                    className="hidden md:block"
                  />
                  <SignButton
                    type="SIGN_UP"
                    label="Sign Up"
                    className={cn(
                      isScrolled
                        ? "hidden!"
                        : "hidden md:block bg-none text-black hover:underline"
                    )}
                  />
                </div>
              )}
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
          <SignButton type="SIGN_IN" label="Book Now!" className="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
