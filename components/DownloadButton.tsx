"use client";
import React, { ReactNode, useState } from "react";
import { CircleSpinner } from "./Svg";

const DownloadButton = ({
  filename,
  children,
  className,
  label,
}: {
  filename: string;
  children: ReactNode;
  className?: string;
  label: string;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleDownload = async () => {
    if (!filename) return;
    setLoading(true);

    try {
      const response = await fetch(
        `api/download?filename=${encodeURIComponent(filename)}`
      );

      if (!response.ok) throw new Error("Failed to download image");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download Failed:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <button onClick={handleDownload} disabled={loading} className={className}>
      {loading ? (
        <CircleSpinner className="text-gray-300 animate-spin w-6 h-6" />
      ) : (
        children
      )}
    </button>
  );
};

export default DownloadButton;
