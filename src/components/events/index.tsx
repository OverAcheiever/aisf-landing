import Event from "./Event";
import Time from "./Time";
import MultiEvent from "./MultiEvent";

const Events = () => {
  return (
    <div
      className="relative w-full flex justify-center pt-16 lg:pt-40"
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
              i="1"
              day="Monday"
              date="May 15th"
              title="Hackathon Kickoff"
              events={[
                {
                  time: "11AM-1PM",
                  label: "Leap API: Pancakes and Pixels",
                  href: "https://lu.ma/leap-aisf",
                },
                {
                  time: "5-7PM",
                  label: "Hackathon Kickoff",
                },
              ]}
            />

            <Event
              i="2"
              day="Tuesday"
              date="May 16th"
              title="Women in AI Mixer"
              events={[
                {
                  time: "All Day",
                  label: "Hacking @ Founders, Inc.",
                },
                {
                  time: "11AM-1PM",
                  label: "Hackathon Workshops",
                },
                {
                  time: "5-6PM",
                  label: "Google + sudolabs SEO Workshop",
                  href: "https://partiful.com/e/ipQWYIotZcs7zOhmHsgT",
                },
              ]}
            />

            <Event
              i="3"
              day="Wednesday"
              date="May 17th"
              title="Golden Gate Trek"
              events={[
                {
                  time: "All Day",
                  label: "Hacking @ Founders, Inc.",
                },
                {
                  time: "6-8PM",
                  label: "Hackathon Demos, Judging, and Awards",
                },
              ]}
            />
            <Event
              i="4"
              day="Thursday"
              date="May 18rd"
              title="Founders, Inc. Open House"
              events={[
                {
                  time: "12-5PM",
                  label: "Open Coworking @ Founders, Inc.",
                },
                {
                  time: "1-2PM",
                  label: "Philz Coffee Walk & Talk",
                  href: "https://lu.ma/aisf-philz"
                },
                {
                  time: "5-6PM",
                  label: "Microsoft M12 Fireside Chat",
                  href: "https://lu.ma/aisf-m12"
                },
                {
                  time: "6-9PM",
                  label: "Generative AI Mixer w/ SamsungNEXT",
                  href: "https://partiful.com/e/FrBb8BOYKASHVsaCH9YX",
                },
              ]}
            />
          </div>
          <div className="w-full flex flex-col gap-y-5 lg:gap-y-8">
            <MultiEvent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
