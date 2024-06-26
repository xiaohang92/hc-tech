"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import eCommerce from "/public/e-commerce.jpg";
import PopUpAlert from "./PopUpAlert"; // Adjust the import path if necessary
import ErrorAlert from "./ErrorAlert"; // Adjust the import path if necessary

export default function ProductSection() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [clientName, setClientName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const searchParams = useSearchParams();
  const name = searchParams?.get("name") || "Landing Page Development";
  const status = searchParams?.get("status") || "";

  let priceId = "";
  let description = "";
  let price = 0;
  let features: string[] = [];
  let technologyStack = "";
  let deliveryTime = "";

  if (name === "Landing Page Development") {
    priceId = "price_1PLJg007J704FKDMQT1ixmCG";
    description = "Perfect for businesses needing a high-quality landing page.";
    price = 1000;
    features = [
      "Custom design",
      "Responsive layout",
      "SEO optimized",
      "Ongoing support",
    ];
    technologyStack = "HTML, CSS, JavaScript";
    deliveryTime = "1-2 weeks";
  }

  if (name === "Full Website Development") {
    priceId = "price_1PKHPY07J704FKDMrTOyJuQF";
    description = "Ideal for businesses needing a comprehensive web solution.";
    price = 3000;
    features = [
      "Custom design and development",
      "Backend integration",
      "SEO optimized",
      "1 year of support",
    ];
    technologyStack = "PHP, MySQL, Next.js";
    deliveryTime = "2-4 weeks";
  }

  if (name === "WordPress Development") {
    priceId = "price_1PLJjG07J704FKDMAUVZrRBb";
    description = "Best for customizable and easy-to-manage website.";
    price = 1000;
    features = [
      "Custom theme development",
      "Plugin setup and customization",
      "SEO optimized",
      "3 months of support",
    ];
    technologyStack = "WordPress, PHP";
    deliveryTime = "1-3 weeks";
  }

  useEffect(() => {
    if (status === "success") {
      setAlertVisible(true);
    } else if (status === "cancel") {
      setErrorMessage("Payment was cancelled. Please try again.");
      setErrorVisible(true);
    }
  }, [status]);

  const handleCloseAlert = () => {
    setAlertVisible(false);
  };

  const handleCloseError = () => {
    setErrorVisible(false);
  };

  const clientNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientName(e.target.value);
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobileNumber(e.target.value);
  };

  return (
    <div className="min-h-screen w-full py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:gap-5">
        <div className="w-full lg:w-1/2 h-full mb-6 lg:mb-0 flex lg:flex-grow">
          <Image
            src={eCommerce}
            alt="Web Development Services"
            sizes="(max-width: 1024px) 100vw, 50vw"
            width={768}
            height={512}
            className="object-contain rounded-md"
            priority
          />
        </div>

        <div className="w-full h-full bg-white p-6 rounded-md shadow-md flex ">
          <div className="flex flex-col justify-between">
            <form action="/api/checkout-sessions" method="POST">
              <input type="hidden" name="priceId" value={priceId} />
              <input type="hidden" name="name" value={name} />
              <div>
                <h1 className="text-3xl font-bold mb-4">{name}</h1>
                <p className="text-lg mb-2">
                  <strong>Service:</strong> {description}
                </p>
                <p className="text-lg mb-2">
                  <strong>Technology Stack:</strong> {technologyStack}
                </p>
                <p className="text-lg mb-2">
                  <strong>Features:</strong>
                </p>
                <ul className="list-disc list-inside text-lg mb-4">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p className="text-lg mb-2">
                  <strong>Delivery Time:</strong> {deliveryTime}
                </p>
                <p className="text-lg mb-4">
                  <strong>Pricing:</strong> ${price}
                </p>
                <div className="mb-4">
                  <label
                    htmlFor="clientName"
                    className="block text-lg font-medium text-gray-700">
                    Client Number
                  </label>
                  <input
                    type="tel"
                    id="clientName"
                    name="clientName"
                    value={clientName}
                    onChange={clientNameChange}
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                  <label
                    htmlFor="mobile"
                    className="block text-lg font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={mobileNumber}
                    onChange={handleMobileChange}
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                role="link"
                className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-center">
                Pay booking fee of $100 to get started
              </button>
            </form>
            {alertVisible && (
              <PopUpAlert
                title="Success"
                content="Your payment was successful. We will contact you shortly."
                onClose={handleCloseAlert}
              />
            )}
            {errorVisible && (
              <ErrorAlert message={errorMessage} onClose={handleCloseError} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
