import React from 'react'
import Image from 'next/image'
import DB from "@/public/DB.svg"

const Logo = () => {
  return (
    <Image className='size-20'
    src={DB}
    priority={true}
    alt='Logo'
    width={80}
    height={80}
    />
  )
}

export default Logo