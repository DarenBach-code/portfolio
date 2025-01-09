import React from 'react'
import Form from '@/components/Contact/form'
import BlurFade from '@/components/ui/blur-fade'

const contact = () => {
  return (
    <div>
        <BlurFade delay={0.25} inView>
         <h1 className='flex justify-center text-white text-xl font-bold pt-16'>Contact</h1>
         <div className='grid grid-cols-1 justify-items-center my-10'>
            <h1 className='text-white font-bold text-xl'>Send me a message!👇</h1>
            <Form/>
         </div>
        </BlurFade>
    </div>
  )
}

export default contact