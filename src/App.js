import React from "react";
import "./App.scss";
import SocialLinks from "./components/SocialLinks";
import TechIcons from "./components/TechIcons";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <div className="flex flex-row justify-between p-8">
        <Header />
      </div>

      <div className="container mx-auto flex flex-row flex-3">
        <div className="flex flex-col flex-1 justify-center p-2">
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

        <div className="hidden lg:flex flex-1 flex-col justify-center items-center">
          <TechIcons />
        </div>
      </div>

      <div className="flex flex-1">
        <div className="flex flex-row flex-3 items-center justify-center bg-orange">
          <h2>MY PROJECTS</h2>
          <div className="hr" />
        </div>
        <div className="flex-1 bg-black hidden lg:flex" />
        <div className="flex-3 bg-grey hidden lg:flex items-center justify-center" />
      </div>
    </div>
  );
}

export default App;
