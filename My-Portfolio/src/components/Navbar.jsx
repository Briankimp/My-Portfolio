import React from 'react'
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/kevinRushLogo.png"

function Navbar() {
  return (
    <nav className=' mb-20 flex items-center w-full justify-between py-6'>
      <div className=' flex w-full justify-between items-center ' >
          <div>
            <img
            className='mx-2 w-10  '
              src={logo}
              alt="Logo"
            />
          </div>
          <div className='flex row-auto items m-8 justify-center text-white text-2xl gap-4 '>
            <FaLinkedin />
            <FaGithub />
            {<FaXTwitter/>}
            <FaInstagramSquare />
          </div>
      </div>
    </nav>
  )
}

export default Navbar