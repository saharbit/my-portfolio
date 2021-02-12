import React from "react";
import "./Projects.scss";
import { ReactComponent as Github } from "../assets/github.svg";

const PROJECTS = [
  {
    name: "livescores",
    github: "https://github.com/saharbit/livescores",
  },
  {
    name: "vue-portfolio-visualizer",
    github: "https://github.com/saharbit/vue-portfolio-visualizer",
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
        <a href={project.github}>
          <div className="flex flex-row justify-between items-center w-full border-2 border-white rounded-xl p-4 mb-4 cursor-pointer hover:opacity-50 duration-200">
            <div className="text-white font-bold">{project.name}</div>
            <Github />
          </div>
        </a>
      ))}
    </div>
  );
}
