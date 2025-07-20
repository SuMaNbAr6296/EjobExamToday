// 9. Create a countdown timer component that counts down from a given time.

import React, { useEffect, useState } from "react";

const CountdownTimer = ({ initialTime = 60 }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format seconds into MM:SS
  const formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">⏳ Countdown Timer</h2>
      <div className="text-4xl font-mono text-blue-600">
        {timeLeft > 0 ? formatTime(timeLeft) : "⏰ Time's up!"}
      </div>
    </div>
  );
};

export default CountdownTimer;
