import React from 'react';
import ProfileImg from "@/public/Group 24.svg";
import Image from 'next/image';
import Dock from "@/components/Home/dock"


const rplimg = () => {
  return (
    <div className='my-16 sm:my-0 sm:pt-20 sm:pl-12 lg:pt-0'>
        <Image className='justify-self-center w-96 h-auto sm:min-w-64 md:min-w-96 lg:w-[32rem]'
        src={ProfileImg}
        alt='Me'
        />
        <Dock/>
   </div>
  )
}

export default rplimg