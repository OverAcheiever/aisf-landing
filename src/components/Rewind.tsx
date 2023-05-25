import RewindImg from "images/rewind/rewind.png";
import Image from "next/image";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Rewind = () => {
  return (
    <>
      <div
        id="rewind2023"
        className="flex flex-col justify-center items-center gap-y-10 lg:gap-y-16 pt-28 lg:pt-40"
      >
        <div className="font-bold font-feature text-4xl lg:text-7xl">
          2023 Rewind
        </div>
        <div className="p-5 w-80 lg:w-[420px] bg-white/[.05] rounded-lg border border-white/[.1] mx-6 lg:mx-0">
          <TwitterTweetEmbed tweetId="1660765392581840896" />
        </div>
      </div>
    </>
  );
};

export default Rewind;
