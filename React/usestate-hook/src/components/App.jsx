import React, { useState } from "react";

function App() {
  let currentTime = new Date().toLocaleTimeString();
  const [time, timer] = useState(currentTime);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    timer(newTime);
  }
  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
