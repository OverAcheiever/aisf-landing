import Image from "next/image";
import AISF from "images/aisf.svg";
import Link from "next/link";
import FIncPresents from "images/finc-presents.png";

const Hero = () => {
  return (
    <div className="w-full flex flex-col font-jakarta items-center justify-center">
      <Image src={FIncPresents} alt="AISF" className="mt-16 lg:mt-24" />
      <div className="font-bold text-6xl lg:text-9xl text-center mt-8 lg:mt-10">
        an AI week <br /> for Builders
      </div>
      <div className="opacity-75 text-xl px-8 lg:px-0 lg:text-2xl mt-12 text-center max-w-3xl">
        Join 1000+ builders in San Francisco for a week of hacking, curated
        mixers, exclusive workshops, and a full-day summit to end it off.
      </div>

      <Link
        href="https://fdotinc.typeform.com/to/tpgvDnhX"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="container relative w-80 lg:w-[425px] h-16 group mt-14 lg:mt-16">
          <div className="absolute gradient-button w-[20.3rem] lg:w-[429px] -ml-0.5 h-[68px] -mt-0.5 rounded-full transition-all duration-300 ease-in-out"></div>
          <button className="bg-black absolute -mt-[66px] z-50 group-hover:bg-[#222] transition-all duration-300 flex items-center justify-center font-bold rounded-full h-16 w-80 lg:w-[425px]">
            SAVE YOUR SPOT
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
