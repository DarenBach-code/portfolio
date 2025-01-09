'use client'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { RainbowButton } from "@/components/ui/rainbow-button";


const Form: React.FC = () => {

    const form = useRef<HTMLFormElement>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

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
              setSuccessMessage('Your message has been sent successfully!');
              form.current?.reset();
              setTimeout(() => setSuccessMessage(null), 5000);
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
            <input type="text" name="user_name" className='w-96 h-8 rounded-lg max-phone:w-72'/>
        </div>
        
        <div className='grid grid-cols-1 justify-items-center gap-2 py-4'>
            <label className='text-white text-lg font-semibold'>Email</label>
            <input type="email" name="user_email" className='w-96 h-8 rounded-lg max-phone:w-72'/>
        </div>

        <div className='grid grid-cols-1 justify-items-center gap-2 py-4'>
            <label className='text-white text-lg font-semibold'>Message</label>
            <textarea name="message" className='w-96 h-36 rounded-lg max-phone:w-72'/>
        </div>

        <div className='grid grid-cols-1 justify-items-center gap-2 pt-4'>
            <RainbowButton type='submit' className='text-white text-lg font-bold'>Send</RainbowButton>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
        </form>
    </div>
  )
}

export default Form