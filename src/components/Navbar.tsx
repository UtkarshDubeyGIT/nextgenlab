"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { CiHome } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <CiHome  className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About Us",
      link: "/about",
      icon: <ImInfo className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Team",
      link: "/team",
      icon: <FaUsers className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },


  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}