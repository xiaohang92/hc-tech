import React from "react";
import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function GoogleMap() {
  return (
    <section className="bg-slate-50 pb-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-gray-200 hover:border-indigo-500/50">
          <div className="border-b border-gray-100 bg-white px-5 py-4">
            <h2 className="text-lg font-bold text-gray-900">Visit the studio</h2>
            <p className="text-sm text-gray-700">
              10 Lorong Selayang Indah 4, Taman Selayang Indah, 13020
              Butterworth, Pulau Pinang
            </p>
          </div>
          <GoogleMapsEmbed
            apiKey={process.env.GOOGLE_MAPS_API_KEY ?? ""}
            height={280}
            width="100%"
            mode="place"
            q="10 Lorong Selayang Indah 4, Taman Selayang Indah, 13020 Butterworth, Pulau Pinang"
          />
        </div>
      </div>
    </section>
  );
}
