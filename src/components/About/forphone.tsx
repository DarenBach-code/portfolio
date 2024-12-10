import React from 'react'
import Image from 'next/image'
import Photo from "@/public/newblurimg.png"

const photo = () => {
  return (
    <Image className='w-96 h-auto hidden max-phone:flex'
    src={Photo}
    alt='photo of me'
    />
  )
}

export default photo