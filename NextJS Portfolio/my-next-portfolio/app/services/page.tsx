"use client";
import Link from "next/link";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I am familiar with many key concepts of web development and I leverage the skills to create fro you a ",
    href: "/",
  },
  {
    num: "02",
    title: "Data Science",
    description:
      "I am familiar with many key concepts of web development and I leverage the skills to create fro you a ",
    href: "/",
  },
  {
    num: "03",
    title: "Mobile Application Development",
    description:
      "I am familiar with many key concepts of web development and I leverage the skills to create fro you a ",
    href: "/",
  },
  {
    num: "04",
    title: "UI/UX",
    description:
      "I am familiar with many key concepts of web development and I leverage the skills to create fro you a ",
    href: "/",
  },
];

const Services: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className=" grid grid-rows-2 grid-cols-2 items-center text-center ">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className=" border-gray-600 border-spacing-2 border-b-2 p-5 m-3 items-center align-middle  "
            >
              <Link href={service.href}>
                <div className="hover:text-accent-hover ">
                  <div className="flex justify-between leading-5 ">
                    <h1 className=" font-bold text-2xl">{service.num}</h1>
                    <Link href="/">
                      <BsArrowDownRight className="p-4  text-white" />
                    </Link>
                  </div>
                  <h1 className="text-2xl">{service.title}</h1>
                </div>
                <p className="pt-3">{service.description}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Services;
