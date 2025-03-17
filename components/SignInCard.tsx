import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Session } from "next-auth";

const SignInCard = ({ session }: { session: Session | null }) => {
  return (
    <>
      {!session && (
        <Popover defaultOpen={!session}>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent className="sticky top-0 bg-red-300 transition-opacity duration-700 ease-in-out delay-150">
            Place content for the popover here.
          </PopoverContent>
        </Popover>
      )}
    </>
  );
};

export default SignInCard;
