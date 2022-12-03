import React from "react";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Link } from "../../assets/external-link.svg";

export default function Project({ project }) {
  return (
    <div className="flex flex-col px-2 pt-4 pb-2">
      <a
        href={project.web}
        className="flex flex-col md:hover:opacity-50 transition-all cursor-pointer mb-2"
      >
        <div className="flex items-center">
          <span className="text-gray-50 font-bold mr-2">{project.name}</span>
          <Link className="w-4" />
        </div>
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
  );
}
