// src/app/contactus/page.tsx

import React from "react";
import ContactUS from "@/components/ContactUs";
import Footer from "@/components/Footer";

const ContactUs = () => {
  return (
    <main>
      <div className="flex flex-col">
        <ContactUS />
        <Footer />
      </div>
    </main>
  );
};

export default ContactUs;
