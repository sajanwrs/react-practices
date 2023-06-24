import React from "react";
import ReactPlayer from "react-player";
function ReactPlayerPractice() {
  const vidUrl = "https://www.youtube.com/watch?v=dQw4w";
  <div>
    <h1>React-Player</h1>
    <ReactPlayer url={vidUrl} playing={false} volume={0.5} />
  </div>;
}

export default ReactPlayerPractice;
