import React from "react";
import Hero from "./Hero";
import { golfClubSections } from "@/app/constants";
import ContentSection from "./ContentSection";
import Courses from "./Courses";
import Divider from "./Divider";
import Membership from "./Membership";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Courses />
      <Membership />
      <Footer />
    </>
  );
};

export default LandingPage;
