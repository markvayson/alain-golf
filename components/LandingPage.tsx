import { Session } from "next-auth";
import React from "react";
import Hero from "./Hero";
import Membership from "./Membership";
import Contact from "./Contact";
import Team from "./Team";
import Content from "./Content";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Content />
      <Membership />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
