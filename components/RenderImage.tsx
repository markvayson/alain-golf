"use client";

import config from "@/lib/config";
import { IKImage } from "imagekitio-next";

const RenderImage = ({
  url,
  alt,
  path = "",
}: {
  url: string;
  alt: string;
  path?: string;
}) => {
  return (
    <div className=" w-full h-full relative">
      <IKImage
        urlEndpoint={url}
        alt={alt}
        path={path}
        fill
        className="object-contain"
      />
    </div>
  );
};

export default RenderImage;
