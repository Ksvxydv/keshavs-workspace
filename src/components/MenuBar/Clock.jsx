import { useEffect, useState } from "react";

export default function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dateParts = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).formatToParts(now);

  const weekday = dateParts.find((p) => p.type === "weekday")?.value;
  const day = dateParts.find((p) => p.type === "day")?.value;
  const month = dateParts.find((p) => p.type === "month")?.value;

  const time = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(now);

  const formatted = `${weekday} ${day} ${month} ${time}`;

  return (
    <span className="select-none px-2 text-[13px] font-medium tracking-tight">
      {formatted}
    </span>
  );
}
