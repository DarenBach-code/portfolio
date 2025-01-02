import React from 'react';
import BlurFade from "@/components/ui/blur-fade";
import Photo from "@/components/About/photo";
import ForMobile from "@/components/About/forphone";
import Words from "@/components/About/words";


const about = () => {
  return (
      <div className='mt-64 bg-slate-800 min-w-screen rounded-lg h-[67rem] py-16 px-8'>
        <BlurFade delay={0.25} inView>
          <h1 className='flex justify-center text-white text-xl font-bold'>About</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 w-fit mt-16 md:mt-48'>
            <div className='justify-self-center'>
              <Photo/>
              <ForMobile/>
            </div>
            <div className='max-md:mt-16'>
              <Words/>
            </div>
          </div>
        </BlurFade>
      </div>
  )
}

export default about