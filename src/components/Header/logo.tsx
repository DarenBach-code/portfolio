import React from 'react'
import Image from 'next/image'
import DB from "@/public/Group 26.svg"

const Logo = () => {
  return (
    <Image className='rounded-full size-20'
    src={DB}
    alt='Logo'
    />
  )
}

export default Logo