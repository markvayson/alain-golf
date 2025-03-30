
import CompareSection from "@/components/Compare";
import Faqs from "@/components/Faqs";
import MembershipPricing from "@/components/membership/Membership";
import React from "react";

const MembershipPage = () => {
  return (
    <>
      <MembershipPricing />
      <CompareSection />
      <Faqs />
    </>
  );
};

export default MembershipPage;
