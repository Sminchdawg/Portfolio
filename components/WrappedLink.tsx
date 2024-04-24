"use client";
import { Link } from "@chakra-ui/next-js";
import { UrlObject } from "url";
// type Url = string | UrlObject;

// TODO: Update this to extend Link
interface WrappedLinkProps {
  href: string | UrlObject;
  label: string;
}

const WrappedLink = ({ href, label, ...props }: WrappedLinkProps) => (
  <Link href={href} {...props}>
    {label}
  </Link>
);

export default WrappedLink;
