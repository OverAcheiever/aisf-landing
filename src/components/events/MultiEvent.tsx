import Image from "next/image";
import Langchain from "images/events/lang.png";
import HuggingFace from "images/events/hugging-face.png";
import Farza from "images/events/farza.png";
import Finc from "images/events/finc.png";
import a16z from "images/events/a16z.png";
import Emm from "images/events/emm.png";
import Scale from "images/speakers/scaleai.png";

const MultiEvent = () => {
  return (
    <div className="w-full bg-white/[.05] border border-white/[.1] rounded-xl p-8 pb-0 text-lg">
      <div className="text-white/[.5]">
        {" "}
        Day 5 {""}
        <span className="text-white/[.5]">— May 19th</span>
      </div>
      <div className="text-4xl mt-2">
        Friday <span className="text-[#01FF69]">Summit</span>
      </div>
      <div className="flex flex-col mt-8">
        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">9-10AM</div>
          <div className="text-2xl">Registration + Networking</div>
        </div>
        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">10AM-10:15AM</div>
          <div className="flex items-center justify-between">
            <div className="lg:text-right">
              <div className="text-2xl">Opening Remarks</div>
              <div className="text-white/[.6]">
                Furqan Rydhan, Founders, Inc.
              </div>
            </div>
            {/* <Image src={Finc} className="w-14 h-14 ml-6" alt="Farza" /> */}
          </div>
        </div>
        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">10:15AM-11AM</div>
          <div className="flex items-center justify-between">
            <div className="lg:text-right">
              <div className="text-2xl">Generative AI Panel</div>
              <div className="text-white/[.6]">
                w/ Sharif Shameem from Lexica, Ankush Gola from Langchain, and
                SamsungNEXT
              </div>
            </div>
            {/* <Image src={Langchain} className="w-14 h-14 ml-6" alt="Ahmed" /> */}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">11AM-11:30 AM</div>
          <div className="flex items-center justify-between">
            <div className="lg:text-right">
              <div className="text-2xl">
              Keynote: From Generative AI to Agents: Building ML with Hugging Face
              </div>
              <div className="text-white/[.6]">
                w/ Jeff Boudier, Product Director at Hugging Face
              </div>
            </div>
            {/* <Image
              src={HuggingFace}
              className="w-14 h-14 ml-6"
              alt="Hugging Face"
            /> */}
          </div>
        </div>

        <div className="flex flex-col items-start justify-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg flex-none">
            11:30AM-11:50AM
          </div>
          <div className="text-2xl lg:text-right">Networking Break</div>
        </div>

        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">11:50AM-12:10PM</div>
          <div className="flex items-center justify-between">
            <div className="lg:text-right">
              <div className="text-2xl">
              Meet Atlas
              </div>
              <div className="text-white/[.6]">
              Our first fully AI keynote
              </div>
            </div>
            {/* <Image src={Emm} className="w-14 h-14 ml-6" alt="Farza" /> */}
          </div>
        </div>

        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">12:10PM-12:30PM</div>
          <div className="flex items-center justify-between">
            <div className="lg:text-right">
              <div className="text-2xl">
                Keynote: All of a Sudden, Everything is Possible
              </div>
              <div className="text-white/[.6]">Farza Majeed, buildspace</div>
            </div>
            {/* <Image src={Farza} className="w-14 h-14 ml-6" alt="Farza" /> */}
          </div>
        </div>

        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">12:30PM-1:10PM</div>
          <div className="text-2xl">Lunch Break</div>
        </div>

        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">1:10PM-1:30PM</div>
          <div className="flex items-center justify-between">
            <div className="lg:text-right">
              <div className="text-2xl">
                How a Simple Tweet Spawned a Company
              </div>
              <div className="text-white/[.6]">
                Emmanuel de Maistre, Scenario
              </div>
            </div>
            {/* <Image src={Emm} className="w-14 h-14 ml-6" alt="Farza" /> */}
          </div>
        </div>

        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">1:30PM-2:10PM</div>
          <div className="flex items-center justify-between">
            <div className="lg:text-right">
              <div className="text-2xl">Panel: Simulations and Agents</div>
              <div className="text-white/[.6]">
                Nvidia, Langchain, Stanford, a16z, Fable Simulation
              </div>
            </div>
            {/* <Image src={a16z} className="w-14 h-14 ml-6" alt="Farza" /> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
        <div className="text-white/[.5] text-lg">2:10PM-2:30PM</div>
        <div className="flex items-center justify-between">
          <div className="lg:text-right">
            <div className="text-2xl">Generative AI Prompt Battles</div>
            <div className="text-white/[.6]">Players face off to see who's got the best image generation skills</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
        <div className="text-white/[.5] text-lg flex-none">2:30PM-2:50PM</div>
        <div className="text-2xl lg:text-right">Networking Break</div>
      </div>
      <div className="flex flex-col items-start justify-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
        <div className="text-white/[.5] text-lg flex-none">2:50PM-3:20PM</div>
        <div className="flex items-center justify-between">
          <div className="lg:text-right">
            <div className="text-2xl">Panel: How To Incorporate AI Into Your Product</div>
            <div className="text-white/[.6]">Glory Jain, OpenAI; Bihan Jiang, Scale AI; Alana Goyal, base case; Gloria Felicia</div>
          </div>
          {/* <Image
              src={Scale}
              className="w-14 h-14 ml-6"
              alt="Hugging Face"
            /> */}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
        <div className="text-white/[.5] text-lg flex-none">3:20PM-3:35PM</div>
        <div className="text-2xl lg:text-right">
          Hackathon Winners Announced
        </div>
      </div>
      <div className="flex flex-col items-start justify-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
        <div className="text-white/[.5] text-lg flex-none">3:35PM-4:00PM</div>
        <div className="lg:text-right">
            <div className="text-2xl">How Foundational Models are Being Used Today</div>
            <div className="text-white/[.6]">Marco Casalaina VP Products, Azure Cognitive;  Beth Mouriño, Msft for Startups</div>
          </div>
      </div>
      <div className="flex flex-col items-start justify-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
        <div className="text-white/[.5] text-lg flex-none">4:00PM-5PM</div>
        <div className="text-2xl lg:text-right">Ending Mixer</div>
      </div>
    </div>
  );
};

export default MultiEvent;
