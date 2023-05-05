import Image from "next/image";
import Ahmed from "images/events/ahmed.png";
import HuggingFace from "images/events/hugging-face.png";
import Farza from "images/events/farza.png";

const MultiEvent = () => {
  return (
    <div className="w-full bg-white/[.05] border border-white/[.1] rounded-xl p-8 pb-0 text-lg">
      Day 5: Wednesday
      <span className="text-white/[.5]">— May 3rd</span>
      <div className="text-4xl mt-2">AI SF Full Day Conference</div>
      <div className="flex flex-col mt-8">
        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">9-10AM</div>
          <div className="text-2xl">Registration + Networking</div>
        </div>
        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">9-10AM</div>
          <div className="text-2xl">Welcome/Opening Remarks</div>
        </div>
        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">10-10:15AM</div>
          <div className="flex items-center">
            <div className="">
              <div className="text-2xl">Gen AI + Trivia Panel</div>
              <div className="text-white/[.6]">w/ Ibrahim Ahmed</div>
            </div>
            <Image src={Ahmed} className="w-14 h-14 ml-6" alt="Ahmed" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">11-11:30 AM</div>
          <div className="flex items-center">
            <div className="lg:text-right">
              <div className="text-2xl">Hugging Face Keynote</div>
              <div className="text-white/[.6]">w/ Huggingface</div>
            </div>
            <Image
              src={HuggingFace}
              className="w-14 h-14 ml-6"
              alt="Hugging Face"
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg flex-none">
            11:30 - 11:50 AM
          </div>
          <div className="text-2xl lg:text-right">
            Networking Break + Booth Exploration
          </div>
        </div>

        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">11:50-12:10 PM</div>
          <div className="text-2xl">AI Powered Keynote</div>
        </div>

        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">12:10-12:30 PM</div>
          <div className="flex items-center">
            <div className="lg:text-right">
              <div className="text-2xl">Farza Keynote</div>
              <div className="text-white/[.6]">w/ Farza</div>
            </div>
            <Image src={Farza} className="w-14 h-14 ml-6" alt="Farza" />
          </div>
        </div>

        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">12:30-1:15PM</div>
          <div className="text-2xl">Lunch + Networking</div>
        </div>

        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">1:15 - 1:30PM</div>
          <div className="flex items-center">
            <div className="lg:text-right">
              <div className="text-2xl">Emmanuel Talk</div>
              <div className="text-white/[.6]">w/ Emmanuel de Maistre</div>
            </div>
            <Image src={Farza} className="w-14 h-14 ml-6" alt="Farza" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiEvent;
