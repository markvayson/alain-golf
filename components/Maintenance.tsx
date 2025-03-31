import { Pickaxe } from "lucide-react";
import React from "react";

const Maintenance = () => {
  return (
    <section className="flex items-center gap-2 overflow-hidden justify-center w-full h-screen">
      <h1 className="text-2xl md:text-5xl">Under Maintenance</h1>
      <Pickaxe className="w-24 h-24" />
    </section>
  );
};

export default Maintenance;
