import { useState, useEffect } from "react";

const Time = () => {
  const [days, setDays] = useState<string>("00");
  const [hours, setHours] = useState<string>("00");
  const [minutes, setMinutes] = useState<string>("00");
  const [seconds, setSeconds] = useState<string>("00");

  useEffect(() => {
    const timestamp = new Date(2023, 4, 15, 17, 0, 0);

    const intervalId = setInterval(() => {
      const duration = timestamp.getTime() - Date.now();

      if (duration <= 0) {
        setDays("00");
        setHours("00");
        setMinutes("00");
        setSeconds("00");
        clearInterval(intervalId);
        return;
      }

      const days = Math.floor(duration / (24 * 60 * 60 * 1000))
        .toString()
        .padStart(2, "0");

      const hours = Math.floor(
        (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
        .toString()
        .padStart(2, "0");

      const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0");

      const seconds = Math.floor((duration % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-black/[.4] w-full rounded-xl h-48 py-10 border border-white/[.1] flex items-center justify-center">
      <div className="w-full grid grid-cols-4 justify-items-between px-5">
        <div className="flex flex-col items-center">
          <div className="text-5xl lg:text-7xl font-bold">{days}</div>
          <div className="text-xs lg:text-base mt-5 text-white/[.5] font-medium">
            DAYS
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-5xl lg:text-7xl font-bold">{hours}</div>
          <div className="text-xs lg:text-base mt-5 text-white/[.5] font-medium">
            HOURS
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-5xl lg:text-7xl font-bold">{minutes}</div>
          <div className="text-xs lg:text-base mt-5 text-white/[.5] font-medium">
            MINUTES
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-5xl lg:text-7xl font-bold">{seconds}</div>
          <div className="text-xs lg:text-base mt-5 text-white/[.5] font-medium">
            SECONDS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
