import React, { useState } from "react";
import About from "./views/about/About";
import Projects from "./views/projects/Projects";
import { TABS } from "./ui/Navbar";
import Navbar from "./ui/Navbar";
import "./App.scss";

function App() {
  const [tab, setTab] = useState(TABS.ABOUT);

  return (
    <div className="linear-background p-4 min-h-screen">
      <div className="flex flex-col items-center max-w-md mx-auto">
        <Navbar setTab={setTab} tab={tab} />
        {tab === TABS.ABOUT && <About />}
        {tab === TABS.PROJECTS && <Projects />}
      </div>
    </div>
  );
}

export default App;
