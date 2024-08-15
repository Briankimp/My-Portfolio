import Link from "next/Link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import React from "react";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Brian<span className="text-accent ">.</span>
          </h1>
        </Link>

        {/* Desktop nav and hire me button */}
        <div className=" sm:hidden md:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
                <Button className="bg-accent rounded-2xl hover:bg-accent-hover ">Hire Me</Button>
            </Link>
        </div>

        {/* Mobile nav */}
        <div className="md: hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
