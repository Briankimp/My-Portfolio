"use client";
// import { Sheet } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import { SheetTrigger, SheetContent, Sheet } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

const moblinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const Pathname = usePathname();
  console.log(Pathname);
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt- 32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-3xl font-semibold">
              Brian<span className="text-accent ">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex gap-2 text-wrap items-center flex-col h-4 p ">
          {moblinks.map((moblink, index) => {
            return (
              <Link
                href={moblink.path}
                key={index}
                className={`${
                  moblink.path === Pathname && " text-accent"
                } text-xl transition-all hover:text-accent-hover `}
              >
                {moblink.name}
              </Link>
            );
          })}
          <Button className=" mt-4 rounded-full bg-accent p-3  hover:bg-accent-hover hover:text-primary">
            Hire Me
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
