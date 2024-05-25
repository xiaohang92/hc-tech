import React from "react";
import Image from "next/image";
import eCommerce from "/public/e-commerce.jpg";

export default function ProductSection() {
  return (
    <div className="min-h-screen w-full py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:gap-5">
        {/* Image Slideshow */}
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

        {/* Service Details */}
        <div className="w-full h-full bg-white p-6 rounded-md shadow-md flex ">
          <div className="flex flex-col justify-between">
            <form action="/api/checkout-sessions" method="POST">
              <div>
                <h1 className="text-3xl font-bold mb-4">
                  Web Development Services
                </h1>
                <p className="text-lg mb-2">
                  <strong>Service:</strong> Custom Web Development
                </p>
                <p className="text-lg mb-2">
                  <strong>Technology Stack:</strong> PHP, MySQL, Next.js,
                  WordPress
                </p>
                <p className="text-lg mb-2">
                  <strong>Features:</strong>
                </p>
                <ul className="list-disc list-inside text-lg mb-4">
                  <li>Responsive Design</li>
                  <li>SEO Optimization</li>
                  <li>eCommerce Integration</li>
                  <li>Content Management Systems</li>
                  <li>Custom Web Applications</li>
                </ul>
                <p className="text-lg mb-2">
                  <strong>Delivery Time:</strong> 2-4 weeks
                </p>
                <p className="text-lg mb-4">
                  <strong>Pricing:</strong> Starting from $500
                </p>
              </div>
              <button
                type="submit"
                role="link"
                className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-center">
                Pay booking fee of $100 to get started
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
