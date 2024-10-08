import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import PerformanceTest from "./testFolder/PerformanceTest";
import PhotoOne from "./testFolder/photoOne";
import PhotoTwo from "./testFolder/photoTwo";

function App() {
  const [message, setMessage] = React.useState("");
  const [photos, setPhotos] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then(setPhotos);
  }, [setPhotos]);

  return (
    <>
      <div>
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <div className="App-header">
        <PhotoOne photos={photos} message={message} />
        <PhotoTwo photos={photos} message={message} />{" "}
      </div>
    </>
  );
}

export default App;
