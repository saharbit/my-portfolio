import React, { useState } from "react";
import About from "./tabs/About";
import "./App.scss";
import Projects from "./tabs/Projects";
import Tools from "./tabs/Tools";
import { TABS } from "./components/Navbar";
import Navbar from "./components/Navbar";

function App() {
    const [tab, setTab] = useState(TABS.ABOUT);

    return (
        <div className="linear-background flex flex-col items-center p-5 h-screen w-full">
            <Navbar setTab={setTab} tab={tab} />
            {tab === TABS.ABOUT && <About />}
            {tab === TABS.PROJECTS && <Projects />}
            {tab === TABS.TOOLS && <Tools />}
        </div>
    );
}

export default App;
