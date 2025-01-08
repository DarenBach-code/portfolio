'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const form = () => {

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      if (form.current) {
        emailjs
          .sendForm('service_g297p9p', 'template_t5b2qfl', form.current, {
            publicKey: '47rrChKoA9M_Ezwse',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      }
    };



  return (
    <div className='py-4 px-8 w-3/4'>
        <form ref={form} onSubmit={sendEmail} className='grid grid-cols-1'>
        <div className='grid grid-cols-1 justify-items-center gap-2 py-4'>
            <label className='text-white text-lg font-semibold'>Name</label>
            <input type="text" name="user_name" className='w-96 h-8 rounded-lg'/>
        </div>
        
        <div className='grid grid-cols-1 justify-items-center gap-2 py-4'>
            <label className='text-white text-lg font-semibold'>Email</label>
            <input type="email" name="user_email" className='w-96 h-8 rounded-lg'/>
        </div>

        <div className='grid grid-cols-1 justify-items-center gap-2 py-4'>
            <label className='text-white text-lg font-semibold'>Message</label>
            <textarea name="message" className='w-96 h-36 rounded-lg'/>
        </div>

        <div className='grid grid-cols-1 justify-items-center gap-2 pt-4'>
            <input type="submit" value="Send" className='text-white text-lg font-bold'/>
        </div>
        </form>
    </div>
  )
}

export default form