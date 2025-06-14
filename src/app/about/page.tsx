"use client";
import React from "react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TimelineDemo } from "@/components/Timeline";
import { Button } from "@/components/ui/moving-border";
import { TeamGlance } from "@/components/TeamGlance";

// What we do section data - customize based on actual lab focus
const whatWeDo = [
  {
    title: "AI Research & Development",
    description: "Cutting-edge research in artificial intelligence, machine learning, and deep learning technologies.",
    link: "asdg",
  },
  {
    title: "Computer Vision Solutions",
    description: "Advanced computer vision systems for medical imaging, autonomous vehicles, and industrial applications.",
    link: "asdaag",
  },
  {
    title: "Natural Language Processing",
    description: "Developing sophisticated NLP models for language understanding, generation, and human-computer interaction.",
    link: "asdasdg",
  },
  {
    title: "Quantum Computing Research",
    description: "Exploring quantum algorithms and their potential applications in solving complex computational problems.",
    link: "adsgpm",
  },
  {
    title: "Collaborative Innovation",
    description: "Partnering with industry leaders and academic institutions to translate research into real-world solutions.",
    link: "adfapn",
  },
  {
    title: "Educational Outreach",
    description: "Training the next generation of researchers through mentorship, workshops, and educational programs.",
    link: "asdfjn",
  },
];


export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
              About NextGen Lab
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a cutting-edge research laboratory dedicated to pushing the boundaries of 
              artificial intelligence, machine learning, and emerging technologies to solve 
              real-world challenges.
            </p>
          </motion.div>
        </div>
      </div>

      {/* What We Do Section */}
      <section className="py-20 rounded-sm bg-gradient-to-br from-neutral-950 to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 ">What We Do</h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Our multidisciplinary approach combines theoretical research with practical 
              applications to drive innovation across various domains.
            </p>
          </motion.div>
          
          <HoverEffect items={whatWeDo} />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">Our Journey</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              A timeline of our key milestones, breakthrough discoveries, and research achievements.
            </p>
          </motion.div>
          
          <TimelineDemo />
        </div>
      </section>

      {/* Team Members Section */}
      <section className='pb-20'>
              <div className="max-w-7xl mt-10 w-full rounded-xl mx-auto p-4 border border-neutral-200 grid grid-cols-1 md:grid-cols-3 justify-between items-center ">
              <div className="p-4 text-xl  md:text-5xl text-center font-sans w-fit font-bold text-neutral-800">
                  Meet The Team
              </div>
              <TeamGlance/>
              <div className='flex flex-col items-center justify-center'>
                      {/* <Link href="/research" ><div className='font-sans bg-white text-black p-3 px-4 rounded-4xl m-3 w-fit flex flex-row gap-3 items-center border-2 cursor-pointer' > Know More <FaArrowRightLong/></div></Link> */}
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Know More
              </button>
              </div>
                
            </div>
            
          </section>

      
    </div>
  );
}
