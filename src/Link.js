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

export default Link;
