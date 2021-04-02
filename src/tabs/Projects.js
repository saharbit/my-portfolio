import React from "react";
import "./Projects.scss";
import { ReactComponent as Github } from "../assets/github.svg";

const PROJECTS = [
  {
    name: "livescores",
    github: "https://github.com/saharbit/livescores",
  },
  {
    name: "you-vs-spy",
    github: "https://github.com/saharbit/you-vs-spy",
  },
  {
    name: "sportfeed",
    github: "https://github.com/saharbit/sportfeed",
  },
  {
    name: "vue-portfolio-visualizer",
    github: "https://github.com/saharbit/vue-stocks-visualizer",
  },
  {
    name: "my-portfolio",
    github: "https://github.com/saharbit/my-portfolio",
  },
];

export default function Projects() {
  return (
    <div className="w-full">
      {PROJECTS.map((project) => (
        <div className="mb-4">
          <a href={project.github}>
            <div className="flex flex-row justify-between items-center w-full border-2 border-white rounded-xl p-4 cursor-pointer hover:opacity-50 duration-200">
              <div className="text-white font-bold">{project.name}</div>
              <Github />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
