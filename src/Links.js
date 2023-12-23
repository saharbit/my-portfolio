import Link from "./Link";

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
      <Link href="/resume.pdf" target="_blank">
        Resume
      </Link>{" "}
    </div>
  );
}

export default Links;
