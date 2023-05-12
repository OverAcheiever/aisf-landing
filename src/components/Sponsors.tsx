import Image from "next/image";
import BitFrost from "images/sponsors/bitfrost.png";
import Orangewood from "images/sponsors/orangewood.png";
import Leap from "images/sponsors/leap.png";
import Kayyo from "images/sponsors/kayyo.png";
import BetterBrain from "images/sponsors/betterbrain.png";
import Banana from "images/sponsors/banana.png";
import Neurosity from "images/sponsors/neurosity.png";
import Scenario from "images/sponsors/scenario.png";
import CircleLabs from "images/sponsors/circle-labs.png";
import Lexica from "images/sponsors/lexica.png";
import Microsoft from "images/sponsors/microsoft.png";

const Sponsors = () => {
  const sponsors = [BitFrost, Orangewood, Leap, Kayyo, BetterBrain, Banana];

  // Neurosity,
  // Scenario,
  // CircleLabs,
  // Lexica,

  return (
    <div
      className="pt-28 lg:pt-60 w-full flex justify-center items-center mb-20 lg:mb-40"
      id="sponsors"
    >
      <div className="w-full max-w-screen-xl">
        <div className="text-5xl lg:text-6xl text-center font-bold">
          Meet our sponsors
        </div>
        <div className="flex w-full justify-center mt-16 lg:mt-20">
          <div className="flex gap-x-5 items-center">
            <div className="w-80 h-80 bg-white/[.05] border border-white/[.1] rounded-lg flex items-center justify-center p-12">
              <Image src={Microsoft} alt="sponsor" className="" />
            </div>
            <div>
              <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                {sponsors.map((image, key) => (
                  <div
                    key={key}
                    className="row-span-2 w-44 h-24 lg:w-72 lg:h-24 rounded-lg bg-white/[.05] border border-white/[.1] flex items-center justify-center px-5"
                  >
                    <Image src={image} alt="sponsor" className="" />
                  </div>
                ))}
              </div>
              <div className="w-full grid grid-cols-4 mt-4 gap-4">
                <div className="row-span-2 w-44 h-24 lg:w-full lg:h-24 rounded-lg bg-white/[.05] border border-white/[.1] flex items-center justify-center px-5">
                  <Image src={Neurosity} alt="sponsor" className="" />
                </div>
                <div className="row-span-2 w-44 h-24 lg:w-full lg:h-24 rounded-lg bg-white/[.05] border border-white/[.1] flex items-center justify-center px-5">
                  <Image src={Scenario} alt="sponsor" className="" />
                </div>
                <div className="row-span-2 w-44 h-24 lg:w-full lg:h-24 rounded-lg bg-white/[.05] border border-white/[.1] flex items-center justify-center px-5">
                  <Image src={CircleLabs} alt="sponsor" className="" />
                </div>
                <div className="row-span-2 w-44 h-24 lg:w-full lg:h-24 rounded-lg bg-white/[.05] border border-white/[.1] flex items-center justify-center px-5">
                  <Image src={Lexica} alt="sponsor" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;