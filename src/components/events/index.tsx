import Event from "./Event";
import Time from "./Time";
import MultiEvent from "./MultiEvent";

const Events = () => {
  return (
    <div
      className="relative w-full flex justify-center lg:pt-16 pt-40 font-jakarta"
      id="events"
    >
      <div className="w-full max-w-screen-xl px-5">
        <div className="text-5xl lg:text-6xl text-center font-bold">
          Join the <br /> conversation
        </div>

        <div className="mt-20 w-full flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 gap-x-8 font-bold">
          <div className="w-full flex flex-col gap-y-5 lg:gap-y-8">
            <Time />

            <Event
              day="1: Monday"
              date="May 15th"
              title="Hackathon Kickoff"
              label="Registration + Networking"
            />

            <Event
              day="2: Tuesday"
              date="May 16th"
              title="Hacking Sessions"
              label="Speakers/Content TBD"
            />

            <Event
              day="3: Wednesday"
              date="May 17th"
              title="Hacking Sessions"
              label="Registration + Networking"
            />
          </div>
          <div className="w-full flex flex-col gap-y-5 lg:gap-y-8">
            <Event
              day="4: Wednesday"
              date="May 3rd"
              title="AWS + Xoogler Career Event"
              label="Registration + Networking"
            />

            <MultiEvent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
