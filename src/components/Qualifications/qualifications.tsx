import React from 'react'
import { BookMarked } from 'lucide-react'
import BlurFade from '@/components/ui/blur-fade'
import InteractiveHoverButton from '@/components/ui/interactive-hover-button'

const qualifications = () => {
  return (
    <div className='bg-slate-800 rounded-lg pb-20'>
        <BlurFade delay={0.25} inView>
            <h1 className='flex justify-center text-white text-xl font-bold pt-20'>Qualifications</h1>
            <div className='p-16'>
                <div className='flex justify-center md:justify-start pb-2'>
                    <BookMarked color='white'/>
                    <h1 className='ml-2 text-white text-lg font-semibold'>Education</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10 py-12 border-y-2 border-double border-slate-400'>
                    <div>
                        <h1 className='text-white font-medium'>CS50</h1>
                        <p className='text-slate-400 font-light text-sm'>Completing the renowned CS50 course helped me master programming fundamentals, algorithms, and problem-solving, sparking my passion for developing innovative technology solutions.</p>
                    </div>

                    <div>
                        <h1 className='text-white font-medium'>Anoka Ramsey College</h1>
                        <p className='text-slate-400 font-light text-sm'>While earning my Associate of Science degree in Computer Science at Anoka-Ramsey Community College, I took the initiative to establish a Google Developer Group (GDG) on campus.</p>
                    </div>

                    <div>
                        <h1 className='text-white font-medium'>St. Cloud State University</h1>
                        <p className='text-slate-400 font-light text-sm'>Currently, I am pursuing a Bachelor’s degree in Software Engineering at St. Cloud State University. My focus is on advanced software development, system design, and staying at the forefront of the ever-evolving tech industry.</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between px-20 pt-2'>
                <h1 className='text-white font-bold text-lg'>My Resume</h1>
                
                <InteractiveHoverButton />
                
            </div>
        </BlurFade>
    </div>
  )
}

export default qualifications