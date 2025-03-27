"use client";

import config from "@/lib/config";
import { IKImage } from "imagekitio-next";
const Image = () => {
  <IKImage
    urlEndpoint={config.env.imagekit.urlEndpoint}
    path={path}
    width={400}
    height={400}
    alt={alt}
  />;
};

export default Image;
