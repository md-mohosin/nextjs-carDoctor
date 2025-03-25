import Image from 'next/image'
import React from 'react'
import SignUpForm from './components/SignUpForm'

export default function signUpPage() {
  return (
     <div className='flex flex-col lg:flex-row gap-5 items-center justify-center mt-20'>
    
          {/* IMAGE */}
          <div className='w-11/12 lg:w-1/2 flex justify-center items-center'>
            <Image src={'/assets/images/login/login.svg'} width={400} height={400}></Image>
          </div>
    
          {/* FORM */}
          <div className='w-11/12 lg:w-1/2'>
            <SignUpForm></SignUpForm>
          </div>
        </div>
  )
}
