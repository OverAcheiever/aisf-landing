import Image from "next/image";
import React from "react";

import Jim from "images/speakers/jim.jpeg";
import Farza from "images/speakers/farza.png";
import Jeff from "images/speakers/jeff.png";

const speakers = [
  {
    image: Jim,
    name: "Omar Waseem",
    label: "Founders, Inc.",
  },
  {
    image: Farza,
    name: "Ivan Porollo",
    label: "Cerebral Valley",
  },
  {
    image: Jeff,
    name: "Tarlon Khoubyari",
    label: "Community",
  },
];

const Hosts = () => {
  return (
    <div className="pt-28 lg:pt-52 w-full flex justify-center" id="hosts">
      <div className="w-full max-w-screen-lg">
        <div className="text-5xl lg:text-6xl text-center font-bold">Hosts</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center justify-center gap-y-8 mt-16 lg:mt-24">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="p-5 w-72 bg-white/[.05] rounded-lg border border-white/[.1]"
            >
              <Image
                src={speaker.image}
                alt={speaker.name}
                className="w-60 h-60 rounded-lg"
              />
              <div className="text-3xl font-bold mt-4">{speaker.name}</div>
              <div className="text-lg mt-2 font-bold text-white/[.5]">
                {speaker.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hosts;
