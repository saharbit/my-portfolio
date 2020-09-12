import React from "react";
import "./App.scss";
import SocialLinks from "./components/SocialLinks";
import TechIcons from "./components/TechIcons";

function App() {
    return (
        <div className="app justify-center">
            <div className="container mx-auto flex flex-col px-2">
                <div className="flex flex-col flex-1 items-center">
                    <h1>HEY, I'M</h1>
                    <h1 className="h1-border">SAHAR</h1>
                    <div className="flex flex-row items-center mt-3">
                        <h2>A SOFTWARE DEVELOPER</h2>
                    </div>
                    <div className="flex flex-row items-center my-4">
                        <SocialLinks />
                    </div>
                </div>
                <TechIcons />
            </div>
        </div>
    );
}

export default App;
