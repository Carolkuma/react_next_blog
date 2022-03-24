import clsx from "clsx";

import UnstyledLink from "./UnstyledLink";

export default function CustomLink({ children, className = "", ...rest }) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        "mt-3 inline-flex items-center",
        "font-medium text-green-600 hover:text-green-500",
        "focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-offset-2",
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
