// src/app/contactus/page.tsx

import React from "react";
import ContactUS from "@/components/ContactUs";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";

const ContactUs = () => {
  return (
    <main>
      <div className="flex flex-col">
        <ContactUS />
        <GoogleMap />
        <Footer />
      </div>
    </main>
  );
};

export default ContactUs;
