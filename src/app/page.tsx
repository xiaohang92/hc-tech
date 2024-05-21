import Head from "next/head";
// import Annoucement from "@/components/Annoucement";
import HomeSection from "@/components/HomeSection";
import PriceSection from "@/components/PriceSection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Head>
        <title>H&C Tech Solution</title>
      </Head>
      <div className="flex flex-col">
        {/* <Annoucement /> */}
        <HomeSection />
        <PriceSection />
        <InfoSection />
        <Footer />
      </div>
    </main>
  );
}
