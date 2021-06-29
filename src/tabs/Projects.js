import React from "react";
import "./Projects.scss";
import { ReactComponent as Github } from "../assets/github.svg";

const PROJECTS = [
  {
    name: "Highlights Feed",
    web: "https://highlights-feed.vercel.app/",
    github: "https://github.com/saharbit/highlights-feed",
  },
  {
    name: "Livescores",
    web: "https://livescoresapp.netlify.app/",
    github: "https://github.com/saharbit/livescores",
  },
  {
    name: "You VS SPY",
    web: "https://you-vs-spy.netlify.app/",
    github: "https://github.com/saharbit/you-vs-spy",
  },
  {
    name: "Sportfeed",
    web: "https://github.com/saharbit/sportfeed",
    github: "https://github.com/saharbit/sportfeed",
  },
  {
    name: "vue-portfolio-visualizer",
    web: "https://stockspie-21796.web.app/",
    github: "https://github.com/saharbit/vue-stocks-visualizer",
  },
  {
    name: "Web portfolio",
    web: "https://saharbit.dev/",
    github: "https://github.com/saharbit/my-portfolio",
  },
  {
    name: "Podcast browser",
    web: "https://github.com/saharbit/podcast-browser",
    github: "https://github.com/saharbit/podcast-browser",
  },
];

export default function Projects() {
  return (
    <div className="w-full">
      {PROJECTS.map((project) => (
        <div className="flex mb-4 w-full">
          <a href={project.web} className="w-full">
            <div className="cursor-pointer md:hover:opacity-50 transition-all border-white border-2 h-12 flex items-center pl-4 py-8 w-full rounded-l-full border-r-0">
              <span className="text-white font-bold">{project.name}</span>
            </div>
          </a>
          <a href={project.github}>
            <div className="cursor-pointer md:hover:opacity-50 transition-all border-white border-2 h-12 flex items-center pl-4 pr-5 py-8 rounded-r-full">
              <Github />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
