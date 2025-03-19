"use client";
import { golfButtons, golfClubSections } from "@/app/constants";
import ThemeButton from "./ThemeButton";
import { CarouselContent, CarouselItem, Carousel } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { CheckCheck } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import CourseDivider from "./dividers/CourseDivider";

const Courses = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  return (
    <section className="relative bg-slate-50">
      <div className="flex flex-col md:grid md:grid-cols-2 max-w-5xl mx-auto">
        <div className="flex flex-col gap-2  md:gap-3 max-sm:order-last items-center justify-center  w-full max-sm:pb-12">
          {golfButtons.map((button, i) => (
            <ThemeButton
              key={i}
              {...button}
              className=" w-2/3"
              variant="outline"
            />
          ))}
        </div>
        <Carousel plugins={[plugin.current]}>
          <CarouselContent>
            {golfClubSections.map((item, i) => (
              <CarouselItem key={i}>
                <Card className="border-none">
                  <CardContent className="flex flex-col aspect-square  justify-center gap-10 ">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xl font-bold">{item.title}</h1>
                      <p>{item.description}</p>
                    </div>
                    <div>
                      <ul>
                        {item.checklist?.map((list, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-sm "
                          >
                            <CheckCheck className="size-4 text-blue-700" />

                            {list}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <CourseDivider className="fill-green-200" />
    </section>
  );
};

export default Courses;
