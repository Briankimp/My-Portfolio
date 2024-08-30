import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import React from "react";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-5 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl sm:pl-8 font-semibold">
            Brian<span className="text-accent ">.</span>
          </h1>
        </Link>

        {/* Desktop nav and hire me button */}
        <div className="hidden  md:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="bg-accent rounded-full p-3 hover:bg-accent-hover">
              Hire Me
            </Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden  ">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
