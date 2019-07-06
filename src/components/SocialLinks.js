import React from "react";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Mail } from "../assets/mail.svg";

export default function SocialLinks() {
  return (
    <>
      <a href="https://www.linkedin.com/in/saharbit/">
        <Linkedin className="icon" />
      </a>
      <a href="https://github.com/saharbit">
        <Github className="icon" />
      </a>
      <a href="https://twitter.com/saharbit">
        <Twitter className="icon" />
      </a>
      <a href="mailto:sahar.bit@gmail.com">
        <Mail className="icon" />
      </a>
    </>
  );
}
