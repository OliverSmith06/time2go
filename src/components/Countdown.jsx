import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-04-03T00:00:00+08:00");

function getTimeLeft() {
  const now = Date.now();
  const diff = TARGET_DATE.getTime() - now;
  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export function getProgress() {
  const START_DATE = new Date("2026-03-23T00:00:00+08:00");
  const now = Date.now();
  const total = TARGET_DATE.getTime() - START_DATE.getTime();
  const elapsed = now - START_DATE.getTime();
  return Math.min(1, Math.max(0, elapsed / total));
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!timeLeft) {
    return (
      <div className="countdown">
        <div className="countdown-done">🎉 Time to go! 🎉</div>
      </div>
    );
  }

  const units = [
    { value: timeLeft.days, label: "days" },
    { value: timeLeft.hours, label: "hours" },
    { value: timeLeft.minutes, label: "min" },
    { value: timeLeft.seconds, label: "sec" },
  ];

  return (
    <div className="countdown">
      <div className="countdown-label">Last sweet dreams apart...</div>
      <div className="countdown-timer">
        {units.map((unit, i) => (
          <div className="countdown-unit" key={unit.label}>
            <span className="countdown-value">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="countdown-unit-label">{unit.label}</span>
            {i < units.length - 1 && <span className="countdown-sep">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
