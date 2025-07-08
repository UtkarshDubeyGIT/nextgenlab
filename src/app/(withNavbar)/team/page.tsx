"use client";
import React, { useState } from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Card, BlurImage } from "@/components/ui/apple-cards-carousel";
import { AnimatePresence, motion } from "motion/react";
import { Github, Linkedin, Twitter } from "lucide-react";

interface TeamMember {
	role: string;
	name: string;
	photo: string;
	description: string;
	vision?: string;
	social?: {
		linkedin?: string;
		github?: string;
		twitter?: string;
	};
	expertise: string[];
	specialisations?: string[];
	contributions?: string[];
}

const team: TeamMember[] = [
	{
		role: "Head",
		name: "Dr. Priya Sharma",
		photo: "https://images.unsplash.com/photo-1519744434498-a0de604df9db?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description: "Visionary leader with 15+ years in AI research and innovation.",
		vision: "To democratize artificial intelligence and make cutting-edge technology accessible to everyone. I believe in fostering innovation through collaboration and creating solutions that have a meaningful impact on society.",
		social: {
			linkedin: "https://linkedin.com/in/priyasharma",
			github: "https://github.com/priyasharma",
			twitter: "https://twitter.com/priyasharma",
		},
		expertise: ["Artificial Intelligence", "Leadership"],
		specialisations: ["Deep Learning", "Team Building"],
		contributions: [
			"Led 50+ AI research projects",
			"Published 30+ peer-reviewed papers",
			"Mentored 100+ students and researchers",
			"Founded NextGen Lab initiative"
		]
	},
	{
		role: "Scholar",
		name: "Amit Verma",
		photo: "https://images.unsplash.com/photo-1629747490241-624f07d70e1e?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description: "Full-stack developer passionate about scalable web apps.",
		social: {
			linkedin: "https://linkedin.com/in/amitverma",
			github: "https://github.com/amitverma",
		},
		expertise: ["Web Development", "Cloud"],
		specialisations: ["Next.js", "Azure"],
	},
	{
		role: "Scholar",
		name: "Sara Lee",
		photo: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description: "UI/UX designer crafting delightful user experiences.",
		social: {
			linkedin: "https://linkedin.com/in/saralee",
			twitter: "https://twitter.com/saraleedesign",
		},
		expertise: ["UI/UX Design"],
		specialisations: ["Figma", "Accessibility"],
	},
	{
		role: "Student",
		name: "Michael Chen",
		photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description: "Data scientist specializing in machine learning and analytics.",
		social: {
			linkedin: "https://linkedin.com/in/michaelchen",
			github: "https://github.com/michaelchen",
			twitter: "https://twitter.com/michaelchen",
		},
		expertise: ["Data Science", "Machine Learning"],
		specialisations: ["Python", "TensorFlow"],
	},
	{
		role: "Student",
		name: "Jessica Rodriguez",
		photo: "https://plus.unsplash.com/premium_photo-1710548650774-e37b948f97a4?q=80&w=2693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description: "DevOps engineer focused on CI/CD and infrastructure automation.",
		social: {
			linkedin: "https://linkedin.com/in/jessicarodriguez",
			github: "https://github.com/jessicarodriguez",
		},
		expertise: ["DevOps", "Infrastructure"],
		specialisations: ["Kubernetes", "Docker"],
	},
	{
		role: "Professor",
		name: "David Kim",
		photo: "https://plus.unsplash.com/premium_photo-1710695570402-83df3571880b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description: "Mobile app developer creating cross-platform solutions.",
		social: {
			linkedin: "https://linkedin.com/in/davidkim",
			github: "https://github.com/davidkim",
			twitter: "https://twitter.com/davidkim",
		},
		expertise: ["Mobile Development", "React Native"],
		specialisations: ["iOS", "Android"],
	},
	{
		role: "Editor",
		name: "Emily Johnson",
		photo: "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description: "Product manager driving innovation and user-centric solutions.",
		social: {
			linkedin: "https://linkedin.com/in/emilyjohnson",
			twitter: "https://twitter.com/emilyjohnson",
		},
		expertise: ["Product Management", "Strategy"],
		specialisations: ["Agile", "User Research"],
	},
	// ...add more members as needed...
];

const SocialLinks = ({ social }: { social?: TeamMember["social"] }) => (
	<div className="flex gap-3">
		{social?.linkedin && (
			<a
				href={social.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				className="text-neutral-600 hover:text-blue-600 transition-colors"
			>
				<Linkedin size={20} />
			</a>
		)}
		{social?.github && (
			<a
				href={social.github}
				target="_blank"
				rel="noopener noreferrer"
				className="text-neutral-600 hover:text-gray-800 transition-colors"
			>
				<Github size={20} />
			</a>
		)}
		{social?.twitter && (
			<a
				href={social.twitter}
				target="_blank"
				rel="noopener noreferrer"
				className="text-neutral-600 hover:text-blue-400 transition-colors"
			>
				<Twitter size={20} />
			</a>
		)}
	</div>
);

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleClosePopup = () => {
    setSelectedMember(null);
  };

  const head = team.find((member) => member.role === "Head");
  const members = team.filter((member) => member.role !== "Head");

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <div className="h-[22rem]  w-full flex items-center justify-center bg-gradient-to-b">
        <div className="text-start px-4">
          <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 ">
            Meet the Amazing Team
          </h1>
          <p className="mt-4 text-lg md:text-xl text-neutral-500">
            Our team is a diverse group of passionate individuals dedicated to
            pushing the boundaries of technology and innovation.
          </p>
        </div>
      </div>

      {/* Head Section */}
      {head && (
        <div className="max-w-6xl w-full mx-auto px-4 flex flex-col justify-center ">
          <h2 className="text-3xl md:text-4xl text-start mb-8 pl-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-900">
            Leadership Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center items-center">
              <div className="aspect-square relative overflow-hidden rounded-full shadow-2xl h-[20rem] w-[20rem]">
                <img
                  src={head.photo}
                  alt={head.name}
                  loading="lazy"
                  className="w-full h-full object-cover mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl text-neutral-800 mb-2">
                  {head.name}
                </h3>
                <p className="text-lg text-neutral-600 mb-4">
                  {head.description}
                </p>
                <SocialLinks social={head.social} />
              </div>
              {head.vision && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-neutral-800">
                    Vision Statement
                  </h4>
                  <p className="text-neutral-600 leading-relaxed italic">
                    "{head.vision}"
                  </p>
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-neutral-800 mb-3">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {head.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                {head.contributions && (
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-800 mb-3">
                      Key Contributions
                    </h4>
                    <ul className="space-y-1">
                      {head.contributions.map((contribution, index) => (
                        <li
                          key={index}
                          className="text-sm text-neutral-600 flex items-start"
                        >
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          {contribution}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Meet the Team Section */}
      <div className="max-w-5xl w-full mx-auto px-2 sm:px-4 py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-6 sm:mb-10 text-slate-900">
          Our Team
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md flex flex-col justify-between items-center p-4 sm:p-6 hover:shadow-lg transition-shadow duration-200 w-full min-h-[370px] sm:min-h-[400px]"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-3 sm:mb-4 border-4 border-neutral-100 shadow"
                loading="lazy"
              />
              <div className="flex-1 flex flex-col items-center w-full">
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium text-center mb-1 sm:mb-2">
                  {member.role}
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 text-center mb-2 sm:mb-3 break-words">
                  {member.description}
                </p>
              </div>
              <div className="mt-auto pt-2 w-full flex justify-center">
                <SocialLinks social={member.social} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Our Team Section */}
      <div className="max-w-5xl mx-auto my-8 sm:my-12 p-4 sm:p-6 bg-white rounded-xl shadow flex flex-col sm:flex-row items-center justify-between gap-4 border border-neutral-100 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mb-2 sm:mb-0 sm:mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11.25c2.485 0 4.5-2.015 4.5-4.5S14.485 2.25 12 2.25 7.5 4.265 7.5 6.75s2.015 4.5 4.5 4.5zm0 0c-3.728 0-6.75 1.567-6.75 3.5v2.25A2.25 2.25 0 007.5 19.5h9a2.25 2.25 0 002.25-2.25V14.75c0-1.933-3.022-3.5-6.75-3.5z"
              />
            </svg>
          </span>
          <span className="text-sm sm:text-base md:text-lg text-neutral-700 font-light">
            Want to join be a part of us? We are growing our community.
          </span>
        </div>
        <a
          href="/join"
          className="inline-flex items-center justify-center gap-2 px-2 sm:px-5 py-2 rounded-lg bg-blue-600 text-white  hover:bg-blue-700 transition-colors text-sm sm:text-base shadow w-full sm:w-auto"
        >
          Join our team
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}