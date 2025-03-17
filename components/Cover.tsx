import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type CoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<CoverVariant, string> = {
  extraSmall: "cover_extra_small",
  small: "cover_small",
  medium: "cover_medium",
  regular: "cover_regular",
  wide: "cover_wide",
};

interface Props {
  className?: string;
  variant?: CoverVariant;
  coverUrl?: string;
}

const Cover = ({
  className,
  variant = "regular",
  coverUrl = "https://placehold.co/400x600/png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      <div className="absolute z-10" style={{ width: "87.5%", height: "88%" }}>
        <Image
          src={coverUrl}
          alt="Rate"
          fill
          className="rounded-sm object-fill"
        />
      </div>
    </div>
  );
};

export default Cover;
