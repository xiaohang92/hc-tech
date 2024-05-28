// src/app/product/page.tsx
import React, { Suspense } from "react";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductSection />
      </Suspense>
      <Footer />
    </div>
  );
}
