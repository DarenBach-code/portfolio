import React from 'react';
import Img from '@/components/Home/rplimg';
import BlurFade from "@/components/ui/blur-fade";

const Home = () => {
  return (
    <BlurFade delay={0.5} inView>
    <>
      <div className='md:flex m-16 justify-between lg:m-36'>
        <div className='md:pt-2 lg:pt-6'>
          <h1 className='font-bold text-4xl text-center text-white lg:text-5xl'>Hello, World! <br/> I'm Daren 👋, <br/>Software D<span className='underline decoration-orange-400 decoration-8 underline-offset-[24px]'>evelope</span>r.</h1>
          <p className='text-gray-300 mt-14 font-thin text-center h-20 border-b-[0.5px] border-gray-400'>Software Engineering undergrad at St. Cloud University.</p>
          <div className='grid grid-cols-3 divide-x mt-16'>
            <div className='justify-self-center'>
              <h1 className='text-gray-200 text-lg font-black'>05+</h1>
              <p className='text-gray-400 text-sm font-light'>Languages<br/>Known</p>
            </div>
            <div>
              <h1 className='justify-self-center text-gray-200 mt-3 text-lg font-black pl-4 md:pr-8 lg:pr-0'>GDG <br/>Lead</h1>
            </div>
            <div className='justify-self-center pl-8'>
              <h1 className='text-gray-200 text-lg font-black'>04+</h1>
              <p className='text-gray-400 text-sm font-light'>Frameworks <br/>Known</p>
            </div>
          </div>
        </div>
        <Img/>
      </div>
    </>
    </BlurFade>
  )
}

export default Home