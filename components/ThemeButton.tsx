import Link from "next/link";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { IKImage } from "imagekitio-next";
import config from "@/lib/config";
import RenderImage from "./RenderImage";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import ImageDownload from "./ImageDownload";

const {
  env: {
    imagekit: { urlEndpoint },
  },
} = config;

interface ButtonProps {
  label: string;
  link?: string;
  className?: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  isDialog?: boolean;
  image?: string;
}
const ThemeButton = ({
  label,
  link = "",
  variant = "default",
  className,
  isDialog = false,
  image,
}: ButtonProps) => {
  return (
    <>
      {isDialog ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={variant} className={className}>
              {label}
            </Button>
          </DialogTrigger>
          <DialogContent className="z-100 sm:max-w-md max-h-[95vh] h-full bg-white flex flex-col ">
            <VisuallyHidden>
              <DialogHeader>
                <DialogTitle>{label}</DialogTitle>
              </DialogHeader>
            </VisuallyHidden>

            <RenderImage url={urlEndpoint} alt={label} path={image} />
            <DialogFooter>
              <ImageDownload url={urlEndpoint} name={image} />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ) : (
        <Button asChild variant={variant} className={className}>
          <Link href={link}>{label}</Link>
        </Button>
      )}
    </>
  );
};

export default ThemeButton;
