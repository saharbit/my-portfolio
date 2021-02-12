import React from "react";

export const TABS = {
  ABOUT: "ABOUT",
  PROJECTS: "PROJECTS",
  TOOLS: "TOOLS",
};

export default function Navbar({ setTab, tab }) {
  return (
    <div className="flex flex-row justify-center mb-10">
      {Object.keys(TABS).map((key) => (
        <div
          key={key}
          onClick={() => setTab(TABS[key])}
          className={`text-white mx-5 ${
            tab === key ? "font-bold" : "cursor-pointer"
          }`}
        >
          {key}
        </div>
      ))}
    </div>
  );
}
