"use client";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), { ssr: false });

const LocationSection = () => {
  return (
    <section id="location" className="py-16 md:py-32 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold sm:text-4xl mb-6">
          Visit Our Golf Course
        </h1>
        <p className="text-gray-700 mb-6">
          Find us on the map below and plan your visit. Click on the pin for
          more details!
        </p>
        <Map />
      </div>
    </section>
  );
};

export default LocationSection;
