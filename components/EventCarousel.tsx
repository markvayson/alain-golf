import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";

const EventCarousel = () => {
  return (
    <Carousel className="relative  px-5">
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 ">
            <div className="">
              <Card>
                <CardContent className="flex flex-col border-none items-center justify-center">
                  <p>Hello</p>
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div></div>
    </Carousel>
  );
};

export default EventCarousel;
