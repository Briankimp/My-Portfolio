import React from 'react'
import Profile from "../assets/kevinRushProfile.jpg"
import { HERO_CONTENT } from '../constants'
// import HERO_CONTENT from "../constants/index"
function Hero() {
  return (
    <div className=" border-b border-neutral-500 pb-4 lg:mb-35 ">
        <div className='flex flex-wrap'>
            <div className='w-full lg:*:w-1/2  items-center '>
                <div className=' flex-col items-center '>
                    <h1 className=' text-6xl lg:text-8xl pb-16 tracking-tight font-thin lg:mt-16 ' >Brian Munene </h1>     
                    <div className=' lg:pr-10  '>
                        <span className='bg-gradient-to-r  from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl text-transparent ' >Full Stack Developer</span>
                        <p  className='w-full text-sm my-max-w-xl py-6 font-light tracking-tight  ' >
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                {/* <div className=' ml-7 rounded ' >
                    <img 
                    className='rounded'
                    src={Profile} 
                    alt=""
                    />
                 </div> */}
            </div>
            
        </div>
        
    </div>
  )
}

export default Hero