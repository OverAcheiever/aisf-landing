const Event = ({
  i,
  day,
  date,
  title,
  events,
}: {
  i: string;
  day: string;
  date: string;
  title: string;
  events: {
    time: string;
    label: string;
    href?: string;
  }[];
}) => {
  return (
    <div className="w-full bg-white/[.05] border border-white/[.1] rounded-xl p-8 text-lg">
      <div className="text-white/[.5]">
        Day {i} <span className="text-white/[.5]">— {date}</span>
      </div>
      <div className="text-4xl mt-2">{day}</div>

      {events.map(({ label, time, href }, key) => (
        <div key={key}>
          <div className="w-full h-[1px] bg-white/[.1] my-4 lg:my-8"></div>
          <div className="flex justify-between items-center gap-x-3">
            <div className="text-white/[.5] text-base lg:text-lg flex-shrink-0">
              {time}
            </div>
            <div
              className={`text-base lg:text-2xl text-right ${
                href && "hover:underline cursor-pointer"
              }`}
            >
              {href ? (
                <a href={href} target="_blank">
                  {label}
                </a>
              ) : (
                label
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;
