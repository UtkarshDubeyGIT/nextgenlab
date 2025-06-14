"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { Spotlight } from "@/components/ui/spotlight-new";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { motion } from "framer-motion";
import React from "react";

const team = [
  {
    role: "Head",
    name: "Dr. Priya Sharma",
    photo: "https://images.unsplash.com/photo-1519744434498-a0de604df9db?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Visionary leader with 15+ years in AI research and innovation.",
    social: {
      linkedin: "https://linkedin.com/in/priyasharma",
      github: "https://github.com/priyasharma",
      twitter: "https://twitter.com/priyasharma"
    },
    expertise: ["Artificial Intelligence", "Leadership"],
    specialisations: ["Deep Learning", "Team Building"]
  },
  {
    role: "Scholar",
    name: "Amit Verma",
    photo: "https://images.unsplash.com/photo-1629747490241-624f07d70e1e?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Full-stack developer passionate about scalable web apps.",
    social: {
      linkedin: "https://linkedin.com/in/amitverma",
      github: "https://github.com/amitverma"
    },
    expertise: ["Web Development", "Cloud"],
    specialisations: ["Next.js", "Azure"]
  },
  {
    role: "Scholar",
    name: "Sara Lee",
    photo: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "UI/UX designer crafting delightful user experiences.",
    social: {
      linkedin: "https://linkedin.com/in/saralee",
      twitter: "https://twitter.com/saraleedesign"
    },
    expertise: ["UI/UX Design"],
    specialisations: ["Figma", "Accessibility"]
  },
  {
    role: "Student",
    name: "Michael Chen",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Data scientist specializing in machine learning and analytics.",
    social: {
      linkedin: "https://linkedin.com/in/michaelchen",
      github: "https://github.com/michaelchen",
      twitter: "https://twitter.com/michaelchen"
    },
    expertise: ["Data Science", "Machine Learning"],
    specialisations: ["Python", "TensorFlow"]
  },
  {
    role: "Student",
    name: "Jessica Rodriguez",
    photo: "https://plus.unsplash.com/premium_photo-1710548650774-e37b948f97a4?q=80&w=2693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "DevOps engineer focused on CI/CD and infrastructure automation.",
    social: {
      linkedin: "https://linkedin.com/in/jessicarodriguez",
      github: "https://github.com/jessicarodriguez"
    },
    expertise: ["DevOps", "Infrastructure"],
    specialisations: ["Kubernetes", "Docker"]
  },
  {
    role: "Professor",
    name: "David Kim",
    photo: "https://plus.unsplash.com/premium_photo-1710695570402-83df3571880b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Mobile app developer creating cross-platform solutions.",
    social: {
      linkedin: "https://linkedin.com/in/davidkim",
      github: "https://github.com/davidkim",
      twitter: "https://twitter.com/davidkim"
    },
    expertise: ["Mobile Development", "React Native"],
    specialisations: ["iOS", "Android"]
  },
  {
    role: "Editor",
    name: "Emily Johnson",
    photo: "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Product manager driving innovation and user-centric solutions.",
    social: {
      linkedin: "https://linkedin.com/in/emilyjohnson",
      twitter: "https://twitter.com/emilyjohnson"
    },
    expertise: ["Product Management", "Strategy"],
    specialisations: ["Agile", "User Research"]
  },
  // ...add more members as needed...
];

// Modified SocialLinks to use Separator between social links
// (Removed duplicate definition to fix error)
export default function TeamPage() {



  return(
    <div className="bg-white">
    <div >
      <div className="h-[40rem] w-full  flex md:items-center md:justify-center bg-white/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-900 bg-opacity-50">
          Meet the Amazing Team
        </h1>
        <p className="mt-4 py-20 font-normal text-neutral-600 max-w-5xl text-2xl text-center mx-auto">
          Our team is a diverse group of passionate individuals dedicated to pushing the boundaries of technology and innovation. 
          Together, we strive to create impactful solutions that make a difference in the world.
        </p>
      </div>
    </div>
    </div>


    <div>
      <h2>
        The Head
      </h2>
    </div>





    <div>


    </div>







    </div>
  )
}