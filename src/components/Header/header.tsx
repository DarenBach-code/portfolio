import React from 'react'
import Logo from "@/components/Header/logo"
import Nav from "@/components/Header/nav"

const Header = () => {
  return (
    <header className='flex px-12 w-full min-h-20 sticky top-0 z-[20] items-center justify-between mx-auto my-5 flex-wrap bg-slate-900 bg-opacity-60 rounded-lg'>
        <Logo/>
        <Nav/>
    </header>
  )
}

export default Header