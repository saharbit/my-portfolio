import React from "react";
import "./Projects.scss";
import { PROJECTS } from "./constants";
import Project from "./Project";

export default function Projects() {
  return (
    <div className="divide-y divide-solid">
      {PROJECTS.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
}
