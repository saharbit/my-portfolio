import React from "react";
import "./App.scss";
import Sahar from "./assets/sahar_cropped.jpg";
import Link from "./Link";
import Check from "./assets/check.png";

function App() {
  return (
    <div className="pt-4 min-h-screen px-4 bg-gray-50">
      <div className="flex flex-col max-w-md">
        <img
          src={Sahar}
          alt="sahar"
          className="profile-picture mb-4 rounded-full"
        />
        <div className="font-bold header flex items-center">
          Sahar Biton
          <img src={Check} alt="check" className="w-5 h-5 ml-1" />
        </div>
        <div>@saharbit • Software Engineer • Tel Aviv</div>
        <Links />
        <div className="mt-4">
          Currently hacking at{" "}
          <Link href="https://www.getaivalue.com/" target="_blank">
            GetAI
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;

function Links() {
  return (
    <div>
      <Link href="https://www.linkedin.com/in/saharbit/" target="_blank">
        LinkedIn
      </Link>{" "}
      •{" "}
      <Link href="https://github.com/saharbit" target="_blank">
        GitHub
      </Link>{" "}
      •{" "}
      <Link
        href="https://gibush.fra1.cdn.digitaloceanspaces.com/resume.pdf"
        target="_blank"
      >
        Resume
      </Link>{" "}
    </div>
  );
}
