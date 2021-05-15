import React, { useState } from "react";
import About from "./tabs/About";
import "./App.scss";
import Projects from "./tabs/Projects";
import { TABS } from "./components/Navbar";
import Navbar from "./components/Navbar";

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
