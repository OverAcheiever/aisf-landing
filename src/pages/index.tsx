import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import SEO from "@/components/SEO";
import Events from "@/components/events";
import Speakers from "@/components/speakers";
import Sponsors from "@/components/Sponsors";
import CTA from "@/components/CTA";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--jakarta",
});

const Home = () => {
  return (
    <div
      className={`${jakarta.className} w-full min-h-screen`}
    >
      <SEO />
      <Header />
      <Marquee text="May 15 - 19" />
      <Hero />
      <Info />
      <Events />
      <Speakers />
      <Sponsors />
      <Marquee text="May 15 - 19" />
      <CTA />
    </div>
  );
};

export default Home;
