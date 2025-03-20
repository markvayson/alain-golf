"use client";

import { signInSchema, signUpSchema } from "@/lib/validations";
import AuthForm from "./AuthForm";
import { Logo } from "./Svg";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { FIELD_NAMES } from "@/app/constants";
import { signUp, signInWithCredentials } from "@/lib/actions/auth";

const SignButton = ({
  label,
  className,
  type,
}: {
  label: string;
  className: string;
  type: "SIGN_IN" | "SIGN_UP";
}) => {
  const triggerClass = `${className} gradient-btn px-5 py-2 rounded-md`;
  const contentClass =
    "shadow-none flex flex-col rounded-2xl border-none px-5 md:px-10 outline-none ";
  const titleClass = "text-2xl space-y-3";

  const schema = type === "SIGN_IN" ? signInSchema : signUpSchema;
  const defaultValues = {
    email: "",
    password: "",
    ...(type === "SIGN_UP" && { fullName: "", ghinNumber: 0 }),
  };

  return (
    <>
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger className={triggerClass}>{label}</DrawerTrigger>
          <DrawerContent className={`${contentClass} bg-white`}>
            <DrawerHeader>
              <DrawerTitle className={titleClass}>
                <Logo />
                <span>Login or Sign Up</span>
              </DrawerTitle>
              <DrawerDescription className="pb-5">
                Use your email or another service to continue
              </DrawerDescription>
            </DrawerHeader>

            <div className="grid gap-3">
              <AuthForm
                type={type}
                schema={schema}
                defaultValues={defaultValues}
                onSubmit={signInWithCredentials}
              />
              <DialogFooter>
                <p className="text-sm">
                  By continuing, you agree to the Terms of Use. Read our Privacy
                  Policy.
                </p>
              </DialogFooter>
            </div>
            <DrawerFooter>
              <DrawerClose></DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="hidden md:block">
        <Dialog>
          <DialogTrigger
            className={`${className} gradient-btn px-5 py-2 rounded-md`}
          >
            {label}
          </DialogTrigger>
          <DialogContent className="shadow-none flex flex-col rounded-2xl border-none px-10 outline-none ">
            <div className="bg-white p-5 rounded-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl space-y-3">
                  <Logo />
                  <span>Login or Sign Up</span>
                </DialogTitle>
                <DialogDescription className="pb-5">
                  Use your email or another service to continue
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-3">
                <AuthForm
                  type={type}
                  schema={schema}
                  defaultValues={defaultValues}
                  onSubmit={signInWithCredentials}
                />
                <DialogFooter>
                  <p className="text-sm">
                    By continuing, you agree to the Terms of Use. Read our
                    Privacy Policy.
                  </p>
                </DialogFooter>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default SignButton;
