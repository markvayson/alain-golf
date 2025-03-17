import { transitionVariants } from "@/app/constants/transitions";
import React from "react";
import { AnimatedGroup } from "./motion-primitives/animated-group";
import { Button } from "./ui/button";
import Link from "next/link";

const ThemeButton = ({
  className,
  text,
  link,
}: {
  className?: string;
  text: string;
  link: string;
}) => {
  return (
    <AnimatedGroup
      variants={{
        container: {
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.75,
            },
          },
        },
        ...transitionVariants,
      }}
      className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
    >
      <div
        key={1}
        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
      >
        <Button
          asChild
          size="lg"
          className={`${className} rounded-xl px-5 text-base`}
        >
          <Link href={link}>
            <span className="text-nowrap">{text}</span>
          </Link>
        </Button>
      </div>
    </AnimatedGroup>
  );
};

export default ThemeButton;
