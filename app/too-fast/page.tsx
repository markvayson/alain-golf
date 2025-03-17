import React from "react";

const page = () => {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-center bg-black">
      <h1 className="font-bebas-neue text-5xl font-bold text-center text-light-100">
        Whoa, Slow Down There, Speedy!
      </h1>
      <p className="mt-3 max-w-xl text-center text-light-400">
        Looks like you&apos;ve been a little too eager. We&apos;ve put temporary
        pause on your excitement. Chill for a bit, and try again shortly
      </p>
    </main>
  );
};

export default page;
