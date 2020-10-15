import React, { useState, useEffect } from "react";

function Timer() {
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSecondsElapsed((s) => s + 1), 1000);
    const unsubscribe = () => clearInterval(id);
    return unsubscribe;
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <p>{secondsElapsed} seconds have elapsed.</p>
    </div>
  );
}

export default Timer;
