import { signOut } from "@/auth";
import { handleSignOut } from "@/lib/actions/auth";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";

const Logout = () => {
  return (
    <form action={() => handleSignOut({ redirectTo: "/" })}>
      <Button
        variant="ghost"
        type="submit"
        className="flex gap-2 hover:bg-black/10 items-center"
      >
        <LogOut /> Logout
      </Button>
    </form>
  );
};

export default Logout;
