import { Button } from "@/components/ui/button";
import React from "react";
import EXperience from "@/components/Experience";
import Link from "next/link";

const Resume: React.FC = () => {
  const Options = [
    {
      name: "Experience",
      path: "/experience",
    },
    {
      name: "Education",
      path: "/Education",
    },
    {
      name: "Skills",
      path: "/Skills",
    },
    {
      name: "About Me",
      path: "/About",
    },
  ];

  return (
    <div className=" grid grid-cols-2 m-2 p-2 ">
      <div className="">
        <p className="  ">
          <h1>Why hire me?</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>{" "}
          Consequatur error obcaecati dicta perspiciatis nemo ut repellat
          mollitia,<br></br> corporis explicabo sapiente!
        </p>
        {...Options.map((Option, index) => {
          return (
            <div key={index} w-full>
              <Link href={Option.path}>
                <Button className=" bg-accent w-full p-2 text-center text-black my-1 mr-3 hover:bg-accent-hover ">
                  <h1>{Option.name}</h1>
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className=" ">
        <h1>My Experience</h1>
        <p>Lorem, quia sint ut ratione voluptates? Voluptatum.</p>
        <EXperience />  
      </div>
      </div>
  );
};

export default Resume;
