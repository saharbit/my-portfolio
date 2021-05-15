import React from "react";
import "./Projects.scss";
import { ReactComponent as Github } from "../assets/github.svg";

const PROJECTS = [
  {
    name: "Highlights Feed",
    web: "https://highlights-feed.vercel.app/",
    className: "highlights",
  },
  {
    name: "Livescores",
    web: "https://livescoresapp.netlify.app/",
  },
  {
    name: "You VS SPY",
    web: "https://you-vs-spy.netlify.app/",
  },
  {
    name: "Sportfeed",
    web: "https://github.com/saharbit/sportfeed",
  },
  {
    name: "Vue Portfolio Visualizer",
    web: "https://github.com/saharbit/vue-stocks-visualizer",
  },
  {
    name: "My portfolio",
    web: "https://github.com/saharbit/my-portfolio",
  },
];

export default function Projects() {
  return (
    <div className="w-full">
      {PROJECTS.map((project) => (
        <div className="mb-4">
          <a href={project.web}>
            <div
              className={`flex flex-row justify-between items-center w-full border-2 border-white rounded-full md:hover:opacity-50 transition-all`}
            >
              <div className="text-white font-bold pl-5">{project.name}</div>
              <div className="border-l-2 border-white p-4">
                <Github />
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
