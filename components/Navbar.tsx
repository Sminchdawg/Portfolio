"use client";

import WrappedLink from "./WrappedLink";
import { Flex, Image } from "@chakra-ui/react";
import logo from "../public/logo.webp";
import { css } from "@emotion/react";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "education",
    label: "Education",
  },
  {
    href: "/experience",
    label: "Experience",
  },
  {
    href: "/skills",
    label: "Skills",
  },
  {
    href: "/projects",
    label: "Projects",
  },
];

const styles = {
  image: css({
    borderRadius: "20px",
  }),
};

const Navbar = () => {
  return (
    <Flex as="nav" alignItems="center">
      <Image
        src="logo.webp"
        alt="logo"
        borderRadius="full"
        boxSize="50px"
        marginRight={3}
      />
      <Flex as="ul" alignItems="center" gap={5}>
        {links.map((link) => (
          <WrappedLink
            color="brand.primary"
            p={2}
            borderRadius="4"
            background="brand.complemntary"
            key={link.href}
            href={link.href}
            label={link.label}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
