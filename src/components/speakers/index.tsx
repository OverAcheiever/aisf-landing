import Image, { StaticImageData } from "next/image";
import Jim from "images/speakers/jim.jpeg";
import Farza from "images/speakers/farza.png";
import Jeff from "images/speakers/jeff.png";
import Saatchi from "images/speakers/saatchi.png";
import Sharif from "images/speakers/sharif.jpg";
import Ankush from "images/speakers/ankush.jpg";
import Emmanuel from "images/speakers/emmanuel.avif";
import Jack from "images/speakers/jack.webp";
import Micheal from "images/speakers/micheal.jpg";
import Behan from "images/speakers/behan.jpg";
import Joon from "images/speakers/joon.jpg";
import Marco from "images/speakers/marco.png";
import Beth from "images/speakers/beth.png";

import Speaker from "./Speaker";

export interface ISpeaker {
  image: StaticImageData;
  name: string;
  label: string;
}

const Speakers = () => {
  const speakers: ISpeaker[] = [
    {
      name: "Sharif /n Shameem",
      label: "Founder, Lexica.Art",
      image: Sharif,
    },
    {
      name: "Ankush /n Gola",
      label: "Co-Founder, Langchain",
      image: Ankush,
    },
    {
      name: "Jeff /n Boudier",
      label: "Head of Product, Hugging Face",
      image: Jeff,
    },
    {
      name: "Farza /n Majeed",
      label: "Founder, Buildspace",
      image: Farza,
    },
    {
      name: "Emmanuel de /n Maistre",
      label: "Founder, Scenario",
      image: Emmanuel,
    },
    {
      name: "Edward /n Saatchi",
      label: "CEO, Fable Simulation",
      image: Saatchi,
    },
    {
      name: "Dr Jim /n Fan",
      label: "Nvidia",
      image: Jim,
    },
    {
      name: "Joon /n Park",
      label: "Stanford",
      image: Joon,
    },
    {
      name: "Jack /n Soslow",
      label: "A16Z Gaming",
      image: Jack,
    },
    {
      name: "Michael /n Chang",
      label: "Engineer, Langchain",
      image: Micheal,
    },
    {
      name: "Bihan /n Jiang",
      label: "Scale AI",
      image: Behan,
    },
    {
      name: "Marco /n Casalaina",
      label: "Vice President Of Products, Azure Cognitive Services",
      image: Marco,
    },
    {
      name: "Beth Mouriño Thurnher",
      label: "Product & Design Leader at Microsoft for Startups",
      image: Beth,
    },
  ];

  return (
    <div className="pt-32 lg:pt-60 w-full flex justify-center" id="speakers">
      <div className="w-full max-w-screen-xl">
        <div className="text-5xl lg:text-6xl text-center font-bold">
          Past Speakers
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center justify-center gap-y-8 mt-16 lg:mt-24">
          {speakers.map((speaker, key) => (
            <Speaker key={key} {...speaker} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
