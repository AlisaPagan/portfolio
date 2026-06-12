"use client";

import dynamic from "next/dynamic";
import ToasterProvider from "@/components/UI/ToasterProvider/Toaster";

const ContactForm = dynamic(() => import("./ContactForm"), {
  ssr: false,
});

function ContactFormClient() {
  return (
    <>
      <ToasterProvider />
      <ContactForm />
    </>
  );
}

export default ContactFormClient;
