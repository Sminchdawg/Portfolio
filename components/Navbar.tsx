"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.webp";

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

const Navbar = () => {
  return (
    <nav className="flex items-center">
      <Image
        className="rounded-full mr-10"
        width={50}
        height={50}
        src={logo}
        alt="logo"
      />
      <ul className="flex items-center gap-2">
        {links.map((link) => (
          <Link
            className="text-background bg-complementary p-2 rounded-md"
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
