import React from 'react'
import Morph from "@/components/Techstack/textmorph";
import BlurFade from '@/components/ui/blur-fade';
import Icons from "@/components/Techstack/Icon";

const techstack = () => {
  return (
    <div className='my-16 p-8'>
      <BlurFade delay={0.25} inView>
        <h1 className='flex justify-center text-white text-xl font-bold'>Techstack</h1>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='justify-self-center mt-8'>
          <Icons/>
          </div>
          
          <div className='text-gray-400 mt-16 place-self-center'>
            <Morph/>
            <p className='px-4 py-12 text-zinc-400 text-center leading-relaxed text-lg'>Experienced student leader with experience in fullstack development. I have experience in technology&apos;s such as JavaScript, Typescript, React, HTML, CSS, Tailwind, MySQL, Nuxt, and so much more!</p>
          </div>
        </div>
      </BlurFade>
    </div>
  )
}

export default techstack