// src/app/LearnMore/page.tsx

import React from "react";
import LearnMoreSection from "@/components/LearnMoreSection";
import Footer from "@/components/Footer";

const LearnMore = () => {
  return (
    <main>
      <div className="flex flex-col">
        <LearnMoreSection />
        <Footer />
      </div>
    </main>
  );
};

export default LearnMore;
