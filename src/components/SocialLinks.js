import React from "react";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Mail } from "../assets/mail.svg";

export default function SocialLinks() {
  return (
    <div className="flex flex-row items-center">
      <a href="https://github.com/saharbit" className="mx-2">
        <Github className="icon" />
      </a>
      <a href="https://twitter.com/saharbit" className="mx-2">
        <Twitter className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/saharbit/" className="mx-2">
        <Linkedin className="icon" />
      </a>
      <a href="mailto:sahar.bit@gmail.com" className="mx-2">
        <Mail className="icon" />
      </a>
    </div>
  );
}
