import React from 'react'
import Image from 'next/image'
import Photo from "@/public/blurphoto.svg"

const photo = () => {
  return (
    <Image className='w-72 h-auto sm:w-80'
    src={Photo}
    alt='blur behind photo of me'
    />
  )
}

export default photo