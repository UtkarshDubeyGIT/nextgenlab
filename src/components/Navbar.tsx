"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

import { CiHome } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
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
      icon: <FaRegUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact Us",
      link: "/contact",
      icon: (
        <FaRegMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}