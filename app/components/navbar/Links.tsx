"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface CustomLinkProps {
  href: string;
  title: string;
  className: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  className = "",
}) => {
  const path = usePathname();
  return (
    <Link href={href} scroll={false} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          path === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Links = () => {
  return (
    <nav className="hidden md:flex justify-between items-center gap-[30px]">
      <CustomLink href="/" title="Home" className="" />
      <CustomLink href="#about" title="About" className="" />
      <CustomLink href="#project" title="Projects" className="" />
    </nav>
  );
};

export default Links;
