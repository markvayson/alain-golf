import { CheckCheck } from "lucide-react";
import Image from "next/image";
import ContentSectionBackground from "@/public/images/contentsection.jpg";
import ThemeButton from "./ThemeButton";

export const ContentSection = ({
  title,
  description,
  interactions,
  checklist,
  order,
}: SectionProps) => {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h1 className="relative z-10  text-4xl font-medium lg:text-5xl w-full">
          {title}
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className={`${order} relative space-y-4`}>
            <p className="text-base">{description}</p>
            {checklist && (
              <ul className="grid grid-cols-2">
                {checklist.map((list, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm ">
                    <CheckCheck className="size-4" />

                    {list}
                  </li>
                ))}
              </ul>
            )}

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              {interactions.map((action, i) => (
                <ThemeButton
                  key={i}
                  {...action}
                  variant="outline"
                  className="text-xs hover:text-sm cursor-pointer"
                />
              ))}
            </div>
          </div>
          <div className="relative mt-6 sm:mt-0">
            <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/exercice-dark.png"
                className="hidden rounded-[15px] dark:block"
                alt="payments illustration dark"
                width={1206}
                height={612}
              />
              <Image
                src={ContentSectionBackground}
                className="rounded-[15px] shadow dark:hidden"
                alt="payments illustration light"
                width={1206}
                height={612}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
