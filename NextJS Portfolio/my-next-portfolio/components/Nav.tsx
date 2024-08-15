 'use client' 
 import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import path from 'path'
import { log } from 'console'

const links =[
  {
    name:"Home",
    path: "/"
  },
  {
    name:"Services",
    path: "/services"
  },
  {
    name:"Resume",
    path: "/resume"
  },
  {
    name:"Work",
    path: "/work"
  },
  {
    name:"Contact",
    path: "/contact"
  },
];


const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className=' flex gap-2  '>
      {links.map((link, index) => {
        return(
        <Link 
        href={link.path} 
        key={index}
        className={'${link.path === pathname && "p-2 hover:text-accent-hover hover:underline-offset-4 "}  capitalize font-medium transition-all '}>
          {link.name}
          </Link>
        )
      })}

    </nav>
  )
}

export default Nav
