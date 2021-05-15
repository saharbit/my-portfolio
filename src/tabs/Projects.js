import React from "react";
import "./Projects.scss";
import { ReactComponent as Github } from "../assets/github.svg";

const PROJECTS = [
  {
    name: "Highlights Feed",
    github: "https://highlights-feed.vercel.app/",
    className: "highlights",
  },
  {
    name: "Livescores",
    github: "https://github.com/saharbit/livescores",
  },
  {
    name: "You VS SPY",
    github: "https://github.com/saharbit/you-vs-spy",
  },
  {
    name: "Sportfeed",
    github: "https://github.com/saharbit/sportfeed",
  },
  {
    name: "Vue Portfolio Visualizer",
    github: "https://github.com/saharbit/vue-stocks-visualizer",
  },
  {
    name: "My portfolio",
    github: "https://github.com/saharbit/my-portfolio",
  },
];

export default function Projects() {
  return (
    <div className="w-full">
      {PROJECTS.map((project) => (
        <a href={project.github}>
          <div
            className={`mb-4 flex flex-row justify-between items-center w-full border-2 border-white rounded-full md:hover:opacity-50 transition-all`}
          >
            <div className="text-white font-bold pl-5">{project.name}</div>
            <div className="border-l-2 border-white p-4">
              <Github />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
