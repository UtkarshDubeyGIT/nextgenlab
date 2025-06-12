"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="h-[56rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased ">
      <div className="shadow-input mx-auto my-auto max-w-lg rounded-none bg-transparent p-4 md:rounded-2xl md:p-8 ">
        <h2 className="text-3xl font-bold text-neutral-100 dark:text-neutral-700">
            Connect with Us
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-400 dark:text-neutral-300">
            We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out using the form below.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer  className="">
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" name="firstname" placeholder="Tyler" type="text" className="bg-neutral-200 focus:bg-neutral-100 "/>
            </LabelInputContainer>
            <LabelInputContainer className="">
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" name="lastname" placeholder="Durden" type="text" className="bg-neutral-200 focus:bg-neutral-100"/>
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" placeholder="email@gmail.com" type="email" className="bg-neutral-200 focus:bg-neutral-100"/>
          </LabelInputContainer>
          <LabelInputContainer  className="">
            <Label htmlFor="message">Your message</Label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              className="h-36 resize-none bg-neutral-200 focus:bg-neutral-100 rounded-md px-3 py-2 text-sm text-black border-none shadow-input dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
          </LabelInputContainer>
          

          <button
            className="group/btn relative block h-10 pt-2 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            Submit &rarr;
          </button>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

          
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}


const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
