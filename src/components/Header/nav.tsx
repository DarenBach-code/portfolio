'use client'
import React, { useState } from 'react'
import { Menu, X } from "lucide-react"


const Navlinks = () => {
  return (
    <>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Techstack</a>
        <a href='#'>Qualifications</a>
        <a href='#'>Contact</a>
    </>
  )
}


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className='md:flex text-white gap-x-12 text-lg font-thin hidden'>
            <Navlinks/>
        </div>
        <div className='md:hidden text-white'>
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className='flex basis-full flex-col text-white items-center text-lg font-thin justify-evenly gap-y-4 py-2'>
          <Navlinks />
        </div>
      )}
    </>
  )
}

export default Nav



