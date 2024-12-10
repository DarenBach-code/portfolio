import React from 'react';
import BlurFade from "@/components/ui/blur-fade";
import Photo from "@/components/About/photo";
import MainGradient from "@/components/About/maintitle";
import Passion from "@/components/About/passion";
import Tech from "@/components/About/tech"
import ForMobile from "@/components/About/forphone"


const about = () => {
  return (
      <div className='mt-64 bg-slate-800 min-w-screen rounded-lg h-[60rem] py-16 px-8'>
        <BlurFade delay={0.25} inView>
          <h1 className='flex justify-center text-white text-xl font-bold'>About</h1>
          <div className='flex flex-col max-md:justify-self-center mt-16 md:flex-row md:justify-between'>
            <Photo/>
            <ForMobile/>
            <div className='max-md:pt-12'>
              <MainGradient/>
              <Passion/>
              <Tech/>
            </div>
          </div>
        </BlurFade>
      </div>
  )
}

export default about