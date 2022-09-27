import * as React from "react";

const HoursBanner = ({ document }: any) => {
  const { hours, timezone } = document;
  console.log(JSON.stringify(timezone));
  console.log(JSON.stringify(hours));

  const getStatus = (currentDay: any, currentTime: any, hours: any) => {
    var startTime =
      (hours[currentDay.toLowerCase()].openIntervals[0].start.split(":")[0] ===
      "00"
        ? 24
        : hours[currentDay.toLowerCase()].openIntervals[0].start.split(
            ":"
          )[0]) *
        60 +
      hours[currentDay.toLowerCase()].openIntervals[0].start.split(":")[1];
    var endTime =
      (hours[currentDay.toLowerCase()].openIntervals[0].end.split(":")[0] ===
      "00"
        ? 24
        : hours[currentDay.toLowerCase()].openIntervals[0].end.split(":")[0]) *
        60 +
      hours[currentDay.toLowerCase()].openIntervals[0].end.split(":")[1];
    var currently = currentTime.split(":")[0] * 60 + currentTime.split(":")[1];
    if (
      hours[currentDay.toLowerCase()].openIntervals[0].start == "00:00" &&
      hours[currentDay.toLowerCase()].openIntervals[0].end == "23:59"
    )
      return { status: "Open", text: "Open 24 Hours" };
    else if (startTime < currently < endTime)
      return {
        status: "Open Now",
        text: `Closes at ${closeOrOpenTime(
          hours[currentDay.toLowerCase()].openIntervals[0].end
        )}`,
      };
    else
      return {
        status: "Closed",
        text: `Opens ${getTomorrow} at ${closeOrOpenTime(
          hours[currentDay.toLowerCase()].openIntervals[0].start
        )}`,
      };
  };
  const getTomorrow = () => {
    var date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toLocaleString("en-us", { weekday: "long" });
  };
  const closeOrOpenTime = (inpTime: any) => {
    console.log(inpTime);

    let newTime = inpTime;
    if (inpTime.split(":")[0] === "00")
      newTime = `${newTime.split(":")[0].replace(/(.*)/, "24")}:${
        newTime.split(":")[1]
      }`;

    console.log(newTime);

    newTime =
      newTime.split(":")[0] >= 12 && newTime.split(":")[0] <= 23
        ? `${newTime.split(":")[0] - 12}:${newTime.split(":")[1]} PM`
        : `${newTime.split(":")[0] - 12}:${newTime.split(":")[1]} AM`;
    console.log(newTime);

    return newTime;
  };

  const getDayName = (hours: any, timezone: any) => {
    let currentDay = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      timeZone: timezone,
    });
    let currentTime = timeNow();
    return getStatus(currentDay, currentTime, hours);
  };
  const timeNow = () => {
    var d = new Date(),
      h = (d.getHours() < 10 ? "0" : "") + d.getHours(),
      m = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
    return h + ":" + m;
  };
  const res = getDayName(hours, timezone);
  return (
    <div className="hero mt-10">
      <div className="hero-row">
        <div
          className={
            res.status.includes("Open")
              ? "Hero-hoursToday storeOpen flex gap-1 items-center"
              : "Hero-hoursToday storeClosed flex gap-1 items-center"
          }
        >
          <p className="font-bold">
            {res.status === "Open Now"
              ? "Open Now - "
              : res.status === "Closed"
              ? "Closed  - "
              : ""}
          </p>
          {res.text}
        </div>
      </div>
    </div>
  );
};

export default HoursBanner;
