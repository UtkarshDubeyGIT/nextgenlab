"use client";
import React, { useEffect } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      firstname: form.firstname.value,
      lastname: form.lastname.value,
      email: form.email.value,
      message: form.message.value,
    };
    console.log("Form submitted");
    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      // Show success message
      alert("Your message has been sent successfully!");
    } else {
      // Show error message
      alert("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-neutral-50 relative flex flex-col items-center justify-center antialiased px-2 sm:px-0 py-8">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <BackgroundBeams />
      </div>
      <div className="flex items-center justify-center mb-6 pt-30"></div>
      <div className="relative z-10 shadow-input mx-auto my-auto w-full max-w-3xl rounded-none bg-transparent p-2 sm:p-4 md:rounded-2xl md:p-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-700">
          Connect with Us
        </h2>
        <p className="mt-2 max-w-sm text-xs sm:text-sm text-neutral-400 dark:text-neutral-300">
          We would love to hear from you! Whether you have questions, feedback,
          or just want to say hello, feel free to reach out using the form
          below.
        </p>

        <form className="z-30 my-6 sm:my-8 w-full" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2 w-full">
            <div className="w-full flex flex-col space-y-2">
              <label
                htmlFor="firstname"
                className="text-sm font-medium text-neutral-700"
              >
                First name
              </label>
              <input
                id="firstname"
                name="firstname"
                placeholder="Tyler"
                type="text"
                required
                className="bg-neutral-200 focus:bg-neutral-100 w-full min-w-0 rounded-md px-3 py-2 text-sm text-black border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400"
              />
            </div>
            <div className="w-full flex flex-col space-y-2">
              <label
                htmlFor="lastname"
                className="text-sm font-medium text-neutral-700"
              >
                Last name
              </label>
              <input
                id="lastname"
                name="lastname"
                placeholder="Durden"
                type="text"
                required
                className="bg-neutral-200 focus:bg-neutral-100 w-full min-w-0 rounded-md px-3 py-2 text-sm text-black border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400"
              />
            </div>
          </div>
          <div className="mb-4 w-full flex flex-col space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-neutral-700"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              placeholder="email@gmail.com"
              type="email"
              required
              className="bg-neutral-200 focus:bg-neutral-100 w-full min-w-0 rounded-md px-3 py-2 text-sm text-black border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            />
          </div>
          <div className="w-full flex flex-col space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-neutral-700"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              required
              className="h-32 sm:h-36 resize-none bg-neutral-200 focus:bg-neutral-100 rounded-md px-3 py-2 text-sm text-black border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 w-full min-w-0"
            />
          </div>
          <button
            className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] mt-4 text-base transition-colors duration-200 hover:from-neutral-800 hover:to-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-50"
            type="submit"
          >
            Submit &rarr;
          </button>
          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        </form>
      </div>
    </div>
  );
}
