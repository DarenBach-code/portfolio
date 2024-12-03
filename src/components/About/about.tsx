import React from 'react';
import BlurFade from "@/components/ui/blur-fade";
import Photo from "@/components/About/photo"

const about = () => {
  return (
      <div className='mt-64 bg-slate-800 min-w-screen rounded-lg h-[46rem] py-16 px-8'>
        <BlurFade delay={0.25} inView>
          <h1 className='flex justify-center text-white text-xl font-bold'>About</h1>
          <div className='flex flex-col justify-center md:flex-row md:justify-between mt-16'>
            <Photo/>
            <div>
              <h1 className='text-white'>This will be about me</h1>
            </div>
          </div>
        </BlurFade>
      </div>
  )
}

export default about