"use client";
import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import path from "path";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import MyImage from "../public/Mine.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="container mx-auto h-full">
      <div className="flex flex-col md:flex-row justify-between h-full items-center xl:pt-8 xl:pb-8">
        <div className="mx-auto">
          <div className="text-left">
            <h1 className="">Software Developer</h1>
            <h1 className="text-5xl leading-normal ">
              Hello I'm <br />
              <span className="text-accent">Brian Munene</span>
            </h1>

            <p className="max-w-[500px] mb-9 flex  text-white/80">
              I excel at crafting elegant websites and I'm proficient in various
              programming languages. I have a good profile and I love learning
              new things along the way.
            </p>
          </div>

          <div className="flex flex-row  gap-5">
            <Link href="/resume">
              <Button className="border items-center rounded-full p-3 text-accent border-accent hover:bg-accent-hover hover:text-primary">
                <h1 className="font-semibol">Download CV</h1>
                <svg
                  className="ml-2 text-2xl"
                  width="18"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Button>
            </Link>

            <div>
              <Link href="/github">
                <Button className="border rounded-full p-3 text-accent border-accent hover:bg-accent-hover hover:text-primary">
                  <IoLogoGithub className="text-xl" />
                </Button>
              </Link>

              <Link href="/linkedin">
                <Button className="border rounded-full p-3 text-accent border-accent hover:bg-accent-hover hover:text-primary">
                  <FaLinkedinIn className="text-xl" />
                </Button>
              </Link>

              <Link href="/twitter">
                <Button className="border rounded-full p-3 text-accent border-accent hover:bg-accent-hover hover:text-primary">
                  <FaTwitter className="text-xl" />
                </Button>
              </Link>

              <Link href="/whatsapp">
                <Button className="border rounded-full p-3 text-accent border-accent hover:bg-accent-hover hover:text-primary">
                  <FaWhatsapp className="text-xl" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex justify-center m-3 ">
          <div className="w-full h-full relative ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" },
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeInOut",
                  },
                }}
                className="relative w-80 h-80 xl:w-[498px] xl:h-[498px] rounded-full overflow-hidden bg-accent"
              >
                <Image
                  src={MyImage}
                  alt="Brian Munene"
                  priority
                  quality={100}
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
