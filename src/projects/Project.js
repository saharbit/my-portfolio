import React from "react";

export default function Project({ project }) {
  return (
    <div className="flex flex-col py-2">
      <a
        href={project.web}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col md:hover:opacity-50 cursor-pointer mb-2"
      >
        <div className="flex items-center">
          <span className="font-semibold mr-2 text-sm">{project.name}</span>
        </div>
        <span className="text-xs">{project.description}</span>
      </a>
    </div>
  );
}
