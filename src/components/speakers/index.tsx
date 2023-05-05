import Image, { StaticImageData } from "next/image";
import Emmanuel from "images/speakers/emmanuel.png";
import Farza from "images/speakers/farza.png";
import Furqan from "images/speakers/furqan.png";
import Hubert from "images/speakers/hubert.png";
import Speaker from "./Speaker";

export interface ISpeaker {
  image: StaticImageData;
  name: string;
  label: string;
}

const Speakers = () => {
  const speakers: ISpeaker[] = [
    {
      image: Emmanuel,
      name: "Emmanuel de Maistre",
      label: "Co-founder Scenario",
    },
    {
      image: Farza,
      name: "Farza Majeed",
      label: "Founder  Buildspace",
    },
    {
      image: Furqan,
      name: "Furqan Rydhan",
      label: "Co-founder Scenario",
    },
    {
      image: Hubert,
      name: "Hubert Thieblot",
      label: "Founder Buildspace",
    },
  ];

  return (
    <div className="pt-32 lg:pt-60 w-full flex justify-center" id="speakers">
      <div className="w-full max-w-screen-xl">
        <div className="text-5xl lg:text-6xl text-center font-bold">
          Meet our speakers
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center gap-y-8 mt-16 lg:mt-24">
          {speakers.map((speaker) => (
            <Speaker {...speaker} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
