"use client";

import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("./ContactForm"), {
  ssr: false,
});

function ContactFormClient() {
  return (
    <>
      <ContactForm />
    </>
  );
}

export default ContactFormClient;
