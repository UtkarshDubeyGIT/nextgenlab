"use client";
import React from "react";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
} from "./ui/animated-modal";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { toast } from "sonner";

export function Footer() {
  const handleformSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");

    toast("Successfully Subscribed ✅", {
      description: "Succesfully subcribed",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  };

  return (
    <div className="h-fit w-full bg-neutral-950 relative flex flex-col antialiased">
      <div className="w-full pt-5 flex flex-col text-white h-full z-40 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-sans px-4 sm:px-10 ">


          {/* left side */}
          <div className="col-span-1 md:col-span-2">
            <div className="">
              <div className="left-align font-sans text-base sm:text-lg md:text-2xl py-3 sm:py-5 text-neutral-100">
                Stay Connected to be the first to know about our latest updates,
                events, and opportunities.
              </div>
              <div>
                <Modal>
                  <ModalTrigger className="bg-white text-black flex justify-center group/modal-btn cursor-pointer">
                    <span className="group-hover/modal-btn:translate-x-60 text-center transition duration-500">
                      Subscribe to our Newsletter
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                      📩
                    </div>
                  </ModalTrigger>
                  <ModalBody>
                    <ModalContent>
                      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                        Subscribe to our Newsletter now! 📨
                      </h4>
                      <h2 className="text-sm md:text-base text-neutral-500 dark:text-neutral-300 text-center mb-4">
                        Stay in touch with us and be the first to know about our
                        latest updates, events, and opportunities.
                      </h2>
                      <div>
                        <form
                          className="flex flex-col gap-4 p-3 rounded-xl justify-center items-center"
                          onSubmit={handleformSubmit}
                        >
                          <input
                            type="text"
                            placeholder="Name"
                            className="bg-neutral-100 text-black border-neutral-400 focus-visible:ring-[2px] focus-visible:ring-blue-400  border-1 rounded-sm w-full sm:w-3/6 p-1"
                          />
                          <input
                            type="email"
                            placeholder="Email"
                            className="bg-neutral-100 text-black border-neutral-400 focus-visible:ring-[2px] focus-visible:ring-blue-400  border-1 rounded-sm w-full sm:w-3/6 p-1"
                          />
                          <button
                            type="submit"
                            className="text-neutral-100 cursor-pointer bg-neutral-950 border-4 px-3 py-1 border-neutral-950 rounded-sm hover:border-blue-500 duration-300"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </ModalContent>
                  </ModalBody>
                </Modal>
              </div>
            </div>
          </div>


          {/* middle part */}
          <div className="col-span-1 flex flex-col md:justify-center text-neutral-100 md:pl-0 lg:pl-36 py-6 md:py-0">
            <div className="text-2xl md:text-2xl font-bold">Navigation</div>
            <div className="text-neutral-300 text-base sm:text-xl py-2">
              <div>
                <div>
                  <a href="nsut.ac.in">
                    <div className="cursor-pointer hover:text-blue-500 pt-2">
                      Research
                    </div>
                  </a>
                </div>
                <div>
                  <a href="nsut.ac.in">
                    <div className="cursor-pointer hover:text-blue-500 pt-2">
                      About Us
                    </div>
                  </a>
                </div>
                
                <div>
                  <a href="nsut.ac.in">
                    <div className="cursor-pointer hover:text-blue-500 pt-2">
                      Team
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <a href="nsut.ac.in">
                  <div className="cursor-pointer hover:text-blue-500 pt-2">
                    Contact Us
                  </div>
                </a>
              </div>
            </div>
          </div>


          {/* right side */}
          <div className=" col-span-1 flex flex-col item-center text-neutral-100 md:pl-0 lg:pl-30 mt-6 md:mt-0">
            <div className="text-lg sm:text-xl pb-2 sm:pb-4 ">
              Follow us on our social media handles
            </div>
            <div className="flex flex-row  justify-start text-2xl sm:text-3xl gap-x-4 sm:gap-x-5 text-neutral-300">
              <a
                href="https://www.facebook.com/NextGenAILabsNSUT"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 cursor-pointer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.facebook.com/NextGenAILabsNSUT"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white cursor-pointer"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.facebook.com/NextGenAILabsNSUT"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 cursor-pointer"
              >
                <LuInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="font-sans text-2xl sm:text-4xl md:text-9xl font-semibold text-neutral-200 text-center pt-10 sm:pt-20 pb-2 sm:pb-4">
          NextGenAI Labs NSUT
        </div>
        <div className="flex flex-col items-center py-2 sm:py-3">
          <div className="text-neutral-400 text-sm">
            © 2023 NextGenAI Labs NSUT. All rights reserved.
          </div>
          <div className="h-[1px] w-full bg-neutral-500 "></div>
          <div>
            <a href="nsut.ac.in">
              <div className="cursor-pointer hover:text-blue-500 pt-4 pb-2 text-center">
                
                Netaji Subhash University of Technology, New Delhi
              </div>

            </a>
          </div>
        </div>
        </div>
      </div>

  );
}
