import RewindImg from "images/rewind/rewind.png";
import Image from "next/image";

const Rewind = () => {
  return (
    <>
      <div id="rewind2023" className="flex flex-col justify-center items-center gap-y-10 lg:gap-y-16 pt-28 lg:pt-40">
        <div className="font-bold font-feature text-4xl lg:text-7xl">2023 Rewind</div>
        <div className="p-5 lg:w-[420px] bg-white/[.05] rounded-lg border border-white/[.1] mx-6">
          <Image
            src={RewindImg}
            alt="Emmanuel"
            className="lg:w-[420px] lg:h-[300px] rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Rewind;
