import React from 'react'
import About from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'

const AboutMe = () => {
  return (
    <div className=' border-neutral-900 border-b  ' >
        <div className='w-full p-4  flex flex-wrap items-start ' >
            <div className='  flex items-center w-full justify-center text-3xl '>
                <h1>About <span className='text-red-400'>Me</span></h1>
            </div> 
            <div className='flex justify-between lg:flex-row md:flex-col my-5 '>
                <div className=' lg:w-1/2 lg:p-8'>
                    <img
                    src={About}
                    className='rounded-md mr-5 '
                    />
                </div>
                <div className='  lg:w-1/2 lg:p-7 text-md justify-center  '>
                    <p>{ ABOUT_TEXT }</p>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default AboutMe
