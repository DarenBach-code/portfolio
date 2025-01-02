import React from 'react'
import Image from 'next/image'
import Photo from "@/public/blurphoto.svg"

const photo = () => {
  return (
    <Image className='w-96 h-auto md:w-5/6 max-phone:hidden'
    src={Photo}
    alt='photo of me'
    />
  )
}

export default photo