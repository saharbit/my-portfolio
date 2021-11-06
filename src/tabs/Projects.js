import React from "react";
import "./Projects.scss";
import { ReactComponent as Github } from "../assets/github.svg";
import { PROJECTS } from "./constants";

export default function Projects() {
  return (
    <div>
      {PROJECTS.map((project) => (
        <div className="flex flex-col p-2">
          <a
            href={project.web}
            className="flex flex-col md:hover:opacity-50 transition-all cursor-pointer"
          >
            <span className="text-gray-50 font-bold">{project.name}</span>
            <span className="text-gray-100 text-sm">{project.description}</span>
          </a>
          <a
            href={project.github}
            className="w-5 md:hover:opacity-50 transition-all"
          >
            <div className="flex">
              <Github />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
