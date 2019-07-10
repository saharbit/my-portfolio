import React from "react";
import { ReactComponent as ReactLogo } from "../assets/react-original.svg";
import { ReactComponent as VueLogo } from "../assets/vuejs-original.svg";
import { ReactComponent as PythonLogo } from "../assets/python-original.svg";
import { ReactComponent as TypeScriptLogo } from "../assets/typescript-original.svg";
import { ReactComponent as SassLogo } from "../assets/sass-original.svg";
import { ReactComponent as ReduxLogo } from "../assets/redux-original.svg";
import { ReactComponent as PostgresLogo } from "../assets/postgresql-plain.svg";
import { ReactComponent as NodeLogo } from "../assets/nodejs-original.svg";
import { ReactComponent as JavascriptLogo } from "../assets/javascript-original.svg";

const TechIcons = () => {
  return (
    <>
      <div className="flex">
        <ReactLogo className="tech-icon animate" />
        <VueLogo className="tech-icon" />
        <PythonLogo className="tech-icon" />
      </div>
      <div className="flex">
        <TypeScriptLogo className="tech-icon" />
        <SassLogo className="tech-icon" />
        <ReduxLogo className="tech-icon" />
      </div>
      <div className="flex">
        <PostgresLogo className="tech-icon" />
        <NodeLogo className="tech-icon" />
        <JavascriptLogo className="tech-icon" />
      </div>
    </>
  );
};

export default TechIcons;
