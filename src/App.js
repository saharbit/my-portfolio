import React from "react";
import sb from "./assets/sb.png";
import "./App.css";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="app">
      <img src={sb} className="logo" alt="logo" />

      <div className="flex flex-col flex-3 justify-center upper-container">
        <h1>HEY, I'M</h1>

        <h1 className="h1-border">SAHAR</h1>

        <div className="flex flex-row items-center mt-3">
          <h2>LET'S STAY IN TOUCH</h2>
          <div className="hr" />
        </div>

        <div className="flex flex-row items-center mt-4">
          <SocialLinks />
        </div>
      </div>

      <div className="flex flex-1">
        <div className="flex flex-row flex-2 items-center justify-center bg-orange">
          <h2>MY PROJECTS</h2>
          <div className="hr" />
        </div>
        <div className="flex-1 bg-black" />
        <div className="flex-3 bg-grey" />
      </div>
    </div>
  );
}

export default App;
