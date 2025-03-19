import config from "@/lib/config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const filename = req.nextUrl.searchParams.get("filename");

  if (!filename)
    return NextResponse.json(
      { error: "Filename is required" },
      { status: 400 }
    );

  const encodedFilename = encodeURIComponent(filename);
  const imageUrl = `${config.env.imagekit.urlEndpoint}/${encodedFilename}`;

  try {
    // Fetch the image headers to get content type
    const headResponse = await fetch(imageUrl, { method: "HEAD" });

    if (!headResponse.ok) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    // Extract content-type (e.g., image/jpeg, image/png)
    const contentType =
      headResponse.headers.get("content-type") || "image/jpeg";
    const extension = contentType.split("/")[1]; // Get 'jpeg' from 'image/jpeg'

    // Fetch the actual image
    const imageResponse = await fetch(imageUrl);
    const buffer = await imageResponse.arrayBuffer();

    return new NextResponse(Buffer.from(buffer), {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${filename}.${extension}"`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: 500 }
    );
  }
}
