import Link from "next/Link"
import { Button } from "./ui/button";

// import Nav from "./Nav"

import React from 'react'

const Header = () => {
  return (
   <header className=" py-8 xl:py-12 text-white">
        <div className="container mx-auto">
            <Link href="/" >
                <h1 className="text-4xl font-semibold">
                    Luke<span className="text-accent">.</span>
                </h1>
            </Link>
        </div>
    {/* <Nav/> */} 
   </header>
  )
}

export default Header
