import React from "react";
import "./Projects.scss";
import { ReactComponent as Github } from "../assets/github.svg";

const PROJECTS = [
  {
    name: "Highlights Feed",
    web: "https://highlights-feed.vercel.app/",
    github: "https://github.com/saharbit/highlights-feed",
    description: "Sports video highlights from multiple subreddits"
  },
  {
    name: "Livescores",
    web: "https://livescoresapp.netlify.app/",
    github: "https://github.com/saharbit/livescores",
    description: "Upcoming football matches & live scores"
  },
  {
    name: "You VS SPY",
    web: "https://you-vs-spy.netlify.app/",
    github: "https://github.com/saharbit/you-vs-spy",
    description: "Compare a stocks portfolio against the S&P 500"
  },
  {
    name: "Sportfeed",
    web: "https://github.com/saharbit/sportfeed",
    github: "https://github.com/saharbit/sportfeed",
    description: "All-in-one sports feed for tweets, podcasts and highlights"
  },
  {
    name: "Portfolio visualizer",
    web: "https://stockspie-21796.web.app/",
    github: "https://github.com/saharbit/vue-stocks-visualizer",
    description: "Stocks portfolio pie-chart"
  },
  {
    name: "Web portfolio",
    web: "https://saharbit.dev/",
    github: "https://github.com/saharbit/my-portfolio",
    description: "The website you are currently viewing"
  },
  {
    name: "Podcast browser",
    web: "https://github.com/saharbit/podcast-browser",
    github: "https://github.com/saharbit/podcast-browser",
    description: "Web-based podcast browser"
  },
];

export default function Projects() {
  return (
    <div className="w-full">
      {PROJECTS.map((project) => (
        <div className="flex mb-4 w-full">
          <a href={project.web} className="w-full hover:opacity-70">
            <div className="cursor-pointer md:hover:opacity-50 transition-all border-white border-2 h-12 flex items-center py-9 w-full rounded-l-lg border-r-0">
              <div className="flex flex-col p-2">
              <span className="text-gray-50 font-bold">{project.name}</span>
              <span className="text-gray-100 text-sm">{project.description}</span>
              </div>
            </div>
          </a>
          <a href={project.github} className="hover:opacity-70">
            <div className="cursor-pointer md:hover:opacity-50 transition-all border-white border-2 h-12 flex items-center pl-4 pr-4 py-9 rounded-r-lg bg-black">
              <Github className="w-8"/>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
