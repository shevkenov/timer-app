import { Link as NextLink } from "next/link";

const Link = ({ children, href,  }) => {
  return (
    <NextLink href={href}>
      <a className="underline underline-offset-1 text-blue-700">{children}</a>
    </NextLink>
  );
};

export default Link;
