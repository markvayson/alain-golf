"use server";
import config from "../config";

export const getImage = async (path: string) => {
  const imageUrl = `${config.env.imagekit.urlEndpoint}/${encodeURIComponent(path)}.jpg`;

  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = path.includes(".") ? path : "downloaded-image.jpg"; // Ensure file extension
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Failed to download image:", error);
  }
};
