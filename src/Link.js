function Link({ children, ...props }) {
  return (
    <a
      {...props}
      className="ont-medium text-blue-600 dark:text-blue-500 hover:underline"
    >
      {children}
    </a>
  );
}

export default Link;
