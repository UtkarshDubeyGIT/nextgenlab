"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = ` NextGen Lab, NSUT is dedicated to advancing cutting-edge technologies by leveraging India’s digital strengths and student talent. We aim to build open, high-impact solutions in AI, robotics, and next-gen tech empowering innovation and positioning NSUT as a hub for future-ready development.`;

export function TextGenerate() {
  return (
    <TextGenerateEffect
      words={words}
      className="flex justify-center mx-auto pt-1 mt-3 w-full max-w-5xl text-start text-xl md:text-4xl font-sans px-10 md:px-2"
    />
  );
}
