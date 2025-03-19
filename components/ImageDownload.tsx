"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ImageDownload = ({
  url,
  name = "download.jpg",
}: {
  url: string;
  name?: string;
}) => {
  const router = useRouter();
  const handleDownload = () => {
    const encodedFilename = encodeURIComponent(name);
    const downloadUrl = `/api/download?filename=${encodedFilename}`;

    router.push(downloadUrl);
  };

  return <button onClick={handleDownload}>Download Image</button>;
};

export default ImageDownload;
