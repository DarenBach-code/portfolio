import React from 'react'
import MainGradient from "@/components/About/maintitle";
import Passion from "@/components/About/passion";
import Tech from "@/components/About/tech"

const words = () => {
  return (
    <>
       <div className='mb-8 xl:mb-28 xl:mt-4'>
            <MainGradient/>
            <p className='my-2 text-center text-slate-300 tracking-wide font-serif text-base leading-relaxed text-wrap'>Transforming ideas into impactful solutions that inspire. Approaching challenges with imagination and designing meaningful outcomes.</p>
        </div>

        <div className='mb-8 xl:mb-28'>
            <Tech/>
            <p className='my-2 text-center text-slate-300 tracking-wide font-serif text-base leading-relaxed text-wrap'>From building apps to exploring the latest innovations, technology is my creative playground.</p>
        </div>

        <div className='mb-8 xl:mb-28'>
            <Passion/>
            <p className='my-2 text-center text-slate-300 tracking-wide font-serif text-base leading-relaxed text-wrap'>Founder of the Google Developer Group at Anoka-Ramsey, creating spaces where tech enthusiasts connect and grow.</p>
        </div>
    </>
  )
}

export default words