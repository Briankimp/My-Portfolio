import { Sheet } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React from 'react'
import { SheetTrigger } from './ui/sheet';



const links = [
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
  return (
    <div>
      <Sheet>
        <SheetTrigger 
      </Sheet>
    </div>
  )
}

export default MobileNav
