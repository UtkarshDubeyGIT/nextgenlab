"use client";
import React from "react";
import { Vortex } from "./ui/vortex";

export function VortexDemo() {
  return (
    <div className="w-full mx-auto h-screen overflow-visible">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        Next Gen AI Lab 
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        We build cutting-edge AI solutions that redefine the possibilities of technology. From deep learning to intelligent automation, NextGenAI Lab is at the forefront of the AI revolution.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-900 hover:bg-blue-500 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Explore Now
          </button>
          <button className="px-4 py-2  text-white ">Get Started</button>
        </div>
      </Vortex>
    </div>
  );
}
