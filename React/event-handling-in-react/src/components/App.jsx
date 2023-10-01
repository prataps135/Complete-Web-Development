import React, { useState } from "react";

function App() {
  const [mouseStyle, setMouseStyle] = useState("white");
  function handleMouseOver() {
    setMouseStyle("black");
  }

  function handleMouseOut() {
    setMouseStyle("white");
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: mouseStyle }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
