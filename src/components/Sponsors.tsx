import Image from "next/image";
import Link from "next/link";
import BitFrost from "images/sponsors/bitfrost.png";
import Respell from "images/sponsors/respell.png";
import Leap from "images/sponsors/leap.png";
import Kayyo from "images/sponsors/kayyo.png";
import BetterBrain from "images/sponsors/betterbrain.png";
import Banana from "images/sponsors/banana.png";
import Neurosity from "images/sponsors/neurosity.png";
import Scenario from "images/sponsors/scenario.png";
import CircleLabs from "images/sponsors/circle-labs.png";
import Lexica from "images/sponsors/lexica.png";
import Microsoft from "images/sponsors/microsoft.png";
import Samsung from "images/sponsors/samsung.png";

const Sponsors = () => {
  const sponsors = [Samsung, BitFrost, Respell, Leap, Kayyo, Banana];

  return (
    <>
      <div
        className="pt-28 lg:pt-60 w-full flex justify-center items-center mb-20 lg:mb-40"
        id="sponsors"
      >
        <div className="w-full max-w-screen-xl">
          <div className="text-5xl lg:text-6xl text-center font-bold">
            Past Sponsors
          </div>
          <div className=" flex justify-center mt-16 lg:mt-20 px-4 sm:px-5">
            <div className="w-full md:max-w-none flex flex-col md:flex-row gap-4 items-center">
              <div className="w-full md:w-80 h-52 md:h-full bg-white/[.05] border border-white/[.1] rounded-lg flex items-center justify-center md:p-12">
                <Image src={Microsoft} alt="sponsor" className="w-52" />
              </div>
              <div className="w-full">
                <div className="w-full grid grid-cols-2 xl:grid-cols-3 gap-4">
                  {sponsors.map((image, key) => (
                    <div
                      key={key}
                      className="w-full h-20 lg:h-24 rounded-lg bg-white/[.05] border border-white/[.1] flex items-center justify-center"
                    >
                      <Image
                        src={image}
                        alt="sponsor"
                        className="p-3 md:p-0 w-28"
                      />
                    </div>
                  ))}
                </div>
                <div className="w-full grid grid-cols-2 xl:grid-cols-4 mt-4 gap-4">
                  <div className="w-full h-20 lg:w-full lg:h-24 rounded-lg bg-white/[.05] border border-white/[.1] flex items-center justify-center px-5">
                    <Image
                      src={Neurosity}
                      alt="sponsor"
                      className="p-3 md:p-0"
                    />
                  </div>
                  <div className="w-full h-20 lg:w-full lg:h-24 rounded-lg bg-white/[.05] border border-white/[.1] flex items-center justify-center px-5">
                    <Image
                      src={Scenario}
                      alt="sponsor"
                      className="p-3 md:p-0"
                    />
                  </div>
                  <div className="w-full h-20 lg:w-full lg:h-24 rounded-lg bg-white/[.05] border border-white/[.1] flex items-center justify-center px-5">
                    <Image
                      src={CircleLabs}
                      alt="sponsor"
                      className="p-3 md:p-0"
                    />
                  </div>
                  <div className="w-full h-20 lg:w-full lg:h-24 rounded-lg bg-white/[.05] border border-white/[.1] flex items-center justify-center px-5">
                    <Image src={Lexica} alt="sponsor" className="p-3 md:p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="uppercase text-[#FFFFFF80] text-lg flex justify-center mb-20 lg:mb-32">
        <Link href="/">back to top</Link>
      </div>
    </>
  );
};

export default Sponsors;
