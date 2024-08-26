"use client"
import Link from "next/link";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";

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
    title: "Monile Application Development",
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

const Services:React.FC = () => {
  return (
    <div className=" grid grid-rows-2 grid-cols-2">
      {services.map((service, index) => {
        return (
          <div key={index}>
            <div className="hover:text-accent-hover ">
              <h1>{service.num}</h1>
              <BsArrowDownRight className=" p-4 bg-accent " />
            </div>
            <Link href={service.href}>
              <h1>{service.title}</h1>
              <p>{service.description}</p>
            </Link>
            className={` hover:text-accent-hover `}
          </div>
        );
      })
    }
    </div>
  );
      {/* <div className="grid grid-cols-2 grid-rows-2 h-full w-full bg-primary ">
        <div className=" h-full ">
          <h1>Data Science</h1>
        </div>
        <div className=" h-full bg-gray-800 ">
          <section className="">
            <h1> Web Development</h1>
          </section>
        </div>
        <section>
          <h1> Mobile Application Developmet</h1>
        </section>
        <section>
          <h1>UI/UX</h1>
        </section>
      </div> */}


}

export default Services;
