import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React from "react";

const Page = () => {
  return (
    <>
      <form
        className="mb-10"
        action={async () => {
          "use server";

          await signOut({ redirectTo: "/" });
        }}
      >
        <Button>Logout</Button>
      </form>
    </>
  );
};

export default Page;
