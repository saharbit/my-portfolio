import React from "react";
import sahar from "../../assets/sahar_bgless.png";
import SocialLinks from "../../ui/SocialLinks";

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <img
        src={sahar}
        alt="sahar"
        className="h-48 rounded-full shadow-xl border"
      />
      <div className="flex flex-col items-center mt-4 mb-6">
        <h1 className="h1-border">HEY, I'M</h1>
        <h1>SAHAR</h1>
        <h2>FULL STACK</h2>
        <h2 className="sub-border">SOFTWARE DEVELOPER</h2>
      </div>
      <SocialLinks />
    </div>
  );
}
