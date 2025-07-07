"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IoHome } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import { GrDocumentTest } from "react-icons/gr";
export function Navbar() {
  const navItems =
  [
    {
      name: "Home",
      link: "/",
      icon: <IoHome  className="h-4 w-4 text-neutral-900 dark:text-white" />,
    },
    {
      name:"Research",
      link: "/research",
      icon: <GrDocumentTest className="h-4 w-4 text-neutral-900 dark:text-white" />,
    },
    {
      name: "About Us",
      link: "/about",
      icon: <ImInfo className="h-4 w-4 text-neutral-900 dark:text-white" />,
    },

    {
      name: "Team",
      link: "/team",
      icon: <FaUsers className="h-4 w-4 text-neutral-900 dark:text-white" />,
    },

  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}