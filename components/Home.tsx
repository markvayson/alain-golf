import React from "react";
import { Input } from "./ui/input";
import Activities from "./Activities";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import Search from "./Search";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";

const Home = () => {
  const tabs = ["Events", "Lessons"];

  const coverUrl = "https://placehold.co/400x600/png";
  return (
    <section className="bg-slate-100 w-full">
      <div className="p-5 flex flex-col items-center justify-center gap-5">
        <h1 className="text-2xl font-medium">Check activities around golf</h1>
        <Search />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 px-5 ">
        <h1 className="font-medium text-xl">Activities For You</h1>
        <Tabs
          defaultValue={tabs[0]}
          className="flex flex-col items-center justify-center w-full mb-10"
        >
          <TabsList className="bg-white shadow-xs w-full sticky top-0">
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab}
                className="data-[state=active]:bg-red-300"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={tabs[0]} className="flex flex-col gap-5 w-full">
            <Card className="relative gap-2 pt-4 rounded-md border-slate-200 bg-white shadow-md">
              <CardHeader>
                <CardTitle>Event Title</CardTitle>
                <CardDescription>Event Description</CardDescription>
              </CardHeader>
              <CardContent className="m-0 p-0">
                <div className="h-48 w-full relative">
                  <Image
                    src={coverUrl}
                    alt="event-picture"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-center justify-center">
                <Avatar className="">
                  <AvatarImage src={coverUrl} />
                  <AvatarFallback className="bg-red-300">MV</AvatarFallback>
                </Avatar>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value={tabs[1]}>Change your password here.</TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Home;
