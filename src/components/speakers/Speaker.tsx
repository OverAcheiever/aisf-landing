import Image from "next/image";
import { ISpeaker } from "./index";
import React from "react";

const Speaker = ({ image, name, label }: ISpeaker) => {
  const _name = name.split("/n");

  return (
    <div className="p-5 w-72 bg-white/[.05] rounded-lg border border-white/[.1]">
      <Image src={image} alt="Emmanuel" className="w-60 h-60 rounded-lg" />

      <div className="text-3xl font-bold mt-4">
        {_name.map((str, index) => (
          <React.Fragment key={index}>
            {str}
            <br />
          </React.Fragment>
        ))}
      </div>
      <div className="text-lg mt-2 font-bold text-white/[.5]">{label}</div>
    </div>
  );
};

export default Speaker;
