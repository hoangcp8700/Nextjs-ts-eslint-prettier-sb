import NextLink, { LinkProps } from "next/link";
import { HTMLProps } from "react";

type LinkType = LinkProps &
  HTMLProps<HTMLAnchorElement> & {
    text?: string;
  };

const LinkButton: React.FC<LinkType> = ({
  text,
  as,
  children,
  href,
  replace,
  scroll,
  shallow,
  passHref,
  ...rest
}) => (
  <NextLink
    as={as}
    href={href}
    passHref={passHref || Boolean(text) || false}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
  >
    <a {...rest}>{text || children}</a>
  </NextLink>
);

export default LinkButton;
