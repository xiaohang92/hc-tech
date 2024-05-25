import React from "react";
import { GoogleMapsEmbed } from "@next/third-parties/google";
export default function GoogleMap() {
  return (
    <GoogleMapsEmbed
      apiKey={process.env.GOOGLE_MAPS_API_KEY ?? ""}
      height={200}
      width="100%"
      mode="place"
      q="10 Lorong Selayang Indah 4, Taman Selayang Indah, 13020 Butterworth, Pulau Pinang"
    />
  );
}
