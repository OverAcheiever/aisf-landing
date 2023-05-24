import Image from "next/image";
import Keyboard from "images/keyboard.svg";
import Events from "images/events.svg";
import Summit from "images/summit.svg";
import { ArrowUpRight } from "react-feather";

const Info = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="mx-5 lg:max-w-[1450px] mt-20 sm:mt-28 border lg:border-t w-full border-white/[.1] grid grid-cols-1 lg:grid-cols-3 bg-white/[.1] lg:py-6 rounded-xl">
        <div className="w-full py-10 lg:py-4 px-10 flex gap-x-5 items-start">
          <Image src={Keyboard} alt="Hackathon" />
          <div className="-mt-1 ">
            <div className="flex flex-row items-start">
              <a
                href="https://lu.ma/aisf-hack"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-xl hover:underline cursor-pointer"
              >
                Hackathon{" "}
              </a>
              <ArrowUpRight className="ml-0.5 w-4" />
            </div>
            <div className="opacity-75 mt-2">
              100 of the best builders in San Francisco. 3 days at the Lab.
              $100k in prizes.
            </div>
          </div>
        </div>
        <div className="w-full border-y lg:border-x lg:border-y-0 border-white/[.12] py-10 lg:py-4 px-10 flex gap-x-5 items-start">
          <Image src={Summit} alt="Summit" />
          <div className="-mt-1">
            <div className="flex flex-row items-start">
              <a
                href="https://lu.ma/aisf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-xl hover:underline cursor-pointer"
              >
                Summit{" "}
              </a>
              <ArrowUpRight className="ml-0.5 w-4" />
            </div>
            <div className="opacity-75 mt-2">
              Meet our startup founders, hear from AI thought leaders, and have
              some fun.
            </div>
          </div>
        </div>
        <div className="w-full py-10 lg:py-4 px-10 flex gap-x-5 items-start">
          <Image src={Events} alt="Events All Week" />
          <div className="-mt-1">
            <div className="flex flex-row items-start">
              <a
                href="https://lu.ma/omarwasm"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-xl hover:underline cursor-pointer"
              >
                Events{" "}
              </a>
              <ArrowUpRight className="ml-0.5 w-4" />
            </div>
            <div className="opacity-75 mt-2">
              An array of private mixers, firesides, and outdoor experiences
              throughout the week.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
