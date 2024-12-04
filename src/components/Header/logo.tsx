import React from 'react'
import Image from 'next/image'
import DB from "@/public/DB.svg"

const Logo = () => {
  return (
    <Image className='size-20'
    src={DB}
    alt='Logo'
    />
  )
}

export default Logo