import { auth } from "@/auth";
import CompareSection from "@/components/Compare";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MembershipPricing from "@/components/Membership";
import React from "react";

const MembershipPage = async () => {
  const session = await auth();
  return (
    <>
      <Header session={session} />
      <MembershipPricing />
      <CompareSection />
      <Faqs />
      <Footer />
    </>
  );
};

export default MembershipPage;
