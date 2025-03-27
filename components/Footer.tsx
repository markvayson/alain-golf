import Link from "next/link";
import { Facebook, Instagram, Logo, WhatsApp } from "./Svg";
import { JSX } from "react";

const links = [
  {
    title: "Privacy Policy",
    href: "/policies/privacy-policy",
  },
  {
    title: "Terms & Conditions",
    href: "/policies/terms",
  },
];

interface socialMediaItem {
  title: string;
  link: string;
  icon: JSX.Element;
}

const socialMedia: socialMediaItem[] = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/AESGC",
    icon: <Facebook />,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/aesgc.alain/",
    icon: <Instagram />,
  },
  {
    title: "WhatsApp",
    link: "https://wa.me/971547606710",
    icon: <WhatsApp />,
  },
];

export const Footer = () => {
  return (
    <footer className="pt-16 pb-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className=" flex  items-center justify-center gap-6 text-sm">
          <Link href="/" aria-label="go home" className="">
            <Logo className="w-12 h-8 size-6 relative" />
          </Link>
          {socialMedia.map((web, i) => (
            <Link
              key={i}
              href={web.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={web.title}
              className="text-muted-foreground hover:text-primary block"
            >
              {web.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="my-8 flex flex-wrap justify-center text-sm ">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-muted-foreground hover:text-primary block duration-150 px-4"
          >
            <span>{link.title}</span>
          </Link>
        ))}
      </div>
      <span className="text-muted-foreground block text-center text-sm">
        © {new Date().getFullYear()} All Rights Reserved, AESGC
      </span>
    </footer>
  );
};

export default Footer;
