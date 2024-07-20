function Link({ children, ...props }) {
  return (
    <a
      {...props}
      className={`font-semibold text-blue-600 dark:text-blue-500 hover:underline`}
    >
      {children}
    </a>
  );
}

export function Links() {
  return (
    <div>
      <Link href="https://www.linkedin.com/in/saharbit/" target="_blank">
        LinkedIn
      </Link>{" "}
      •{" "}
      <Link href="https://github.com/saharbit" target="_blank">
        GitHub
      </Link>
    </div>
  );
}
