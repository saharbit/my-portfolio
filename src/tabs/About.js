import React from "react";
import sahar from "../assets/sahar.jpg";
import SocialLinks from "../components/SocialLinks";

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <img src={sahar} alt="sahar" className="sahar" />
      <div className="flex flex-col items-center mt-6 mb-2">
        <h1>HEY, I'M</h1>
        <h1 className="h1-border mb-2">SAHAR</h1>
        <h2>A SOFTWARE DEVELOPER</h2>
      </div>
      <SocialLinks />
    </div>
  );
}
