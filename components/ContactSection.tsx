"use client";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import ThemeButton from "./ThemeButton";
import HeroDivider from "./dividers/HeroDivider";
import { TextShimmer } from "./motion-primitives/text-shimmer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Dialog } from "./ui/dialog";
import SignButton from "./SignButton";
import { Card } from "./ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactSchema } from "@/lib/validations";
import ContactForm from "./ContactForm";

export const ContactSection = () => {
  return (
    <>
      <section id="contactus" className="py-16 md:py-32">
        <h1 className="text-5xl text-center">Contact Us</h1>
        <div className="flex flex-row items-center justify-center mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <div className=" w-full h-full">
            <ContactForm
              schema={contactSchema}
              defaultValues={{
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                comment: "",
              }}
            />
          </div>
          <div className="w-full h-full bg-green-300">Find Us</div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
